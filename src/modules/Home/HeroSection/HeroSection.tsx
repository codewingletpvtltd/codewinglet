'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button, TypeAnimation, Typography } from '@codewinglet/components';
import { Arrow } from '@codewinglet/assets';
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
      <div className='xl:px-[130px] lg:px-[120px] md:px-14 sm:px-0 px-0'>
        <Typography className='xl:text-h1 md:text-[36px] sm:text-[36px] text-h6 !font-300 text-center text-white leading-[1.2]'>
          Your Trusted Custom Software Development Partner - Crafting Innovative
          Solutions for{' '}
        </Typography>

        <TypeAnimation
          sequence={sequence}
          className='text-center text-white xl:text-h1 md:text-[42px] sm:text-[37px] text-h6 !font-300'
        />

        <Typography className='xl:px-10 p-0 lg:text-h5 md:text-[18px] sm:text-subtitle1 text-[14px] sm:font-300 font-200 text-center my-[60px] text-white md:px-0 sm:px-[0px] px-0'>
          Elevate your business's efficiency and profitability with
          Codewinglet's advanced software solutions. Book your consultation
          today for digital transformation and success.
        </Typography>

        <Button link className=' w-[222px]'>
          <Link
            href='#'
            rel='noopener noreferrer'
            target='_blank'
            className='flex items-center justify-center gap-3'
          >
            Book a meeting <Arrow />
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
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default HeroSection;
