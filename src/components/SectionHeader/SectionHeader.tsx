import React from 'react';
import { getClassNames } from '@codewinglet/utils';
import Typography from '../Typography';
import { SectionHeaderProps } from './types';

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  headingClassName = '',
  descriptionTextWrap,
  descriptionClassName = '',
  wrapperClassName = '',
}) => (
  <div className={wrapperClassName}>
    <Typography
      variant='h4'
      className={getClassNames(
        'text-primary !text-[22px] md:!text-[32px] lg:!text-[40px] xl:!text-[50px] font-300 leading-7 lg:leading-[62px] mb-41',
        headingClassName
      )}
    >
      {title}
    </Typography>
    <Typography
      variant='subtitle2'
      className={getClassNames(
        'text-lightBlack md:text-body2 text-[14px] md:text-[16px] lg:text-[18px]',
        descriptionTextWrap ? 'md:w-[70%] lg:w-[40%]' : '',
        descriptionClassName
      )}
    >
      {description}
    </Typography>
  </div>
);
export default React.memo(SectionHeader);
