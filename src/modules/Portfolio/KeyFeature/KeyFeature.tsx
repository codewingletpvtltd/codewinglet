'use client';

import CheckIcon from '@codewinglet/assets/icons/CheckIcon';
import { SectionHeader, Typography } from '@codewinglet/components';

const features = [
  {
    title: 'User-Centric Design',
    description:
      'Our team of Angular developers and UX designers collaborate to create interactive UI/UX designs that captivate users and make.',
  },
  {
    title: 'Scalable Architecture',
    description:
      'Our team of Angular developers and UX designers collaborate to create interactive UI/UX designs that captivate users and make.',
  },
  {
    title: 'Secure and Reliable',
    description:
      'Our team of Angular developers and UX designers collaborate to create interactive UI/UX designs that captivate users and make.',
  },
  {
    title: 'End-to-End Development',
    description:
      'Our team of Angular developers and UX designers collaborate to create interactive UI/UX designs that captivate users and make.',
  },
  {
    title: 'Cross-Platform Compatibility',
    description:
      'Our team of Angular developers and UX designers collaborate to create interactive UI/UX designs that captivate users and make.',
  },
  {
    title: 'Cutting-Edge Technology',
    description:
      'Our team of Angular developers and UX designers collaborate to create interactive UI/UX designs that captivate users and make.',
  },
];

const KeyFeature = () => (
  <>
    {/* Key Feature Header */}
    <section className='bg-keyFeatureBg bg-cover lg:pt-20 md:pt-[60px] pt-10 pb-[148px] relative'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
        <SectionHeader
          title='Key Feature'
          description='With our full-stack knowledge and battle-tested agile strategy, we help clients flourish at every level of the web product development lifecycle.'
          headingClassName='text-white lg:!text-h2 text-center'
          descriptionClassName='text-white md:!text-paragraph1ExtraLight text-center lg:px-64'
        />
      </div>
    </section>

    {/* Content Blocks */}
    <section className='bg-white relative lg:h-[590px] md:h-[820px] h-[780px]'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto absolute -top-[100px] left-0 right-0'>
        <div className='bg-white lg:p-10 md:p-[30px] p-[15px] border border-headerBoxBorder'>
          <div className='grid lg:grid-cols-2 lg:gap-10 gap-5'>
            {features.map(({ title, description }, index) => (
              <div
                key={index}
                className='flex gap-2.5 bg-bg lg:p-[30px] md:p-5 p-3'
              >
                <div className='text-success'>
                  <CheckIcon className='md:w-[30px] w-6 md:h-[30px] h-6' />
                </div>
                <div>
                  <Typography className='text-primary lg:text-subtitle2 md:text-paragraph1 text-tag'>
                    {title}
                  </Typography>
                  <Typography className='text-secondary md:text-paragraph2Light text-tagExtraLight pt-1.5'>
                    {description}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default KeyFeature;