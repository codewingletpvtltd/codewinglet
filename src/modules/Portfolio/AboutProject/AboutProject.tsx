'use client';

import Image from 'next/image';

import CheckIcon from '@codewinglet/assets/icons/CheckIcon';
import { SectionHeader, Typography } from '@codewinglet/components';

import CaseStudyMenu from '../CaseStudyMenu/CaseStudyMenu';

const AboutProject = () => {
  const projectHighlights = [
    'Dynamic Sports Press Brand',
    'Inclusive Web Design Services',
    'WordPress Graphics Customization',
    'Intuitive UI/UX Design',
    'A Huge Amount of Paperwork',
  ];

  const servicesProvided = [
    'UI/UX Design',
    'Front-end Development',
    'Back-end Development',
  ];

  return (
    <>
      <CaseStudyMenu />
      <div
        className='bg-white lg:py-20 md:py-[60px] py-10 scroll-mt-32'
        id='aboutProject'
      >
        <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto flex lg:flex-row flex-col lg:gap-[50px]'>
          <div className='lg:mt-0 md:mt-10 mt-5 lg:order-1 order-2'>
            <SectionHeader
              title={<>About Project</>}
              description={
                <>
                  The brand is a dominant force in the US sports industry,
                  engaging over 100 million fans weekly across diverse media
                  platforms. With extensive holdings in linear TV, digital apps,
                  and internet platforms, it offers comprehensive sports
                  coverage. <br /> <br />
                  Thus, partnering with Brainvire, it aimed to revamp its
                  website for seamless access to articles, news, videos, stats,
                  schedules, and odds.
                </>
              }
              headingClassName='text-primary lg:!text-h2 lg:text-left md:text-center'
              descriptionClassName='text-primary mt-2.5 md:!text-paragraph1ExtraLight lg:text-left md:text-center'
            />

            <div className='lg:mt-20 md:mt-10 mt-[30px]'>
              <Typography className='md:text-paragraph1 text-tag lg:text-left md:text-center'>
                Service Provided :
              </Typography>

              <ul className='mt-5 2xl:text-paragraph1ExtraLight lg:text-[17px] md:text-tagLight text-tagExtraLight flex lg:justify-start md:justify-center md:gap-5 gap-2.5 flex-wrap'>
                {servicesProvided.map((service, index) => (
                  <li
                    key={index}
                    className='bg-bg lg:py-[15px] md:py-3 py-2.5 lg:px-[30px] md:px-5 px-[15px]'
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='bg-projectBg p-5 md:w-[425px] flex-shrink-0 bg-cover lg:m-0 m-auto lg:order-2 order-1'>
            <Typography className='md:text-paragraph1 text-tagLight flex gap-3 bg-white py-5 items-center justify-center'>
              <Image
                src='/assets/CaseStudy/shining_star.svg'
                alt='shining_star'
                width={24}
                height={24}
              />
              PROJECT HIGHLIGHTS
            </Typography>
            <ul className='pt-[30px]'>
              {projectHighlights.map((highlight, index) => (
                <li
                  key={index}
                  className='relative md:pl-10 pl-8 md:text-paragraph1ExtraLight text-paragraph2 md:pb-[30px] pb-5'
                >
                  <div className='text-success absolute left-0 top-0'>
                    <CheckIcon className='md:w-[25px] w-5 md:h-[25px] h-5' />
                  </div>
                  <Typography className='text-white md:text-paragraph2Light text-tagLight'>
                    {highlight}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutProject;
