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
      <div className='hidden lg:block'>
        <CaseStudyMenu />
      </div>
      <div className='bg-white lg:py-20 md:py-[60px] py-10'>
        <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto lg:flex block gap-[50px]'>
          <div className='bg-projectBg p-5 w-[425px] flex-shrink-0 bg-cover lg:m-0 m-auto'>
            <Typography className='text-paragraph1 flex gap-3 bg-white py-5 items-center justify-center'>
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
                  className='relative pl-10 md:text-paragraph1ExtraLight text-paragraph2 pb-[30px]'
                >
                  <div className='text-success absolute left-0 top-0'>
                    <CheckIcon />
                  </div>
                  <Typography className='text-white'>{highlight}</Typography>
                </li>
              ))}
            </ul>
          </div>
          <div className='lg:mt-0 mt-10'>
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
              headingClassName='text-primary lg:!text-h2 lg:text-left text-center'
              descriptionClassName='text-primary mt-2.5 md:!text-paragraph1ExtraLight lg:text-left text-center'
            />

            <div className='lg:mt-20 mt-10'>
              <Typography className='text-paragraph1 lg:text-left text-center'>
                Service Provided :
              </Typography>

              <ul className='mt-5 2xl:text-paragraph1ExtraLight lg:text-[17px] text-tagLight flex lg:justify-start justify-center gap-5'>
                {servicesProvided.map((service, index) => (
                  <li
                    key={index}
                    className='bg-bg lg:py-[15px] py-3 lg:px-[30px] px-5'
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutProject;
