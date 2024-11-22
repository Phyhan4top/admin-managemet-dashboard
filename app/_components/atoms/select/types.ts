import {
  SelectOptionProps,
  SelectProps,
} from '@material-tailwind/react/components/Select';

type SelectPropsExtend = {
  value?: string;
  selectClassName?: string;
  error?: string;
};

type OptionPropsExtend = {
  className?: string;
};

export type UiOptionProps = SelectOptionProps & OptionPropsExtend;
export type UiSelectProps = Omit<SelectProps, 'error'> & SelectPropsExtend;
