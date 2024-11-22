import { UiNavbar } from '@component/atoms/navbar';
import classNames from 'classnames';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { BottomNavBarProps } from './types';

const BottomNavBar: FC<BottomNavBarProps> = ({ children, className }) => {
  return (
    <UiNavbar
      className={twMerge(
        classNames(
          'border-t-black-200 bg-white-20 z-navbar flex w-full items-center border border-solid',
          'bg-opacity-1 text-black-400 fixed bottom-0 left-0 right-0 z-10 h-auto max-w-full rounded-none px-0 py-0 shadow-none ',
          className,
        ),
      )}
    >
      {children}
    </UiNavbar>
  );
};

export default BottomNavBar;
