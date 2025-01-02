'use client';
import Image from 'next/image';
import Link from 'next/link';

import { SectionHeader, Typography } from '@codewinglet/components';
import SocialMedia from '@codewinglet/components/SocialMedia/SocialMedia';

import Form from './Form';
import useGetInTouch from './useGetInTouch';

const ContactUs = () => {
  const { formData, onChangeFormData, onSubmit, isLoading } = useGetInTouch();

  return (
    <section className='lg:py-20 md:py-[60px] py-10 lg:bg-gray-50 bg-white'>
      <div className='container w-full lg:px-[15px] sm:px-[30px] px-5 mx-auto'>
        <div className='flex lg:flex-row flex-col 2xl:gap-[90px] xl:gap-[60px]'>
          <div className='lg:w-[52%] w-full md:m-0 mb-5 xl:pr-0 lg:pr-[30px] md:p-0 pr-0'>
            <SectionHeader
              title={<>Contact Us</>}
              description={
                <>Shape your digital destiny with codewinglet, today!</>
              }
            />

            <Typography className='leading-9 mt-[50px] mb-[104px] text-subtitle2Light text-gray-400 hidden lg:block'>
              Tell us about your project and discover how our experts can assist
              you in achieving your goals through digital transformation,
              product outsourcing, or staff augmentation.
            </Typography>

            <div className='hidden relative lg:block mb-[60px]'>
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

            <div className='hidden lg:block'>
              <Typography className='text-subtitle2 font-400 mb-[25px]'>
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
          <div className='lg:w-[48%] w-full lg:mt-0 md:mt-10'>
            <div className='lg:bg-white bg-gray-50 md:py-[50px] md:px-[60px] p-5'>
              <Typography className='uppercase relative md:mb-[46px] mb-[26px] md:text-subtitle2 text-paragraph2 after:content after:absolute lg:after:top-9 after:top-[30px] after:left-0 after:w-[30px] after:h-[2px] after:bg-gray-800'>
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
          <Typography className='leading-9 mt-10 text-subtitle2Light text-gray-400 hidden md:block lg:hidden'>
            Tell us about your project and discover how our experts can assist
            you in achieving your goals through digital transformation, product
            outsourcing, or staff augmentation.
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
