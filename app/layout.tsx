import GoogleAuthProvider from '@providers/googleProvider';
import SessionProvider from '@providers/sessionProvider';
import { StoreProvider } from '@providers/storeProvider';
import ToastProvider from '@providers/toastProvider';
import {
  getUserData,
  isAuthenticated,
} from '@server/serverActions/auth.server';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
const font = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Dashboard',
};

/**
 *
 * @note this Rootlayout is the main layout for the entire app
 *  and should not contain any ui styling ,best use for global state management,global context providers,
 * it wraps other layout,pages components
 */
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuth = await isAuthenticated();
  const user = await getUserData();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider>
          <GoogleAuthProvider>
            <StoreProvider>
              <SessionProvider isAuth={isAuth} user={user}>
                {children}
              </SessionProvider>
            </StoreProvider>
          </GoogleAuthProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
