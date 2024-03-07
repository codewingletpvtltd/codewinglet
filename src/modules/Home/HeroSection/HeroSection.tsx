'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button, TypeAnimation, Typography } from '@codewinglet/components';
import './herosection.css';
import { techList } from './utils';

const sequence = ['EdTech', 'E-Commerce', 'Healthcare', 'Real Estate', 'CRM'];

const HeroSection = () => (
  <div className='relative bg-transparent mb-0 h-[calc(100vh-78px)] mt-[78px] flex flex-col justify-between hero'>
    <div className='box'>
      <span style={{ animationDelay: '1s' }}></span>
      <span style={{ animationDelay: '2s' }}></span>
      <span style={{ animationDelay: '3s' }}></span>
      <span style={{ animationDelay: '4s' }}></span>
      <span style={{ animationDelay: '5s' }}></span>
      <span style={{ animationDelay: '6s' }}></span>
    </div>

    <div className='max-w-[1410px] md:px-[15px] sm:px-[30px] px-[15px] mx-auto w-full m-auto'>
      <div className='xl:px-20 lg:px-[120px] md:px-14 sm:px-0 px-0'>
        <Typography className='xl:text-h1 text-subtitle2 text-center text-white'>
          Your Trusted Software Development Partner - Crafting Innovative
          Solutions for
        </Typography>

        <TypeAnimation
          sequence={sequence}
          className='text-center text-white xl:text-h1 text-subtitle2'
        />

        <Typography className='xl:px-20 lg:text-subtitle2Light text-tagLight text-center text-white 2xl:mt-5 2xl:mb-14 xl:mt-[50px] xl:mb-10 md:px-0 sm:px-0 px-0 mt-5 mb-[120px]'>
          Elevate your business's efficiency and profitability with
          Codewinglet's advanced software solutions. Book your consultation
          today for digital transformation and success.
        </Typography>

        <Button
          variant='outline'
          className='2xl:w-[332px] xl:w-[229px] w-[203px] block m-auto'
        >
          <Link
            href='#'
            rel='noopener noreferrer'
            target='_blank'
            className='flex items-center justify-center gap-3'
          >
            Book a meeting
            <Image
              src={'/assets/icons/Arrow.svg'}
              alt='Arrow'
              width={16}
              height={16}
            />
          </Link>
        </Button>
      </div>
    </div>
    <div className='overflow-hidden'>
      <div className='py-8 flex shrink-0 gap-10 sm:gap-20 marquee'>
        {techList.map((tech) => (
          <div key={tech.id} className='flex shrink-0 w-auto'>
            <Image
              alt={tech.alt}
              src={tech.image}
              className='sm:h-[30px] h-[24px] w-auto'
              height={30}
              width={24}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default HeroSection;
