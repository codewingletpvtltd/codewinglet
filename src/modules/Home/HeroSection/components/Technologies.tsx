import Image from 'next/image';
import { memo } from 'react';
import { animated } from '@react-spring/web';
import { Slider } from '@codewinglet/components';
import { getClassNames } from '@codewinglet/utils/cn';
import useAnimation from '@codewinglet/utils/useAnimation';
import { settings, techList } from './utils';

const Technologies = () => {
  const { fadeOutRef, fadeOutSprings } = useAnimation();
  const AnimatedImage = animated(Image);
  return (
    <Slider
      hideArrow
      className='my-[50px] mx-[20px] md:mx-[38px] max-w-screen-xl xl:mx-auto'
      settings={settings}
    >
      {techList.map((tech, index) => (
        <div
          key={`tech-${index}`}
          className={getClassNames(
            '!h-[55px] !w-[55px] !flex items-center justify-center xl:!h-[80px] xl:!w-[80px] 2xl:!h-[86px] 2xl:!w-[86px] !my-[30px] !mx-[12px] self-center'
          )}
        >
          <AnimatedImage
            alt=''
            src={tech.image}
            className='h-[55px] w-[55px] xl:h-[80px] xl:w-[80px] 2xl:h-[86px] 2xl:w-[86px]'
            style={fadeOutSprings}
            ref={fadeOutRef}
          />
        </div>
      ))}
    </Slider>
  );
};

export default memo(Technologies);
