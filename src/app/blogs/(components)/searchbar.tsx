/* eslint-disable import/order */
import { Button, Typography } from '@codewinglet/components';
import Dropdown from '@codewinglet/components/DropDown/DropDown';
import Image from 'next/image';

const BlogSearch = () => {
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
    <div className='bg-white lg:mt-[86px] md:mt-[90px] mt-[78px] fixed top-0 w-full z-10 shadow-custom'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto flex justify-between items-center py-[13px]'>
        <Typography className='lg:block md:hidden block'>All blog</Typography>
        <div className='flex'>
          <div className='relative'>
            <Image
              src='/assets/icons/Search.svg'
              alt='Search'
              width={24}
              height={24}
              className='absolute lg:left-[14px] left-0 top-1/2 transform -translate-y-1/2'
            />
            <input
              type='text'
              placeholder='Search your blog here'
              className='md:w-[383px] w-5 placeholder:text-secondary lg:border lg:border-headerBoxBorder lg:py-[13px] py-2.5 lg:pl-[58px] pl-[38px] text-paragraph2Light focus:outline-0'
            />
          </div>
          <Button
            type='submit'
            variant='default'
            className='px-5 !py-[13px] ml-5 lg:block hidden'
          >
            Search
          </Button>
        </div>
        <div className='lg:hidden md:block hidden'>
          <Dropdown options={checkboxData} buttonText='All Blogs' />
        </div>
      </div>
    </div>
  );
};

export default BlogSearch;
