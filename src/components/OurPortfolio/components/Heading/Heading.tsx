import { FC } from 'react';
import { Arrow } from '@codewinglet/assets';
import { COLORS } from '@codewinglet/constants';
import Typography from '../../../Typography';
import { HeadingProps } from '../../types';

const Heading: FC<HeadingProps> = ({ title, description }) => (
  <div className='flex row items-center justify-between mt-[29px] mb-[17px]'>
    <div>
      <Typography variant='subtitle1' className='!font-[800]'>
        {title}
      </Typography>
      <Typography variant='body2' className='!text-[14px] text-gray'>
        {description}
      </Typography>
    </div>
    <Arrow
      className='hover:rotate-[-30deg] hover:transition-transform'
      fill={COLORS.black}
    />
  </div>
);

export default Heading;
