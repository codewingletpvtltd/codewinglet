'use client';
import Image from 'next/image';
import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import { Button, TypeAnimation, Typography } from '@codewinglet/components';
import Reveal from '@codewinglet/components/Reveal';

import './herosection.css';
import { techList } from './utils';

const sequence = [
  'IT Consulting',
  'Web application development',
  'Mobile application development',
  'Custom software development',
  'Internet of Things (IoT) ',
  'Artificial Intelligence',
  'DevOps',
  'Cloud Engineering',
  'UI/UX  Development',
  'QA & Testing Service',
  'Staff Augmentation',
  'Support & Maintenance',
];

const HeroSection = () => (
  <div className='relative bg-transparent mb-0 md:h-[calc(100vh-156px)] h-[calc(100vh-170px)] md:mt-[106px] mt-20 flex flex-col justify-between hero'>
    <div className='box'>
      <span style={{ animationDelay: '1s' }}></span>
      <span style={{ animationDelay: '2s' }}></span>
      <span style={{ animationDelay: '3s' }}></span>
      <span style={{ animationDelay: '4s' }}></span>
      <span style={{ animationDelay: '5s' }}></span>
      <span style={{ animationDelay: '6s' }}></span>
    </div>

    <div className='max-w-[1410px] md:px-[15px] sm:px-[30px] px-[15px] mx-auto w-full m-auto'>
      <div className='xl:px-20 lg:px-[120px] md:px-10 sm:px-0 px-0'>
        <Reveal>
          <Typography className='lg:text-h1 md:text-h2 text-subtitle2 text-center text-white lg:leading-[84px] md:leading-[62px] leading-[30px]'>
            Your Trusted Software Development Partner - Crafting Innovative
            Solutions for
          </Typography>
        </Reveal>

        <Reveal>
          <div>
            <TypeAnimation
              sequence={sequence}
              className='text-center text-white lg:text-h1 md:text-h2 text-subtitle2'
            />
          </div>
        </Reveal>

        <Reveal>
          <div className='xl:px-20 lg:text-subtitle2Light md:text-subtitle2Light text-tagLight text-center text-white 2xl:mt-5 2xl:mb-14 xl:mt-5 xl:mb-10 md:px-0 sm:px-0 px-0 mt-5 mb-14'>
            Upgrade your business efficiency and profitability with
            Codewinglet's advanced software solutions. Book your consultation
            today for digital transformation and success.
          </div>
        </Reveal>

        <Button
          variant='outline'
          className='xl:w-[250px] md:w-[229px] w-[203px] block m-auto'
        >
          <Link
            href='/contact-us'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-3 md:text-paragraph1 text-paragraph2'
          >
            Book a meeting
            <Arrow />
          </Link>
        </Button>
      </div>
    </div>
    <div className='overflow-hidden md:relative absolute md:bottom-0 bottom-10 w-full flex gap-10'>
      <div className='py-8 flex shrink-0 gap-10 sm:gap-20 marquee'>
        {techList.map((tech) => (
          <div key={tech.id} className='flex shrink-0 w-auto'>
            <Image
              alt={tech.alt}
              src={tech.image}
              className='sm:h-[30px] h-6 w-auto'
              height={30}
              width={24}
            />
          </div>
        ))}
      </div>
      <div className='py-8 flex shrink-0 gap-10 sm:gap-20 marquee'>
        {techList.map((tech) => (
          <div key={tech.id} className='flex shrink-0 w-auto'>
            <Image
              alt={tech.alt}
              src={tech.image}
              className='sm:h-[30px] h-6 w-auto'
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
