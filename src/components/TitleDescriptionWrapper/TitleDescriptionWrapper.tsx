import React, { Fragment } from 'react';
import { getClassNames } from '@codewinglet/utils';
import Typography from '../Typography';
import { TitleDescriptionProps } from './types';

const TitleDescriptionWrapper: React.FC<TitleDescriptionProps> = ({
  highlight = [],
  title,
  titleClass,
  description,
  descriptionClass,
  ...rest
}) => {
  const titleWords = highlight
    ? title.split(' ').map((word, index) => {
        const isBold = highlight.includes(index);
        return (
          <Fragment key={`highlighted-word-${index}`}>
            <span
              key={index}
              className={`${isBold ? 'font-[800]' : 'font-[300]'} text-primary`}
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
      className={
        'TitleDescriptionWrapper-root flex justify-center flex-col gap-2'
      }
    >
      <Typography
        className={getClassNames(
          `flex flex-wrap items-baseline text-[50px] text-primary ${titleClass}`
        )}
        {...rest}
      >
        {titleWords}
      </Typography>
      <Typography
        className={getClassNames(
          `text-[18px] text-lightBlack ${descriptionClass}`
        )}
        {...rest}
      >
        {description}
      </Typography>
    </div>
  );
};

export default TitleDescriptionWrapper;
