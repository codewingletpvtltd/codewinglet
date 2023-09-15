import { FC, memo } from 'react';
import Typography from '../../../Typography';
import { SummaryInfoProps } from '../../types';

const SummaryInfo: FC<SummaryInfoProps> = ({ title, value }) => (
  <div className='flex row items-center gap-[8px]'>
    <Typography
      variant='subtitle2'
      className='text-primary font-[700] md:text-[16px] lg:text-[18px]'
    >
      {title}
    </Typography>
    <Typography
      variant='subtitle2'
      className='text-lightBlack md:text-[16px] lg:text-[18px]'
    >
      {value}
    </Typography>
  </div>
);

export default memo(SummaryInfo);
