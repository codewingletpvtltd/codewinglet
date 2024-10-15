import { Metadata } from 'next';
import Head from 'next/head';
import { Poppins } from 'next/font/google';
import React from 'react';

import { COLORS } from '@codewinglet/constants';

import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Top Software Development Company India - Code Winglet Pvt. Ltd.',
  description:
    'Transform your business with innovative software solutions tailored to your needs. Discover how Codewinglet Pvt. Ltd. can help you streamline processes, increase efficiency, and drive growth.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='theme-color' content={COLORS.primary} />
        <link rel='icon' type='image/ico' sizes='32x32' href='/favicon.ico' />
      </Head>
      <body className={`font-primary bg-black ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
