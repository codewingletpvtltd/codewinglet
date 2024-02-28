'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Image from 'next/image';
import { Button, Typography } from '@codewinglet/components';
import { getClassNames } from '@codewinglet/utils';
import {
  companyTermsMenu,
  serviceMenu,
  industryMenu,
  technologyMenu,
  companyMenu,
} from './constants';

const footerTitle = [
  {
    title: 'Services',
    responsiveClass:
      'xl:max-w-[25%] xl:flex-[0_0_25%] lg:max-w-[40%] lg:flex-[0_0_40%] md:max-w-[50%] md:flex-[0_0_50%] sm:max-w-[49%] sm:flex-[49%] max-w-[100%] flex-[0_0_100%] min-h-[1px]',
    menu: serviceMenu,
  },
  {
    title: 'Industry',
    responsiveClass:
      'xl:max-w-[20%] xl:flex-[0_0_20%] lg:max-w-[40%] lg:flex-[0_0_40%] md:max-w-[50%] md:flex-[0_0_50%] sm:max-w-[49%] sm:flex-[0_0_49%] max-w-[100%] flex-[0_0_100%] min-h-[1px] lg:mt-0 md:mt-0 m-0',
    menu: industryMenu,
  },
  {
    title: 'Technology',
    responsiveClass:
      'doubleXl:max-w-[20%] doubleXl:flex-[0_0_20%] xl:max-w-[17%] xl:flex-[0_0_17%] px-[15px] w-full relative lg:max-w-[20%] lg:flex-[0_0_20%] md:max-w-[50%] md:flex-[0_0_50%] sm:max-w-[49%] sm:flex-[49%] max-w-[100%] flex-[0_0_100%] min-h-[1px] lg:mt-0 md:mt-7 m-0',
    menu: technologyMenu,
  },
  {
    title: 'Company',
    responsiveClass:
      'xl:max-w-[15%] xl:flex-[0_0_15%] lg:max-w-[40%] lg:flex-[0_0_40%] md:max-w-[50%] md:flex-[0_0_49%] sm:max-w-[49%] sm:flex-[0_0_100%] max-w-[100%] flex-[0_0_100%] min-h-[1px] xl:mt-0 lg:mt-7 md:mt-7 m-0',
    menu: companyMenu,
  },
];

