'use server';

import { apiRequest } from '@server/utils/fetch';
import { ErrorType } from '@server/utils/serializers';
import { STATUS } from '@utils/roles';
import { revalidatePath } from 'next/cache';

export async function updateUserStatusAction(
  ids: string[],
  status: STATUS,
): Promise<any & { status: string } & ErrorType> {
  const res = await apiRequest({
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/users/update-many`,
    options: {
      method: 'PATCH',
      body: JSON.stringify({ ids, status }),
    },
    errorMessages: 'Failed to update user status',
  });
  revalidatePath('/');
  return res;
}

export async function deleteUserAction(
  ids: string[],
): Promise<any & { status: string } & ErrorType> {
  const res = await apiRequest({
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/users/delete-many`,
    options: {
      method: 'DELETE',
      body: JSON.stringify({ ids, deleted: true }),
    },
    errorMessages: 'Failed to delete user',
  });
  revalidatePath('/');
  return res;
}
