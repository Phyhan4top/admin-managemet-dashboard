'use client';

import { addYears, format, setMonth, subYears } from '@utils/dates';
import { useEffect, useState } from 'react';
import UiButton from '../button';
import NextImage from '../image';

export function UiMonthPicker({
  setMonthPicked,
  date,
  onYearClick,
}: {
  setMonthPicked: (date: Date) => void;
  onYearClick: () => void;
  date: Date;
}) {
  const months = [
    {
      label: 'Jan',
      value: 0,
    },

    {
      label: 'Feb',
      value: 1,
    },
    {
      label: 'Mar',
      value: 2,
    },
    {
      label: 'Apr',
      value: 3,
    },
    {
      label: 'May',
      value: 4,
    },
    {
      label: 'Jun',
      value: 5,
    },
    {
      label: 'Jul',
      value: 6,
    },
    {
      label: 'Aug',
      value: 7,
    },
    {
      label: 'Sep',
      value: 8,
    },
    {
      label: 'Oct',
      value: 9,
    },
    {
      label: 'Nov',
      value: 10,
    },
    {
      label: 'Dec',
      value: 11,
    },
  ];

  const [currentDate, setCurrentDate] = useState(date);

  useEffect(() => {
    setCurrentDate(date);
  }, [date]);

  const handleLeftClick = () => {
    const newDate = subYears(currentDate, 1);
    setCurrentDate(newDate);
  };

  const handleRightClick = () => {
    const newDate = addYears(currentDate, 1);
    setCurrentDate(newDate);
  };

  const handleMonthClick = (value: number) => {
    const newDate = setMonth(currentDate, value);

    setMonthPicked(newDate);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="border-neutral relative mb-4 flex w-full items-center justify-between  border-b border-solid pb-2">
        <UiButton
          as="button"
          onClick={handleLeftClick}
          variant="text"
          size="sm"
          className="h-auto p-0"
        >
          <NextImage
            src="/icons/chevron-right.svg"
            className="h-6 w-6 min-w-6 rotate-180 cursor-pointer"
          />
        </UiButton>
        <div
          className="cursor-pointer text-base font-medium text-black-950"
          onClick={() => onYearClick()}
        >
          {format(currentDate, 'yyyy')}
        </div>

        <UiButton
          as="button"
          onClick={handleRightClick}
          variant="text"
          size="sm"
          className="h-auto p-0"
        >
          <NextImage
            src="/icons/chevron-right.svg"
            className="h-6 w-6 min-w-6 "
          />
        </UiButton>
      </div>
      <div
        className={`grid grid-cols-3 items-center justify-items-center gap-x-10 gap-y-5`}
      >
        {months.map(({ label, value }, i) => {
          return (
            <UiButton
              key={i}
              as="button"
              onClick={() => handleMonthClick(value)}
              variant="text"
              className="h-auto rounded-sm py-2 font-medium"
              size="sm"
            >
              {label}
            </UiButton>
          );
        })}
      </div>
    </div>
  );
}
