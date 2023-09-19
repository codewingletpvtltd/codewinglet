import { FC, memo } from 'react';
import { animated } from '@react-spring/web';
import { Typography } from '@codewinglet/components';
import { HeadingProps } from '../types';
import useAnimation from '../useAnimation';

const Heading: FC<HeadingProps> = ({ title }) => {
  const { cardOneRef, cardOneSprings } = useAnimation();
  return (
    <animated.div
      className='flex row items-center justify-between mt-[29px] mb-[17px]'
      ref={cardOneRef}
      style={cardOneSprings}
    >
      <div>
        <Typography variant='h5' className='!font-[800]'>
          {title}
        </Typography>
      </div>
    </animated.div>
  );
};

export default memo(Heading);
