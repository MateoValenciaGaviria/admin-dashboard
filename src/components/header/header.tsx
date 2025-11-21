'use client';

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User,
} from '../dropdown';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/src/hooks';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user?.id) {
      router.push('/login');
    }
  }, [user]);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header className='flex w-full h-20 py-3 px-6 justify-between border-b-1 border-gray-300'>
      <p
        className='flex flex-wrap content-center text-xl font-bold cursor-pointer'
        onClick={() => router.push('/dashboard')}
      >
        Admin Dashboard
      </p>
      <div className='flex'>
        {user && (
          <Dropdown placement='bottom-start'>
            <DropdownTrigger className='cursor-pointer'>
              <User
                as='button'
                avatarProps={{
                  isBordered: false,
                  src: user.avatar,
                }}
                className='transition-transform'
                description={user.email}
                name={user.name}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label='User Actions' variant='flat'>
              <DropdownItem
                key='my-profile'
                onClick={() => router.push(`/users/${user.id}`)}
              >
                My Profile
              </DropdownItem>
              <DropdownItem key='logout' color='danger' onClick={logout}>
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}
      </div>
    </header>
  );
};
