import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@codewinglet/components/Button';
import Typography from '@codewinglet/components/Typography';
import { SubMenuContentProps } from '../../types';
import ListItem from './ListItem';

export const ServicesContent: FC<SubMenuContentProps> = ({
  childItems,
  index,
}) => (
  <>
    <ul className='grid grid-rows-5 grid-flow-col 2xl:grid-cols-[31%_27%_25%] xl:grid-cols-[31%_29%_25%] 2xl:gap-9 xl:gap-[20px] after:content after:absolute after:top-[12%] after:left-[32%] after:bg-dropBorder after:w-[1px] after:h-[82%] before:content before:absolute before:top-[12%] before:left-[61%] before:bg-dropBorder before:w-[1px] before:h-[82%]'>
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
    <div className='bg-[#F4F4F4] flex items-center absolute right-[30px] bottom-[30px] w-[35%] p-[20px]'>
      <Typography className='text-[17px] text-primary font-400 w-[60%]'>
        Get consultation from our Service experts
      </Typography>
      <Button className='bg-primary w-[210px] m-[initial]'>
        <Link
          href='#'
          rel='noopener noreferrer'
          target='_blank'
          className='flex items-center justify-center gap-3'
        >
          Schedule a Call
          <Image
            src={'/assets/icons/Arrow.svg'}
            alt='Arrow'
            width={16}
            height={16}
          />
        </Link>
      </Button>
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
              href={val.path ? val.path : '/not-found'}
              hasMenu
            />
          ))}
        </ul>
      ))}
    </ul>
    <div className='bg-[#F4F4F4] flex items-center justify-between right-[30px] bottom-[30px] w-full p-2.5 mt-9 pl-6'>
      <Typography className='text-body2 text-primary font-400 w-[60%]'>
        Get consultation from our Technical experts
      </Typography>
      <Button className='bg-primary w-[208px] m-[initial]'>
        <Link
          href='#'
          rel='noopener noreferrer'
          target='_blank'
          className='flex items-center justify-center gap-3'
        >
          Schedule a Call
          <Image
            src={'/assets/icons/Arrow.svg'}
            alt='Arrow'
            width={16}
            height={16}
          />
        </Link>
      </Button>
    </div>
  </>
);

export const IndustryContent: FC<SubMenuContentProps> = ({
  childItems,
  index,
}) => (
  <>
    <div className='flex 2xl:gap-3 xl:gap-10'>
      <ul className='w-[935px] grid grid-rows-4 grid-flow-col grid-cols-[35%_22%_35%] gap-6 before:content before:absolute before:top-[12%] before:left-[65%] before:bg-dropBorder before:w-[1px] before:h-[80%]'>
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
        <Typography className='text-[28px] text-primary font-300 mb-2.5'>
          Our Industry experts
        </Typography>
        <Typography className='text-dropdownText font-300 text-[14px] mb-2.5'>
          Get consultation from our Industry experts
        </Typography>
        <Image
          src={'/assets/icons/Diverse.svg'}
          alt='whyjoin'
          className='max-w-none mb-5 w-full'
          width={500}
          height={500}
        />
        <Button className='bg-primary w-[211px] m-[initial]'>
          <Link
            href='#'
            rel='noopener noreferrer'
            target='_blank'
            className='flex items-center justify-center gap-3'
          >
            Schedule a Call
            <Image
              src={'/assets/icons/Arrow.svg'}
              alt='Arrow'
              width={16}
              height={16}
            />
          </Link>
        </Button>
      </div>
    </div>
  </>
);
