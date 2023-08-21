import { FC } from 'react';
import Typography from '../../../Typography';
import { InfoProps } from '../../types';

const Info: FC<InfoProps> = ({ icon, title, detail }) => (
  <div className='flex row'>
    {icon}
    <div>
      <Typography variant='body2' className='font-[800]'>
        {title}
      </Typography>
      <Typography variant='subtitle1' className='text-[14px] text-lightBlack'>
        {detail}
      </Typography>
    </div>
  </div>
);

export default Info;
