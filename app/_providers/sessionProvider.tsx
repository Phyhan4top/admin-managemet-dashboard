'use client';
import { ReactNode, createContext } from 'react';
import { User } from '../types/user.api';
export type SessionContext = {
  isAuth: boolean;
  user: User;
};

export const SessionContext = createContext<SessionContext | null>(null);

export default function SessionProvider({
  children,
  isAuth,
  user,
}: {
  children: ReactNode;
  isAuth: boolean;
  user: User;
}) {
  return (
    <SessionContext.Provider value={{ isAuth, user }}>
      {children}
    </SessionContext.Provider>
  );
}
