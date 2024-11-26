import { Typography } from '@codewinglet/components';

import { ServiceCardProps } from '../constants';

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className='bg-primary md:p-[30px] p-[15px] lg:mb-10 md:mb-[25px] mb-[15px] last:mb-0 flex md:gap-5 gap-[15px] group cursor-pointer'>
    <div className='bg-white/10 lg:w-[70px] lg:h-[70px] md:w-[60px] w-9 md:h-[60px] h-9 group-hover:bg-white flex items-center justify-center mb-[26px] flex-shrink-0'>
      <div className='text-white group-hover:text-black'>{icon}</div>
    </div>
    <div>
      <Typography className='lg:text-subtitle2 md:text-paragraph1 text-tagLight md:pb-2 pb-1.5 text-white'>
        {title}
      </Typography>
      <Typography className='lg:text-paragraph2Light md:text-paragraph2Light text-tagExtraLight text-secondary'>
        {description}
      </Typography>
    </div>
  </div>
);

export default ServiceCard;
