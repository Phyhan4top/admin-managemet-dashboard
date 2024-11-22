import Link from 'next/link';
import { FC } from 'react';
import { MenuLinkProps } from './types';

const MenuLink: FC<MenuLinkProps> = ({ children, route, onAction }) => {
  if (route?.action) {
    return (
      <div
        onClick={() => onAction(route?.action || '')}
        className="flex h-full w-full items-center"
      >
        {children}
      </div>
    );
  }

  return (
    <Link href={route?.path} className="flex h-full w-full items-center">
      {children}
    </Link>
  );
};
export default MenuLink;
