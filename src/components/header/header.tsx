'use client';

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User,
} from '../dropdown';
import { redirect } from 'next/navigation';
import { useAuth } from '@/src/hooks';

export const Header = () => {
  const { user, logout } = useAuth();

  if (!user?.id) {
    redirect('/login');
  }

  return (
    <header className='flex w-full h-20 py-3 px-6 justify-between border-b-1 border-gray-300'>
      <p
        className='flex flex-wrap content-center text-xl font-bold cursor-pointer'
        onClick={() => redirect('/dashboard')}
      >
        Admin Dashboard
      </p>
      <div className='flex'>
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
              onClick={() => redirect(`/users/${user.id}`)}
            >
              My Profile
            </DropdownItem>
            <DropdownItem key='logout' color='danger' onClick={logout}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </header>
  );
};
