'use server';

import { apiRequest } from '@server/utils/fetch';
import { ErrorType } from '@server/utils/serializers';
import { Roles, STATUS } from '@utils/roles';
import { revalidatePath } from 'next/cache';

export async function createAdminAction(data: {
  email: string;
  username: string;
  status: STATUS;
  role: Roles;
  password:string
}): Promise<any & { status: string } & ErrorType> {
  const res = await apiRequest({
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/users/signup`,
    options: {
      method: 'POST',
      body: JSON.stringify({ ...data }),
    },
    errorMessages: 'Failed to create admin',
  });
  revalidatePath('/');
  return res;
}

export async function updateAdminAction(
  id: string,
  data: {
    email: string;
    username: string;
    status: string;
    role: string;
  },
): Promise<any & { status: string } & ErrorType> {
  const res = await apiRequest({
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/users/${id}`,
    options: {
      method: 'PATCH',
      body: JSON.stringify({ ...data }),
    },
    errorMessages: 'Failed to update admin',
  });
  revalidatePath('/');
  return res;
}

export async function updateAdminStatusAction(
  id: string,
  status:STATUS,
): Promise<any & { status: string } & ErrorType> {
  const res = await apiRequest({
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/users/${id}`,
    options: {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    },
    errorMessages: 'Failed to update admin status',
  });
  revalidatePath('/');
  return res;
}

export async function deleteAdminAction(
  id: string,
): Promise<any & { status: string } & ErrorType> {
  const res = await apiRequest({
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/users/${id}`,
    options: {
      method: 'DELETE',
    },
    errorMessages: 'Failed to delete admin status',
  });

  revalidatePath('/');
  return res;
}
