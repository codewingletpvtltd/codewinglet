'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Typography } from '@codewinglet/components';

const LatestArticle = () => {
  const [clientDate, setClientDate] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  useEffect(() => {
    // Only run this on the client side, so the date is consistent
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setClientDate(date); // Set the formatted date on the client
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCheckboxChange = (checked: any) => {
    setIsChecked(checked);
  };

  const checkboxData = [
    { label: 'All Blogs', value: 'all' },
    { label: 'Web Design', value: 'web-design' },
    { label: 'Product', value: 'product' },
    { label: 'Software Engineering', value: 'software-engineering' },
    { label: 'Customer Success', value: 'customer-success' },
    { label: 'React', value: 'react' },
    { label: 'Angular', value: 'angular' },
    { label: 'DevOps', value: 'devops' },
    { label: 'Cloud', value: 'cloud' },
    { label: 'Artificial Intelligence', value: 'artificial-intelligence' },
    { label: 'User interface design', value: 'user-interface-design' },
  ];

  return (
    <div className='bg-white pt-10 lg:mt-[166px] md:mt-40 mt-[148px]'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto flex 2xl:gap-[55px] gap-[30px]'>
        <div className='w-[342px] lg:block hidden'>
          <Typography className='text-paragraph2 mb-5 border-b border-headerBoxBorder pb-[15px]'>
            Blog Categories
          </Typography>

          <div className='relative'>
            <Image
              src='/assets/icons/Search.svg'
              alt='Search'
              width={24}
              height={24}
              className='absolute left-[14px] top-1/2 transform -translate-y-1/2'
            />
            <input
              type='text'
              placeholder='Search your blog here'
              className='w-full placeholder:text-secondary border border-headerBoxBorder py-[13px] pl-[58px] text-paragraph2Light focus:outline-0'
            />
          </div>
          {/* <div className='mt-[15px] border-r border-headerBoxBorder overflow-y-auto'>
            {checkboxData.map((item, i) => (
              <div
                className='flex items-center gap-2 p-3.5 hover:bg-bg cursor-pointer'
                key={i}
              >
                <Checkbox
                  key={item.value}
                  label={item.label}
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
              </div>
            ))}
          </div> */}
        </div>
        <div className='w-[1013px]'>
          <Typography className='text-h6 mb-[37px]'>Latest article</Typography>

          <div className='flex md:flex-row flex-col 2xl:gap-[45px] gap-5'>
            <Image
              src='/assets/blog/article.png'
              alt='article'
              width={484}
              height={315}
              className='lg:w-[484px] w-[334px] 2xl:h-[315px] lg:h-[295px] h-[218px]'
            />

            <div className='2xl:py-[15px]'>
              <Typography className='text-secondary text-tag'>
                January 18, 2024 • 12 min read
              </Typography>
              <div className='flex justify-between items-start'>
                <Typography className='text-subtitle2 mt-2.5'>
                  Bill Walsh leadership lessons Bill Walsh leadership lessons
                </Typography>
                <Image
                  src='/assets/icons/crossArrow.svg'
                  alt='crossArrow'
                  width={11}
                  height={11}
                  className='mt-4'
                />
              </div>
              <Typography className='text-paragraph2Light text-secondary leading-[18px] md:leading-[22px] mt-4'>
                Extracting Insights from the Coaching Genius: Unveiling Bill
                Walsh's Timeless Leadership Principles <br /> <br /> Discover
                the Winning Strategies that Shaped a Dynasty and Transformed
                Leadership Philosophy Forever.
              </Typography>
              <ul className='flex gap-2 pt-[50px]'>
                <li className='text-secondary text-tagLight bg-bg border border-headerBoxBorder rounded-full py-0.5 px-2.5 w-fit'>
                  Management
                </li>
                <li className='text-secondary text-tagLight bg-bg border border-headerBoxBorder rounded-full py-0.5 px-2.5 w-fit'>
                  Project
                </li>
              </ul>
            </div>
          </div>
          <div className='border-b border-headerBoxBorder lg:pb-[45px] pb-10 mb-5'>
            <Typography className='text-h6 mb-[37px] mt-[60px]'>
              Resources and insights
            </Typography>
            <div className='grid md:grid-cols-2 grid-cols-1 lg:gap-[45px] gap-5 gap-y-[45px]'>
              {/* <BlogCard
                image='/assets/blog/blog_Img1.jpg'
                date={clientDate || 'Loading...'}
                title='Bill Walsh leadership lessons Bill Walsh leadership lessons'
                desc='Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?'
                imageSrc='/assets/icons/crossArrow.svg'
                imageAlt='crossArrow'
                className='!mx-0 !w-full'
              />
              <BlogCard
                image='/assets/blog/blog_Img1.jpg'
                date={clientDate || 'Loading...'}
                title='Bill Walsh leadership lessons Bill Walsh leadership lessons'
                desc='Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?'
                imageSrc='/assets/icons/crossArrow.svg'
                imageAlt='crossArrow'
                className='!mx-0 !w-full'
              />
              <BlogCard
                image='/assets/blog/blog_Img1.jpg'
                date={clientDate || 'Loading...'}
                title='Bill Walsh leadership lessons Bill Walsh leadership lessons'
                desc='Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?'
                imageSrc='/assets/icons/crossArrow.svg'
                imageAlt='crossArrow'
                className='!mx-0 !w-full'
              />
              <BlogCard
                image='/assets/blog/blog_Img1.jpg'
                date={clientDate || 'Loading...'}
                title='Bill Walsh leadership lessons Bill Walsh leadership lessons'
                desc='Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?'
                imageSrc='/assets/icons/crossArrow.svg'
                imageAlt='crossArrow'
                className='!mx-0 !w-full'
              /> */}
            </div>
          </div>
          <div className='md:mb-20 mb-10'>
            {/* REMINDER : */}
            {/* <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default LatestArticle;
