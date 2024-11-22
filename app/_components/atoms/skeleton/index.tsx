'use client';
import { Typography } from '@material-tailwind/react';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

type UiSkeletonProps = {
  className?: string;
};
const UiSkeleton: FC<UiSkeletonProps> = ({ className = '' }) => {
  return (
    <div className="w-full max-w-full animate-pulse">
      <Typography
        as="div"
        variant="h1"
        className={twMerge('h-3 w-full rounded-xl bg-gray-300', className)}
      >
        &nbsp;
      </Typography>
    </div>
  );
};

export default UiSkeleton;
