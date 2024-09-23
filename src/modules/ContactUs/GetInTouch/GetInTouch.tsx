/* eslint-disable import/order */
'use client';
import { Typography } from '@codewinglet/components';
import Reveal from '@codewinglet/components/Reveal';
import Form from '@codewinglet/modules/Home/ContactUs/Form';
import useGetInTouch from '@codewinglet/modules/Home/ContactUs/useGetInTouch';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';

const GetInTouch = () => {
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
    <div className='bg-white md:mt-[86px] mt-[78px] md:pt-20 2xl:pb-[160px] xl:pb-[140px] pt-[30px] sm:pb-0 pb-[30px]'>
      <div className='container w-full lg:px-[15px] sm:px-[30px] px-4 mx-auto'>
        <div className='lg:flex block 2xl:gap-[90px] xl:gap-[25px]'>
          <div className='lg:w-[52%] w-full'>
            <Reveal>
              <Typography className='relative sm:text-subtitle2 text-tagLight sm:mb-2.5 mb-0'>
                Contact us
              </Typography>
            </Reveal>
            <Reveal>
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
            </Reveal>

            <Reveal>
              <div className='relative md:flex hidden gap-40 mt-[104px] mb-[60px] after:content after:absolute after:top-3 2xl:after:left-[28%] lg:after:left-[30%] after:left-[26%] after:w-[1px] after:h-[57px] after:bg-headerBoxBorder'>
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

            <div className='md:block hidden'>
              <Typography className='text-subtitle2 mb-[25px]'>
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
          </div>
          <div className='lg:w-[48%] w-full bg-bg sm:py-[50px] sm:px-[60px] lg:mt-0 sm:mt-10 mt-5 p-5'>
            <Reveal>
              <Typography className='uppercase relative md:mb-[46px] mb-[26px] sm:text-subtitle2 text-paragraph2 font-400 after:content after:absolute sm:after:top-9 after:top-[30px] after:left-0 after:w-[30px] after:h-[2px] after:bg-primary'>
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
      </div>
    </div>
  );
};

export default GetInTouch;
