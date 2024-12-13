'use client';

import Image from 'next/image';
import Script from 'next/script';

import CheckIcon from '@codewinglet/assets/icons/CheckIcon';
import { Typography } from '@codewinglet/components';
import { useWindowSize } from '@codewinglet/hooks/useWindowSize';
import './style.css';

const ResultsContent = () => {
  const {
    windowSize: { width },
  } = useWindowSize();

  const isBelowMd = width < 768;

  // Data for repeated sections
  const sections = [
    {
      title: 'Streamlined Workflow and Data Segregation',
      description: 'Whether you\'re seeking flexibility, cost-effectiveness, 111or specialized expertise, there\'s a hiring model tailored just for you.',
      highlights: [
        'Unlocking personalized quotations: tailored wisdom in simple terms',
        'Successfully overcome pressing business challenges',
      ],
      conversionRate: '52%',
    },
    {
      title: 'Enhanced Collaboration and Performance',
      description:
        'Streamline processes and improve team efficiency with specialized tools and practices.',
      highlights: [
        'Achieve higher productivity rates',
        'Implement effective solutions with ease',
      ],
      conversionRate: '45%',
    },
    {
      title: 'Enhanced Collaboration and Performance',
      description:
        'Streamline processes and improve team efficiency with specialized tools and practices.',
      highlights: [
        'Achieve higher productivity rates',
        'Implement effective solutions with ease',
      ],
      conversionRate: '45%',
    },
    {
      title: 'Enhanced Collaboration and Performance',
      description:
        'Streamline processes and improve team efficiency with specialized tools and practices.',
      highlights: [
        'Achieve higher productivity rates',
        'Implement effective solutions with ease',
      ],
      conversionRate: '45%',
    },
  ];

  return (
    <>
      <div className='relative mt-[50px]'>
        <Image
          src='/assets/CaseStudy/resultsBg.png'
          alt='resultsBg'
          width={1410}
          height={219}
        />
      </div>
      <div className='trigger'>
        <div className='extra-trigger'>
          <div className='card-container'>
            {sections.map((section, index) => (
              <div key={index} className='card-wrapper'>
                <div className='border border-headerBoxBorder bg-white mt-5 flex gap-5 p-10 mx-20 card'>
                  <div className='bg-bg w-24 h-24 flex justify-center items-center flex-shrink-0'>
                    <Image
                      src='/assets/CaseStudy/growth.svg'
                      alt='growth'
                      width={52}
                      height={52}
                    />
                  </div>
                  <div>
                    <Typography className='pt-2.5 text-h6 text-primary'>
                      {section.title}
                    </Typography>
                    <span className='block w-10 h-[3px] bg-primary my-3'></span>
                    <Typography className='text-secondary text-paragraph1ExtraLight'>
                      {section.description}
                    </Typography>
                    <div className='flex gap-24 pr-20 pt-5'>
                      {section.highlights.map((highlight, idx) => (
                        <div key={idx} className='text-success flex gap-2.5'>
                          <CheckIcon />
                          <Typography className='text-primary text-paragraph1ExtraLight'>
                            {highlight}
                          </Typography>
                        </div>
                      ))}
                    </div>
                    <div className='flex gap-5 mt-[50px]'>
                      {[1, 2].map((_, i) => (
                        <div key={i} className='bg-bg p-5 flex gap-[15px]'>
                          <div className='bg-primary w-16 h-16 flex items-center justify-center'>
                            <Image
                              src='/assets/CaseStudy/user.svg'
                              alt='user'
                              width={28}
                              height={28}
                            />
                          </div>
                          <Typography className='text-secondary text-paragraph2Light'>
                            Conversion rate
                            <span className='text-h6 block text-primary pt-1'>
                              {section.conversionRate}
                            </span>
                          </Typography>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Script src='https://unpkg.com/gsap@3/dist/gsap.min.js' />
      <Script src='https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js' />
      <Script src='/script.js' />
    </>
  );
};

export default ResultsContent;
