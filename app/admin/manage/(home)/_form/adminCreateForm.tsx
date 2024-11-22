'use client';
import { UiButton } from '@component/atoms/button';
import { UiDialog, UiDialogBody } from '@component/atoms/dialog';
import NextImage from '@component/atoms/image';
import MobileDrawer from '@component/molecules/mobileDrawer';
import useWindowDimensions from '@hooks/useWindowDimensions';
import { Fragment } from 'react';
import { useCreateAdminFormContext } from '../_context/createAdminContext';

import { ACTION } from '@utils/roles';
import CreateAdminForm from './detailsForm';

const CreateAdmin = () => {
  const form = useCreateAdminFormContext();
  const { isMobile, width } = useWindowDimensions();

  const createForm = (
    <Fragment>
      <UiDialogBody className="max-h-[85vh] overflow-auto p-0  font-regular max-sm:pb-8">
        <UiButton
          as="button"
          variant="text"
          onClick={() => form?.createFormhandler()}
          className="absolute right-0 top-[-1rem] hidden rounded-lg bg-white md:flex"
        >
          <NextImage src="/icons/cancel.svg" className="size-[10px]" />
        </UiButton>
        <Fragment>
          <h4 className="mb-7 text-h4 font-medium text-black/85">{form?.formik?.values?.action === ACTION.CREATE? "Add User":"Update User"}</h4>

          <div className="mx-auto w-full ">
            <form onSubmit={form?.formik.handleSubmit}>
              <CreateAdminForm />
              <UiButton
                as="button"
                variant="filled"
                type="submit"
                className="w-full"
                loading={form?.formik.isSubmitting}
              >
                {form?.formik?.values?.action === ACTION.UPDATE
                  ? 'Update Admin'
                  : 'Create Admin'}
              </UiButton>
            </form>
          </div>
        </Fragment>
      </UiDialogBody>
    </Fragment>
  );
  return (
    <Fragment>
      <UiDialog
        open={form?.openCreateForm && !isMobile}
        handler={form?.createFormhandler}
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
        open={form?.openCreateForm && isMobile}
        onClose={form?.createFormhandler}
        className=" p-4"
      >
        {createForm}
      </MobileDrawer>
    </Fragment>
  );
};

export default CreateAdmin;
