import { UiDialog } from '@component/atoms/dialog';
import NextImage from '@component/atoms/image';
import useWindowDimensions from '@hooks/useWindowDimensions';
import { FC, Fragment } from 'react';
import MobileDrawer from '../../molecules/mobileDrawer';
import { GenericModalProps } from './types';

const GenericModal: FC<GenericModalProps> = ({
  description,
  title,
  icon,
  children,
  open,
  handler,
  overLayHandler,
  size = 'xs',
}) => {
  const { isMobile } = useWindowDimensions();

  const genericContent = (
    <div className="flex flex-col items-center  justify-center">
      <NextImage
        src={icon || '/icons/success.svg'}
        className="mb-8 cursor-pointer"
      />

      <h3 className="mb-4 text-center text-h3 font-bold text-black-1000 md:text-h3">
        {title}
      </h3>

      <p className="mb-8 flex w-full items-center justify-center text-center text-sm text-black-600 md:text-base">
        {description}
      </p>
      {children}
    </div>
  );
  const handlerAction = overLayHandler ? handler : () => undefined;

  return (
    <Fragment>
      <UiDialog
        open={!isMobile && open}
        handler={handlerAction}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        size={size}
        className="rounded-[2rem] bg-white p-12 py-6"
      >
        {genericContent}
      </UiDialog>

      <MobileDrawer
        open={open && isMobile}
        onClose={handlerAction}
        className="p-4"
      >
        {genericContent}
      </MobileDrawer>
    </Fragment>
  );
};

export default GenericModal;
