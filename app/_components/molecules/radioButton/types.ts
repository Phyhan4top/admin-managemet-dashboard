export type RadioButtonProps = {
  className?: string;
  name: string;
  value: string;
  title: string;
  onClick: (name: string) => void;
  rounded?: boolean;
};
