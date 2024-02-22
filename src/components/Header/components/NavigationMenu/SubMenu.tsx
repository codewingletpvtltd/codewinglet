import { FC } from 'react';
import Button from '@codewinglet/components/Button';

import Typography from '@codewinglet/components/Typography';
import { SubMenuContentProps } from '../../types';
import ListItem from './ListItem';

export const ServicesContent: FC<SubMenuContentProps> = ({
  childItems,
  index,
}) => (
  <>
    <ul className='grid grid-rows-5 grid-flow-col grid-cols-[30% 28% 41%] gap-9 after:content after:absolute after:top-[12%] after:left-[31%] after:bg-dropBorder after:w-[1px] after:h-[80%] before:content before:absolute before:top-[12%] before:left-[58%] before:bg-dropBorder before:w-[1px] before:h-[80%]'>
      {childItems.map((menu, menuIdx) => (
        <ListItem
          key={`menu-header-${index}-${menuIdx}`}
          icon={menu.icon}
          label={menu.label}
          // description={menu.description}
          isHeader
        />
      ))}
    </ul>
    <div className='bg-[#F4F4F4] flex items-center absolute right-[30px] bottom-[30px] w-[35%] p-[20px]'>
      <Typography className='text-body2 text-primary w-[56%]'>
        Get free consultation from our industry experts
      </Typography>
      <Button className='bg-primary w-[156px] m-[initial] ml-[40px]'>
        Let's Talk
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
    <ul className='grid grid-cols-3 gap-9 after:content after:absolute after:top-[12%] after:left-[32%] after:bg-dropBorder after:w-[1px] after:h-[80%] before:content before:absolute before:top-[12%] before:left-[65%] before:bg-dropBorder before:w-[1px] before:h-[80%]'>
      {childItems.map((menu, menuIdx) => (
        <ListItem
          key={`menu-header-${index}-${menuIdx}`}
          icon={menu.icon}
          label={menu.label}
          // description={menu.description}
          isHeader
        />
      ))}
    </ul>
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
