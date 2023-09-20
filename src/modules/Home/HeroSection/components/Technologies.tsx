import Image from 'next/image';
import { memo } from 'react';
import { getClassNames } from '@codewinglet/utils/cn';
import { techList } from './utils';

const Technologies = () => (
  <div className='w-full overflow-auto md:px-[38px] xl:max-w-screen-xl xl:mx-auto no-scrollbar'>
    <div className='flex justify-between min-w-[787px] gap-[20px] my-[50px] mx-[20px] md:mx-auto md:gap-[40px] mt-[20px] md:mt-[30px] xl:mt-[50px] 2xl:mt-[120px]'>
      {techList.map((tech, index) => (
        <div
          key={`tech-${index}`}
          className={getClassNames(
            '!h-[60px] !w-[60px] !flex items-center justify-center xl:!h-[80px] xl:!w-[80px] 2xl:!h-[90px] 2xl:!w-[90px] self-center md:!h-[70px] md:!w-[70px]'
          )}
        >
          <Image
            alt=''
            src={tech.image}
            className='h-[55px] w-[55px] md:!h-[70px] md:!w-[70px] xl:h-[80px] xl:w-[80px] 2xl:h-[86px] 2xl:w-[86px]'
          />
        </div>
      ))}
    </div>
  </div>
);

export default memo(Technologies);
