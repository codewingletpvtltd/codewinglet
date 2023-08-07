import React from 'react';
import { getClassNames } from '@codewinglet/utils';
import Typography from '../Typography';
import Button from '../Button';
import { ServiceCardProps } from './types';

const ServiceCard: React.FC<ServiceCardProps> = ({
  cardIcon,
  cardTitle,
  cardContent,
  cardClass,
  cardIconClass,
  cardTitleClass,
  cardContentClass,
  buttonText = 'Button',
  onClick,
  ...rest
}) => (
  <div
    className={getClassNames(
      `ServiceCard-root 
      flex flex-col gap-4
      p-[24px] 
      rounded-[10px]
       bg-white 
       shadow-md 
       xs:w-[337px] 
       md:w-[463px] 
       lg:w-[350px] 
       xl:w-[402px]
      ${cardClass}`
    )}
    onClick={onClick}
    {...rest}
  >
    <div className='ServiceCard-header flex gap-3'>
      <div
        className={getClassNames(
          `ServiceCard-img-cont 
          rounded-[50%] 
          cursor-pointer 
          border
          w-[48px] h-[48px]
          xl:w-[58px] xl:h-[58px] 
          lg:w-[50px] lg:h-[50px] 
          md:w-[58px] md:h-[58px] 
          xs:w-[48px] xs:h-[48px] 
          ${cardIconClass}`
        )}
      >
        {cardIcon}
      </div>
      <div
        className={'ServiceCard-title-cont flex justify-center items-center'}
      >
        <Typography
          variant='body2'
          className={getClassNames(
            `flex font-800 
            justify-center items-center 
            flex-wrap 
            md:text-[20px] 
            lg:text-[18px] 
            xl:text-[20px]
            xs:text-[14px]
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
          `text-left text-lightBlack 
          line-clamp-5 
          xs:text-subtitle2 
          sm:text-subtitle1 
          md:text-body2  
          ${cardContentClass}`
        )}
      >
        {cardContent}
      </Typography>
    </div>

    <div className={getClassNames('ServiceCard-button')}>
      <Button text={buttonText} />
    </div>
  </div>
);

export default ServiceCard;
