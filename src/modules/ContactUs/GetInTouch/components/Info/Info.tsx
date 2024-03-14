import { FC } from 'react';
import Typography from '../../../../../components/Typography';
import { InfoProps } from '../../../../Home/ContactUs/types';

const Info: FC<InfoProps> = ({ icon, title, detail }) => (
  <div className='flex row'>
    {icon}
    <div className='ml-[15px]'>
      <Typography variant='body2' className='font-600'>
        {title}
      </Typography>
      {detail}
    </div>
  </div>
);

export default Info;
