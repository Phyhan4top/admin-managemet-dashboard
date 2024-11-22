import { DialogProps } from "@material-tailwind/react";

export type GenericModalProps = {
  icon?: string;
  title: string;
  description: string;
  children: React.ReactNode;
  open: boolean;
  handler: () => void;
  overLayHandler?: boolean;
  size?: DialogProps['size'];
};
