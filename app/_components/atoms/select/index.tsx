'use client';
import { Option, Select } from '@material-tailwind/react';
import classNames from 'classnames';
import { uniqueId } from 'lodash';
import { FC, forwardRef, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import './styles.css';
import { UiOptionProps, UiSelectProps } from './types';

const UiSelect = forwardRef((props: UiSelectProps, ref: any) => {
  const {
    value,
    onChange,
    children,
    selectClassName = '',
    label,
    className,
    placeholder,
    error,
    ...rest
  } = props;

  let newChildren: any = children;

  const [key, setKey] = useState('');

  useEffect(() => {
    // This is to force the component to re-render when the value changes.
    // this is to fix the issue where the select value is not updated due to dynamic options.
    //best is to recreate another select component as this library select is very buggy
    const destoryComp: any = setTimeout(() => {
      setKey(uniqueId());
    }, 800);
    return () => {
      clearTimeout(destoryComp);
    };
  }, [value]);

  if (placeholder) {
    const placeholderOption = (
      <UiOption value="" key={uniqueId()} disabled className="hidden">
        {placeholder}
      </UiOption>
    );
    // If children is an array, add the placeholderOption to the start.
    if (Array.isArray(newChildren)) {
      newChildren = [placeholderOption, ...newChildren];
    }
    // If children is a single element, convert it to an array with placeholderOption at the start.
    else {
      newChildren = [placeholderOption, children];
    }
  }

  return (
    <div className={twMerge(`w-full [&>div]:h-12 ${className}`)}>
      {label && (
        <p className="mb-4 text-h5 font-medium text-black/80">{label}</p>
      )}
      <Select
        key={key}
        ref={ref}
        onChange={onChange}
        value={value}
        defaultValue={value}
        className={twMerge(
          classNames(
            `uiselect h-12 rounded-xl text-base text-black-600 ${selectClassName}`,
            { '!border-red-600 bg-red-50': error },
          ),
        )}
        style={{
          fontFamily: 'inherit',
        }}
        {...rest}
        size="lg"
      >
        {newChildren}
      </Select>
    </div>
  );
});

const UiOption: FC<UiOptionProps> = (props) => {
  const { className, children, ...rest } = props;
  return (
    <Option
      className={twMerge('uioption text-base capitalize', className)}
      style={{
        fontFamily: 'inherit',
      }}
      {...rest}
    >
      {children}
    </Option>
  );
};

UiSelect.displayName = 'UiSelect';

export { UiOption, UiSelect };
