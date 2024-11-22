import { cookieHandler } from '@server/lib/cookie';
import { userHandler } from '@server/lib/user';
import { cookies } from 'next/headers';
import { ErrorType, serializeError } from './serializers';

export const apiRequest = async ({
  url,
  options,
  errorMessages,
}: {
  url: string;
  options: RequestInit;

  errorMessages?: string;
}): Promise<any | ErrorType> => {
  let headers: HeadersInit = {
    Cookie: cookies().toString(),
    // Authorization: `Bearer ${cookie}`,
  };

  if (options.method !== 'GET') {
    headers = {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      ...headers,
      ...options.headers,
    };
  }

  let response = await fetch(url, {
    headers: headers,
    cache: 'no-store',
    credentials: 'include',
    ...options,
  });
  // if (!response.ok) {
  //   throw new Error(errorMessages || 'Failed to fetch data');
  // }
  if (url.includes('login')) {
    response = await cookieHandler(response);
  }

  const res = await response.json();

  //set user to session
  if (url.includes('login') && res?.data?.account && res?.data?.accessToken) {
    // persist user to session
    userHandler(res?.data?.account);
  }

  if (res?.status === 'FAIL' && options.method === 'GET') {
    //to take advantage of the error handling in next APIs
    throw new Error(
      res?.data?.message || errorMessages || 'Failed to fetch data',
    );
  } else if (res?.status === 'FAIL') {
    return serializeError(res.data);
  }

  return res;
};