const Footer = () => {
  const router = useRouter();
  const [expandedOption, setExpandedOption] = useState<number>(-1);
  return (
    <>
      <footer className='bg-black text-white relative xl:py-[60px] md:py-[40px] py-[30px]'>
        <div className='container'>
          <div className='md:mb-16 mb-10 flex justify-between items-center flex-col md:flex-col lg:flex-row lg:px-[15px] sm:px-[30px] px-[15px]'>
            <Image
              src={'/assets/icons/LogoWhite.svg'}
              width={100}
              height={100}
              alt='Codewinglet White Logo'
              className='w-[253px] sm:[w-191px] xl:w-[252px] cursor-pointer'
              onClick={() => router.push('/')}
              loading='eager'
            />
            <hr className='lg:hidden block w-full border-[#575757] my-7' />
            <div className='flex items-center relative flex-col sm:flex-row md:gap-0 gap-3.5'>
              <Typography className='footerTitle 2xl:text-h4 xl:text-h4 lg:text-body1 md:text-body2 text-body2 font-300 2xl:pl-[260px] xl:pl-[180px] pl-0 relative md:after:content lg:after:block after:hidden after:absolute 2xl:after:left-60 xl:after:left-40 after:top-2 after:bg-white after:w-[0.1rem] 2xl:after:h-[3.5rem] 2xl:h-[3.5rem] xl:h-[3rem] lg:after:h-[3.6rem] after:h-[3.5rem]'>
                Do you want to talk more about the project? Reach out to us
              </Typography>
              <Link
                className='sm:w-auto w-full'
                href='https://calendly.com/slapani'
                target='_blank'
                aria-label='Instagram'
              >
                <Button className='2xl:w-[230px] xl:w-[199px] md:w-[190px] sm:w-[164px] w-full h-[56px]'>
                  Schedule a call
                </Button>
              </Link>
            </div>
          </div>
          <div className='md:gap-0 gap-[10px] flex px-[15px] relative  mx-0 flex-wrap '>
            {footerTitle.map((menuItem, index) => (
              <div
                className={`px-[15px] w-full relative ${menuItem.responsiveClass}`}
                key={menuItem.title}
              >
                <div className='my-1 sm:hidden' />
                <Typography
                  className='lg:mb-[20px] mb-[20px] flex items-center justify-between sm:text-h6 text-body2 font-400'
                  onClick={() =>
                    setExpandedOption((prev) =>
                      prev === -1 || prev !== index ? index : -1
                    )
                  }
                >
                  {menuItem.title}
                  <Button
                    className={getClassNames(
                      'w-auto h-6 sm:hidden transition-all ease-in-out duration-500 border-none m-[initial]',
                      index === expandedOption ? '-rotate-180' : ''
                    )}
                  >
                    <Image
                      src={'/assets/icons/DownArrows.svg'}
                      width={12}
                      height={18}
                      alt='DownArrows'
                    />
                  </Button>
                </Typography>
                <div
                  className={getClassNames(
                    'flex flex-col gap-[6px] sm:max-h-full max-h-0 overflow-hidden transition-all ease-in-out duration-500 sm:pl-0 pl-4',
                    index === expandedOption ? 'max-h-[566px]' : ''
                  )}
                >
                  {menuItem.menu.map((item) => (
                    <div key={item.id}>
                      <Typography
                        variant='subtitle1'
                        className=' leading-normal mb-3.5 min-h-0 text-silver hover:text-white'
                      >
                        <Link className='' href={item.path}>
                          {item.label}
                        </Link>
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className='px-[15px] w-full relative doubleXl:max-w-[20%] doubleXl:flex-[0_0_20%] xl:max-w-[23%] xl:flex-[0_0_23%] lg:max-w-[60%] lg:flex-[0_0_60%] md:max-w-[50%] md:flex-[0_0_50%] sm:max-w-[100%] sm:flex-[0_0_100%] max-w-[100%] flex-[0_0_100%] min-h-[1px] xl:mt-0 lg:mt-7 md:mt-7 m-0'>
              <Typography className=' mb-[20px] sm:mt-0 mt-3 sm:text-h6 text-body2 font-400'>
                Get in touch
              </Typography>
              <div className='md:block sm:grid sm:grid-cols-2 block'>
                <Typography
                  variant='subtitle1'
                  className='leading-normal mb-3.5 min-h-0 text-silver flex gap-3 items-start'
                >
                  <Image
                    src={'/assets/icons/CallIcon.svg'}
                    alt='CallIcon'
                    width={18}
                    height={18}
                    className='mt-1'
                  />
                  <div className='flex flex-col'>
                    <div>Contact us :</div>
                    <Link href='tel:+918320111741'>+91 83201 11741 (Jobs)</Link>
                  </div>
                </Typography>

                <Typography
                  variant='subtitle1'
                  className=' leading-normal mb-3.5 min-h-0 text-silver flex gap-3 items-start'
                >
                  <Image
                    src={'/assets/icons/EmailIcon.svg'}
                    alt='EmailIcon'
                    width={18}
                    height={18}
                    className='mt-1'
                  />
                  <div className='flex flex-col'>
                    <div>Email us on :</div>
                    <Link href='mailto:jobs@codewinglet.com'>
                      jobs@codewinglet.com
                    </Link>
                    <Link href='mailto:Info@codewinglet.com'>
                      Info@codewinglet.com
                    </Link>
                    <Link href='mailto:sales@codewinglet.com'>
                      sales@codewinglet.com
                    </Link>
                  </div>
                </Typography>

                <Typography
                  variant='subtitle1'
                  className='address leading-normal mb-3.5 min-h-0 text-silver flex gap-3 md:mt-0 sm:mt-[-35px] mt-0 items-start'
                >
                  <Image
                    src={'/assets/icons/LocationIcon.svg'}
                    alt='LocationIcon'
                    width={18}
                    height={18}
                    className='mt-1'
                  />
                  <div className='flex flex-col'>
                    <div>Address :</div>
                    <Typography className='xl:pr-0 lg:pr-[230px] pr-0'>
                      A901-905, Vivanta Icon Opp. Shell Petrol Pump, Adajan,
                      Surat, Gujarat 395009.
                    </Typography>
                  </div>
                </Typography>
              </div>
              <div className='flex gap-5 lg:mt-7 md:mt-7 mt-7 ml-[22px]'>
                <Link
                  className='flex items-center justify-center w-8 h-8 border border-solid border-white rounded-full bg-white'
                  href='https://in.linkedin.com/company/codewinglet'
                  target='_blank'
                  aria-label='Linkedin'
                >
                  <Image
                    src={'/assets/icons/LinkedInLogo.svg'}
                    width={15}
                    height={18}
                    alt='LinkedInLogo'
                  />
                </Link>
                <Link
                  className='flex items-center justify-center w-8 h-8 border border-solid border-white rounded-full bg-white'
                  href='https://www.instagram.com/codewinglet/'
                  target='_blank'
                  aria-label='Instagram'
                >
                  <Image
                    src={'/assets/icons/InstagramLogo.svg'}
                    width={15}
                    height={18}
                    alt='InstagramLogo'
                  />
                </Link>
                <Link
                  className='flex items-center justify-center w-8 h-8 border border-solid border-white rounded-full bg-white'
                  href='https://www.facebook.com/codewingletpteltd'
                  target='_blank'
                  aria-label='Facebook'
                >
                  <Image
                    src={'/assets/icons/FacebookLogo.svg'}
                    width={12}
                    height={18}
                    alt='FacebookLogo'
                  />
                </Link>
                <Link
                  className='flex items-center justify-center w-8 h-8 border border-solid border-white rounded-full bg-white'
                  href='https://twitter.com/codewinglet'
                  target='_blank'
                  aria-label='Twitter'
                >
                  <Image
                    src={'/assets/icons/TwitterLogo.svg'}
                    width={15}
                    height={18}
                    alt='TwitterLogo'
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className='lg:gap-0 gap-4 relative bg-white'>
        <div className='container flex flex-col sm:flex-row items-center sm:justify-between justify-center p-3.5 md:gap-0 gap-2.5'>
          <Typography className='sm:text-left text-center md:text-subtitle1 sm:text-[14px] text-subtitle1 font-300'>
            © {new Date().getFullYear()} All rights reserved. Codewinglet
          </Typography>
          <ul className='flex md:gap-12 sm:gap-6 gap-12'>
            {companyTermsMenu.map((item) => (
              <li key={item.id}>
                <Typography className='md:text-subtitle1 sm:text-[14px] text-subtitle1 font-300'>
                  <Link href={item.path}>{item.label}</Link>
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default React.memo(Footer);
