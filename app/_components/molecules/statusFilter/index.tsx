'use client';
import { UiOption, UiSelect } from '@component/atoms/select';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { StatusFilterProps } from './types';

const StatusFilter: FC<StatusFilterProps> = ({
  options,
  resetKey = '',
  className = '',
}) => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const params = new URLSearchParams(searchParams.toString());
  const onStatusChange = (status?: string) => {
    if (status) {
      params.set('status', status);
    }
    if (status === resetKey) {
      params.delete('status');
    }
    router.push(`${pathName}?${params.toString()}`);
  };
  return (
    <UiSelect
      value={resetKey}
      onChange={onStatusChange}
      className={twMerge('h-12 w-full md:w-3/5 xl:w-auto', className)}
      defaultValue="status"
      placeholder="Status"
    >
      {options.map(({ label, value }, i) => (
        <UiOption key={i} value={value}>
          {label}
        </UiOption>
      ))}
    </UiSelect>
  );
};

export default StatusFilter;
