import React from 'react';
import { getClassNames } from '@codewinglet/utils';
import Typography from '../Typography';
import { ServiceCardProps } from './types';

const ServiceCard: React.FC<ServiceCardProps> = ({
  cardIcon,
  cardTitle,
  cardContent,
  cardClass,
  cardIconClass,
  cardTitleClass,
  cardContentClass,
  onClick,
  ...rest
}) => (
  <div
    className={getClassNames(
      `ServiceCard-root flex flex-col gap-3 p-[24px] rounded-[10px] bg-white shadow-md
      ${cardClass}`
    )}
    onClick={onClick}
    {...rest}
  >
    <div className='ServiceCard-header flex gap-3'>
      <div
        className={getClassNames(
          `ServiceCard-img-cont rounded-[50%] w-[58px] h-[58px] cursor-pointer
          ${cardIconClass}`
        )}
      >
        {cardIcon}
      </div>
      <div className={'ServiceCard-title-cont'}>
        <Typography
          variant='body1'
          className={getClassNames(
            `flex font-800 justify-start items-center flex-wrap
            ${cardTitleClass}`
          )}
        >
          {cardTitle}
        </Typography>
      </div>
    </div>
    <div className={'ServiceCard-content'}>
      <Typography
        variant='body2'
        className={getClassNames(
          `text-left text-lightBlack line-clamp-5 ${cardContentClass}`
        )}
      >
        {cardContent}
      </Typography>
    </div>

    <div className={getClassNames('ServiceCard-button')}>{'button'}</div>
  </div>
);

export default ServiceCard;
