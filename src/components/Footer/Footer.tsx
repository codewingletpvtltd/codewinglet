import React from 'react';
import Typography from '../Typography';
import ContactSection from './Components/ContactSection';
import { FooterProps } from './types';

const Footer: React.FC<FooterProps> = ({}) => (
  <footer className='px-4 py-12 mx-auto max-w-full max-h-[671px] overflow-scroll bg-black text-white font-secondary sm:px-6 lg:px-8'>
    <section className='w-full flex flex-wrap justify-end gap-8'>
      <div className='w-full flex flex-col px-4 md:w-[30%] lg:w-1/4 gap-6'>
        <ContactSection />
      </div>
      {/* -------------------------------------------------- */}
      <div className='w-full px-4 mt-12 md:w-[30%] lg:w-1/4 md:mt-0'>
        <h5 className='text-xl font-semibold text-gray-700'>Support</h5>
        <ul className='mt-4 leading-6'>
          <li>
            <a href='#' className='text-gray-600 hover:text-gray-900'>
              Help Center
            </a>
          </li>
          <li>
            <a href='#' className='text-gray-600 hover:text-gray-900'>
              Terms of Service
            </a>
          </li>
          <li>
            <a href='#' className='text-gray-600 hover:text-gray-900'>
              Legal
            </a>
          </li>
        </ul>
      </div>
      {/* ---------------------------------------------------------- */}
      <div className='w-full px-4 mt-12 lg:w-1/4 md:w-[30%] md:mt-0'>
        <h5 className='text-xl font-semibold text-gray-700'>Community</h5>
        <ul className='mt-4 leading-6'>
          <li>
            <a href='#' className='text-gray-600 hover:text-gray-900'>
              Blog
            </a>
          </li>
          <li>
            <a href='#' className='text-gray-600 hover:text-gray-900'>
              Forums
            </a>
          </li>
          <li>
            <a href='#' className='text-gray-600 hover:text-gray-900'>
              Guidelines
            </a>
          </li>
        </ul>
      </div>
    </section>
    <hr className='mt-10 mb-10 w-full opacity-[0.3]' />
    <div className='flex justify-center w-full'>
      <div className='flex xs:flex-wrap xs:gap-y-4 justify-between gap-x-96'>
        <div>
          <Typography variant='subtitle1'>
            All Rights Reserved 2023 &#169; - codewinglet
          </Typography>
        </div>
        <div className='flex xs:flex-wrap gap-x-16'>
          <Typography className='cursor-pointer' variant='subtitle1'>
            Terms & Conditions
          </Typography>
          <Typography className='cursor-pointer' variant='subtitle1'>
            Privacy Policy
          </Typography>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
