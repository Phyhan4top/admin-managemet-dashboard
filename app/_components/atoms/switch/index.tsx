'use client';

import { Switch } from '@material-tailwind/react';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { UiSwitchProps } from './types';

const UiSwitch: FC<UiSwitchProps> = (props) => {
  const { className, ref, ...rest } = props;
  return (
    <Switch
      ref={ref as any}
      ripple={false}
      className={twMerge('h-full w-full checked:bg-green-300', className)}
      containerProps={{
        className: 'w-11 h-6',
      }}
      circleProps={{
        className: 'before:hidden left-0.5 border-none',
      }}
      {...rest}
    />
  );
};

export default UiSwitch;
