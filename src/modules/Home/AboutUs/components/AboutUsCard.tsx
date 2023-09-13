import { Typography } from '@codewinglet/components';
import { AboutUsCardProps } from '../types';
import { getClassNames } from '@codewinglet/utils/cn';

const AboutUsCard: React.FC<AboutUsCardProps> = ({
  icon,
  number,
  text,
  borderClassName,
  numberSuffix = '+',
}) => {
  return (
    <div
      className={getClassNames(
        'aboutUsCard shadow-aboutUsCardShadow flex flex-col items-center justify-center gap-1 py-[18px] px-[11px] bg-white rounded-10 relative overflow-hidden min-h-[158px] lg:min-h-[223px] xl:min-h-[256px] 2xl:min-h-[294px]'
      )}
    >
      <span className='h-[76px] w-[76px] 2xl:h-[80px] 2xl:w-[80px]'>
        {icon}
      </span>
      <Typography
        variant='h2'
        className='!text-[35px] lg:!text-[45px] text-black 2xl:!text-[50px]'
      >
        {number}
        {numberSuffix}
      </Typography>
      <Typography
        variant='subtitle2'
        className='text-center !font-500 text-black lg:!text-[18px]'
      >
        {text}
      </Typography>
      <span
        className={getClassNames(
          'absolute block w-full h-[4px] bottom-0',
          borderClassName
        )}
      />
    </div>
  );
};

export default AboutUsCard;
