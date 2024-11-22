'use client';
import { Option, Select } from '@material-tailwind/react';
import { FC, cloneElement, forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';
import { UiOption } from '../select';
import './styles.css';
import { UiOptionProps, UiSelectProps } from './types';

const UiSelectWithIcon = forwardRef((props: UiSelectProps, ref: any) => {
  const {
    value,

    onChange,
    children,
    selectClassName,
    label,
    className,
    placeholder,
    ...rest
  } = props;

  let newChildren: any = children;
  const key = useId();

  if (placeholder) {
    const placeholderOption = (
      <UiOption value="" key={key} disabled className="hidden">
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
        ref={ref}
        onChange={onChange}
        value={value}
        className={twMerge(
          `uiselect h-12 rounded-xl text-base [&_li:focus]:bg-inherit [&_li:hover]:bg-inherit ${selectClassName}`,
        )}
        style={{
          fontFamily: 'inherit',
        }}
        size="lg"
        selected={(element: any) => {
          return (
            element &&
            cloneElement(element, {
              disabled: true,
              className:
                'flex items-center opacity-100 px-0 gap-2 pointer-events-none',
            })
          );
        }}
        {...rest}
      >
        {newChildren}
      </Select>
    </div>
  );
});

const UiOptionWithIcon: FC<UiOptionProps> = (props) => {
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

UiSelectWithIcon.displayName = 'UiSelectWithIcon';

export { UiOptionWithIcon, UiSelectWithIcon };
