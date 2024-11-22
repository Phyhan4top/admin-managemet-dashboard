'use client';
import UiButton from '@component/atoms/button';
import UiCheckbox from '@component/atoms/checkbox';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { RadioButtonProps } from './types';

const RadioButton = ({
  className,
  name,
  value,
  title,
  onClick,
  rounded,
}: RadioButtonProps) => {
  const checked = name === value;
  return (
    <div className={twMerge(classNames('w-full', className))}>
      <UiButton
        as="button"
        variant="outlined"
        onClick={() => onClick(name)}
        className={classNames('w-full justify-start p-1 md:p-4', {
          'border-black-400': checked,
        })}
      >
        <UiCheckbox checked={checked} rounded={rounded} readOnly />
        <span className="text-sm capitalize text-black-600 md:text-base">
          {title}
        </span>
      </UiButton>
    </div>
  );
};

export default RadioButton;
