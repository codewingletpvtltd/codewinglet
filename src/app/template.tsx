'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Bounce, ToastContainer } from 'react-toastify';

import { Footer, Header } from '@codewinglet/components';
import 'react-toastify/dist/ReactToastify.css';

const contextClass: Record<string, string> = {
  success: 'bg-success',
  error: 'bg-error',
  default: 'bg-white',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isScroll, setScroll] = useState(false);
  const path = usePathname();
  const showFooter = path !== '/thank-you';

  const handleScroll = () => {
    setScroll(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, []);

  return (
    <>
      <div>
        <Header isScroll={isScroll} />
        {children}
        {showFooter && <Footer />}
      </div>
      <ToastContainer
        toastClassName={(context) =>
          contextClass[context?.type || 'default'] + ' flex gap-2 items-center'
        }
        theme='colored'
        newestOnTop
        transition={Bounce}
      />
    </>
  );
}
