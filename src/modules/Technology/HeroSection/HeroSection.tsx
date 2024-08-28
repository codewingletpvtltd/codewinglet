/* eslint-disable import/order */
'use client';

import { Arrow } from '@codewinglet/assets';
import { Button, Typography } from '@codewinglet/components';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import { techName } from './utils';

const HeroSection = () => (
  <>
    <div
      className='bg-black md:pt-[328px] pt-[136px] overflow-hidden relative'
      id='angular'
    >
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto flex gap-[50px] pb-[60px]'>
        <div className='mt-[50px] relative w-[612px]'>
          <SectionHeader
            title={<>The best AngularJS development company</>}
            description={
              <>
                Are you ready to elevate your online presence and captivate your
                audience with high-performance websites and applications?
                <br /> <br />
                Look no further than our Angular Frontend Framework development
                services.
              </>
            }
            headingClassName='text-white'
            descriptionClassName='text-white pt-6'
          />
          <Button className='text-white underline mt-[60px]' variant='link'>
            <Link
              href='/contact-us'
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-3'
            >
              Explore blogs
              <Arrow />
            </Link>
          </Button>
        </div>
        <div className='w-[748px]'>
          <Image
            src='/assets/Technologies/pages/hero.jpg'
            alt='hero'
            width={748}
            height={541}
          />
        </div>
      </div>
      <div className='bg-primary w-fit py-10 px-9 border-t-[3px] border-white 2xl:ml-[260px] ml-[95px] relative z-[2]'>
        <Image
          src='/assets/Technologies/pages/angular.svg'
          alt='angular'
          width={94}
          height={94}
          className='mx-auto'
        />
        <Typography className='text-h6 text-white'>Angular JS</Typography>
      </div>
      <div className='flex shrink-0 marquee absolute bottom-[50px] py-[30px] border-y border-primary'>
        {techName.map((tech) => (
          <div key={tech.id} className='flex shrink-0 w-auto'>
            <Typography className='text-white text-h2 technology-hero font-semibold'>
              {tech.title}
            </Typography>
            <Image
              alt={tech.alt}
              src={tech.image}
              width={34}
              height={34}
              className='mx-[50px]'
            />
          </div>
        ))}
      </div>
    </div>
  </>
);

export default HeroSection;
