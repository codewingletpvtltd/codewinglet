'use client';
import Link from 'next/link';
import {
  FooterSliceIcon,
  FooterTriangleIcon,
  FooterCircleIcon,
} from '@codewinglet/assets';
import Typography from '../Typography';
import ContactSection from './ContactSection';
import ServiceSection from './ServiceSection';
import TechnologySection from './TechnologySection';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='max-w-screen-2xl px-4 py-12 relative mx-auto bg-black text-white font-secondary sm:px-6 lg:px-8'>
      <FooterSliceIcon
        aria-label='footer-slice-icon'
        className='absolute top-[35%] left-[2%] hidden lg:block lg:w-[65px] lg:h-[82px] xl:w-[80px] xl:h-[101px]'
      />
      <section className='w-full flex flex-wrap justify-center gap-4'>
        <div className='w-full flex flex-col px-4 h-fit md:w-[30%] lg:w-1/4 gap-6'>
          <ContactSection />
        </div>
        <div className='w-full h-fit md:w-[30%] lg:w-1/4 md:mt-0 xs:mt-0'>
          <TechnologySection />
        </div>
        <div className='w-full h-fit lg:w-1/4 md:w-[35%] md:mt-0 xs:mt-0'>
          <ServiceSection />
        </div>
      </section>
      <FooterCircleIcon
        aria-label='footer-circle-icon'
        className='absolute top-[3%] right-[3%] xs:top-[revert] xs:bottom-[30%] xs:right-[12%] xs:w-[62px] xs:h-[65px] sm:w-[62px] sm:h-[65px] sm:bottom-[25%] md:w-[80px] md:h-[84px] md:top-[initial] md:bottom-[20%] lg:w-[91px] lg:h-[96px] lg:top-[3%] lg:right-[3%] xl:w-[118px] xl:h-[125px] xl:top-[3%]'
      />
      <FooterTriangleIcon
        aria-label='footer-triangle-icon'
        className='absolute bottom-[25%] hidden right-[5%] lg:block lg:bottom-[25%] lg:right-[5%] lg:w-[60px] lg:h-[79px] xl:w-[87px] xl:h-[115px]'
      />
      <hr className='mt-10 mb-10 w-full opacity-[0.3]' />
      <div className='flex max-w-screen-2xl justify-around xs:flex-col xs:gap-2 md:gap-[24rem] lg:gap-[20rem] sm:gap-[12rem] sm:flex-row '>
        <div>
          <Typography
            variant='subtitle1'
            className='lg:text-subtitle1 xs:text-subtitle2 xs:text-center'
          >
            {`All Rights Reserved ${year}`} &#169; - codewinglet
          </Typography>
        </div>
        <div className='flex gap-x-16 xs:justify-center xs:gap-x-12'>
          <Link
            className='cursor-pointer lg:text-subtitle1 xs:text-subtitle2'
            href=''
          >
            Terms & Conditions
          </Link>
          <Link
            href=''
            className='cursor-pointer lg:text-subtitle1 xs:text-subtitle2'
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
