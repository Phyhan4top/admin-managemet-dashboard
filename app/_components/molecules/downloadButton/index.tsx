'use client';
import UiButton from '@component/atoms/button';
import NextImage from '@component/atoms/image';
import { FC } from 'react';
import { CSVLink } from 'react-csv';
import { twMerge } from 'tailwind-merge';
import { DownloadCSVButtonProps } from './types';

const DownloadCSVButton: FC<DownloadCSVButtonProps> = ({
  showText = true,
  className = '',
  icon,
  variant = 'filled',
  hoverEffect = true,
  title,
  filename,
  headers,
  data,
}) => {
  const baseIcon = icon ? icon : '/icons/download.svg';

  return (
    <CSVLink data={data} headers={headers} filename={`${filename}.csv`}>
      <UiButton
        as="button"
        variant={variant}
        hoverEffect={hoverEffect}
        className={twMerge('min-w-max px-6 max-sm:w-full ', className)}
      >
        <NextImage src={baseIcon} className="size-6" alt="downloadcsv" />

        {showText && (
          <span className="ml-2 text-base font-medium text-black-950">
            {title || 'Download'}
          </span>
        )}
      </UiButton>
    </CSVLink>
  );
};

export default DownloadCSVButton;
