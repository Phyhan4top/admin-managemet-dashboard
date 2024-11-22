'use client';
import classNames from 'classnames';
import { forwardRef, useId, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import NextImage from '../image';
import { sizeStyles } from './styles';
import { UiInputProps } from './types';

export const UiInput = forwardRef((props: UiInputProps, ref: any) => {
  const [focus, setFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const generatedId = useId();
  const {
    label,
    error,
    id = generatedId,
    required,
    inputSize = 'md',
    className,
    leftIcon,
    rightIcon = '/icons/cancel.svg',
    showError = false,
    isOtp = false,
    type = 'string',
    clearInput,
    ...rest
  } = props;
  const invalid = error;

  function getError() {
    if (invalid) {
      return (
        <div className=" px-3" id={id + '-error'}>
          <p className="text-sm text-red-400">{error}</p>
        </div>
      );
    }
  }

  const onFocus = (e: any) => {
    if (rest.onFocus) {
      rest.onFocus(e);
    }
    setFocus(true);
  };
  const onBlur = (e: any) => {
    if (rest.onBlur) {
      rest.onBlur(e);
    }
    setFocus(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <label htmlFor={id}>
          {label}
          {required && (
            <span aria-hidden="true" className="text-red">
              &nbsp;*
            </span>
          )}
        </label>
      )}

      <div
        className={twMerge(
          classNames('relative h-auto w-full', className, {
            'mb-2': invalid && showError,
          }),
        )}
      >
        <div className="relative">
          {leftIcon && (
            <div className="absolute bottom-0 left-0 top-0 z-[1] flex w-14 items-center justify-center">
              <NextImage src={leftIcon} />
            </div>
          )}

          <input
            ref={ref}
            type={type === 'password' && showPassword ? 'text' : type}
            className={twMerge(
              classNames(
                'relative flex w-full items-center border border-solid border-black-200 bg-inherit  px-12 text-base text-black-600 placeholder:text-inherit focus:outline-none disabled:cursor-not-allowed disabled:bg-inherit',
                sizeStyles[inputSize],
                {
                  'border-white-200 cursor-not-allowed border  border-solid bg-white-50  text-black-600 opacity-40':
                    rest.disabled,
                  'border border-solid border-red-600  bg-red-50  text-black-600':
                    invalid,
                  'border border-solid border-blue-400 bg-blue-50':
                    focus && !invalid,
                  'pl-4': !leftIcon,
                  'h-16 p-0 text-center': isOtp,
                },
              ),
            )}
            id={id}
            required={required}
            aria-required={required}
            aria-readonly={rest.readOnly}
            aria-disabled={rest.disabled}
            aria-invalid={invalid}
            aria-describedby={invalid ? id + '-error' : undefined}
            onFocus={onFocus}
            onBlur={onBlur}
            min={0}
            {...(rest as any)}
          />
          {rightIcon && (
            <div className="absolute bottom-0 right-0 top-0 flex w-14 items-center justify-center">
              <NextImage
                src={
                  type === 'password' && showPassword
                    ? '/icons/eyeopen.svg'
                    : rightIcon
                }
                className="cursor-pointer"
                onClick={
                  type === 'password' ? togglePasswordVisibility : clearInput
                }
              />
            </div>
          )}
        </div>
        {showError && getError()}
      </div>
    </div>
  );
});

UiInput.displayName = 'UiInput';

export default UiInput;
