'use server';

import {
  destroySession,
  getAuthSession,
  getUserSession,
} from '@server/lib/session';
import { apiRequest } from '@server/utils/fetch';
import { ErrorType } from '@server/utils/serializers';
import { LOGIN, protectedRoutes } from '@utils/routes';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function loginAction(data: {
  email: string;
  password: string;
}): Promise<any & { status: string } & ErrorType> {
  const res = await apiRequest({
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/users/login`,
    options: {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    },
    errorMessages: 'Failed to login',
  });

  return res;
}

export async function otpAction(data: { code: string; email: string }) {
  const res = await apiRequest({
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/verify-otp`,
    options: {
      method: 'POST',
      body: JSON.stringify({ ...data }),
    },
    errorMessages: 'Failed to create otp',
  });

  return res;
}

export async function createPasswordAction(data: { password: string }) {
  const res = await apiRequest({
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/change-password`,
    options: {
      method: 'POST',
      body: JSON.stringify({ ...data }),
    },
    errorMessages: 'Failed to create password',
  });

  return res;
}

export async function forgotPasswordAction(data: {
  email: string;
}): Promise<{ status: string } & ErrorType> {
  const res = await apiRequest({
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/forget-password`,
    options: {
      method: 'POST',
      body: JSON.stringify({ ...data }),
    },
    errorMessages: 'Failed to forgot password',
  });

  return res;
}

export async function logOutAction(pathName: string) {
  const isProtectedRoute = protectedRoutes.includes(pathName);

  await destroySession();

  if (isProtectedRoute) {
    redirect('/login');
  }
  revalidatePath('/login');
}

export async function getTokenAction(): Promise<string> {
  const res = await apiRequest({
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/token`,
    options: {
      method: 'GET',
    },
    errorMessages: 'Failed to forgot password',
  });

  return res?.data?.accessToken;
}

export async function isAuthenticated() {
  const isAuth = await getAuthSession();
  return !!isAuth;
}
export async function getUserData() {
  const user = await getUserSession();
  return user;
}

export async function redirectToLoginAction({
  currentUrl,
}: {
  currentUrl: string;
}) {
  const session = await getAuthSession();
  //if user not authethicated redirect to login
  if (!session) {
    return redirect(`${LOGIN}?redirect=${currentUrl}`);
  }
}
