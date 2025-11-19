import { Header } from '@/src/components/header';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className='px-8 py-10'>{children}</div>
    </>
  );
}
