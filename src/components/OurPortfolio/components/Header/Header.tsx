import { FC } from 'react';
import Typography from '@codewinglet/components/Typography/Typography';
import { RightArrow } from '@codewinglet/assets';
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
    <RightArrow />
  </div>
);

export default Header;
