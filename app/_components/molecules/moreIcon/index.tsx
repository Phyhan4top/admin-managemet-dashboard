'use client';
import UiButton from '@component/atoms/button';
import NextImage from '@component/atoms/image';
import { UiMenu, UiMenuHandler, UiMenuList } from '@component/atoms/menu';
import { twMerge } from 'tailwind-merge';
import { MoreIconProps } from './types';

const MoreIcon = (props: MoreIconProps) => {
  const { children, openMenu, menuHandler, iconClassName } = props;
  return (
    <UiMenu open={openMenu} handler={menuHandler}>
      <UiMenuHandler>
        <UiButton
          as="button"
          className={twMerge(
            'inline-flex items-center justify-end p-0 pr-4 ',
            iconClassName,
          )}
          variant="text"
        >
          <NextImage
            src="/icons/more-vertical.svg"
            className="max-h-6 cursor-pointer"
          />
        </UiButton>
      </UiMenuHandler>
      <UiMenuList className="font-inherit w-[250px]">{children}</UiMenuList>
    </UiMenu>
  );
};

export default MoreIcon;
