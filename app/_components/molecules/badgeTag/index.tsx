import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { BadgeTagProps } from './types';

const BadgeTag: FC<BadgeTagProps> = ({ className, title }) => {
  return (
    <span
      className={twMerge(
        'ml-[6px] inline-flex h-[1.375rem] items-center rounded border border-solid border-black-200 px-2 text-xs font-medium capitalize text-black md:text-sm',
        className,
      )}
    >
      {title}
    </span>
  );
};

export default BadgeTag;
