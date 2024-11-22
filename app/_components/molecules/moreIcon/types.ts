import { ReactNode } from 'react';

export type MoreIconProps = {
  children: ReactNode;
  openMenu: boolean;
  menuHandler: () => void;
  iconClassName?: string;
};
