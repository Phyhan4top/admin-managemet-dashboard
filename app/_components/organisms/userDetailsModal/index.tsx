'use client';
import { UiButton } from '@component/atoms/button';
import { UiDialog, UiDialogBody } from '@component/atoms/dialog';
import NextImage from '@component/atoms/image';
import MobileDrawer from '@component/molecules/mobileDrawer';
import useWindowDimensions from '@hooks/useWindowDimensions';
import { Fragment } from 'react';
import { UserDetails } from '../userDetails';
import { User } from '../../../types/user.api';

const UserDetailsModal = ({
  userDetails,
  handler,
  isOpen,
}: {
  userDetails: User | undefined;
  handler: () => void;
  isOpen: boolean;
}) => {
  const { isMobile, width } = useWindowDimensions();

  const createForm = (
    <Fragment>
      <UiDialogBody className="overflow-auto p-0 font-regular  max-sm:h-[85vh] max-sm:overflow-auto max-sm:pb-8">
        <UiButton
          as="button"
          variant="text"
          onClick={handler}
          className="absolute right-0 top-[-1rem] hidden rounded-lg bg-white md:flex"
        >
          <NextImage src="/icons/cancel.svg" className="size-[10px]" />
        </UiButton>
        <div>
          <div className="my-4 text-[28px] font-medium text-black/85">
            Details
          </div>
          <div className="mx-auto w-full">
            <UserDetails user={userDetails} />
          </div>
        </div>
      </UiDialogBody>
    </Fragment>
  );
  return (
    <Fragment>
      <UiDialog
        open={isOpen && !isMobile}
        handler={handler}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        size={width < 1279 ? 'xl' : 'md'}
        className="relative rounded-[2rem] bg-white-50 p-12"
      >
        {createForm}
      </UiDialog>

      <MobileDrawer
        open={isOpen && isMobile}
        onClose={handler}
        className=" p-4"
      >
        {createForm}
      </MobileDrawer>
    </Fragment>
  );
};

export default UserDetailsModal;
