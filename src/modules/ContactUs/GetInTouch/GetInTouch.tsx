'use client';
import Image from 'next/image';
import Link from 'next/link';

import { SectionHeader, Typography } from '@codewinglet/components';
import SocialMedia from '@codewinglet/components/SocialMedia/SocialMedia';
import Form from '@codewinglet/modules/Home/ContactUs/Form';
import useGetInTouch from '@codewinglet/modules/Home/ContactUs/useGetInTouch';

const GetInTouch = () => {
  const { formData, onChangeFormData, onSubmit, isLoading } = useGetInTouch();

  return (
    <div className='bg-white md:mt-[139px] mt-[124px] md:pt-20 2xl:pb-[160px] xl:pb-[140px] pt-[30px] sm:pb-20 pb-[30px]'>
      <div className='container w-full lg:px-[15px] sm:px-[30px] px-4 mx-auto'>
        <div className='lg:flex block 2xl:gap-[90px] xl:gap-[25px]'>
          <div className='lg:w-[52%] w-full'>
            <Typography className='relative sm:text-subtitle2 text-tagLight sm:mb-2.5 mb-0'>
              Contact us
            </Typography>
            <SectionHeader
              title={<>Shape Your Digital Destiny with Codewinglet, today!</>}
              description={
                <>
                  Tell us about your project and explore how our experts can
                  help you achieve your goals through digital transformation,
                  product outsourcing, or staff augmentation.
                </>
              }
              headingClassName='2xl:pr-[100px] xl:pr-[100px] pr-0'
              descriptionClassName='!text-subtitle2Light !mt-[31px] md:block hidden'
            />

            <div className='md:block hidden mt-[104px] mb-[60px]'>
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

            <div className='md:block hidden'>
              <Typography className='text-subtitle2 mb-[25px]'>
                Follow us in media :
              </Typography>
              <div className='flex gap-5'>
                <SocialMedia
                  bgColor='black'
                  iconColor='white'
                  width='40'
                  height='40'
                />
              </div>
            </div>
          </div>
          <div className='lg:w-[48%] w-full bg-gray-50 sm:py-[50px] sm:px-[60px] lg:mt-0 sm:mt-10 mt-5 p-5'>
            <Typography className='uppercase relative md:mb-[46px] mb-[26px] sm:text-subtitle2 text-paragraph2 font-400 after:content after:absolute sm:after:top-9 after:top-[30px] after:left-0 after:w-[30px] after:h-[2px] after:bg-gray-800'>
              Business Enquiry
            </Typography>
            <Form
              formData={formData}
              onChangeFormData={onChangeFormData}
              onSubmit={onSubmit}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
