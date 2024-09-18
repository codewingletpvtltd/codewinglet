/* eslint-disable import/order */
'use client';
import Reveal from '@codewinglet/components/Reveal';

import { Typography } from '@codewinglet/components';
import Image from 'next/image';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';

const workData = [
  {
    image: '/assets/career/flexible.svg',
    title: 'Flexible work hours',
    description:
      'Employees can adjust their work schedules to fit their personal lives, ensuring a better work-life balance.',
  },
  {
    image: '/assets/career/LeaveEncashment.svg',
    title: 'Leave Encashment',
    description:
      'Employees can convert unused paid leave days into monetary compensation.',
  },
  {
    image: '/assets/career/Professional.svg',
    title: 'Professional Development',
    description:
      'Access to online courses and certification programs allows employees to grow their skills.',
  },
  {
    image: '/assets/career/working.svg',
    title: '5 Day a week',
    description:
      'We believe in maintaining a healthy work-life balance, giving you the time to relax and refresh.',
  },
  {
    image: '/assets/career/Friendly.svg',
    title: 'Friendly and stress-free environment',
    description:
      'A supportive workplace where collaboration and well-being are prioritized, helping employees stay relaxed and productive.',
  },
  {
    image: '/assets/career/Employee.svg',
    title: 'Employee engagement activities',
    description:
      'Team-building events, workshops, and social gatherings to foster collaboration and enhance workplace culture.',
  },
];

const Benefits = () => (
  <>
    <div
      className='bg-white lg:py-20 md:py-[60px] py-10 scroll-mt-56'
      id='perks'
    >
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto lg:flex block gap-[70px]'>
        {/* Left */}
        <div className='lg:w-[630px]'>
          <Reveal>
            <SectionHeader
              title={<>Perks & benefits</>}
              description={
                <>
                  At Codewinglet, we believe that happy, healthy, and motivated
                  employees are the foundation of our success. That’s why we
                  offer a comprehensive range of perks and benefits designed to
                  support your personal and professional growth. From
                  competitive salaries to work-life balance initiatives, we
                  ensure you have everything you need to thrive.
                </>
              }
              descriptionClassName='text-secondary lg:!text-subtitle2Light md:!text-paragraph1ExtraLight !text-tagExtraLight'
            />
          </Reveal>

          <Reveal>
            <div className='hidden relative lg:flex gap-[168px] mt-10 after:content after:absolute after:top-3 2xl:after:left-44 xl:after:left-[33%] after:w-[1px] after:h-[57px] after:bg-headerBoxBorder'>
              <Image
                src={'/assets/career/googleCareer.svg'}
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
            </div>
          </Reveal>
        </div>
        {/* Right  */}
        <div className='lg:w-[710px] lg:mt-0 mt-10'>
          <div className='grid grid-cols-2 md:gap-[30px] gap-[15px]'>
            {workData.map((workData, i) => (
              <div className='bg-bg md:p-[30px] p-[13px]' key={i}>
                <Image
                  src={workData.image}
                  alt='Menu Icon'
                  width={32}
                  height={32}
                />
                <Typography className='md:text-paragraph1 text-tag md:pt-4 pt-4 pb-1.5'>
                  {workData.title}
                </Typography>
                <Typography className='md:text-paragraph2Light text-tagExtraLight text-placeholderText'>
                  {workData.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Benefits;
