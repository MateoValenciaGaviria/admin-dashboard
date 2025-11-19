interface InfoDescriptionProps {
  title: string;
  description: string;
}

export const InfoDescription = ({
  title,
  description,
}: InfoDescriptionProps) => {
  return (
    <div className='w-full border-b border-gray-200 pb-1'>
      <p className='text-sm text-gray-400'>{title}</p>
      <p className='font-bold capitalize text-gray-900'>{description}</p>
    </div>
  );
};
