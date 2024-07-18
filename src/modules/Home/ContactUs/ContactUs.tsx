'use client';

// eslint-disable-next-line import/order
import { SectionHeader, Typography } from '@codewinglet/components';

import Reveal from '@codewinglet/components/Reveal';
import useGetInTouch from './useGetInTouch';

import Image from 'next/image';
import Link from 'next/link';

import Form from './Form';
import useGetInTouch from './useGetInTouch';

const ContactUs = () => {
  const { formData, onChangeFormData, onSubmit, isLoading } = useGetInTouch();

  return (
    <section className='lg:py-20 md:py-[60px] py-10 bg-bg'>
      <div className='container w-full lg:px-[15px] sm:px-[30px] px-[15px] mx-auto'>
        <div className='flex lg:flex-row flex-col 2xl:gap-[90px] xl:gap-[60px]'>
          <div className='lg:w-[52%] w-full md:m-0 mb-5 xl:pr-0 lg:pr-[30px] md:p-0 pr-0'>
            <Reveal>
              <SectionHeader
                title={<>Contact Us</>}
                description={
                  <>Shape your digital destiny with codewinglet, today!</>
                }
              />
            </Reveal>

            <Reveal>
              <Typography className='leading-9 mt-10 mb-[100px] text-subtitle1Light text-secondary hidden lg:block'>
                Tell us about your project and discover how our experts can
                assist you in achieving your goals through digital
                transformation, product outsourcing, or staff augmentation.
              </Typography>

            </Reveal>

            <Reveal>
              <div className='hidden relative lg:flex gap-[100px] mb-[60px] after:content after:absolute after:top-[12px] 2xl:after:left-[22%] xl:after:left-[24%] after:w-[1px] after:h-[57px] after:bg-headerBoxBorder'>
                <Image
                  src={'/assets/ContactUs/google-review.svg'}
                  width={97}
                  height={83}
                  alt='google'
                />
                <Image
                  src={'/assets/ContactUs/glassdoorreview.svg'}
                  width={119}
                  height={83}
                  alt='glassdoor'
                />

              <div className='flex gap-[30px]'>
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
            </Reveal>

            <Reveal>
              <div className='hidden lg:block'>
                <Typography className='text-subtitle2 font-400 mb-[25px]'>
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
            </Reveal>
          </div>
          <div className='lg:w-[48%] w-full lg:mt-0 md:mt-10'>
            <div className='bg-white md:py-[50px] md:px-[60px] p-5'>
              <Reveal>
                <Typography className='relative md:mb-[46px] mb-[26px] md:text-subtitle2 text-paragraph2 after:content after:absolute lg:after:top-[36px] after:top-[30px] after:left-0 after:w-[30px] after:h-[2px] after:bg-primary'>
                  Business Enquiry
                </Typography>
              </Reveal>
              <Reveal>
                <Form
                  formData={formData}
                  onChangeFormData={onChangeFormData}
                  onSubmit={onSubmit}
                  isDisabled={isLoading}
                />
              </Reveal>
            </div>
          </div>
          <Typography className='leading-9 mt-10 text-subtitle2Light text-secondary hidden md:block lg:hidden'>
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
