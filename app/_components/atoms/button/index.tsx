import classNames from 'classnames';
import Link from 'next/link';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { UiSpinner } from '../spinner';
import { disabledStyles, sizeStyles, styles } from './styles';
import UiButtonProps from './types';

export const UiButton = forwardRef<
  typeof Link | HTMLButtonElement,
  UiButtonProps
>(function ForwardedButton(props, ref) {
  const {
    variant = 'filled',
    color = 'primary',
    size = 'md',
    children,
    loading,
    disabled = false,
    className = '',
    as: C = Link,
    hoverEffect = true,

    ...rest
  } = props;

  const Component = C === 'a' ? Link : C;
  return (
    <Component
      ref={ref as any}
      className={twMerge(
        classNames(
          'inline-flex items-center justify-center border-none capitalize outline-none ring-offset-1 transition-colors duration-300 focus-visible:ring-2',
          // styles[variant][color],
          sizeStyles[size],
          {
            [`${styles[variant][color]}`]: hoverEffect,
            [`${filterHoverClasses(styles[variant][color])}`]: !hoverEffect,
            [`${disabledStyles[variant][color]}`]: disabled || loading,
          },
          className,
        ),
      )}
      disabled={disabled}
      type="button"
      {...(rest as any)}
    >
      {loading && <UiSpinner className="mr-2 h-4 w-4 text-gray-900/50" />}
      {children}
    </Component>
  );
});

function filterHoverClasses(classNames: string) {
  const classes = classNames.split(' ');
  const filteredClasses = classes.filter((cls) => !cls.startsWith('hover:'));
  return filteredClasses.join(' ');
}

export default UiButton;
