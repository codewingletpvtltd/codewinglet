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
      <div className='bg-bg md:mt-52 py-20 mt-[78px] w-full'>
        <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto flex justify-between items-center'>
          <div className='flex gap-6 relative'>
            <div className='w-[693px]'>
              <Reveal>
                <SectionHeader
                  title={<>How collaboration makes us better designers</>}
                  description='Collaborating with others brings together individuals with varied backgrounds, experiences, and expertise. This diversity of perspectives can lead to richer discussions, more innovative ideas, and well-rounded design solutions that cater to a wider audience.'
                  headingClassName='text-primary text-h2'
                  descriptionClassName='text-secondary mt-[26px]'
                />
              </Reveal>
              <Typography className='text-secondary text-subtitle2Light mt-[85px]'>
                Collaboration fosters a user-centered approach to design by
                encouraging empathy and understanding for the end user.
              </Typography>
            </div>

            <Image
              src='/assets/blog/blogHero.png'
              alt='blogHero'
              width={693}
              height={618}
              className='absolute right-0 left-full'
            />
          </div>
        </div>
      </div>
      <div className='bg-white pt-3'>
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
