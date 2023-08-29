import React from 'react';
import { getClassNames } from '@codewinglet/utils/cn';
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
        'text-primary !text-[22px] leading-[27px] md:!text-[32px] md:leading-[39px] lg:!text-[40px] lg:leading-[49px] xl:!text-[50px] xl:leading-[62px] font-300 mb-41',
        headingClassName
      )}
    >
      {title}
    </Typography>
    <Typography
      variant='subtitle2'
      className={getClassNames(
        'text-lightBlack md:text-body2 text-[14px] leading-[20px] md:text-[16px] md:leading-[22px] lg:text-[18px] lg:leading-[30px] mt-[9px] md:mt-[4px] lg:mt-[8px] xl:mt-[15px]',
        descriptionTextWrap ? 'md:w-[70%] lg:w-[40%]' : '',
        descriptionClassName
      )}
    >
      {description}
    </Typography>
  </div>
);
export default React.memo(SectionHeader);
