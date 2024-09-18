/* eslint-disable import/order */
import { Arrow } from '@codewinglet/assets';
import { Button, SectionHeader, Typography } from '@codewinglet/components';
import Image from 'next/image';
import Link from 'next/link';

const OurTeam = () => (
  <div className='bg-bg lg:py-20 md:py-[60px] py-10 scroll-mt-56' id='employee'>
    <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto flex lg:flex-row flex-col lg:gap-[100px] gap-10 lg:items-center'>
      <div className='flex flex-col justify-between lg:order-1 order-2'>
        <div className='bg-white lg:px-[74px] md:px-[50px] px-5 lg:py-[85px] md:py-[70px] py-[30px] lg:mx-0 mx-5 2xl:w-[624px] lg:w-[592px] w-auto lg:h-[743px] relative flex flex-col justify-between'>
          {/* First */}
          <div className='flex md:items-center justify-between'>
            <div>
              <Typography className='md:text-subtitle2Light text-tagLight font-playFair'>
                The service was amazing. I never <br /> had to wait that long
                for my food.
              </Typography>
              <Typography className='md:text-paragraph2 text-tag md:pt-4 pt-3 font-semibold'>
                John Carter
                <span className='text-secondary md:text-tagLight text-tagExtraLight md:pl-2.5 md:inline block'>
                  Software developer
                </span>
              </Typography>
            </div>
            <div>
              <Image
                src='/assets/career/team.png'
                alt='team'
                width={80}
                height={80}
                className='md:w-20 w-[45px] md:h-20 h-[45px]'
              />
            </div>
          </div>
          {/* second */}
          <div className='flex md:items-center justify-between bg-white border border-headerBoxBorder md:p-10 p-5 lg:absolute top-[262px] left-[104px] 2xl:w-[574px] lg:w-[542px] w-full lg:my-0 md:my-[50px] my-[30px]'>
            <div>
              <Image
                src='/assets/career/quote.svg'
                alt='quote'
                width={27}
                height={24}
                className='md:block hidden'
              />
              <Typography className='md:text-subtitle2Light text-tagLight font-playFair md:mt-2 md:w-80 w-[200px]'>
                The service was amazing. I never{' '}
                <br className='md:block hidden' /> had to wait that long for my
                food.
              </Typography>
              <Typography className='md:text-paragraph2 text-tag md:pt-4 pt-3 font-semibold md:flex'>
                John Carter
                <span className='text-secondary md:text-tagLight text-tagExtraLight md:pl-2.5 mr-auto block'>
                  Software developer
                </span>
                <Image
                  src='/assets/career/quote.svg'
                  alt='quote'
                  width={27}
                  height={24}
                  className='rotate-180 md:block hidden'
                />
              </Typography>
            </div>
            <div>
              <Image
                src='/assets/career/team.png'
                alt='team'
                width={80}
                height={80}
                className='md:w-20 w-[45px] md:h-20 h-[45px]'
              />
            </div>
          </div>
          {/* Third */}
          <div className='flex md:items-center justify-between'>
            <div>
              <Typography className='md:text-subtitle2Light text-tagLight font-playFair'>
                The service was amazing. I never <br /> had to wait that long
                for my food.
              </Typography>
              <Typography className='md:text-paragraph2 text-tag md:pt-4 pt-3 font-semibold'>
                John Carter
                <span className='text-secondary md:text-tagLight text-tagExtraLight md:pl-2.5 md:inline block'>
                  Software developer
                </span>
              </Typography>
            </div>
            <div>
              <Image
                src='/assets/career/team.png'
                alt='team'
                width={80}
                height={80}
                className='md:w-20 w-[45px] md:h-20 h-[45px]'
              />
            </div>
          </div>
        </div>

        <Button
          className='md:w-[278px] w-[230px] py-[13px] !mt-10 border-primary border hover:border-primary hover:border lg:hidden block m-[0_auto]'
          variant='default'
        >
          <Link
            href='/contact-us'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-3'
          >
            Explore Opportunities
            <Arrow />
          </Link>
        </Button>
      </div>
      <div className='lg:order-2 order-1'>
        <SectionHeader
          title={
            <>
              Insights Straight from <span className='lg:block'>Our Team</span>
            </>
          }
          description='Gain Valuable Insights Directly from the Voices of Our Talented and Dedicated Members.'
          descriptionClassName='text-secondary'
          headingClassName=''
        />
        <Button
          className='w-[320px] md:mt-[70px] mt-16 border-primary border hover:border-primary hover:border lg:block hidden !py-[13px]'
          variant='default'
        >
          <Link
            href='/contact-us'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-3'
          >
            Explore Opportunities
            <Arrow />
          </Link>
        </Button>
      </div>
    </div>
  </div>
);

export default OurTeam;
