'use client';

import { useLocalStorage } from './useLocalStorage';
import { UserProps } from '../types';

export const useAuth = () => {
  const [user, setUser] = useLocalStorage<UserProps | null>('user', null);

  const login = (user: UserProps) => setUser(user);
  const logout = () => setUser(null);

  return { user, login, logout };
};
