import { FC } from 'react';
import { RightArrow } from '@codewinglet/assets';
import Typography from '../../../Typography';
import { HeaderProps } from '../../types';

const Header: FC<HeaderProps> = ({ title, description }) => (
  <div className='flex row items-center justify-between mt-[29px] mb-[17px]'>
    <div>
      <Typography variant='subtitle1' className='!font-[800]'>
        {title}
      </Typography>
      <Typography variant='body2' className='!text-[14px] text-gray'>
        {description}
      </Typography>
    </div>
    <RightArrow className='hover:rotate-[-30deg] hover:transition-transform' />
  </div>
);

export default Header;
