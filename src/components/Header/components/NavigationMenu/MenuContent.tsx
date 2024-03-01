import { FC, memo } from 'react';
// import Image from 'next/image';
import { getClassNames } from '@codewinglet/utils';
// import Typography from '@codewinglet/components/Typography';
// import { whyjoin } from '@codewinglet/assets';
import { MenuContentProps } from '../../types';

const MenuContent: FC<MenuContentProps> = ({
  wrapperClassName,
  children,
  className = '',
}) => (
  <div
    className={getClassNames(
      'absolute hidden group-hover:animate-enterFromTop ',
      wrapperClassName
    )}
  >
    <div
      className={getClassNames(
        'bg-white h-max p-[30px] gap-[15px] top-[100%] mt-[34px] z-10 2xl:min-w-[1380px] xl:min-w-[1250px] 2xl:max-w-[1380px] xl:max-w-[1250px] w-full border-dropBorder border rounded-sm',
        className
      )}
    >
      {children}
    </div>
    {/* <div className='w-6/12'>
      <Typography className='text-h4'>Why Join Us?</Typography>
      <Image src={whyjoin} alt='whyjoin' className='my-[22px]' />
      <Typography> How to get started</Typography>
      <Typography className='text-subtitle2'>
        Jump right in — get an overview of the basics and get started on
        building.
      </Typography>
    </div> */}
  </div>
);

export default memo(MenuContent);
