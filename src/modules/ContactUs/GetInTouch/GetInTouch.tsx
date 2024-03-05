'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Typography } from '@codewinglet/components';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';

import Form from './components/Form';

import useGetInTouch from './useGetInTouch';

const GetInTouch = () => {
  const { formData, onChangeFormData, onSubmit, isLoading } = useGetInTouch();

  return (
    <div className=' bg-white mt-[90px] md:pt-20 2xl:pb-[160px] xl:pb-[140px] pt-[30px] sm:pb-0 pb-[30px]'>
      <div className='container w-full lg:px-[15px] sm:px-[30px] px-[20px] mx-auto'>
        <div className='lg:flex block 2xl:gap-[90px] xl:gap-[25px]'>
          <div className='lg:w-[52%] w-full'>
            <Typography className='relative sm:text-subtitle2 text-tagLight sm:mb-1.5 mb-0'>
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
              headingClassName='2xl:pr-[130px] xl:pr-[100px] pr-0'
              descriptionClassName='!text-subtitle2Light !mt-[31px] lg:block hidden'
            />
            <div className='relative lg:flex hidden gap-[100px] my-[50px] after:content after:absolute after:top-[12px] after:left-[32%] after:w-[1px] after:h-[57px] after:bg-headerBoxBorder'>
              <Image
                src={'/assets/ContactUs/google.svg'}
                width={165}
                height={83}
                alt='google'
              />
              <Image
                src={'/assets/ContactUs/upWork.svg'}
                width={111}
                height={83}
                alt='upWork'
              />
            </div>
            <div className='lg:block hidden'>
              <Typography className='text-subtitle2 mb-[25px]'>
                Follow us in media :
              </Typography>
              <div className='flex gap-[30px]'>
                <Link
                  href='https://www.facebook.com/codewingletpteltd'
                  target='_blank'
                  aria-label='Facebook'
                >
                  <Image
                    src={'/assets/icons/contactFb.svg'}
                    width={40}
                    height={40}
                    alt='contactFb'
                  />
                </Link>
                <Link
                  href='https://www.instagram.com/codewinglet/'
                  target='_blank'
                  aria-label='Instagram'
                >
                  <Image
                    src={'/assets/icons/contactInsta.svg'}
                    width={40}
                    height={40}
                    alt='contactInsta'
                  />
                </Link>
                <Link
                  href='https://in.linkedin.com/company/codewinglet'
                  target='_blank'
                  aria-label='Linkedin'
                >
                  <Image
                    src={'/assets/icons/contactLinkedin.svg'}
                    width={40}
                    height={40}
                    alt='contactLinkedin'
                  />
                </Link>

                <Link
                  href='https://twitter.com/codewinglet'
                  target='_blank'
                  aria-label='Twitter'
                >
                  <Image
                    src={'/assets/icons/contactX.svg'}
                    width={40}
                    height={40}
                    alt='contactX'
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className='lg:w-[48%] w-full bg-bg sm:py-[50px] sm:px-[60px] lg:mt-0 sm:mt-10 mt-5 p-5'>
            <Typography className='relative mb-10 sm:text-subtitle2 text-paragraph2 font-400 after:content after:absolute after:top-[36px] after:left-0 after:w-[30px] after:h-[2px] after:bg-primary'>
              Business Enquiry
            </Typography>
            <Form
              formData={formData}
              onChangeFormData={onChangeFormData}
              onSubmit={onSubmit}
              isDisabled={isLoading}
            />
          </div>
          <Typography className='lg:hidden sm:block hidden text-subtitle2Light pb-20 pt-10'>
            Tell us about your project and explore how our experts can help you
            achieve your goals through digital transformation, product
            outsourcing, or staff augmentation.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
