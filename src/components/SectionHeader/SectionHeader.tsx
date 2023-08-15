import React, { Fragment } from 'react';
import { getClassNames } from '@codewinglet/utils';
import Typography from '../Typography';
import { TitleDescriptionProps } from './types';

const SectionHeader: React.FC<TitleDescriptionProps> = ({
  highlight = [],
  title,
  description,
  className = '',
}) => {
  const titleWords = highlight
    ? title.split(' ').map((word, index) => {
        const isBold = highlight.includes(index);
        return (
          <Fragment key={`highlighted-word-${index}`}>
            <span
              key={index}
              className={getClassNames(
                isBold ? 'font-[800]' : 'font-[300]',
                'text-primary'
              )}
            >
              {word}
            </span>
            &nbsp;
          </Fragment>
        );
      })
    : title;

  return (
    <div
      className={getClassNames(
        `flex justify-center flex-col gap-[9px] md:gap-[5px] xl:gap-[15px] ${className}`
      )}
    >
      <Typography
        variant='h4'
        className='flex flex-wrap items-baseline text-primary text-[22px] md:text-[32px] lg:text-[40px] xl:text-[50px] font-300'
      >
        {titleWords}
      </Typography>
      <Typography
        variant='subtitle2'
        className='text-lightBlack leading-[20px] font-500 md:text-body2 md:leading-[30px] max-w-[460px]'
      >
        {description}
      </Typography>
    </div>
  );
};

export default React.memo(SectionHeader);
