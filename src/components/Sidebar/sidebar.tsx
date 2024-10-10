'use client';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Badge, SidebarCheckBox, Typography } from '@codewinglet/components';

export const BlogCategory = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const [totalCategories, setTotalCategories] = useState(0);

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
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (category) {
      const categories = category.split(' ');
      setSelectedCategories(categories);
      setTotalCategories(categories.length);
    } else {
      setSelectedCategories([]);
      setTotalCategories(0);
    }
  }, [category]);

  const handleCheckboxChange = (value: string) => {
    const newSelectedCategories = selectedCategories.includes(value)
      ? selectedCategories.filter((cat) => cat !== value)
      : [...selectedCategories, value];

    setSelectedCategories(newSelectedCategories);

    const uniqueCategories = Array.from(new Set(newSelectedCategories));
    const newSearchParams = new URLSearchParams(window.location.search);

    if (uniqueCategories.length > 0) {
      newSearchParams.set('category', uniqueCategories.join(','));
    } else {
      newSearchParams.delete('category');
    }

    newSearchParams.set('page', '1');

    const queryString = newSearchParams.toString().replace(/%2C/g, '+');

    router.push(`${pathname}?${queryString}`, { scroll: false });
  };

  return (
    <>
      <div className='w-[342px] lg:block hidden'>
        <Typography className='text-paragraph2 border-b border-headerBoxBorder pb-[15px]'>
          Blog Categories
        </Typography>
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

      <div className='lg:hidden block'>
        <div onClick={toggleDropdown}>
          <Badge content={totalCategories}>
            <Image
              src='/assets/icons/Filter.svg'
              alt='Filter'
              width={22}
              height={22}
              className='flex-shrink-0'
            />
          </Badge>
        </div>

        {isOpen && (
          <div className='absolute sm:right-[30px] right-5 top-[58px] w-[270px] mt-2 origin-top-right shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
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
        )}
      </div>
    </>
  );
};
