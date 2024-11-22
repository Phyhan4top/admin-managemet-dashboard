import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { UiCheckboxProps } from './types';

const UiCheckbox: FC<UiCheckboxProps> = (props: UiCheckboxProps) => {
  const { checked, onChange, label, rounded, className, iconColor, ...rest } =
    props;

  const checkIcon = rounded
    ? checkedCircle(iconColor)
    : checkedSquare(iconColor);
  const UnCheckIcon = rounded
    ? unCheckedCircle(iconColor)
    : uncheckedSquare(iconColor);
  return (
    <label
      className={twMerge('mr-2 flex cursor-pointer items-center', className)}
    >
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={onChange}
        {...(rest as any)}
      />

      {checked ? checkIcon : UnCheckIcon}
      {label && <span className="ml-4 text-inherit">{label}</span>}
    </label>
  );
};

const checkedSquare = (iconColor = '#212121') => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.5 22.1987H15.5C20.5 22.1987 22.5 20.1987 22.5 15.1987V9.19873C22.5 4.19873 20.5 2.19873 15.5 2.19873H9.5C4.5 2.19873 2.5 4.19873 2.5 9.19873V15.1987C2.5 20.1987 4.5 22.1987 9.5 22.1987Z"
      stroke={iconColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.25 12.1987L11.08 15.0287L16.75 9.36865"
      stroke={iconColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const uncheckedSquare = (iconColor = '#212121') => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.5 22.1987H15.5C20.5 22.1987 22.5 20.1987 22.5 15.1987V9.19873C22.5 4.19873 20.5 2.19873 15.5 2.19873H9.5C4.5 2.19873 2.5 4.19873 2.5 9.19873V15.1987C2.5 20.1987 4.5 22.1987 9.5 22.1987Z"
      stroke={iconColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const checkedCircle = (iconColor = '#656565') => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.125 9.75L10.6219 15L7.875 12.375"
      stroke={iconColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
      stroke={iconColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const unCheckedCircle = (iconColor = '#656565') => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.6666 21C17.6372 21 21.6666 16.9706 21.6666 12C21.6666 7.02944 17.6372 3 12.6666 3C7.69606 3 3.66663 7.02944 3.66663 12C3.66663 16.9706 7.69606 21 12.6666 21Z"
      stroke={iconColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default UiCheckbox;
