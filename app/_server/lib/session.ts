import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { ADMIN_TOKEN} from '@server/utils';
import { SignJWT, jwtVerify } from 'jose';

const secretKey ='cvgcfmgCFGFtdtshftmtwtfthsfamgh3fd42fd3f53j4m854634hhhhhhhfh';
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .sign(key);
}
export async function decrypt(input: string): Promise<any> {
  try {
    const { payload } = await jwtVerify(input, key, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch (e) {
    return null;
  }
}

export async function destroySession() {
  // Destroy the session
  cookies().set(ADMIN_TOKEN, '', { expires: new Date(0) });
}

export async function createSession(name: string, data: any) {
  const session = await encrypt(data);
  cookies().set(name, session, {
    // expires,
    httpOnly: true,
  });
}

export async function getAuthSession() {
  const session = cookies()?.get(ADMIN_TOKEN)?.value;

  if (!session) return null;
  return session;
}

export async function getSession() {
  const session = cookies()?.get("jwt")?.value;
  if (!session) return null;
  return await decrypt(session);
}
export async function getUserSession() {
  const session = cookies()?.get(ADMIN_TOKEN)?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const token = request.cookies.get(ADMIN_TOKEN)?.value;

  const res = NextResponse.next();

  if (token) {
    res.cookies.set({
      name: ADMIN_TOKEN,
      value: token,
      secure: true,
      httpOnly: true,
      path: '/',
    });
  }
  return res;
}
