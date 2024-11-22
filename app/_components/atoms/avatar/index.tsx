'use client';
import { Avatar } from '@material-tailwind/react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import NextImage from '../image';
import { UiAvatarProps } from './types';

const UiAvatar = forwardRef((props: UiAvatarProps, ref) => {
  const { showNotification, src, ...rest } = props;
  return (
    <div className="relative inline-block cursor-pointer">
      {src ? (
        <Avatar ref={ref as any} src={src} alt="avatar" size="md" {...rest} />
      ) : (
        <button
          ref={ref as any}
          {...(rest as any)}
          className={twMerge(
            'inline-flex h-12 w-12 items-center justify-center rounded-full border border-solid border-black-250 ',
            rest.className,
          )}
        >
          <NextImage src="/icons/user.svg" className="h-[50%] w-[50%]" />
        </button>
      )}

      {showNotification && (
        <span className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-white bg-green-150"></span>
      )}
    </div>
  );
});
UiAvatar.displayName = 'UiAvatar';
export default UiAvatar;
