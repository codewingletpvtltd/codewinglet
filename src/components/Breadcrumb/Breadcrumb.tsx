import { FC } from 'react';

import Typography from '../Typography/Typography';
import { BreadcrumbProps } from './types';

const Breadcrumb: FC<BreadcrumbProps> = ({ breadcrumbs }) => (
  <ol className='flex flex-row items-center justify-center gap-2.5'>
    {breadcrumbs.map((breadcrumb, index) => (
      <>
        <li
          key={`breadcrumb-${index}`}
          className='first:text-gray-800 text-gray-400 first:flex-shrink-0'
        >
          <Typography className='text-paragraph2Light font-normal'>
            {breadcrumb}
          </Typography>
        </li>
        <li className='last-of-type:hidden first:text-gray-800 text-gray-400'>
          {index < breadcrumbs.length - 1 && <span>/</span>}
        </li>
      </>
    ))}
  </ol>
);

export default Breadcrumb;
