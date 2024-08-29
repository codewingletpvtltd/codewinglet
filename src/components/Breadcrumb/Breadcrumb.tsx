import Image from 'next/image';
import { FC } from 'react';
import Typography from '../Typography/Typography';
import { BreadcrumbProps } from './types';

const Breadcrumb: FC<BreadcrumbProps> = ({ breadcrumbs }) => (
  <ol className='flex flex-row items-center justify-center gap-2.5'>
    {breadcrumbs.map((data, index) => (
      <>
        <li key={`breadcrumb-${index}`}>
          <Typography
            variant='subtitle2'
            className='font-medium uppercase lg:text-4'
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
