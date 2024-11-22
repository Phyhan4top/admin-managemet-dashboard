import { sizeStyles } from '../input/styles';

type UiPhoneInputPropsExtend = {
  label?: string;
  error?: string | undefined;
  inputSize?: keyof typeof sizeStyles;
  className?: string;
  rightIcon?: string;
  showError?: boolean;
  clearInput?: () => void;
  countryCode?: string;
  setCountryCode: (code: string) => void;
};

export type UiPhoneInputProps = UiPhoneInputPropsExtend &
  JSX.IntrinsicElements['input'];
