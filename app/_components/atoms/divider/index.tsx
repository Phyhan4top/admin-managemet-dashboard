import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { DividerProps } from './types';

const UiDivider: FC<DividerProps> = ({ direction, className = '' }) => {
  const horizontalClasses = twMerge(
    'w-full border-t border-black-200 my-4',
    className,
  );
  const verticalClasses = twMerge(
    'h-full border-l border-black-200 mx-4',
    className,
  );

  const dividerClasses =
    direction === 'vertical' ? verticalClasses : horizontalClasses;

  return <div className={dividerClasses}></div>;
};

export default UiDivider;
