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
      className={getClassNames('mb-41 sm:text-h2 text-body1', headingClassName)}
    >
      {title}
    </Typography>
    {showDescription && (
      <Typography
        className={getClassNames(
          'text-primary md:text-body2 text-subtitle1 mt-[9px] md:mt-[4px] ',
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
