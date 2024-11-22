import { LinkProps } from 'next/link';
import { sizeStyles, styles } from './styles';

export type buttonVariantType = keyof typeof styles;
export type ButtonPropsBasics = {
  variant?: buttonVariantType;
  color?: 'primary' | 'secondary' | 'tertiary';
  size?: keyof typeof sizeStyles;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  hoverEffect?: boolean;
  loading?: boolean;
};

export type UiButtonProps = ButtonPropsBasics &
  (
    | (LinkProps & JSX.IntrinsicElements['a'] & { as: 'a' })
    | (JSX.IntrinsicElements['button'] & { as: 'button' })
  );

export default UiButtonProps;
