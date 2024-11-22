'use client';
import UiAvatar from '@component/atoms/avatar';
import UiButton from '@component/atoms/button';
import NextImage from '@component/atoms/image';
import { UiMenuItem } from '@component/atoms/menu';
import TableMoreIcon from '@component/molecules/moreIcon';
import StatusBadge from '@component/molecules/statusBadge';
import CautionModal from '@component/organisms/cautionModal';
import { DeleteIcon } from '@icons/deleteIcon';
import { EditIcon } from '@icons/editIcon';
import {
  deleteAdminAction,
  updateAdminStatusAction,
} from '@server/serverActions/admin.server';
import { ColumnDef } from '@tanstack/react-table';
import { format, newDate } from '@utils/dates';
import { Status } from '@utils/enums';
import { HOME } from '@utils/routes';
import { capitalizeAll, sentenceTruncater } from '@utils/words';
import { Fragment, useState } from 'react';
import { toast } from 'react-toastify';
import { User } from '../../../types/user.api';

const columns: ColumnDef<User, any>[] = [
  {
    id: 'username',
    header: 'Username',
    accessorFn: (row) => row.username,
    cell: (info) => (
      <span className="flex items-center gap-[10px] pr-8">
        <UiAvatar
          src={info?.row.original?.photo}
          alt="avatar"
          className="h-10 w-10"
        />
        {sentenceTruncater(info?.getValue(), 36)}
      </span>
    ),
    size: 250,
    sortUndefined: 'last',
    enableSorting: false,
  },
  {
    accessorFn: (row) => row.email,
    id: 'email',
    header: 'email',
    size: 300,
  },
  {
    accessorKey: 'role',
    id: 'role',
    header: 'role',
    cell: (info) =>
      capitalizeAll(info?.getValue().toLowerCase().split('_').join(' ')),
    size: 180,
  },

  {
    accessorKey: 'status',
    id: 'status',
    header: 'status',
    cell: (info) => <StatusBadge status={info?.getValue()} />,
    size: 150,
  },
  {
    accessorKey: 'lastLogin',
    id: 'lastLogin',
    header: 'Last login',
    cell: (info: any) =>
      format(newDate(info?.getValue()), 'do MMM, yyyy h:mm aaa'),

    size: 250,
  },
  {
    accessorKey: 'createdAt',
    id: 'createdAt',
    header: 'Created At',
    cell: (info: any) => format(newDate(info?.getValue()), 'do MMM, yyyy'),

    size: 150,
  },

  {
    accessorKey: '',
    id: 'action',
    header: 'Action',
    cell: (info) => <ActionCell record={info?.row.original} />,
    size: 60,
  },
];

const ActionCell = ({ record }: { record: User }) => {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [loading, setLoading] = useState(false);

  const menuHandler = () => {
    setOpenMenu((prev) => !prev);
  };
  const handler = () => {
    setOpenMenu(false);
    setOpen((prev) => !prev);
  };
  const onDeleteHandler = async () => {
    setLoading(true);

    const res = await deleteAdminAction(record.id);

    setLoading(false);
    setOpen(false);
    if (res.status === Status.ERROR || res.error === 'Unauthorized') {
      console.log(res)
      return toast.error(res.message);
    }
    console.log(res);
  };

  const flagHandler = async () => {
    const status: any = record?.status === 'INACTIVE' ? 'ACTIVE' : 'INACTIVE';

    const res = await updateAdminStatusAction(record.id, status);
    console.log('res', res);
    if (res.status === Status.ERROR || res.error === 'Unauthorized') {
      return toast.error(res.message);
    }
    toast.success('Admin status updated successfully');
  };
  const userRole = localStorage.getItem('role');
  return (
    <Fragment>
      <TableMoreIcon
        openMenu={openMenu}
        menuHandler={menuHandler}
        iconClassName="w-full"
      >
        <UiMenuItem className="item-center group flex gap-4 transition-colors duration-300">
          <UiButton
            as="a"
            className="item-center flex h-auto w-full justify-start gap-4 p-0"
            variant="text"
            hoverEffect={false}
            size="sm"
            disabled={userRole !== 'ADMIN'}
            href={`${HOME}?id=${record?.id}&m=edit`}
          >
            <EditIcon />
            <span className="text-sm text-black-950 md:text-base">Edit</span>
          </UiButton>
        </UiMenuItem>
        <UiMenuItem
          disabled={userRole !== 'ADMIN'}
          onClick={flagHandler}
          className="item-center group flex gap-4 text-white-600 transition-colors duration-300 hover:text-black-950"
        >
          <NextImage
            src={
              record?.status === 'INACTIVE'
                ? '/icons/check-mark.svg'
                : '/icons/slash.svg'
            }
            className="size-6"
          />

          <span className="text-sm text-inherit md:text-base">
            {record?.status === 'INACTIVE' ? 'Unblock' : 'Block'}
          </span>
        </UiMenuItem>
        <UiMenuItem
          className="item-center group flex gap-4 transition-colors duration-300"
          onClick={handler}
          disabled={userRole !== 'ADMIN'}
        >
          <DeleteIcon />
          <span className="text-sm text-black-950 md:text-base">Delete</span>
        </UiMenuItem>
      </TableMoreIcon>
      <CautionModal
        open={open}
        handler={handler}
        onActionHandler={onDeleteHandler}
        loading={loading}
        infos={[
          'Deleting Admin will permanently remove it from your admins.',
          'Marking it as block will only remove all access to this platform',
        ]}
      />
    </Fragment>
  );
};

export const fixedColumns: { id: string; position: 'left' | 'right' }[] = [
  {
    id: 'action',
    position: 'right',
  },
];

export default columns;
