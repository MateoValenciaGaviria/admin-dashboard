'use client';

import { users } from '@/src/data/users';
import { Card, CardBody } from '../../card';
import { User } from '../../user';
import { redirect } from 'next/navigation';
import { InfoDescription } from './info-description';

interface UserDetailsProps {
  id: string;
}

export const UserDetails = ({ id }: UserDetailsProps) => {
  const user = users.find((user) => user.id === parseInt(id));

  if (!user?.id) {
    redirect('/dashboard');
  }

  return (
    <div className='flex mt-10 gap-10'>
      <Card className='w-fit'>
        <CardBody>
          <User
            classNames={{
              base: 'flex flex-col p-20',
              wrapper: 'items-center',
            }}
            avatarProps={{
              radius: 'full',
              src: user.avatar,
              className: 'w-50 h-50',
            }}
            name={user.name}
            description={user.email}
          />
        </CardBody>
      </Card>
      <Card className='w-full'>
        <CardBody>
          <h3 className='text-lg font-medium m-4'>Bio and other details.</h3>
          <div className='flex flex-col p-10 gap-5'>
            <div className='flex gap-5'>
              <InfoDescription title={'Role'} description={user.role} />
              <InfoDescription title={'Status'} description={user.status} />
            </div>
            <div className='flex gap-5'>
              <InfoDescription title={'Team'} description={user.team} />
              <InfoDescription title={'Age'} description={user.age} />
            </div>
            <div className='flex gap-5'>
              <InfoDescription title={'Email'} description={user.email} />
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
