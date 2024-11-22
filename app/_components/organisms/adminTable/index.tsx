'use client';
import UiButton from '@component/atoms/button';
import NextImage from '@component/atoms/image';
import { UiOption, UiSelect } from '@component/atoms/select';
import { Table } from '@component/molecules/table';
import TableFooter from '@component/molecules/tableFooter';
import { Fragment, useState } from 'react';
import { useCreateAdminFormContext } from '../../../admin/manage/(home)/_context/createAdminContext';
import EmptyDisplay from '../emptyDisplay';
import columns, { fixedColumns } from './columns';
import { AllUserResponse } from '../../../types/user.api';

const options = [
  {
    label: 'active',
    value: 'active',
  },
  {
    label: 'inactive',
    value: 'inactive',
  },
  {
    label: 'all',
    value: '',
  },
];

const ManageAdminTable = ({ data }: { data: AllUserResponse }) => {
  const [rowSelection, setRowSelection] = useState({});
  const [status, setStatus] = useState('');
  const form = useCreateAdminFormContext();

  const handleOpen = () => {
    form?.createFormhandler(true);
  };

  const onChange = (value?: string) => {
    setStatus(value || '');
  };
  const sortedData =
    status == ''
      ? data?.data
      : data?.data.filter(
          (item) => item?.status.toLowerCase() === status.toLowerCase(),
        );

  const userRole = localStorage.getItem('role');
  return (
    <div className="rounded-[2rem] bg-white-50 p-5">
      {data?.meta?.totalRecords > 0 ? (
        <Fragment>
          <h4 className=" mb-5 text-h4 font-bold text-black/85">
            Manage Users
          </h4>

          <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
            <h5 className=" text-h5 font-bold text-black-950">
              Users {data?.meta?.totalRecords}
            </h5>
            <div className="flex items-center gap-4 md:w-full xl:w-auto max-sm:flex-wrap">
              <UiSelect
                value={status}
                onChange={onChange}
                className="h-12 w-full md:w-3/5 xl:w-auto"
                defaultValue="status"
                placeholder="Status"
              >
                {options.map(({ label, value }, i) => (
                  <UiOption key={i} value={value}>
                    {label}
                  </UiOption>
                ))}
              </UiSelect>
              <UiButton
                as="button"
                onClick={handleOpen}
                variant="filled"
                className="min-w-max max-sm:w-full "
                disabled={userRole !== 'ADMIN'}
              >
                <NextImage src={'/icons/add.svg'} className="mr-2" />

                <span className="text-base font-medium text-black-950">
                  Add Admin
                </span>
              </UiButton>
            </div>
          </div>

          <Table
            data={sortedData}
            columns={columns}
            fixedColumns={fixedColumns}
            rowSelection={rowSelection}
            setRowSelection={setRowSelection}
            footer={
              <TableFooter
                data={sortedData}
                currentPage={data?.meta?.currentPage}
                totalCount={data?.meta?.totalRecords}
                nextPage={null}
              />
            }
          />
        </Fragment>
      ) : (
        <EmptyDisplay
          title="No Admin found"
          description="Add Admin."
          buttonAction={{ onClick: handleOpen, label: 'Admin' }}
        />
      )}
    </div>
  );
};

export default ManageAdminTable;
