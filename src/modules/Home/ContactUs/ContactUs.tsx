/* eslint-disable import/order */
'use client';
import { SectionHeader, Typography } from '@codewinglet/components';
import Reveal from '@codewinglet/components/Reveal';
import Image from 'next/image';
import Link from 'next/link';
import Form from './Form';
import useGetInTouch from './useGetInTouch';

const ContactUs = () => {
  const { formData, onChangeFormData, onSubmit, isLoading } = useGetInTouch();

  const socialLinks = [
    {
      href: 'https://in.linkedin.com/company/codewinglet',
      ariaLabel: 'Linkedin',
      src: '/assets/icons/contactLinkedin.svg',
      alt: 'contactLinkedin',
    },
    {
      href: 'https://www.instagram.com/codewinglet/',
      ariaLabel: 'Instagram',
      src: '/assets/icons/contactInsta.svg',
      alt: 'contactInsta',
    },
    {
      href: 'https://www.linkedin.com/company/codewinglet/',
      ariaLabel: 'Linkedin',
      src: '/assets/icons/contactLinkedin.svg',
      alt: 'contactLinkedin',
    },
    {
      href: 'https://twitter.com/codewinglet',
      ariaLabel: 'Twitter',
      src: '/assets/icons/contactX.svg',
      alt: 'contactX',
    },
    {
      href: 'https://dribbble.com/codewingletprivatelimited',
      ariaLabel: 'Dribble',
      src: '/assets/icons/contactDribble.svg',
      alt: 'contactDribble',
    },
    {
      href: 'https://www.behance.net/codewinglet',
      ariaLabel: 'Behance',
      src: '/assets/icons/contactBehance.svg',
      alt: 'contactBehance',
    },
  ];

  return (
    <section className='lg:py-20 md:py-[60px] py-10 lg:bg-bg bg-white'>
      <div className='container w-full lg:px-[15px] sm:px-[30px] px-5 mx-auto'>
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
              <Typography className='leading-9 mt-[50px] mb-[104px] text-subtitle2Light text-secondary hidden lg:block'>
                Tell us about your project and discover how our experts can
                assist you in achieving your goals through digital
                transformation, product outsourcing, or staff augmentation.
              </Typography>
            </Reveal>

            <Reveal>
              <div className='hidden relative lg:flex gap-40 mb-[60px] after:content after:absolute after:top-3 2xl:after:left-[28%] xl:after:left-[30%] after:w-[1px] after:h-[57px] after:bg-headerBoxBorder'>
                <Image
                  src={'/assets/ContactUs/upWork.svg'}
                  width={111}
                  height={83}
                  alt='upWork'
                />
                <Image
                  src={'/assets/ContactUs/google-review.svg'}
                  width={171}
                  height={83}
                  alt='google'
                />
              </div>
            </Reveal>

            <Reveal>
              <div className='hidden lg:block'>
                <Typography className='text-subtitle2 font-400 mb-[25px]'>
                  Follow us in media :
                </Typography>
                <div className='flex gap-5'>
                  {socialLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      target='_blank'
                      aria-label={link.ariaLabel}
                    >
                      <Image
                        src={link.src}
                        width={40}
                        height={40}
                        alt={link.alt}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
          <div className='lg:w-[48%] w-full lg:mt-0 md:mt-10'>
            <div className='lg:bg-white bg-bg md:py-[50px] md:px-[60px] p-5'>
              <Reveal>
                <Typography className='uppercase relative md:mb-[46px] mb-[26px] md:text-subtitle2 text-paragraph2 after:content after:absolute lg:after:top-9 after:top-[30px] after:left-0 after:w-[30px] after:h-[2px] after:bg-primary'>
                  Business Enquiry
                </Typography>
              </Reveal>
              <Reveal>
                <Form
                  formData={formData}
                  onChangeFormData={onChangeFormData}
                  onSubmit={onSubmit}
                  isLoading={isLoading}
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
