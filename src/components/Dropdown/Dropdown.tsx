import { FC } from 'react';
import Typography from '../Typography/Typography';
import { DropdownProps } from './types';
import Image from 'next/image';

const Dropdown: FC<DropdownProps> = ({ menuItems, showColHeader }) => {
  return (
    <div>
      <div className="relative content-[''] h-[20px] w-[20px] bg-white top-[9px] left-[45%] rotate-[45deg] shadow-[1px_1px_25px_0_rgba(0,0,0,0.08)]" />
      <div
        className={`bg-white relative bg-white rounded-10 shadow-[1px_1px_25px_0_rgba(0,0,0,0.08)] py-[47px] px-[39px] gap-x-[30px] grid grid-flow-col`}
      >
        {menuItems &&
          Object.entries(menuItems).map(([key, items], outerIndex) => {
            console.log(items);
            return (
              <div className='grid grid-flow-row gap-[15px]'>
                {showColHeader && (
                  <div
                    className='flex flex-row items-center py-2 border-b border-b-aqua'
                    key={`${key}${outerIndex}`}
                  >
                    {items.icon ? (
                      <Image src={items.icon} alt='' height={36} width={36} />
                    ) : (
                      <div className='h-[36px]' />
                    )}
                    <Typography
                      variant='body1'
                      className={`font-bold capitalize primary ${
                        items.icon && 'ml-[15px]'
                      }`}
                    >
                      {key}
                    </Typography>
                  </div>
                )}
                {items.items.map((item, index) => {
                  console.log(item);
                  return (
                    <div
                      className='flex flex-row items-center'
                      key={`${key}${outerIndex}-${index}`}
                    >
                      {item.icon ? (
                        <Image src={item.icon} alt='' height={36} width={36} />
                      ) : (
                        <div className='h-[36px]' />
                      )}
                      <Typography
                        variant='body2'
                        className={`font-bold capitalize primary text-darkGray ${
                          item.icon && 'ml-[15px]'
                        }`}
                      >
                        {item?.title}
                      </Typography>
                    </div>
                  );
                })}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Dropdown;
