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
    <div className=' bg-white mt-[90px] pt-20 pb-[160px]'>
      <div className='container w-full lg:px-[15px] sm:px-[30px] px-[15px] mx-auto'>
        <div className='flex gap-[90px]'>
          <div className='w-[52%]'>
            <Typography className='relative text-h5 font-300 mb-2 '>
              Contact us
            </Typography>
            <SectionHeader
              title={
                <>
                  Shape Your Digital <br />
                  Destiny with Codewinglet, <br />
                  today!
                </>
              }
              description={
                <>
                  Tell us about your project and explore how our experts can
                  help you achieve your goals through digital transformation,
                  product outsourcing, or staff augmentation.
                </>
              }
              descriptionClassName='!text-dropdownText !mt-[25px] leading-9'
            />
            <div className='relative flex gap-[100px] my-[50px] after:content after:absolute after:top-[12px] after:left-[32%] after:w-[1px] after:h-[57px] after:bg-dropBorder'>
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
            <div>
              <Typography className='text-h5 font-400 mb-[25px]'>
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
          <div className='w-[48%] bg-secondary py-[50px] px-[60px]'>
            <Typography className='relative mb-10 uppercase text-h5 font-400 after:content after:absolute after:top-[36px] after:left-0 after:w-[30px] after:h-[2px] after:bg-primary'>
              Business Enquiry
            </Typography>
            <Form
              formData={formData}
              onChangeFormData={onChangeFormData}
              onSubmit={onSubmit}
              isDisabled={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
