import Image from 'next/image';
import Link from 'next/link';

import { Breadcrumb, Typography } from '@codewinglet/components';

const BlogDetailsLink = () => {
  const breadcrumbData = [
    { value: 'All Blog' },
    { value: 'How collaboration makes us better designers' },
  ];

  const socialLinks = [
    {
      href: 'https://in.linkedin.com/company/codewinglet',
      src: '/assets/icons/LinkedInLogo.svg',
      width: 18,
      height: 18,
      alt: 'LinkedInLogo',
    },
    {
      href: 'https://www.instagram.com/codewinglet/',
      src: '/assets/icons/InstagramLogo.svg',
      width: 20,
      height: 20,
      alt: 'InstagramLogo',
    },
    {
      href: 'https://www.facebook.com/codewingletpteltd',
      src: '/assets/icons/FacebookLogo.svg',
      width: 12,
      height: 20,
      alt: 'FacebookLogo',
    },
    {
      href: 'https://twitter.com/codewinglet',
      src: '/assets/icons/TwitterLogo.svg',
      width: 19,
      height: 20,
      alt: 'TwitterLogo',
    },
    {
      href: '/',
      src: '/assets/icons/CopyLogo.svg',
      width: 24,
      height: 24,
      alt: 'CopyLogo',
    },
  ];

  return (
    <div className='bg-white md:mt-[142px] mt-[78px] fixed top-0 w-full z-10 shadow-custom'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto flex justify-between items-center py-[13px]'>
        <Breadcrumb
          breadcrumbs={breadcrumbData.map((item) => (
            <Typography key={item.value}>{item.value}</Typography>
          ))}
        />
        <div className='flex items-center gap-[18px]'>
          <Typography className='flex gap-[5px]'>
            <Image
              src='/assets/icons/share.svg'
              alt='share'
              width={24}
              height={24}
            />
            Share on
          </Typography>
          <div className='flex gap-[15px]'>
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                className='flex items-center justify-center w-10 h-10 rounded-full bg-bg'
                href={link.href}
                target='_blank'
              >
                <Image
                  src={link.src}
                  width={link.width}
                  height={link.height}
                  alt={link.alt}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsLink;
