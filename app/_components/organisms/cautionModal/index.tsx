'use client';
import UiButton from '@component/atoms/button';
import {
  UiDialog,
  UiDialogBody,
  UiDialogHeader,
} from '@component/atoms/dialog';
import UiDivider from '@component/atoms/divider';
import NextImage from '@component/atoms/image';
import useWindowDimensions from '@hooks/useWindowDimensions';
import { FC, Fragment } from 'react';
import MobileDrawer from '../../molecules/mobileDrawer';
import { CautionModalProps } from './types';

const CautionModal: FC<CautionModalProps> = ({
  open,
  handler,
  infos,
  onActionHandler,
  loading,
  overLayHandler = false,
}) => {
  const { isMobile } = useWindowDimensions();

  const cautionContent = (
    <Fragment>
      <UiDialogHeader className="flex items-center justify-between p-0">
        <h4 className=" text-h4 font-bold text-black/85 ">Caution</h4>
        <UiButton
          as="button"
          variant="text"
          onClick={loading ? undefined : handler}
          className="hidden rounded-lg md:flex"
        >
          <NextImage src="/icons/cancel.svg" className="size-4 min-w-4" />
        </UiButton>
      </UiDialogHeader>
      <UiDialogBody className="font-d overflow-visible p-0 ">
        <h5 className="mb-4 mt-7 text-h5 font-medium text-black-950">
          Are you sure you want to proceed?
        </h5>

        <div>
          {infos.map((info, index) => (
            <p
              className="flex items-center gap-[7px] border-b border-solid border-black-200 py-5 last:border-none"
              key={index}
            >
              <NextImage
                src="/icons/circle-wavy-warning.svg"
                className="size-6 min-w-6"
              />

              <span className="text-base text-white-600">{info}</span>
            </p>
          ))}
        </div>

        <UiDivider direction="horizontal" className="mb-6 mt-8" />

        <div className="flex items-center justify-between gap-6">
          <UiButton
            as="button"
            variant="outlined"
            className="w-full font-bold"
            onClick={handler}
          >
            No, Cancel
          </UiButton>
          <UiButton
            as="button"
            variant="filled"
            className="w-full font-bold"
            onClick={onActionHandler}
            loading={loading}
          >
            Yes, Proceed
          </UiButton>
        </div>
      </UiDialogBody>
    </Fragment>
  );
  const handlerAction = overLayHandler ? handler : () => undefined;
  return (
    <Fragment>
      <UiDialog
        open={open && !isMobile}
        handler={handlerAction}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        size={'sm'}
        className="relative rounded-[2rem] bg-white p-6"
      >
        {cautionContent}
      </UiDialog>

      <MobileDrawer
        open={open && isMobile}
        onClose={handlerAction}
        className="p-4"
      >
        {cautionContent}
      </MobileDrawer>
    </Fragment>
  );
};

export default CautionModal;
