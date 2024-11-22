'use client';

import UiButton from '@component/atoms/button';
import GenericModal from '@component/organisms/genericModal';
import { ACTION } from '@utils/roles';
import { useCreateAdminFormContext } from '../../../admin/manage/(home)/_context/createAdminContext';

export const CreateAdminSuccess = () => {
  const form = useCreateAdminFormContext();

  const handler = () => {
    form?.createFormhandler(false);
  };
  const handlerCreateAdminSuccess = () => {
    form?.setOpenSuccess(false);
  };
  const title = `Admin ${form?.formik?.values?.action === ACTION.UPDATE ? 'Updated' : 'Created'} Successfully`;
  const description =
    ' You can now proceed to view the admin profile you just created...';

  return (
    <div>
      <GenericModal
        title={title}
        description={description}
        open={form?.openSuccess}
        handler={handler}
        size="md"
      >
        <UiButton
          as="a"
          size="md"
          variant="filled"
          className="mb-4 w-full"
          href={'/admin/manage'}
          onClick={handlerCreateAdminSuccess}
        >
          View Admin
        </UiButton>
      </GenericModal>
    </div>
  );
};
