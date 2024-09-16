import { FC } from 'react';

import Typography from '../../Typography';
import { ReviewProps } from '../types';

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
