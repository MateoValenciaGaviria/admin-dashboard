'use client';

import { Input } from '../input/input';
import { Card, CardBody, CardHeader } from '../card/card';
import { Button } from '../button/button';

export const LoginPage = () => {
  return (
    <div className='flex justify-center w-full h-full bg-gray-200'>
      <Card className='w-100 m-40 p-4'>
        <CardHeader className='flex justify-center text-lg font-bold pt-5'>
          <p>Login</p>
        </CardHeader>
        <CardBody>
          <div className='flex flex-col gap-4'>
            <Input label='User' />
            <Input label='Password' />
          </div>
          <Button className='mt-8' color='primary'>
            Login
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};
