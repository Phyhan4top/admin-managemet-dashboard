import { ReactNode } from 'react';

export type MobileDrawerProps = {
  className?: string;
  children: ReactNode;
  open: boolean;
  onClose: () => void;
};
