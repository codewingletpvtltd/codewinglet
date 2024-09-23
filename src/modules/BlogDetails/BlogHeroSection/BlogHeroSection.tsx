import Image from 'next/image';

import { SectionHeader, Typography } from '@codewinglet/components';
import Reveal from '@codewinglet/components/Reveal';

const BlogHeroSection = ({ date = '' }) => {
  const formattedDate = date
    ? new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : 'No date available';

  return (
    <>
      <div className='md:bg-bg bg-white lg:mt-[156px] mt-[132px] lg:py-20 md:py-[60px] py-5 w-full'>
        <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto flex justify-between items-center'>
          <div className='lg:flex block gap-6 relative'>
            <div className='2xl:w-[693px] lg:w-[680px] w-full'>
              <Reveal>
                <SectionHeader
                  title={<>How collaboration makes us better designers</>}
                  description='Collaborating with others brings together individuals with varied backgrounds, experiences, and expertise. This diversity of perspectives can lead to richer discussions, more innovative ideas, and well-rounded design solutions that cater to a wider audience.'
                  headingClassName='text-primary text-h2'
                  descriptionClassName='text-secondary md:mt-[26px] mt-2.5 lg:!text-subtitle2Light md:!text-paragraph1ExtraLight text-tagExtraLight'
                />
              </Reveal>
              <Typography className='text-secondary text-subtitle2Light mt-[85px] hidden lg:block'>
                Collaboration fosters a user-centered approach to design by
                encouraging empathy and understanding for the end user.
              </Typography>
              <Typography className='text-secondary lg:text-subtitle2 md:text-paragraph2Light text-tagLight lg:hidden block md:mt-[30px] mt-4 md:mb-0 mb-4'>
                Published on Feb 28, 2024
                <span className='text-headerBoxBorder px-3'>•</span>12 min read
              </Typography>
            </div>

            <Image
              src='/assets/blog/blogHero.png'
              alt='blogHero'
              width={693}
              height={618}
              className='md:absolute lg:right-[15px] lg:top-0 top-80 lg:left-full 2xl:w-[693px] lg:w-[576px] w-full 2xl:h-[618px] lg:h-[564px] md:h-[402px] h-[196px]'
            />
          </div>
        </div>
      </div>
      <div className='bg-white pt-3 lg:block hidden'>
        <div className='container'>
          <Typography className='text-secondary text-subtitle2'>
            Published on Feb 28, 2024
            <span className='text-headerBoxBorder px-3'>•</span>12 min read
          </Typography>
        </div>
      </div>
    </>
  );
};

export default BlogHeroSection;
