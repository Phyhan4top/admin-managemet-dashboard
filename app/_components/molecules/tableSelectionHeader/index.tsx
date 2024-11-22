'use client';
import UiButton from '@component/atoms/button';
import NextImage from '@component/atoms/image';
import {
  UiOptionWithIcon,
  UiSelectWithIcon,
} from '@component/atoms/selectWithIcon';
import { FC, useState } from 'react';
import { TableSelectionHeaderProps } from './types';

const actionSelections = [
  {
    label: 'Publish',
    value: 'Unblock',
    icon: '/icons/check-mark.svg',
  },
  {
    label: 'Block',
    value: 'Block',
    icon: '/icons/slash.svg',
  },
  {
    label: 'Delete',
    value: 'Delete',
    icon: '/icons/delete.svg',
  },
];

const TableSelectionHeader: FC<TableSelectionHeaderProps> = ({
  title,
  onPerformAction,
  loadingAction,
  onClearSelections,
}) => {
  const [selected, setSelected] = useState<string>('');

  const onChange = (value: any) => {
    setSelected(value);
  };
  return (
    <div className="mb-4 flex flex-wrap items-center justify-between gap-4 border-t border-solid border-black-200 py-4">
      <h5 className="text-h5 font-medium text-black-950">{title}</h5>
      <div className="flex items-center gap-4 max-sm:flex-wrap">
        <UiSelectWithIcon
          value={selected}
          onChange={onChange}
          className="h-12  [&>div]:min-w-[230px]"
          placeholder="Select Action"
        >
          {actionSelections.map(({ label, value, icon }, i) => (
            <UiOptionWithIcon
              key={i}
              value={value}
              className="flex min-w-max items-center p-2"
            >
              <NextImage src={icon} className="mr-2 " />
              <span>{label}</span>
            </UiOptionWithIcon>
          ))}
        </UiSelectWithIcon>
        <UiButton
          as="button"
          variant="filled"
          color="secondary"
          className="min-w-max max-sm:w-4/5"
          onClick={() => onPerformAction(selected)}
          disabled={!selected}
          loading={loadingAction}
        >
          Perform Action
        </UiButton>
        <UiButton
          as="button"
          variant="outlined"
          className="min-w-max max-sm:ml-2"
          onClick={onClearSelections}
        >
          <NextImage src={'/icons/cancel.svg'} className="" />
        </UiButton>
      </div>
    </div>
  );
};

export default TableSelectionHeader;
