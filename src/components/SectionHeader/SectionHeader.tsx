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
  showDescription = true,
}) => (
  <div className={wrapperClassName}>
    <Typography
      variant='body1'
      className={getClassNames(
        'text-primary font-300 mb-41 text-[22px] md:text-[32px] lg:text-[40px] xl:text-[50px]',
        headingClassName
      )}
    >
      {title}
    </Typography>
    {showDescription && (
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
    )}
  </div>
);
export default React.memo(SectionHeader);
