'use client';

import { addYears, getYear, setYear, subYears } from '@utils/dates';
import { useCallback, useState } from 'react';
import UiButton from '../button';
import NextImage from '../image';

export function UiYearPicker({
  setYearPicked,
  date,
}: {
  setYearPicked: (date: Date) => void;
  date: Date;
}) {
  const [currentDate, setCurrentDate] = useState(date);

  const startYear = Math.floor(getYear(currentDate) / 10) * 10;

  const yearRange = useCallback(() => {
    const years = [];
    for (let i = startYear - 1; i <= startYear + 10; i++) {
      years.push(i);
    }
    return years;
  }, [startYear]);

  const handleLeftClick = () => {
    const newDate = subYears(currentDate, 10);
    setCurrentDate(newDate);
  };

  const handleRightClick = () => {
    const newDate = addYears(currentDate, 10);
    setCurrentDate(newDate);
  };

  const handleYearClick = (year: number) => {
    const newDate = setYear(currentDate, year);

    setYearPicked(newDate);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="border-neutral relative mb-4 flex w-full items-center justify-between border-b border-solid pb-2">
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
        <div className="text-base font-medium text-black-950">
          {startYear} - {startYear + 9}
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
            className="h-6 w-6 min-w-6"
          />
        </UiButton>
      </div>
      <div className="grid grid-cols-3 items-center justify-items-center gap-x-10 gap-y-5">
        {yearRange().map((year, i) => (
          <UiButton
            key={i}
            as="button"
            onClick={() => handleYearClick(year)}
            variant="text"
            className={`h-auto rounded-sm py-2 font-medium first:text-black-300 last:text-black-300`}
            size="sm"
          >
            {year}
          </UiButton>
        ))}
      </div>
    </div>
  );
}
