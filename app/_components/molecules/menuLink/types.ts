import { SidebarRoutesTypes } from '@component/organisms/sideBar/types';
import { ReactNode } from 'react';

export type MenuLinkProps = {
  route: SidebarRoutesTypes;
  children: ReactNode;
  onAction: (action: string) => void;
};
