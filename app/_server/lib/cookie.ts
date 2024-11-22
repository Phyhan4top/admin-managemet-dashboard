import { ADMIN_TOKEN } from '@server/utils';
import { cookies } from 'next/headers';

export async function cookieHandler(response: Response) {
  const cookiesList = cookies();

  const cookieStore = response.headers;
  const setCookieHeader = cookieStore.get('set-cookie');

  if (setCookieHeader) {
    const cookiesArray = setCookieHeader.split(/[;,]/);

    let token = '';

    for (const cookie of cookiesArray) {
      const [name, value] = cookie.trim().split('=');
      if (name === 'jwt') {
        token = value;
      }
    }
    
    if (token) {
      cookiesList.set({
        name: ADMIN_TOKEN,
        value: token,
        secure: true,
        httpOnly: true,
        path: '/',
      });
    }
  }

  return response;
}
