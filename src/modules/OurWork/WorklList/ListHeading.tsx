'use client';
import { Typography } from '@codewinglet/components';
import Dropdown from '@codewinglet/components/DropDown/DropDown';

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

const ListHeading = () => (
  <>
    <div className='bg-white py-10 pb-5'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
        <div className='flex justify-between lg:flex-row flex-col gap-5'>
          <Typography className='lg:text-h2 md:text-[36px] text-subtitle2 text-primary'>
            Our Works{' '}
            <span className='md:text-paragraph1ExtraLight text-tagExtraLight'>
              (20)
            </span>
          </Typography>
          <div className='flex gap-5'>
            <div>
              <Typography className='lg:text-paragraph1Light md:text-paragraph2 text-tag pb-2'>
                Service
              </Typography>
              <Dropdown
                options={checkboxData}
                buttonText='All'
                buttonClassName='!bg-bg text-secondary text-tagLight lg:w-[270px] md:w-[216px] w-[98px]'
              />
            </div>
            <div>
              <Typography className='lg:text-paragraph1Light md:text-paragraph2 text-tag pb-2'>
                Industry
              </Typography>
              <Dropdown
                options={checkboxData}
                buttonText='All'
                buttonClassName='!bg-bg text-secondary text-tagLight lg:w-[270px] md:w-[216px] w-[98px]'
              />
            </div>
            <div>
              <Typography className='lg:text-paragraph1Light md:text-paragraph2 text-tag pb-2'>
                Technology
              </Typography>
              <Dropdown
                options={checkboxData}
                buttonText='All'
                buttonClassName='!bg-bg text-secondary text-tagLight lg:w-[270px] md:w-[216px] w-[98px]'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default ListHeading;
