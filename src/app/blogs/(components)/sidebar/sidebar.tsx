/* eslint-disable import/order */
import { Typography } from '@codewinglet/components';
import Image from 'next/image';
import SidebarCheckBox from './checkbox';

const BlogCategory = () => {
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
            <SidebarCheckBox key={item.value} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCategory;
