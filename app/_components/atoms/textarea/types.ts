type UiTextAreaPropsExtend = {
  label?: string;
  error?: string | undefined;
  className?: string;
  showError?: boolean;
  clearInput?: () => void;
  borderRadius?: string;
};

export type UiTextAreaProps = UiTextAreaPropsExtend &
  JSX.IntrinsicElements['textarea'];
