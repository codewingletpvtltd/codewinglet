/* eslint-disable import/order */
'use client';
import Reveal from '@codewinglet/components/Reveal';

import { Typography } from '@codewinglet/components';
import Image from 'next/image';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';

const workData = [
  {
    image: '/assets/career/time.svg',
    title: 'Paid time off',
    description: 'Experience our vibrant, welcoming working culture.',
  },
  {
    image: '/assets/career/politics.svg',
    title: 'No politics',
    description: 'Experience our vibrant, welcoming working culture.',
  },
  {
    image: '/assets/career/motivated.svg',
    title: 'Motivated team',
    description: 'Experience our vibrant, welcoming working culture.',
  },
  {
    image: '/assets/career/celebration.svg',
    title: 'Weekly celebration',
    description: 'Experience our vibrant, welcoming working culture.',
  },
  {
    image: '/assets/career/time.svg',
    title: 'Collaboration',
    description: 'Experience our vibrant, welcoming working culture.',
  },
  {
    image: '/assets/career/grow.svg',
    title: 'Grow 1% everyday',
    description: 'Experience our vibrant, welcoming working culture.',
  },
];

const Benefits = () => (
  <>
    <div className='bg-white lg:py-20 md:py-[60px] py-10'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto flex gap-[70px]'>
        {/* Left */}
        <div className='w-[630px]'>
          <Reveal>
            <SectionHeader
              title={<>Perks & benefits</>}
              description={
                <>
                  in today's fast-paced digital world, mobile apps are the go-to
                  solution for businesses to engage with customers. Empower your
                  business to deliver exactly what users crave. <br /> <br /> in
                  today's fast-paced digital world, mobile apps are the go-to
                  solution for businesses to engage.
                </>
              }
              descriptionClassName='text-secondary'
            />
          </Reveal>

          <Reveal>
            <div className='hidden relative lg:flex gap-[100px] mt-10 after:content after:absolute after:top-3 2xl:after:left-36 xl:after:left-[24%] after:w-[1px] after:h-[57px] after:bg-headerBoxBorder'>
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
            </div>
          </Reveal>
        </div>
        {/* Right  */}
        <div className='w-[710px]'>
          <div className='grid grid-cols-2 gap-[30px]'>
            {workData.map((workData, i) => (
              <div className='bg-bg p-[30px]' key={i}>
                <Image
                  src={workData.image}
                  alt='Menu Icon'
                  width={32}
                  height={32}
                />
                <Typography className='text-paragraph1 pt-10 pb-1.5'>
                  {workData.title}
                </Typography>
                <Typography className='text-paragraph2Light text-placeholderText'>
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
