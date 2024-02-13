'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import LogoWhite from '@codewinglet/assets/logo_white.svg';

import { Typography } from '@codewinglet/components';
import {
  FacebookLogo,
  InstagramLogo,
  LinkedInLogo,
  TwitterLogo,
} from '@codewinglet/assets';
import { companyTermsMenu, serviceMenu, technologyMenu } from './constants';

const Footer = () => {
  const router = useRouter();
  return (
    <footer className='bg-black text-white relative md:py-[60px] py-5'>
      <div className='max-w-[1410px] w-full px-[15px] mx-auto'>
        <div className='sm:gap-0 gap-[30px] flex p-[15px] relative mx-[-15px] flex-wrap '>
          <div className='px-[15px] w-full relative md:max-w-[25%] md:flex-[0_0_25%] max-w-[100%] flex-[0_0_100%] min-h-[1px]'>
            <Image
              src={LogoWhite}
              alt='Codewinglet White Logo'
              className='w-[253px] sm:[w-191px] xl:w-[252px] cursor-pointer'
              onClick={() => router.push('/')}
              loading='eager'
            />

            <Typography
              variant='subtitle1'
              className='mt-[15px] !leading-normal font-300'
            >
              Codewinglet has proven to be a professional software development
              service provider from the outset. We appreciate their proactive
              approach and ability.
            </Typography>
          </div>
          <div className='px-[15px] w-full relative md:max-w-[25%] md:flex-[0_0_25%] max-w-[100%] flex-[0_0_100%] min-h-[1px]'>
            <Typography variant='h4' className='mb-[20px]'>
              Services
            </Typography>
            <div>
              {technologyMenu.map((item) => (
                <div key={item.id}>
                  <Typography
                    variant='subtitle1'
                    className='leading-[34px] mb-[5px] min-h-0'
                  >
                    {/* <HighlightArrow color={COLORS.white} /> */}
                    <Link className='' href={item.path}>
                      {item.label}
                    </Link>
                  </Typography>
                </div>
              ))}
            </div>
          </div>
          <div className='px-[15px] w-full relative md:max-w-[25%] md:flex-[0_0_25%] max-w-[100%] flex-[0_0_100%] min-h-[1px]'>
            <Typography variant='h4' className=' mb-[20px]'>
              Discover
            </Typography>
            <div>
              {serviceMenu.map((item) => (
                <div key={item.id}>
                  <Typography
                    variant='subtitle1'
                    className=' leading-[34px] mb-[5px] min-h-0'
                  >
                    <Link className='' href={item.path}>
                      {item.label}
                    </Link>
                  </Typography>
                </div>
              ))}
            </div>
          </div>
          <div className='px-[15px] w-full relative md:max-w-[25%] md:flex-[0_0_25%] max-w-[100%] flex-[0_0_100%] min-h-[1px]'>
            <Typography variant='h4' className=' mb-[20px]'>
              Get in touch
            </Typography>
            <div>
              <Typography
                variant='subtitle1'
                className='leading-[34px] mb-[5px] min-h-0'
              >
                <Link href='tel:+918320111741'>+91 83201 11741</Link>
              </Typography>

              <Typography
                variant='subtitle1'
                className=' leading-[34px] mb-[5px] min-h-0'
              >
                <Link href='mailto:jobs@codewinglet.com'>
                  jobs@codewinglet.com
                </Link>
              </Typography>

              <Typography
                variant='subtitle1'
                className='leading-[34px] mb-[5px] min-h-0 !leading-normal'
              >
                A901-905, Vivanta Icon Opp. Shell Petrol Pump, Adajan, Surat,
                Gujarat 395009.
              </Typography>
            </div>
          </div>
        </div>
        <hr className='block md:hidden sm mt-[25px]' />
        <div className='md:gap-0 gap-4 flex flex-col md:flex-row items-center md:justify-between justify-center relative pt-[40px] '>
          <div className='flex gap-5'>
            <Link
              className='flex items-center justify-center w-8 h-8 border border-solid border-white rounded-full bg-white'
              href='https://www.facebook.com/CodewingletPvtLtd'
              target='_blank'
              aria-label='Facebook'
            >
              <FacebookLogo />
            </Link>
            <Link
              className='flex items-center justify-center w-8 h-8 border border-solid border-white rounded-full bg-white'
              href='https://www.instagram.com/codewinglet/'
              target='_blank'
              aria-label='Instagram'
            >
              <InstagramLogo />
            </Link>
            <Link
              className='flex items-center justify-center w-8 h-8 border border-solid border-white rounded-full bg-white'
              href='https://in.linkedin.com/company/codewinglet'
              target='_blank'
              aria-label='Linkedin'
            >
              <LinkedInLogo />
            </Link>
            <Link
              className='flex items-center justify-center w-8 h-8 border border-solid border-white rounded-full bg-white'
              href='https://twitter.com/codewinglet'
              target='_blank'
              aria-label='Twitter'
            >
              <TwitterLogo />
            </Link>
          </div>
          <Typography variant='subtitle1' className='sm:text-left text-center'>
            © {new Date().getFullYear()} All rights reserved. Codewinglet
          </Typography>
          <ul className='flex gap-7'>
            {companyTermsMenu.map((item) => (
              <li key={item.id}>
                <Typography variant='subtitle1'>
                  <Link href={item.path}>{item.label}</Link>
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default React.memo(Footer);
