import ManageAdminTable from '@component/organisms/adminTable';

import { getUsers } from '@server/request/user.request';
import { CreateAdminSuccess } from '../../../_components/organisms/createAdminSuccess';
import CreateAdminFormProvider from './_context/createAdminContext';
import CreateAdminModal from './_form/adminCreateForm';
import { User } from '../../../types/user.api';

export default async function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const users = await getUsers({
    limit: searchParams?.limit,
    page: searchParams?.page,
    sortBy: searchParams?.status,
  });
  if (!users?.data) {
  }
  const selectedAdmin = users?.data?.find(
    (user:User) => user?.id === searchParams?.id,
  );
  return (
    <div className="flex flex-col gap-5">
      <CreateAdminFormProvider selectedAdmin={selectedAdmin}>
        <ManageAdminTable data={users} />
        <CreateAdminModal />
        <CreateAdminSuccess />
      </CreateAdminFormProvider>
    </div>
  );
}
