import { Typography } from '@codewinglet/components';

import { ServiceCardProps } from './constants';

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className='bg-primary p-[30px] lg:mb-10 mb-[25px] last:mb-0 flex gap-5 group cursor-pointer'>
    <div className='bg-white/10 lg:w-[70px] lg:h-[70px] w-[60px] h-[60px] group-hover:bg-white flex items-center justify-center mb-[26px] flex-shrink-0'>
      <div className='text-white group-hover:text-black'>{icon}</div>
    </div>
    <div>
      <Typography className='lg:text-subtitle2 text-paragraph1 pb-2 text-white'>
        {title}
      </Typography>
      <Typography className='lg:text-paragraph2Light text-paragraph2Light text-secondary'>
        {description}
      </Typography>
    </div>
  </div>
);

export default ServiceCard;
