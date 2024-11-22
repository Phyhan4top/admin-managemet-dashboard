'use client';
import {
  Dialog,
  DialogBody,
  DialogBodyProps,
  DialogFooter,
  DialogHeader,
  type DialogHeaderProps,
  type DialogProps,
} from '@material-tailwind/react';
import { twMerge } from 'tailwind-merge';
// import { font } from '../../../layout';

const UiDialog = (props: Omit<DialogProps, 'ref'>) => {
  const { className = '', children, ...rest } = props;

  return (
    <Dialog
      {...rest}
      className={twMerge(`${className}`)}
      style={{
        fontFamily: 'inherit',
      }}
    >
      {children}
    </Dialog>
  );
};

const UiDialogHeader = (props: Omit<DialogHeaderProps, 'ref'>) => {
  const { className = '', children, ...rest } = props;

  return (
    <DialogHeader
      {...rest}
      className={twMerge(`${className}`)}
      style={{
        fontFamily: 'inherit',
      }}
    >
      {children}
    </DialogHeader>
  );
};

const UiDialogBody = (props: Omit<DialogBodyProps, 'ref'>) => {
  const { className = '', children, ...rest } = props;

  return (
    <DialogBody
      {...rest}
      className={twMerge(`${className}`)}
      style={{
        fontFamily: 'inherit',
      }}
    >
      {children}
    </DialogBody>
  );
};

export {
  UiDialog,
  UiDialogBody,
  DialogFooter as UiDialogFooter,
  UiDialogHeader,
};
