import React from 'react';
import Typography from '../Typography';
import { SectionHeaderProps } from './types';

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  headingClassName,
}) => (
  <div>
    <Typography
      variant='h4'
      className={`text-primary text-[22px] md:text-[32px] lg:text-[40px] xl:text-[50px] font-300 leading-7 lg:leading-[62px] mb-4 ${headingClassName}`}
    >
      {title}
    </Typography>
    <Typography variant='subtitle2' className='text-lightBlack md:text-body2'>
      {description}
    </Typography>
  </div>
);
export default React.memo(SectionHeader);
