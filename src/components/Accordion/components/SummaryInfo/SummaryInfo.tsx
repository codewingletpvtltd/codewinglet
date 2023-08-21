import { FC } from 'react';
import Typography from '../../../Typography';
import { SummaryInfoProps } from '../../types';

const SummaryInfo: FC<SummaryInfoProps> = ({ title, value }) => (
  <div className='flex row items-center gap-[8px]'>
    <Typography variant='subtitle2' className='text-primary font-[700]'>
      {title}
    </Typography>
    <Typography variant='subtitle2' className='text-lightBlack'>
      {value}
    </Typography>
  </div>
);

export default SummaryInfo;
