'use client';

import { createContext, ReactNode, useState } from 'react';
import { UserProps } from '../types';

type AuthContextType = {
  user: UserProps | null;
  login: (user: UserProps) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProps | null>(null);
  const login = (user: UserProps) => setUser(user);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
