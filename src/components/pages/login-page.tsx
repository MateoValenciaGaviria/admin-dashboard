'use client';

import { Input } from '../input';
import { Card, CardBody, CardHeader } from '../card';
import { Button } from '../button';
import { SubmitHandler, useForm } from 'react-hook-form';

export const LoginPage = () => {
  type Inputs = {
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div className='flex justify-center w-full h-full bg-gray-200'>
      <Card className='w-100 m-40 p-4'>
        <CardHeader className='flex justify-center text-lg font-bold pt-5'>
          <p>Login</p>
        </CardHeader>
        <CardBody>
          <form
            className='flex flex-col gap-4'
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              type='email'
              label='Email'
              required
              errorMessage={errors?.email && errors.email.message}
              {...register('email')}
            />
            <Input
              type='password'
              label='Password'
              required
              minLength={5}
              errorMessage={errors?.password && errors.password.message}
              {...register('password')}
            />
            <Button className='mt-8' color='primary' type='submit'>
              Login
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};
