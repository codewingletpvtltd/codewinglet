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
  showDescription = true,
}) => (
  <div className={wrapperClassName}>
    <Typography
      className={getClassNames(
        'mb-41 lg:text-h2 md:text-h3 sm:text-h3 text-body1 text-primary !font-500',
        headingClassName
      )}
    >
      {title}
    </Typography>
    {showDescription && (
      <Typography
        className={getClassNames(
          'text-primary lg:text-h6 !font-300 md:text-subtitle2 text-subtitle1 mt-[9px] md:mt-[4px]',
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
