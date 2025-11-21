'use client';

import { createContext, ReactNode } from 'react';
import { UserProps } from '../types';
import { useAuth } from '../hooks';

type AuthContextType = {
  user: UserProps | null;
  login: (user: UserProps) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
