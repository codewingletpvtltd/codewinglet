'use client';
import Image from 'next/image';
import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import { Typography } from '@codewinglet/components';

const Journey = () => (
  <>
    <div className='relative bg-white lg:py-20 md:py-[60px] py-[30px] sm:pb-[inherit] pb-[130px] lg:mt-[86px] md:mt-[90px] mt-[78px]'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
        <div className='lg:flex block'>
          <div className='lg:w-[598px] w-full'>
            <Typography className='text-gray-800 md:text-subtitle2 text-tag 2xl:mb-1.5 sm:mb-3'>
              About us
            </Typography>
            <Typography className='lg:text-h2 md:text-h3 text-subtitle2 lg:leading-normal md:leading-[50px] leading-7'>
              Discover Our IT Service Providing Journey
            </Typography>
            <Typography className='text-gray-400 text-subtitle2Light pt-3 2xl:pb-10 pb-3 lg:block hidden'>
              We specialize in strategic planning, designing, and developing
              world-class software across diverse industries.
            </Typography>

            <div className='lg:flex group cursor-pointer text-gray-800 items-center group gap-2.5 hidden'>
              <Link
                href='#exploreNow'
                target='_parent'
                className='text-paragraph2 underline'
              >
                Explore now
              </Link>
              <Arrow className='group-hover:transition-all duration-700 group-hover:translate-x-1' />
            </div>
            <div className='lg:block md:hidden block mt-10 2xl:mt-[279px] lg:mt-56 md:relative absolute bottom-5'>
              <Link
                href='https://www.google.com/search?q=google+my+business+codewinglet&sca_esv=140e142c45642a77&sca_upv=1&rlz=1C1GCEU_enIN954IN956&sxsrf=ADLYWIK8twRkm95COwC8J2bYLgvfRijrIw%3A1727152551706&ei=p0HyZqDjKpqJ4-EPvd3QkQc&oq=google+my+business+codewinglet&gs_lp=Egxnd3Mtd2l6LXNlcnAiHmdvb2dsZSBteSBidXNpbmVzcyBjb2Rld2luZ2xldCoCCAAyBRAhGKABMgUQIRigAUioa1CKMlivV3ACeAGQAQCYAfgBoAG0I6oBBjAuMjMuM7gBA8gBAPgBAZgCGKACyx3CAgoQABiwAxjWBBhHwgIHECEYoAEYCsICBBAhGBXCAgUQABiABMICCxAAGIAEGJECGIoFwgIIEAAYgAQYsQPCAgYQABgWGB7CAggQABgWGB4YD8ICBxAAGIAEGA3CAggQABgIGA0YHsICChAAGAgYDRgeGA-YAwCIBgGQBgiSBwYyLjIxLjGgB-uGAQ&sclient=gws-wiz-serp#lrd=0xad9b0b986e322e33:0x223c56e331adc03,1,,,,'
                target='_blank'
              >
                <Image
                  src={'/assets/ContactUs/google-review.svg'}
                  width={171}
                  height={83}
                  alt='google'
                />
              </Link>
            </div>
          </div>

          <div className='flex lg:justify-normal justify-between items-start relative lg:mt-0 md:mt-[54px] mt-5'>
            <div>
              <Image
                src='/assets/AboutUs/journey_1.png'
                alt='journey_1'
                width={365}
                height={400}
                className='2xl:mb-7 lg:mb-6 md:mb-[88px] mb-11 2xl:mr-7 lg:mr-6 2xl:ml-[78px] lg:ml-[52px] 2xl:w-[365px] md:w-[300px] w-[154px]'
              />
              <Image
                src='/assets/AboutUs/journey_3.png'
                alt='journey_3'
                width={443}
                height={286}
                className='2xl:w-[443px] w-[362px] lg:ml-0 md:ml-[52px] ml-[18px]'
              />
            </div>
            <Image
              src='/assets/AboutUs/roundLogo.png'
              alt='roundLogo'
              width={138}
              height={138}
              className='md:w-[138px] w-[70px] absolute 2xl:top-[339px] lg:top-[294px] top-auto 2xl:left-[381px] lg:left-[297px] left-auto lg:bottom-auto md:bottom-[50px] bottom-[25px] lg:right-auto md:right-[52px] right-[18px]'
            />
            <Image
              src='/assets/AboutUs/journey_2.png'
              alt='journey_2'
              width={315}
              height={343}
              className='2xl:pt-[85px] lg:pt-[79px] 2xl:w-[315px] md:w-[261px] w-[134px]'
            />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Journey;
