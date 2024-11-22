import { CaptionLabelProps, DateRange, DayPicker } from 'react-day-picker';

import { format } from '@utils/dates';
import 'react-day-picker/dist/style.css';
import NextImage from '../image';
import './styles.css';

type UiDatePickerProps = {
  dates: Date | DateRange | undefined;
  onDateSelect:
    | ((dates: DateRange | undefined) => void)
    | ((dates: Date | undefined) => void);
  disabledDateFrom?: Date;
  onCaptionClick: (
    props: CaptionLabelProps,
    captionType: 'months' | 'years',
  ) => void;
  as: 'single' | 'range';
};

const UiDatePicker = ({
  dates,
  onDateSelect,
  onCaptionClick,
  as,
  disabledDateFrom,
}: UiDatePickerProps) => {
  let dateProps: any = {
    mode: as,
    defaultMonth:
      as === 'single'
        ? dates
        : as === 'range'
          ? (dates as DateRange)?.from
          : new Date(),
  };

  return (
    <DayPicker
      selected={dates}
      onSelect={onDateSelect}
      showOutsideDays
      disabled={{ before: disabledDateFrom || undefined }}
      numberOfMonths={as === 'single' ? 1 : 2}
      fromYear={1960}
      toYear={2030}
      className="!m-0 border-0 text-black/80"
      classNames={{
        caption:
          'flex justify-center pb-2 border-b border-solid border-neutral  relative items-center',
        caption_label: 'text-base font-bold text-gray-900',
        nav: 'flex items-center',
        nav_button_previous: '!absolute left-1.5 outline-none !bg-transparent',
        nav_button_next: '!absolute right-1.5 outline-none !bg-transparent',
        table: 'w-full border-collapse',
        head_row: 'font-bold text-gray-900 bg-transparent',
        head: 'h-14 pb-4',
        head_cell: '!m-0.5 !w-9 !font-bold !text-sm !p-0 h-auto !text-center',
        row: 'w-full mt-2 border-none',
      }}
      components={{
        IconLeft: ({ ...props }) => (
          <div {...props}>
            <NextImage
              src="/icons/chevron-right.svg"
              className="h-6 w-6 min-w-6 rotate-180"
            />
          </div>
        ),
        IconRight: ({ ...props }) => (
          <div {...props}>
            <NextImage
              src="/icons/chevron-right.svg"
              className="h-6 w-6 min-w-6"
            />
          </div>
        ),
        CaptionLabel: (props) => (
          <div className="flex items-center justify-center gap-1 text-base font-medium text-black-950">
            <span
              className="cursor-pointer"
              onClick={() => onCaptionClick(props, 'months')}
            >
              {format(props.displayMonth, 'MMM')}
            </span>
            <span
              className="cursor-pointer"
              onClick={() => onCaptionClick(props, 'years')}
            >
              {format(props.displayMonth, 'yyyy')}
            </span>
          </div>
        ),
      }}
      {...dateProps}
    />
  );
};

export default UiDatePicker;
