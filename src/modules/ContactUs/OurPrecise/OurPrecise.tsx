'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Typography } from '@codewinglet/components';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';

const OurPrecise = () => (
  <div className='bg-bg py-20'>
    <div className='container w-full lg:px-[15px] sm:px-[30px] px-[15px] mx-auto'>
      <div className='flex justify-between items-center 2xl:gap-[37px] gap-[48px]'>
        <div className='2xl:w-[30%] w-[35%]'>
          <SectionHeader
            title={<>Our Precise Location</>}
            description={
              <>Step in our vibrant work environ -ment where innovation.</>
            }
            descriptionClassName='!mt-[25px]'
          />
        </div>

        <div className='relative p-10 grid bg-white grid-flow-col 2xl:grid-cols-[42%_33%_25%] xl:grid-cols-[39%_33%_25%] grid-rows-1 after:content after:absolute 2xl:after:top-[43%] 2xl:after:left-[40%] xl:after:top-[40%] xl:after:left-[36%] after:bg-headerBoxBorder after:w-[1px] after:h-[40%] before:content before:absolute 2xl:before:top-[43%] 2xl:before:left-[69%] xl:before:top-[40%] xl:before:left-[67%] before:bg-headerBoxBorder before:w-[1px] before:h-[40%]'>
          <div className='flex flex-col'>
            <Typography className='text-primary uppercase text-paragraph1 flex items-center'>
              <Image
                src={'/assets/icons/contactLocation.svg'}
                alt='contactLocation'
                width={40}
                height={40}
                className='mr-[15px]'
              />
              Address
            </Typography>
            <div>
              <Typography className='text-secondary text-paragraph2Light mt-5 mb-[27px] 2xl:w-full xl:w-[80%]'>
                A901-905, Vivanta Icon Opp. Shell Petrol Pump, Adajan, Surat,
                Gujarat 395009.
              </Typography>
              <div className='flex group cursor-pointer'>
                <Link href='#' className='text-paragraph2 underline'>
                  Google map
                </Link>
                <Image
                  src={'/assets/icons/contactArrow.svg'}
                  alt='contactArrow'
                  width={14}
                  height={14}
                  className='ml-1.5 group-hover:transition-all duration-700 group-hover:translate-x-1'
                />
              </div>
            </div>
          </div>

          <div className='flex flex-col'>
            <Typography className='text-primary uppercase text-paragraph1 flex items-center'>
              <Image
                src={'/assets/icons/contactEmail.svg'}
                alt='contactEmail'
                width={40}
                height={40}
                className='mr-[15px]'
              />
              Email
            </Typography>
            <div className='flex flex-col'>
              <Link
                href='mailto:jobs@codewinglet.com'
                className=' text-secondary text-paragraph2Light mt-5'
              >
                jobs@codewinglet.com
              </Link>
              <Link
                href='mailto:Info@codewinglet.com'
                className='text-secondary text-paragraph2Light mt-[15px]'
              >
                Info@codewinglet.com
              </Link>
              <Link
                href='mailto:sales@codewinglet.com'
                className='text-secondary text-paragraph2Light mt-[15px]'
              >
                sales@codewinglet.com
              </Link>
            </div>
          </div>

          <div className='flex flex-col'>
            <Typography className='text-primary uppercase text-paragraph1 flex items-center'>
              <Image
                src={'/assets/icons/contactCall.svg'}
                alt='contactCall'
                width={40}
                height={40}
                className='mr-[15px]'
              />
              Contact
            </Typography>
            <div className='flex flex-col'>
              <Link
                href='tel:+918160868310'
                className=' text-secondary text-paragraph2Light mt-5'
              >
                +91 8160868310 (Jobs)
              </Link>
              <Link
                href='tel:+918320111741'
                className='text-secondary text-paragraph2Light mt-[15px]'
              >
                +91 8320111741 (Inquiry)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OurPrecise;
