import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { Arrow } from '@codewinglet/assets';
import Button from '@codewinglet/components/Button';
import Typography from '@codewinglet/components/Typography';

import { SubMenuContentProps } from '../../types';
import ListItem from './ListItem';

export const ServicesContent: FC<SubMenuContentProps> = ({
  childItems,
  index,
}) => (
  <>
    <ul className='grid grid-rows-5 grid-flow-col 2xl:grid-cols-[31%_25%_25%] xl:grid-cols-[31%_25%_25%] 2xl:gap-9 xl:gap-5 xl:gap-x-[30px] after:content after:absolute 2xl:after:top-[13%] xl:after:top-[15%] after:left-[32%] after:bg-headerBoxBorder after:w-[1px] 2xl:after:h-[81%] xl:after:h-[78%] before:content before:absolute 2xl:before:top-[13%] xl:before:top-[15%] before:left-[58%] before:bg-headerBoxBorder before:w-[1px] 2xl:before:h-[81%] xl:before:h-[78%]'>
      {childItems.map((menu, menuIdx) => (
        <ListItem
          key={`menu-header-${index}-${menuIdx}`}
          icon={menu.icon}
          label={menu.label}
          description={menu.description}
          isHeader
        />
      ))}
    </ul>
    <div className='bg-[#F4F4F4] flex items-center absolute right-[30px] bottom-[30px] w-[37%] p-4 gap-2'>
      <Typography className='text-paragraph1Light text-primary w-3/5'>
        Get Consultation from our Service Experts
      </Typography>

      <Link
        href='/contact-us'
        rel='noopener noreferrer'
        target='_blank'
        className='flex items-center justify-center'
      >
        <Button
          variant='default'
          className='bg-primary w-[223px] m-[initial] gap-3 !text-paragraph1 text-white py-3'
        >
          Schedule a call
          <Arrow />
        </Button>
      </Link>
    </div>
  </>
);

export const TechnologyContent: FC<SubMenuContentProps> = ({
  childItems,
  index,
}) => (
  <>
    <ul className='grid grid-rows-1 grid-flow-col grid-cols-[30% 27.7% 42.3%] gap-9 '>
      {childItems.map((menu, menuIdx) => (
        <ul key={menu.label}>
          <ListItem
            key={`menu-header-${index}-${menuIdx}`}
            icon={menu.icon}
            label={menu.label}
            description={menu.description}
            isHeader
            hasMenu
          />

          {menu?.menu?.map((val, idx) => (
            <ListItem
              key={`menu-item-${index}-${menuIdx}-${idx}`}
              icon={val.icon}
              label={val.label}
              href={val.path ? val.path : ''}
              hasMenu
            />
          ))}
        </ul>
      ))}
    </ul>
    <div className='bg-[#F4F4F4] flex items-center justify-between right-[30px] bottom-[30px] w-full p-2.5 mt-9 pl-6'>
      <Typography className='text-paragraph1 text-primary w-[60%]'>
        Get consultation from our Technical experts
      </Typography>

      <Link
        href='/contact-us'
        rel='noopener noreferrer'
        target='_blank'
        className='flex items-center justify-center '
      >
        <Button
          variant='default'
          className='bg-primary w-[223px] m-[initial] gap-3 !text-paragraph1 text-white py-3'
        >
          Schedule a call
          <Arrow />
        </Button>
      </Link>
    </div>
  </>
);

export const IndustryContent: FC<SubMenuContentProps> = ({
  childItems,
  index,
}) => (
  <>
    <div className='flex 2xl:gap-3 xl:gap-10'>
      <ul className='w-[935px] grid grid-rows-4 grid-flow-col grid-cols-[35%_22%_35%] gap-6 before:content before:absolute before:top-[17%] 2xl:before:left-[65%] xl:before:left-[66%] before:bg-headerBoxBorder before:w-[1px] before:h-[75%]'>
        {childItems.map((menu, menuIdx) => (
          <ListItem
            key={`menu-header-${index}-${menuIdx}`}
            icon={menu.icon}
            label={menu.label}
            isHeader
          />
        ))}
      </ul>
      <div>
        <Typography className='text-h5 text-primary'>
          Our Industry experts
        </Typography>
        <Typography className='text-secondary text-tagLight mb-2.5'>
          Get consultation from our Industry experts
        </Typography>
        <Image
          src={'/assets/icons/Diverse.svg'}
          alt='whyjoin'
          className='max-w-none mb-5 w-full'
          width={500}
          height={500}
        />

        <Link
          href='/contact-us'
          rel='noopener noreferrer'
          target='_blank'
          className='flex items-center m-[initial]'
        >
          <Button variant='default' className='w-[211px]  gap-3'>
            Schedule a call
            <Arrow />
          </Button>
        </Link>
      </div>
    </div>
  </>
);
