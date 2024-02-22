import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Arrow, diverse } from '@codewinglet/assets';
import Button from '@codewinglet/components/Button';
import Typography from '@codewinglet/components/Typography';
import { SubMenuContentProps } from '../../types';
import ListItem from './ListItem';

export const ServicesContent: FC<SubMenuContentProps> = ({
  childItems,
  index,
}) => (
  <>
    <ul className='grid grid-rows-5 grid-flow-col grid-cols-[30% 27.7% 42.3%] gap-9 after:content after:absolute after:top-[12%] after:left-[34%] after:bg-dropBorder after:w-[1px] after:h-[82%] before:content before:absolute before:top-[12%] before:left-[61%] before:bg-dropBorder before:w-[1px] before:h-[82%]'>
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
      <Typography className='text-body2 text-primary font-400 w-[60%]'>
        Get free consultation from our industry experts
      </Typography>
      <Button className='bg-primary w-[156px] m-[initial] ml-[40px]'>
        <Link
          href='#'
          rel='noopener noreferrer'
          target='_blank'
          className='flex items-center justify-center gap-3'
        >
          Let's Talk <Arrow />
        </Link>
      </Button>
    </div>
  </>
);

export const TechnologyContent = () => <h1>TechnologyContent Menu</h1>;
export const IndustryContent: FC<SubMenuContentProps> = ({
  childItems,
  index,
}) => (
  <>
    <div className='flex'>
      <ul className='grid grid-rows-4 grid-flow-col grid-cols-[29%_32%_29%] gap-6  before:content before:absolute before:top-[12%] before:left-[69%] before:bg-dropBorder before:w-[1px] before:h-[80%]'>
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
      <div>
        <Typography className='text-[28px] text-primary font-300 mb-2.5'>
          Diverse Capabilities
        </Typography>
        <Typography className='text-dropdownText font-300 text-[14px] mb-2.5'>
          that deploy customized solution in a wide range of industries
        </Typography>
        <Image src={diverse} alt='whyjoin' />
        <Typography className='subtitle1 mt-2.5'>How to get started</Typography>
        <Typography className='text-dropdownText font-300 text-subtitle2 mb-2.5'>
          Read our developments that has helped the supply chain industry bool
          in India
        </Typography>
        <Button className='bg-primary w-[258px] m-[initial]'>
          <Link
            href='#'
            rel='noopener noreferrer'
            target='_blank'
            className='flex items-center justify-center gap-3'
          >
            Consult Codewinglet <Arrow />
          </Link>
        </Button>
      </div>
    </div>
  </>
);

export const CompanyContent: FC<SubMenuContentProps> = ({
  childItems,
  index,
}) => (
  <>
    <h5>Company Menu</h5>
    {/* {childItems.map((menu, menuIdx) => (
      <li key={`menu-header-${index}-${menuIdx}`}>
        <ul className='grid grid-flow-row gap-[15px]'>
          <ListItem
            icon={menu.icon}
            label={menu.label}
            description={menu.description}
            isHeader
          />
        </ul>
      </li>
    ))} */}
  </>
);
