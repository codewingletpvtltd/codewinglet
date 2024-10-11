'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { socialLinks } from './socialLinks';

const BlogShare = () => {
  const [pageUrl, setPageUrl] = useState('');
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPageUrl(window.location.href);
    }
    if (typeof document !== 'undefined') {
      setPageTitle(document.title);
    }
  }, []);

  return (
    <>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          className='flex items-center justify-center lg:w-10 w-[30px] lg:h-10 h-[30px] rounded-full bg-bg'
          href={link.href.call(null, pageUrl, pageTitle)}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            src={link.src}
            width={link.width}
            height={link.height}
            alt={link.alt}
          />
        </a>
      ))}
    </>
  );
};

export default BlogShare;
