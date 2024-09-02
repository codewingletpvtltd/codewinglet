/* eslint-disable import/order */
'use client';
import { getClassNames } from '@codewinglet/utils';
import React from 'react';
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
      className={getClassNames(
        'mb-41 md:text-h2 sm:text-h3 text-subtitle2 text-primary !font-500',
        headingClassName
      )}
    >
      {title}
    </Typography>
    {showDescription && (
      <Typography
        className={getClassNames(
          'text-primary lg:text-subtitle2Light md:text-subtitle2Light text-tagLight mt-[9px] md:mt-1.5',
          descriptionTextWrap ? 'md:w-[70%] lg:w-[40%]' : '',
          descriptionClassName
        )}
      >
        {description}
      </Typography>
    )}
  </div>
);
export default SectionHeader;
