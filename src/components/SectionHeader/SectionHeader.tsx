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
}) => (
  <div>
    <Typography
      variant='h4'
      className={getClassNames(
        'text-primary text-[22px] md:text-[32px] lg:text-[40px] xl:text-[50px] font-300 leading-7 lg:leading-[62px] mb-41',
        headingClassName
      )}
    >
      {title}
    </Typography>
    <Typography
      variant='subtitle2'
      className={getClassNames(
        'text-lightBlack md:text-body2',
        descriptionTextWrap ? 'md:w-[70%] lg:w-[40%]' : '',
        descriptionClassName
      )}
    >
      {description}
    </Typography>
  </div>
);
export default React.memo(SectionHeader);
