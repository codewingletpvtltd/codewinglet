'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import { Button, SectionHeader, Typography } from '@codewinglet/components';

const caseStudyData = [
  {
    img: '/assets/CaseStudy/exploreMore.png',
    label: 'Retail',
    description: 'Techno blue : A digital haven for Qatar\'s premium electronics halt site',
  },
  {
    img: '/assets/CaseStudy/exploreMore.png',
    label: 'Social',
    description:
      'Social Cash: Bridging Brands and Influencers with an intuitive Application',
  },
  {
    img: '/assets/CaseStudy/exploreMore.png',
    label: 'Food',
    description:
      'CAFS: A website for premium air caterers that exemplifies supreme digital quality',
  },
  {
    img: '/assets/CaseStudy/exploreMore.png',
    label: 'Education',
    description:
      'LuLu Exchange: Securing transactions for the world’s leading currency exchange',
  },
];

const CaseStudies = () => (
  <>
    <div
      className='lg:bg-bg bg-white lg:py-20 md:py-[60px] py-10'
      id='overview'
    >
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
        <SectionHeader
          title={<>Explore More Case Studies</>}
          description={
            <>
              The brand is a dominant force in the US sports industry, engaging
              over 100 million fans weekly across
            </>
          }
          headingClassName='text-primary md:!text-h2 text-center'
          descriptionClassName='text-primary md:!text-paragraph1ExtraLight text-center'
        />

        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-[30px] mt-12'>
          {caseStudyData.map((item, index) => (
            <div
              key={index}
              className='text-primary p-3 2xl:w-[330px] lg:w-[298px] lg:bg-white flex md:flex-col md:gap-0 gap-4'
            >
              <Image
                src={item.img}
                alt='icon'
                width={306}
                height={216}
                className='md:w-[306px] w-[134px] md:h-[216px] h-[145px]'
              />
              <div>
                <span className='text-secondary md:text-paragraph2 text-tagExtraLight md:mt-4 block'>
                  {item.label}
                </span>
                <Typography className='md:text-[19px] text-tag mt-1.5'>
                  {item.description}
                </Typography>

                <Button
                  className='p-0 !h-auto md:mt-6 mt-[15px] underline'
                  variant='link'
                >
                  <Link
                    href='/blogs'
                    rel='noopener noreferrer'
                    className='flex items-center justify-center gap-3 md:text-paragraph2 text-tag'
                  >
                    Know more
                    <Arrow />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Button
          className='lg:w-[276px] md:w-[248px] w-60 h-[52px] 2xl:mt-12 mt-10 mx-auto block !bg-transparent hover:!bg-primary'
          variant='blackOutline'
        >
          <Link
            href='/blogs'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-3'
          >
            Explore more works
            <Arrow />
          </Link>
        </Button>
      </div>
    </div>
  </>
);

export default CaseStudies;
