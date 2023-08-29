import Image from 'next/image';
import { Slider } from '@codewinglet/components';
import { getClassNames } from '@codewinglet/utils/cn';
import { settings, techList } from './utils';

const Technologies = () => (
  <Slider
    hideArrow
    className='my-[50px] mx-[20px] md:mx-[38px] max-w-screen-xl xl:mx-auto'
    settings={settings}
  >
    {techList.map((tech, index) => (
      <div
        key={`tech-${index}`}
        className={getClassNames(
          '!h-[55px] !w-[55px] rounded-full !flex items-center justify-center xl:!h-[80px] xl:!w-[80px] 2xl:!h-[86px] 2xl:!w-[86px] !my-[30px] !mx-[12px] self-center',
          tech.bgColor
        )}
      >
        <Image
          alt=''
          src={tech.image}
          className='h-[35px] w-[35px] xl:h-[52px] xl:w-[52px] 2xl:h-[56px] 2xl:w-[56px]'
        />
      </div>
    ))}
  </Slider>
);

export default Technologies;
