import { sizeStyles } from './styles';

type UiInputPropsExtend = {
  label?: string;
  error?: string | undefined;
  inputSize?: keyof typeof sizeStyles;
  className?: string;
  leftIcon?: string;
  rightIcon?: string;
  showError?: boolean;
  isOtp?: boolean;
  clearInput?: () => void;
};

export type UiInputProps = UiInputPropsExtend & JSX.IntrinsicElements['input'];
