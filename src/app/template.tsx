'use client';
import { useEffect, useState } from 'react';
import {
  Consultant,
  Footer,
  Header,
  SnackbarProvider,
} from '@codewinglet/components';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isScroll, setScroll] = useState(false);

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
        <Consultant />
        <Footer />
      </div>
    </SnackbarProvider>
  );
}
