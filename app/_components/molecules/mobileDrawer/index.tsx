'use client';
import classNames from 'classnames';
import { Fragment, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';
import { MobileDrawerProps } from './types';

const MobileDrawer = (props: MobileDrawerProps) => {
  const { children, className, open, onClose } = props;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set isClient to true when component mounts on the client side
  }, []);

  const drawerContent = (
    <Fragment>
      <div
        className={twMerge(
          classNames(
            ' fixed bottom-0 left-0 right-0',
            `transform transition-transform ${open ? 'translate-y-0' : 'translate-y-full'}`,
            {
              'z-drawer': open,
            },
          ),
        )}
      >
        <div
          className={twMerge(
            classNames(
              'rounded-tl-[2rem] rounded-tr-[2rem] bg-white shadow-md',
              'max-h-[90vh] min-h-[50vh] !pt-0',
              'pb-8',
              className,
            ),
          )}
        >
          <div className="flex h-[40px] w-full items-center justify-center">
            <span
              className="h-[6px] w-[120px] rounded bg-black-100"
              onClick={onClose}
            />
          </div>

          {children}
        </div>
      </div>
      {open && (
        <div
          className="fixed left-0 top-0 z-drawerOverlay  h-full w-full bg-black opacity-50"
          onClick={onClose}
        />
      )}
    </Fragment>
  );

  return (
    <Fragment>
      {isClient ? createPortal(drawerContent, document.body) : null}
    </Fragment>
  );
};

export default MobileDrawer;
