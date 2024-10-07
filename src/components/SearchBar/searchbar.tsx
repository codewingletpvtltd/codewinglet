'use client';

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

import { Arrow } from '@codewinglet/assets';
import CloseIcon from '@codewinglet/assets/icons/CloseIcon';
import { BlogCategory, Button, Typography } from '@codewinglet/components';
import { useUrlParamState } from '@codewinglet/hooks';

export const BlogSearch = () => {
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

  const [inputValue, setInputValue] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setParamValue: setSearchParamValue } = useUrlParamState('search');
  const { setParamValue: setCategoryParamValue } = useUrlParamState('category');

  useEffect(() => {
    const searchQuery = searchParams.get('search');
    if (searchQuery) {
      setInputValue(searchQuery);
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setInputValue(query);
  };

  const handleSearch = () => {
    setSearchParamValue(encodeURIComponent(inputValue));
    setCategoryParamValue('');
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };
  const clearSearch = () => {
    setInputValue('');
    setSearchParamValue('');
  };

  return (
    <div className='bg-white md:mt-[86px] mt-[78px] fixed top-0 w-full z-10 shadow-custom'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto flex justify-between items-center lg:py-[13px] py-2.5'>
        <Typography className='lg:block hidden'>All blog</Typography>
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
              type='search'
              placeholder='Search your blog here'
              className='md:w-[383px] w-5 placeholder:text-secondary lg:border lg:border-headerBoxBorder pr-9 lg:py-[13px] py-2.5 lg:pl-[58px] pl-[38px] text-paragraph2Light focus:outline-0'
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            {inputValue && (
              <CloseIcon
                className='absolute right-2.5 top-[18px] cursor-pointer z-10'
                onClick={clearSearch}
              />
            )}
          </div>
          <Button
            type='submit'
            variant='default'
            className='px-5 !py-[13px] ml-5 lg:flex hidden gap-5'
            onClick={handleSearch}
          >
            Search
            <Arrow />
          </Button>
        </div>
        <div className='lg:hidden block'>
          {/* <Dropdown options={checkboxData} buttonText='All Blogs' /> */}
          <Suspense fallback={<div>Loading filter...</div>}>
            <BlogCategory />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
