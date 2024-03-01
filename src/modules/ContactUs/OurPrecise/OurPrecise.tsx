'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Typography } from '@codewinglet/components';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';

const OurPrecise = () => (
  <div className='bg-secondary py-20'>
    <div className='container w-full lg:px-[15px] sm:px-[30px] px-[15px] mx-auto'>
      <div className='flex justify-between items-center gap-[57px]'>
        <div className='w-[30%]'>
          <SectionHeader
            title={<>Our Precise Location</>}
            description={
              <>Step in our vibrant work environ -ment where innovation.</>
            }
            descriptionClassName='!mt-[25px]'
          />
        </div>

        <div className='relative p-10 grid bg-white grid-flow-col grid-cols-[42%_33%_25%] grid-rows-1 after:content after:absolute after:top-[43%] after:left-[40%] after:bg-dropBorder after:w-[1px] after:h-[40%] before:content before:absolute before:top-[43%] before:left-[69%] before:bg-dropBorder before:w-[1px] before:h-[40%]'>
          <div className='flex flex-col'>
            <Typography className='text-primary uppercase text-body2 text-500 flex items-center'>
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
              <Typography className='text-dropdownText text-subtitle1 font-300 mt-5 mb-[27px]'>
                A901-905, Vivanta Icon Opp. Shell Petrol Pump, Adajan, Surat,
                Gujarat 395009.
              </Typography>
              <div className='flex'>
                <Link href='#' className='text-subtitle1 font-400 underline'>
                  Google map
                </Link>
                <Image
                  src={'/assets/icons/contactArrow.svg'}
                  alt='contactArrow'
                  width={14}
                  height={14}
                  className='ml-1.5'
                />
              </div>
            </div>
          </div>

          <div className='flex flex-col'>
            <Typography className='text-primary uppercase text-body2 text-500 flex items-center'>
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
                className=' text-dropdownText text-subtitle1 font-300 mt-5'
              >
                jobs@codewinglet.com
              </Link>
              <Link
                href='mailto:Info@codewinglet.com'
                className='text-dropdownText text-subtitle1 font-300 mt-[15px]'
              >
                Info@codewinglet.com
              </Link>
              <Link
                href='mailto:sales@codewinglet.com'
                className='text-dropdownText text-subtitle1 font-300 mt-[15px]'
              >
                sales@codewinglet.com
              </Link>
            </div>
          </div>

          <div className='flex flex-col'>
            <Typography className='text-primary uppercase text-body2 text-500 flex items-center'>
              <Image
                src={'/assets/icons/contactCall.svg'}
                alt='contactCall'
                width={40}
                height={40}
                className='mr-[15px]'
              />
              Address
            </Typography>
            <div className='flex flex-col'>
              <Link
                href='tel:+918160868310'
                className=' text-dropdownText text-subtitle1 font-300 mt-5'
              >
                +91 8160868310 (Jobs)
              </Link>
              <Link
                href='tel:+918320111741'
                className='text-dropdownText text-subtitle1 font-300 mt-[15px]'
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
