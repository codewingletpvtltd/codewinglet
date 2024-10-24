import { Typography } from '@codewinglet/components';

import { ServiceCardProps } from './constants';

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className='bg-primary p-[30px] mb-10 last:mb-0 flex gap-5 group'>
    <div className='bg-white/10 w-[70px] group-hover:bg-white h-[70px] flex items-center justify-center mb-[26px] flex-shrink-0'>
      <div className='text-white group-hover:text-black'>{icon}</div>
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
