import { buttonVariantType } from '@component/atoms/button/types';

export type DownloadCSVButtonProps = {
  showText?: boolean;
  className?: string;
  icon?: string;
  hoverEffect?: boolean;
  variant?: buttonVariantType;
  title?: string;
  filename: string;
  headers: { label: string; key: string }[];
  data: { [key: string]: string | number }[];
};
