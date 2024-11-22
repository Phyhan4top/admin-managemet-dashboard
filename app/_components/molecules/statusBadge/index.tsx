import NextImage from '@component/atoms/image';
import { capitalizeWord } from '@utils/words';
import classNames from 'classnames';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { StatusBadgeProps } from './types';

const statusData = {
  init: {
    bg: 'bg-orange-200',
    icon: '/icons/loading-progress.svg',
    status: 'pending',
  },
  pending: {
    bg: 'bg-orange-200',
    icon: '/icons/loading-progress.svg',
    status: 'pending',
  },
  unavailable: {
    bg: 'bg-blue-200',
    icon: '/icons/flag-dark.svg',
    status: 'unavailable',
  },
  inactive: {
    bg: 'bg-black-200',
    icon: '/icons/slash.svg',
    status: 'inactive',
  },
  published: {
    bg: 'bg-green-200',
    icon: '/icons/check-mark.svg',
    status: 'published',
  },
  active: {
    bg: 'bg-green-200',
    icon: '/icons/check-mark.svg',
    status: 'active',
  },
  success: {
    bg: 'bg-green-200',
    icon: '/icons/check-mark.svg',
    status: 'success',
  },
  failed: {
    bg: 'bg-red-200',
    icon: '/icons/cancel.svg',
    status: 'failed',
  },
  completed: {
    bg: 'bg-green-200',
    icon: '/icons/check-mark.svg',
    status: 'success',
  },
};

const StatusBadge: FC<StatusBadgeProps> = ({ status, className }) => {
  const statusAds = status?.toLowerCase() as keyof typeof statusData;
  return (
    <div
      className={twMerge(
        classNames('flex h-[30px] w-max items-center rounded-[40px] p-2', {
          [statusData[statusAds]?.bg]: true,
        }),

        className,
      )}
    >
      <NextImage src={statusData[statusAds]?.icon} className="size-4" />
      <span className="ml-[6px] text-sm font-medium capitalize text-black-950">
        {capitalizeWord(statusData[statusAds]?.status || status)}
      </span>
    </div>
  );
};

export default StatusBadge;
