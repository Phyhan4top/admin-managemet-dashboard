import {
  SelectOptionProps,
  SelectProps,
} from '@material-tailwind/react/components/Select';

type SelectPropsExtend = {
  selectClassName?: string;
};

type OptionPropsExtend = {
  className?: string;
};

export type UiOptionProps = SelectOptionProps & OptionPropsExtend;
export type UiSelectProps = SelectProps & SelectPropsExtend;
