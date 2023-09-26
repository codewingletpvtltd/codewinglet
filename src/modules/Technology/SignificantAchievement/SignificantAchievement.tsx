'use client';

import { BackgroundDonutShadow, BgWave, StarIcon } from '@codewinglet/assets';
import { SectionHeader, Slider } from '@codewinglet/components';
import { md } from '@codewinglet/constants/mediaQueryConst';
import { useScreenSize } from '@codewinglet/hooks';
import { getClassNames } from '@codewinglet/utils';
import { getStrapiMediaFullURL } from '@codewinglet/helper';
import { Card } from './components';
import { sliderConfig } from './utils';
import { SignificantAchievementProps } from './types';
import { achievements } from './constants';

const SignificantAchievement: React.FC<SignificantAchievementProps> = ({
  technologyName,
}) => {
  const isLarge = useScreenSize(md);

  return (
    <div
      className={getClassNames(
        'py-[50px] px-[20px] md:px-[38px] relative',
        !isLarge ? 'bg-aliceBlue z-30' : ''
      )}
    >
      {isLarge && (
        <BgWave className='z-[-1] absolute top-0 bottom-0 left-0 h-[100%] w-[100%] ' />
      )}
      <StarIcon className='absolute hidden md:block right-12 top-[69px] lg:w-[54px] lg:h-[53px] xl:w-[69px] xl:h-[69px] 2xl:w-[92px] 2xl:h-[91px] animate-spin' />
      <div className='max-w-screen-xl xl:mx-auto'>
        <SectionHeader
          title={
            <>
              <strong className='font-800'>Significant</strong> Achievement
            </>
          }
          description={`Our company achieved remarkable milestones, driving innovative solutions and delivering cutting-edge ${technologyName} development services, securing top positions in the industry.`}
          descriptionTextWrap
        />
        <Slider
          settings={sliderConfig}
          arrowPosition={
            isLarge
              ? { horizontal: 'top', vertical: 'right' }
              : { horizontal: 'bottom', vertical: 'center' }
          }
        >
          {achievements.map((data, index) => (
            <div
              className='py-[27px] px-[23px] !w-[calc(100%-24px)] !h-[250px] !flex flex-col self-center !my-[30px] !mx-[12px] bg-white rounded-10 shadow-lg lg:!h-[300px] xl:!h-[250px]'
              key={`achievements-${index}`}
            >
              <Card
                title={data.title}
                icon={getStrapiMediaFullURL(data.icon.data.attributes.url)}
                desc={data.description}
                slideIndex={(index + 1).toString().padStart(2, '0')}
              />
            </div>
          ))}
        </Slider>
      </div>
      <BackgroundDonutShadow className='absolute hidden bottom-[36px] left-[94px] w-[75px] h-[75px] xl:block xl:left-[8px] 2xl:left-[37px] 2xl:w-[101px] 2xl:h-[101px]' />
    </div>
  );
};

export default SignificantAchievement;
