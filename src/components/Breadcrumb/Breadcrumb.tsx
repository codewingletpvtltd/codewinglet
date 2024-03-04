import { FC } from 'react';
import Image from 'next/image';
import Typography from '../Typography/Typography';
import { BreadcrumbProps } from './types';

const Breadcrumb: FC<BreadcrumbProps> = ({ breadcrumbs }) => (
  <ol className='flex flex-row items-center justify-center gap-[10px]'>
    {breadcrumbs.map((data, index) => (
      <>
        <li key={`breadcrumb-${index}`}>
          <Typography
            variant='subtitle2'
            className='text-lightBlack font-[500] uppercase lg:text-[16px]'
          >
            {data}
          </Typography>
        </li>
        <li className='last-of-type:hidden'>
          <Image
            src={'/assets/icons/BreadcrumbSeparator.svg'}
            alt='BreadcrumbSeparator'
            width={24}
            height={24}
          />
        </li>
      </>
    ))}
  </ol>
);

export default Breadcrumb;
