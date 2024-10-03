'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { SidebarCheckBox, Typography } from '@codewinglet/components';

export const BlogCategory = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  const checkboxData = [
    { label: 'Web Design', value: 'web_design' },
    { label: 'Product', value: 'product' },
    { label: 'Software Engineering', value: 'software-engineering' },
    { label: 'Customer Success', value: 'customer-success' },
    { label: 'React', value: 'react' },
    { label: 'Angular', value: 'angular' },
    { label: 'DevOps', value: 'devops' },
    { label: 'Cloud', value: 'cloud' },
    { label: 'Artificial Intelligence', value: 'ai' },
    { label: 'User interface design', value: 'user-interface-design' },
  ];

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    if (category) {
      setSelectedCategories(category.split(' '));
    }
  }, [category]);

  const handleCheckboxChange = (value: string) => {
    const newSelectedCategories = selectedCategories.includes(value)
      ? selectedCategories.filter((cat) => cat !== value)
      : [...selectedCategories, value];

    setSelectedCategories(newSelectedCategories);

    const uniqueCategories = Array.from(new Set(newSelectedCategories));
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.set('category', uniqueCategories.join(','));
    const queryString = newSearchParams.toString().replace(/%2C/g, '+');

    router.push(`${pathname}?${queryString}`);
  };

  return (
    <div className='w-[342px]'>
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
        <div className='mt-[15px] border-r border-headerBoxBorder overflow-y-auto'>
          {checkboxData.map((item, index) => (
            <SidebarCheckBox
              key={item.value}
              item={item}
              index={index}
              checked={selectedCategories.includes(item.value)}
              onChange={handleCheckboxChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
