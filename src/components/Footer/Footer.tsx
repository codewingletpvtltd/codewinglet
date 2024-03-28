'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { Button, Typography } from '@codewinglet/components';
import { Arrow } from '@codewinglet/assets';
import { getClassNames } from '@codewinglet/utils';
import { Reveal } from '@codewinglet/modules/Reveal';
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
      <footer className='bg-black text-white relative xl:py-[60px] md:py-[40px] md:pt-[60px] py-[30px]'>
        <div className='container'>
          <Reveal>
            <div className='md:mb-[50px] mb-10 flex justify-between md:items-start sm:items-center items-start flex-col md:flex-col lg:flex-row lg:px-[15px] sm:px-[40px] px-[20px]'>
              <Image
                src={'/assets/icons/LogoWhite.svg'}
                width={100}
                height={100}
                alt='Codewinglet White Logo'
                className='w-[253px] sm:[w-191px] xl:w-[252px] cursor-pointer'
                onClick={() => router.push('/')}
                loading='eager'
              />
              <hr className='lg:hidden block w-full border-[#575757] md:my-10 my-5' />
              <div className='flex items-center relative flex-col sm:flex-row md:gap-0 gap-3.5'>
                <Typography className='footerTitle lg:text-h5 md:text-subtitle2 leading-[1.4] text-paragraph2Light 2xl:pl-[190px] xl:pl-[230px] pl-0 relative md:after:content lg:after:block after:hidden after:absolute 2xl:after:left-40 xl:after:left-52 after:top-2 after:bg-white after:w-[0.1rem] 2xl:after:h-[3.5rem] 2xl:h-[3.5rem] xl:h-[3rem] lg:after:h-[3.6rem] after:h-[3.5rem]'>
                  Have a project in mind but need some guidance? Reach out to us
                </Typography>
                <Link
                  className='sm:w-auto w-full'
                  href='/contact-us'
                  aria-label='Instagram'
                >
                  <Button
                    variant='outline'
                    className='2xl:w-[230px] xl:w-[199px] md:w-[190px] sm:w-[164px] w-[173px] sm:h-[56px] h-[40px]'
                  >
                    Schedule a call
                  </Button>
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className='md:gap-0 gap-[5px] flex lg:px-[15px] sm:px-[25px] px-[15px] relative mx-0 flex-wrap '>
              {footerTitle.map((menuItem, index) => (
                <div
                  className={`lg:px-0 px-[15px] sm:px-[15px] w-full relative ${menuItem.responsiveClass}`}
                  key={menuItem.title}
                >
                  <div className='my-1 sm:hidden' />
                  <Typography
                    className='lg:mb-[20px] mb-[20px] flex items-center justify-between lg:text-paragraph1  md:text-subtitle1 text-subtitle2 '
                    onClick={() =>
                      setExpandedOption((prev) =>
                        prev === -1 || prev !== index ? index : -1
                      )
                    }
                  >
                    {menuItem.title}
                    <Button
                      className={getClassNames(
                        'w-auto h-6 sm:hidden transition-all ease-in-out duration-500 border-none m-[initial] !bg-black !hover:bg-black !px-0',
                        index === expandedOption ? '-rotate-180' : ''
                      )}
                    >
                      <Image
                        src={'/assets/icons/DownArrows.svg'}
                        width={18}
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
                        <Typography className='text-paragraph2Light leading-normal mb-3.5 min-h-0 text-placeholderText hover:text-white'>
                          <Link className='' href={item?.path}>
                            {item.label}
                          </Link>
                        </Typography>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className='px-[15px] w-full relative doubleXl:max-w-[20%] doubleXl:flex-[0_0_20%] xl:max-w-[23%] xl:flex-[0_0_23%] lg:max-w-[60%] lg:flex-[0_0_60%]  sm:max-w-[100%] sm:flex-[0_0_100%] max-w-[100%] flex-[0_0_100%] min-h-[1px] xl:mt-0 lg:mt-7 md:mt-7 m-0'>
                <Typography className=' mb-[20px] sm:mt-0 mt-3 lg:text-paragraph1  md:text-subtitle1 text-subtitle2 '>
                  Get in touch
                </Typography>
                <div className='lg:block md:grid md:grid-cols-2 block'>
                  <Typography className='text-paragraph2Light leading-normal mb-5 min-h-0 text-placeholderText flex gap-3 items-start lg:order-1 md:order-2'>
                    <Image
                      src={'/assets/icons/CallIcon.svg'}
                      alt='CallIcon'
                      width={18}
                      height={18}
                      className='mt-1'
                    />
                    <div className='flex flex-col gap-[4px]'>
                      <div className='text-white'>Contact us :</div>
                      <Link
                        href='tel:+918160868310'
                        className='hover:text-white'
                      >
                        +91 81608 68310 (Jobs)
                      </Link>
                      <Link
                        href='tel:+918320111741'
                        className='hover:text-white'
                      >
                        +91 83201 11741 (Inquiry)
                      </Link>
                    </div>
                  </Typography>

                  <Typography className='text-paragraph2Light leading-normal lg:mb-3.5 mb-5 min-h-0 text-placeholderText flex gap-3 items-start lg:order-2 md:order-1'>
                    <Image
                      src={'/assets/icons/EmailIcon.svg'}
                      alt='EmailIcon'
                      width={18}
                      height={18}
                      className='mt-1'
                    />
                    <div className='flex flex-col gap-[4px]'>
                      <div className='text-white'>Email us :</div>
                      <Link
                        href='mailto:jobs@codewinglet.com'
                        className='hover:text-white'
                      >
                        jobs@codewinglet.com
                      </Link>
                      <Link
                        href='mailto:info@codewinglet.com'
                        className='hover:text-white'
                      >
                        info@codewinglet.com
                      </Link>
                      <Link
                        href='mailto:sales@codewinglet.com'
                        className='hover:text-white'
                      >
                        sales@codewinglet.com
                      </Link>
                    </div>
                  </Typography>

                  <Typography className='address text-paragraph2Light leading-normal mb-5 min-h-0 text-placeholderText flex gap-3 md:mt-0 sm:mt-[-35px] mt-0 items-start order-3'>
                    <Image
                      src={'/assets/icons/LocationIcon.svg'}
                      alt='LocationIcon'
                      width={18}
                      height={18}
                      className='mt-1 md:w-[37]'
                    />
                    <div className='flex flex-col'>
                      <div className='text-white'>Address :</div>
                      <Typography className='xl:pr-0 lg:pr-[230px] pr-0'>
                        A901-905, Vivanta Icon, Opp. Shell Petrol Pump, Adajan,
                        Surat, Gujarat 395009.
                      </Typography>
                      <div className='flex group cursor-pointer text-white mt-[10px] items-center group'>
                        <Link
                          href='https://maps.app.goo.gl/6W7ns2r5VzPFGmkA8'
                          target='_blank'
                          className='text-paragraph2Light underline'
                        >
                          Google map
                        </Link>
                        <Arrow className='group-hover:transition-all duration-700 group-hover:translate-x-1' />
                      </div>
                    </div>
                  </Typography>
                </div>
                <div className='flex gap-5 lg:mt-7 md:mt-7 mt-7 ml-7'>
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
          </Reveal>
        </div>
      </footer>

      <Reveal>
        <div className='lg:gap-0 gap-4 relative text-placeholderText border-t border-secondary'>
          <div className='container flex flex-col sm:flex-row items-start sm:justify-between justify-start lg:px-3.5 sm:p-10 sm:py-3.5 p-5 md:gap-0 gap-1'>
            <Typography className='sm:text-left text-left md:text-paragraph2Light sm:text-[14px] text-tagLight'>
              © {new Date().getFullYear()} All rights reserved. Codewinglet
            </Typography>
            <ul className='flex md:gap-6 sm:gap-6 gap-12'>
              {companyTermsMenu.map((item) => (
                <li key={item.id}>
                  <Typography className='md:text-paragraph2Light sm:text-[14px] text-tagLight'>
                    <Link className='hover:text-white' href={item.path}>
                      {item.label}
                    </Link>
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </>
  );
};
export default Footer;
