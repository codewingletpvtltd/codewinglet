import React from 'react';
import { Metadata } from 'next';
import './globals.css';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Top Software Development Company India - Code Winglet Pvt. Ltd.',
  description:
    'Transform your business with innovative software solutions tailored to your needs. Discover how Code Winglet Pvt. Ltd. can help you streamline processes, increase efficiency, and drive growth.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head>
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon.png' />
      </Head>
      <body className='font-primary'>{children}</body>
    </html>
  );
}
