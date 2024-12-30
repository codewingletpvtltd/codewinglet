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
  showDescription = true,
}) => (
  <div>
    <Typography
      variant='h1'
      className={getClassNames(
        'mb-41 md:text-[36px] sm:text-h3 text-subtitle2 text-primary !font-500',
        headingClassName
      )}
    >
      {title}
    </Typography>
    {showDescription && (
      <Typography
        className={getClassNames(
          'text-primary md:text-paragraph1Light text-tagLight mt-1.5',
          descriptionTextWrap ? 'md:w-[70%] lg:w-2/5' : '',
          descriptionClassName
        )}
      >
        {description}
      </Typography>
    )}
  </div>
);
export default SectionHeader;
