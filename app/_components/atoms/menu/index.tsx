'use client';
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  type MenuListProps,
} from '@material-tailwind/react';
import { twMerge } from 'tailwind-merge';

const UiMenuList = (props: Omit<MenuListProps, 'ref'>) => {
  const { className = '', children, ...rest } = props;

  return (
    <MenuList
      {...rest}
      className={twMerge(`font-inherit z-menu text-black-950 ${className}`)}
    >
      {children}
    </MenuList>
  );
};

export {
  Menu as UiMenu,
  MenuHandler as UiMenuHandler,
  MenuItem as UiMenuItem,
  UiMenuList,
};
