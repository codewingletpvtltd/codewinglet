import Image from 'next/image';

import { Typography } from '@codewinglet/components';

import { ServiceCardProps } from './constants';

const ServiceCard: React.FC<ServiceCardProps> = ({
  iconSrc,
  iconAlt,
  title,
  description,
}) => (
  <div className='bg-primary p-[30px] mb-10 last:mb-0 flex gap-5'>
    <div className='bg-white/10 w-[70px] h-[70px] flex items-center justify-center mb-[26px] flex-shrink-0'>
      <Image src={iconSrc} alt={iconAlt} width={28} height={28} />
    </div>
    <div>
      <Typography className='lg:text-subtitle2 text-tagBold pb-2 text-white'>
        {title}
      </Typography>
      <Typography className='lg:text-paragraph2Light text-tagBold text-secondary'>
        {description}
      </Typography>
    </div>
  </div>
);

export default ServiceCard;
