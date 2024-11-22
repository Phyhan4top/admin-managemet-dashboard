'use client';

import { GoogleOAuthProvider } from '@react-oauth/google';

interface GoogleProviderProps {
  children: React.ReactNode;
}

const CLIENT_ID: any = process.env.NEXT_GOOGLE_CLIENT_ID;

export default function GoogleAuthProvider({ children }: GoogleProviderProps) {
  return (
    <GoogleOAuthProvider
      clientId={
        '734523909827-nd1lc3luenuagctpj7v0kodee1m94s98.apps.googleusercontent.com'
      }
    >
      {children}
    </GoogleOAuthProvider>
  );
}
