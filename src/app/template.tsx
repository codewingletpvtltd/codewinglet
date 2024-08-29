/* eslint-disable import/order */
'use client';
import { Footer, Header, SnackbarProvider } from '@codewinglet/components';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

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
    <SnackbarProvider>
      <div>
        <Header isScroll={isScroll} />
        {children}
        {showFooter && <Footer />}
      </div>
    </SnackbarProvider>
  );
}
