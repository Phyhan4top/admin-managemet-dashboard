import { ChangeEventHandler } from 'react';

export type UiCheckboxPropsExtend = {
  checked: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  label?: string;
  rounded?: boolean;
  iconColor?: string;
};

export type UiCheckboxProps = UiCheckboxPropsExtend &
  JSX.IntrinsicElements['input'];
