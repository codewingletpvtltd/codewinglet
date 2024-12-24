'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import { Button, SectionHeader, Typography } from '@codewinglet/components';

const DreamProject = () => (
  <>
    <div className='bg-black'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto flex'>
        <div className='lg:w-[852px] lg:py-20 md:py-[60px] py-10 md:text-left text-center'>
          <SectionHeader
            title={
              <>Get the developers & perfect solutions for your dream project</>
            }
            description={
              <>
                Lorem ipsum dolor sit amet consectetur. Nunc non pharetra sed
                donec nulla. Pharetra ligula orci enim nibh pretium.
              </>
            }
            headingClassName='text-white lg:!text-h2 md:!text-[36px]'
            descriptionClassName='text-secondary md:!text-subtitle2Light'
          />

          <div className='md:mt-14 mt-[30px]'>
            <Typography className='text-white md:text-paragraph1Light text-tag mb-5'>
              Want to hire :
            </Typography>
            <Button
              className='w-[206px] md:mr-[50px] md:mb-0 mb-2.5'
              variant='secondary'
            >
              <Link href='/contact-us' rel='noopener noreferrer'>
                A developer team
              </Link>
            </Button>
            <Button className='text-white underline' variant='link'>
              <Link
                href='/'
                rel='noopener noreferrer'
                className='flex items-center gap-2.5'
              >
                A Individual developer
                <Arrow className='-rotate-45' />
              </Link>
            </Button>
          </div>
        </div>
        <div className='relative lg:block hidden'>
          <Image
            src='/assets/Service/whiteShade.png'
            alt='whiteShade'
            width={558}
            height={507}
          />
          <Image
            src='/assets/Service/logo.gif'
            alt='logo'
            width={252}
            height={257}
            className='absolute top-1/2 left-1/2 mix-blend-screen transform -translate-x-2/4 -translate-y-2/4'
          />
        </div>
      </div>
    </div>
  </>
);

export default DreamProject;
