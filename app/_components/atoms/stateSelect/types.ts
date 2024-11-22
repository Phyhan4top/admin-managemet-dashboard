import { SelectProps } from '@material-tailwind/react';

export type UiStateSelectProps = Omit<SelectProps, 'children' | 'error'> & {
  countrySelected: string | undefined;
};
