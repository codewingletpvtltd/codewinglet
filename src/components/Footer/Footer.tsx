/* eslint-disable import/order */
'use client';
import { Arrow } from '@codewinglet/assets';
import { Button, Typography } from '@codewinglet/components';
import Reveal from '@codewinglet/components/Reveal';
import { getClassNames } from '@codewinglet/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
  companyMenu,
  companyTermsMenu,
  serviceMenu,
  technologyMenu,
} from './constants';

type ContactDetail = {
  href?: string;
  text: string;
  isLink?: boolean;
};

const footerTitle = [
  {
    title: 'Services',
    responsiveClass: 'min-h-[1px] lg:w-[30%] md:w-1/2 w-full',
    menu: serviceMenu,
  },
  // {
  //   title: 'Industry',
  //   responsiveClass:
  //     'xl:max-w-[20%] xl:flex-[0_0_20%] lg:max-w-[40%] lg:flex-[0_0_40%] md:max-w-[50%] md:flex-[0_0_50%] sm:max-w-[49%] sm:flex-[0_0_49%] max-w-[100%] flex-[0_0_100%] min-h-[1px] lg:mt-0 md:mt-0 m-0',
  //   menu: industryMenu,
  // },
  {
    title: 'Technology',
    responsiveClass: 'min-h-[1px] lg:w-[22%] md:w-1/2 w-full',
    menu: technologyMenu,
  },
  {
    title: 'Company',
    responsiveClass:
      'min-h-[1px] xl:mt-0 lg:mt-7 md:mt-7 m-0 lg:!w-[23%] md:w-1/2 w-full',
    menu: companyMenu,
  },
];

const socialLinks = [
  {
    href: 'https://in.linkedin.com/company/codewinglet',
    src: '/assets/icons/LinkedInLogo.svg',
    width: 15,
    height: 18,
    alt: 'LinkedInLogo',
  },
  {
    href: 'https://www.instagram.com/codewinglet/',
    src: '/assets/icons/InstagramLogo.svg',
    width: 15,
    height: 18,
    alt: 'InstagramLogo',
  },
  {
    href: 'https://www.facebook.com/codewingletpteltd',
    src: '/assets/icons/FacebookLogo.svg',
    width: 12,
    height: 18,
    alt: 'FacebookLogo',
  },
  {
    href: 'https://twitter.com/codewinglet',
    src: '/assets/icons/TwitterLogo.svg',
    width: 15,
    height: 18,
    alt: 'TwitterLogo',
  },
];

const contacts = [
  {
    type: 'Contact us',
    icon: '/assets/icons/CallIcon.svg',
    details: [
      { href: 'tel:+918160868310', text: '+91 81608 68310 (Jobs)' },
      { href: 'tel:+918320111741', text: '+91 83201 11741 (Inquiry)' },
    ],
  },
  {
    type: 'Email us',
    icon: '/assets/icons/EmailIcon.svg',
    details: [
      { href: 'mailto:jobs@codewinglet.com', text: 'jobs@codewinglet.com' },
      { href: 'mailto:info@codewinglet.com', text: 'info@codewinglet.com' },
      { href: 'mailto:sales@codewinglet.com', text: 'sales@codewinglet.com' },
    ],
  },
  {
    type: 'Address',
    icon: '/assets/icons/LocationIcon.svg',
    details: [
      {
        text: 'A901-905, Vivanta Icon, Opp. Shell Petrol Pump, Adajan, Surat, Gujarat 395009.',
      },
      {
        href: 'https://maps.app.goo.gl/6W7ns2r5VzPFGmkA8',
        text: 'Google map',
        isLink: true,
      },
    ] as ContactDetail[],
  },
];

