'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

import { Arrow } from '@codewinglet/assets';
import CloseIcon from '@codewinglet/assets/icons/CloseIcon';
import { BlogCategory, Button, Typography } from '@codewinglet/components';
import { useUrlParamState } from '@codewinglet/hooks';

export const BlogSearch = () => {
  const [inputValue, setInputValue] = useState('');

  const searchParams = useSearchParams();
  const { setParamValue: setSearchParamValue } = useUrlParamState('search');
  const { setParamValue: setCategoryParamValue } = useUrlParamState('category');

  useEffect(() => {
    const searchQuery = searchParams.get('search');
    if (searchQuery) {
      setInputValue(decodeURIComponent(searchQuery));
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setInputValue(query);
  };

  const handleSearch = () => {
    const encodedValue = encodeURI(inputValue).replace(/%20/g, ' ');
    setSearchParamValue(encodedValue);
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
              className='md:w-[383px] sm:w-[290px] w-[250px] placeholder:text-secondary lg:border lg:border-headerBoxBorder sm:pr-9 pr-6 lg:py-[13px] py-2.5 lg:pl-[58px] pl-[38px] text-paragraph2Light focus:outline-0'
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            {inputValue && (
              <CloseIcon
                className='absolute right-2.5 sm:top-[18px] top-3 cursor-pointer z-10'
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
