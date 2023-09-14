import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LogoWhite from '@codewinglet/assets/company_logo_white.svg';

import { Typography } from '@codewinglet/components';
import {
  EmailLogo,
  FacebookLogo,
  HighlightArrow,
  InstagramLogo,
  LinkedInLogo,
  LocationMarkLogo,
  TelePhoneLogo,
  TwitterLogo,
} from '@codewinglet/assets';
import { COLORS } from '@codewinglet/constants';
import { companyTermsMenu, serviceMenu, technologyMenu } from './constants';

const Footer = () => (
  <footer className='bg-black text-white lg:px-0 px-5 py-10'>
    <div className='md:mx-8 max-w-screen-xl xl:mx-auto'>
      <div className='flex gap-10  flex-col lg:flex-row'>
        <div className='basis-1/4'>
          <Image
            src={LogoWhite}
            width={200}
            height={44}
            alt='Codewinglet White Logo'
          />
          <Typography variant='subtitle2' className='mt-3'>
            Codewinglet your premier software development squad employing a
            streamlined process ensuring timely project delivery.
          </Typography>
          <div className='mt-10 space-y-6'>
            <address className='not-italic flex items-start  gap-2'>
              <div className='mt-[2px]'>
                <LocationMarkLogo />
              </div>
              <Typography variant='subtitle2'>
                A901-A905, Vivanta Icon Opp. Shell Petrol Pump, Adajan, Surat,
                Gujarat 395009.
              </Typography>
            </address>
            <div className='flex items-start gap-2'>
              <div>
                <TelePhoneLogo />
              </div>
              <Typography variant='subtitle2'>
                <Link href='tel:+918320111741'>+91 83201 11741</Link>
              </Typography>
            </div>
            <div className='flex gap-2'>
              <div className='mt-[2px]'>
                <EmailLogo />
              </div>
              <Typography
                variant='subtitle2'
                className='flex flex-col gap-[5px]'
              >
                <Link
                  href='mailto:hr@codewinglet.com'
                  className='py-[2px] lg:py-auto'
                >
                  hr@codewinglet.com
                </Link>
                <Link
                  href='mailto:contact@codewinglet.com'
                  className='py-[3px] lg:py-auto'
                >
                  contact@codewinglet.com
                </Link>
              </Typography>
            </div>
          </div>

          <div className='flex gap-5 mt-8'>
            <Link
              className='border w-8 h-8 rounded-full flex items-center justify-center'
              href='https://www.facebook.com/CodewingletPvtLtd'
              target='_blank'
              aria-label='Facebook'
            >
              <FacebookLogo />
            </Link>
            <Link
              className='border w-8 h-8 rounded-full flex items-center justify-center'
              href='https://www.instagram.com/codewinglet/'
              target='_blank'
              aria-label='Instagram'
            >
              <InstagramLogo />
            </Link>
            <Link
              className='border w-8 h-8 rounded-full flex items-center justify-center'
              href='https://in.linkedin.com/company/codewinglet'
              target='_blank'
              aria-label='Linkedin'
            >
              <LinkedInLogo />
            </Link>
            <Link
              className='border w-8 h-8 rounded-full flex items-center justify-center'
              href='https://twitter.com/codewinglet'
              target='_blank'
              aria-label='Twitter'
            >
              <TwitterLogo />
            </Link>
          </div>
        </div>
        <div className='basis-1/5'>
          <Typography variant='h4'>Technology</Typography>
          <hr className='mt-4 mb-7' />
          <div className='grid sm:grid-cols-2 lg:grid-cols-1 sm:gap-2 gap-[5px]'>
            {technologyMenu.map((item) => (
              <div key={item.id}>
                <Typography
                  variant='subtitle1'
                  className='leading-7 flex gap-2 items-center'
                >
                  <HighlightArrow color={COLORS.white} />
                  <Link
                    className=' relative after:absolute after:w-0 after:h-[1px] after:left-0 after:bg-white after:bottom-0 after:transition-all hover:after:w-full after:duration-200'
                    href={item.path}
                  >
                    {item.label}
                  </Link>
                </Typography>
              </div>
            ))}
          </div>
        </div>
        <div className='basis-1/2'>
          <Typography variant='h4'>Services</Typography>
          <hr className='mt-4 mb-7' />
          <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-2 gap-[5px]'>
            {serviceMenu.map((item) => (
              <div key={item.id}>
                <Typography
                  variant='subtitle1'
                  className='leading-7 flex gap-2 items-center'
                >
                  <HighlightArrow color={COLORS.white} />
                  <Link
                    className=' relative after:absolute after:w-0 after:h-[1px] after:left-0 after:bg-white after:bottom-0 after:transition-all hover:after:w-full after:duration-200'
                    href={item.path}
                  >
                    {item.label}
                  </Link>
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <hr className='mb-8 mt-10 border-lightBlack' />
    <div className='max-w-screen-xl md:mx-8 xl:mx-auto'>
      <div className='flex justify-between lg:flex-row flex-col'>
        <Typography
          variant='subtitle2'
          className='text-[14px] text-gray text-center'
        >
          © {new Date().getFullYear()} All rights reserved. Codewinglet Pvt.
          Ltd.
        </Typography>
        <ul className='flex gap-7 lg:mt-0 mt-5 justify-center'>
          {companyTermsMenu.map((item) => (
            <li key={item.id}>
              <Typography className='text-[14px] text-gray'>
                <Link
                  className='hover:text-white transition-colors'
                  href={item.path}
                >
                  {item.label}
                </Link>
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);
export default React.memo(Footer);
