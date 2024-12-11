import Image from 'next/image';

import { SectionHeader, Typography } from '@codewinglet/components';
import { calculateReadTime, formatDate } from '@codewinglet/utils';

const BlogHeroSection = ({ blogData }: any) => (
  <>
    <div className='md:bg-bg bg-white lg:mt-[156px] mt-[132px] lg:py-20 md:py-[60px] py-5 w-full'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto lg:flex justify-between items-center'>
        <div className='lg:flex block gap-6 relative'>
          <div className='2xl:w-[693px] lg:w-[680px] w-full md:h-[440px] h-auto flex lg:justify-center flex-col md:mb-0 mb-4'>
            <Typography className='text-primary md:text-paragraph2Light text-tagLight lg:mt-[30px] md:mt-0 mb-4'>
              Published on {formatDate(blogData.createdAt)}
              <span className='text-headerBoxBorder px-3'>•</span>
              {calculateReadTime(blogData.content)}
            </Typography>
            <SectionHeader
              title={blogData.title}
              description={blogData.summary}
              headingClassName='text-primary text-h2 lg:max-w-[620px]'
              descriptionClassName='lg:max-w-[620px] md:mt-[26px] mt-2.5  md:!text-paragraph1ExtraLight text-tagExtraLight'
            />
          </div>

          {blogData.image && (
            <Image
              src={blogData.image.url}
              alt='blogHero'
              width={693}
              height={618}
              className='object-contain md:absolute lg:right-[15px] lg:-top-20 top-auto lg:left-full 2xl:w-[693px] lg:w-[576px] w-full 2xl:h-[618px] lg:h-[564px] md:h-[402px] h-[196px]'
              loading='lazy'
              quality={70}
            />
          )}
        </div>
      </div>
    </div>
  </>
);

export default BlogHeroSection;
