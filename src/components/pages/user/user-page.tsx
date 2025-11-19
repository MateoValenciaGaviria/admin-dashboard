import { UserDetails } from './user-details';

export const UserPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  return (
    <div>
      <div className='flex flex-col gap-2 pb-5 border-b border-gray-300'>
        <h1 className='text-3xl font-black'>Profile</h1>
        <p className='font-medium'>View all your profile details here.</p>
      </div>
      <UserDetails id={id} />
    </div>
  );
};
