'use client';

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User,
} from '../dropdown';

export const Header = () => {
  return (
    <header className='flex w-full h-20 py-3 px-6 justify-between border-b-1 border-gray-300'>
      <p className='flex flex-wrap content-center text-xl font-bold'>
        Admin Dashboard
      </p>
      <div className='flex'>
        <Dropdown placement='bottom-start'>
          <DropdownTrigger className='cursor-pointer'>
            <User
              as='button'
              avatarProps={{
                isBordered: false,
                src: 'https://avatar.iran.liara.run/public/46',
              }}
              className='transition-transform'
              description='@tonyreichert'
              name='Tony Reichert'
            />
          </DropdownTrigger>
          <DropdownMenu aria-label='User Actions' variant='flat'>
            <DropdownItem key='my-profile'>My Profile</DropdownItem>
            <DropdownItem key='logout' color='danger'>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </header>
  );
};
