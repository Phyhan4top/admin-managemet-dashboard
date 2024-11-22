'use client';
import classNames from 'classnames';
import { forwardRef, useId, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { UiTextAreaProps } from './types';

export const UiTextArea = forwardRef((props: UiTextAreaProps, ref: any) => {
  const [focus, setFocus] = useState(false);
  const generatedId = useId();
  const {
    label,
    error,
    id = generatedId,
    required,
    className,
    showError = false,
    borderRadius = 'rounded-2xl',
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
        <textarea
          ref={ref}
          className={twMerge(
            classNames(
              'relative flex w-full items-center border border-solid border-black-200 bg-inherit  p-4 text-base text-black-600 placeholder:text-inherit focus:outline-none disabled:cursor-not-allowed disabled:bg-inherit',
              {
                'border-white-200 cursor-not-allowed border  border-solid bg-white-50  text-black-600 opacity-40':
                  rest.disabled,
                'border border-solid border-red-600  bg-red-50  text-black-600':
                  invalid,
                'border border-solid border-blue-400 bg-blue-50':
                  focus && !invalid,
              },
              borderRadius,
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
          {...(rest as any)}
        />

        {showError && getError()}
      </div>
    </div>
  );
});

UiTextArea.displayName = 'UiTextArea';

export default UiTextArea;