const Footer = () => {
  const router = useRouter();
  const [expandedOption, setExpandedOption] = useState<number>(-1);
  return (
    <>
      <footer className='bg-black text-white relative xl:py-[60px] md:py-10 md:pt-[60px] py-10'>
        <div className='container'>
          <Reveal>
            <div className='md:mb-20 mb-10 flex justify-between md:items-start sm:items-center items-start flex-col md:flex-col lg:flex-row lg:px-[15px] sm:px-10 px-5'>
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
              <div className='flex lg:items-center relative lg:flex-row flex-col md:gap-0 gap-3.5'>
                <Typography className='md:leading-8 leading-6 lg:text-h6 md:text-h6 text-paragraph2Light 2xl:ml-[150px] xl:ml-[60px] ml-0 lg:border-l border-white lg:pl-2.5'>
                  Have a project in mind but need some guidance? Reach out to us
                </Typography>
                {/* <Link
                  className='sm:w-auto w-full'
                  href='/contact-us'
                  aria-label='Instagram'
                >
                  <Button
                    variant='outline'
                    className='2xl:w-[230px] xl:w-[199px] md:w-[190px] sm:w-[164px] w-[173px] sm:h-14 h-10'
                  >
                    Schedule a meeting
                  </Button>
                </Link> */}
                <Link
                  className='md:w-auto w-full lg:mt-0 md:mt-10 mt-4'
                  href='/contact-us'
                  aria-label='Instagram'
                >
                  <Button
                    variant='outline'
                    className='md:w-[271px] w-[230px] sm:h-14 h-12 gap-2.5'
                  >
                    Schedule a meeting <Arrow />
                  </Button>
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className='md:gap-0 gap-[5px] flex lg:px-[15px] sm:px-[25px] px-5 relative mx-0 flex-wrap '>
              {footerTitle.map((menuItem, index) => (
                <div
                  className={`lg:px-0 px-0 sm:px-[15px] w-full relative ${menuItem.responsiveClass}`}
                  key={menuItem.title}
                >
                  <div className='my-1 sm:hidden' />
                  <Typography
                    className='lg:mb-5 mb-5 flex items-center justify-between lg:text-paragraph1  md:text-subtitle1 text-subtitle2 '
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
                      'flex flex-col gap-1.5 sm:max-h-full max-h-0 overflow-hidden transition-all ease-in-out duration-500 sm:pl-0 pl-4',
                      index === expandedOption ? 'max-h-[566px]' : ''
                    )}
                  >
                    {menuItem.menu.map((item) => (
                      <div key={item.id}>
                        <Typography className='text-paragraph2Light leading-normal mb-3.5 min-h-0 text-lightGray hover:text-white'>
                          <Link className='' href={item?.path}>
                            {item.label}
                          </Link>
                        </Typography>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className='px-0 relative lg:w-1/4 md:w-1/2 w-full min-h-[1px] xl:mt-0 lg:mt-7 md:mt-7 m-0'>
                <Typography className=' mb-5 sm:mt-0 mt-3 lg:text-paragraph1  md:text-subtitle1 text-subtitle2 '>
                  Get in touch
                </Typography>
                <div className='block'>
                  {contacts.map((contact, index) => (
                    <Typography
                      key={index}
                      className='text-paragraph2Light leading-normal mb-5 min-h-0 text-lightGray flex gap-3 items-start'
                    >
                      <Image
                        src={contact.icon}
                        alt={`${contact.type} Icon`}
                        width={18}
                        height={18}
                        className='mt-1'
                      />
                      <div className='flex flex-col gap-1'>
                        <div className='text-white'>{contact.type} :</div>
                        {contact.details.map((detail, detailIndex) =>
                          detail.href ? (
                            <Link
                              key={detailIndex}
                              href={detail.href}
                              className='hover:text-white'
                              target={detail.isLink ? '_blank' : '_self'}
                            >
                              {detail.text}
                            </Link>
                          ) : (
                            <Typography
                              key={detailIndex}
                              className='xl:pr-0 lg:pr-[230px] pr-0'
                            >
                              {detail.text}
                            </Typography>
                          )
                        )}
                      </div>
                    </Typography>
                  ))}
                </div>
                <div className='flex gap-5 lg:mt-7 md:mt-5 mt-5 ml-7'>
                  {socialLinks.map((link, index) => (
                    <Link
                      key={index}
                      className='flex items-center justify-center w-8 h-8 border border-solid border-white rounded-full bg-white'
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
          </Reveal>
        </div>
      </footer>

      <Reveal>
        <div className='lg:gap-0 gap-4 relative text-lightGray border-t border-[#3b3b3b]'>
          <div className='container flex flex-col sm:flex-row items-start sm:justify-between justify-start lg:px-3.5 sm:p-10 sm:py-3.5 p-5 md:gap-0 gap-1'>
            <Typography className='text-left lg:text-paragraph2Light text-tagLight'>
              All rights reserved © {new Date().getFullYear()} - Codewinglet{' '}
              <span className='lg:inline-block hidden'>Private Limited</span>
            </Typography>
            <ul className='flex'>
              {companyTermsMenu.map((item) => (
                <li
                  key={item.id}
                  className='first:border-r first:pr-6 last:pl-6'
                >
                  <Typography className='lg:text-paragraph2Light text-tagLight'>
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
