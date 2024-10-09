import Link from 'next/link';

import { BackButton, Breadcrumb, Typography } from '@codewinglet/components';

import BlogCopyButton from '../BlogCopyButton/BlogCopyButton';

const BlogDetailsLink = ({ blogData }: any) => {
  const breadcrumbData = [
    { value: 'All Blog', href: '/blogs' },
    { value: `${blogData.title}` },
  ];

  return (
    <div className='bg-white lg:mt-[86px] md:mt-[90px] mt-[78px] fixed top-0 w-full z-10'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto flex justify-between items-center py-[15px]'>
        <div className='lg:hidden block'>
          <BackButton />
        </div>
        <div className='lg:block hidden'>
          <Breadcrumb
            breadcrumbs={breadcrumbData.map((item) =>
              item.href ? (
                <Link href={item.href} key={item.value}>
                  <Typography>{item.value}</Typography>
                </Link>
              ) : (
                <Typography
                  key={item.value}
                  className='overflow-hidden text-ellipsis line-clamp-1 w-[40%]'
                >
                  {item.value}
                </Typography>
              )
            )}
          />
        </div>
        <div className='flex items-center gap-[18px]'>
          {/* <Typography className='md:flex gap-[5px] hidden'>
            <Image
              src='/assets/icons/share.svg'
              alt='share'
              width={24}
              height={24}
              className='lg:!block md:!hidden !block'
            />
            Share on
          </Typography> */}
          <div className='md:flex gap-[15px] hidden'>
            {/* {socialLinks.map((link, index) => (
              <Link
                key={index}
                className='flex items-center justify-center lg:w-10 w-[30px] lg:h-10 h-[30px] rounded-full bg-bg'
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
            ))} */}
            <BlogCopyButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsLink;
