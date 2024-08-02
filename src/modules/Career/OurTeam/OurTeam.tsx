/* eslint-disable import/order */
import { Arrow } from '@codewinglet/assets';
import { Button, SectionHeader, Typography } from '@codewinglet/components';
import Image from 'next/image';
import Link from 'next/link';

const OurTeam = () => (
  <div className='bg-white sm:py-20 py-[30px]'>
    <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto flex gap-[100px] items-center'>
      <div className='bg-bg px-[74px] py-[85px] w-[743px] h-[743px] relative flex flex-col justify-between'>
        {/* First */}
        <div className='flex items-center justify-between'>
          <div>
            <Typography className='text-subtitle2Light font-playFair'>
              The service was amazing. I never <br /> had to wait that long for
              my food.
            </Typography>
            <Typography className='text-paragraph2 pt-4 font-semibold'>
              John Carter
              <span className='text-secondary text-tagLight pl-2.5'>
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
            />
          </div>
        </div>
        {/* second */}
        <div className='flex items-center justify-between bg-white border border-headerBoxBorder p-10 absolute top-[262px] w-[574px]'>
          <div>
            <Image
              src='/assets/career/quote.svg'
              alt='quote'
              width={27}
              height={24}
            />
            <Typography className='text-subtitle2Light font-playFair mt-2'>
              The service was amazing. I never <br /> had to wait that long for
              my food.
            </Typography>
            <Typography className='text-paragraph2 pt-4 font-semibold flex'>
              John Carter
              <span className='text-secondary text-tagLight pl-2.5 mr-auto'>
                Software developer
              </span>
              <Image
                src='/assets/career/quote.svg'
                alt='quote'
                width={27}
                height={24}
                className='rotate-180'
              />
            </Typography>
          </div>
          <div>
            <Image
              src='/assets/career/team.png'
              alt='team'
              width={80}
              height={80}
            />
          </div>
        </div>
        {/* Third */}
        <div className='flex items-center justify-between'>
          <div>
            <Typography className='text-subtitle2Light font-playFair'>
              The service was amazing. I never <br /> had to wait that long for
              my food.
            </Typography>
            <Typography className='text-paragraph2 pt-4 font-semibold'>
              John Carter
              <span className='text-secondary text-tagLight pl-2.5'>
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
            />
          </div>
        </div>
      </div>
      <div>
        <SectionHeader
          title={
            <>
              Insights Straight from <span className='block'>Our Team</span>
            </>
          }
          description='Gain Valuable Insights Directly from the Voices of Our Talented and Dedicated Members.'
          descriptionClassName=''
          headingClassName=''
        />
        <Button
          className='w-[320px] m-auto md:mt-[50px] mt-16 border-primary border hover:border-primary hover:border'
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
