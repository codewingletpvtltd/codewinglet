import { FC } from 'react';
import { ReviewProps } from '../types';
import Typography from '../../Typography';

const ClientDetails: FC<ReviewProps> = ({ name, designation }) => (
  <div className='mt-[35px] flex justify-between'>
    <Typography className='lg:text-paragraph1Light text-tag text-white'>
      {name}
    </Typography>
    <Typography className='lg:text-paragraph1Light text-tag text-white'>
      {designation}
    </Typography>
  </div>
);

export default ClientDetails;
