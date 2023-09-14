import { FC, memo } from 'react';
import { Typography } from '@codewinglet/components';
import { HeadingProps } from '../types';

const Heading: FC<HeadingProps> = ({ title }) => (
  <div className='flex row items-center justify-between mt-[29px] mb-[17px]'>
    <div>
      <Typography variant='h5' className='!font-[800]'>
        {title}
      </Typography>
    </div>
  </div>
);

export default memo(Heading);
