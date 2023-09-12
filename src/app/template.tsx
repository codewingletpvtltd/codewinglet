'use client';
import { useEffect, useState } from 'react';
import { Consultant, Footer, Header } from '@codewinglet/components';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isScroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    // Remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, []);

  return (
    <div>
      <Header isScroll={isScroll} />
      {children}
      <Consultant />
      <Footer />
    </div>
  );
}
