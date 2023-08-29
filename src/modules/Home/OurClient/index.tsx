import Image from 'next/image';
import {
  CircleSVG,
  LeftArrowsSVG,
  logo_1,
  logo_2,
  logo_3,
  logo_4,
  logo_5,
  logo_6,
} from '@codewinglet/assets';
import { SectionHeader } from '@codewinglet/components';
import { getClassNames } from '@codewinglet/utils/cn';

const clientLogo = [
  logo_1,
  logo_2,
  logo_3,
  logo_4,
  logo_5,
  logo_6,
  logo_6,
  logo_6,
];

const OurClient = () => (
  <section className='relative overflow-hidden py-[50px] lg:py-[80px] xl:py-[120px] 2xl:py-[138px] 2xl:!pb-[78px] bg-aliceBlue px-[20px]'>
    <section className='2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:w-full  mx-auto'>
      <SectionHeader
        title={
          <>
            <strong className='font-[800]'>Our</strong> Client
          </>
        }
        description='Our Global Clients'
        headingClassName='text-center text-[22px]'
        descriptionClassName='text-center'
      />
      <div
        className={getClassNames(
          'grid grid-cols-2 lg:grid-cols-4 [&>*]:border-r-[1px] [&>*]:border-b-[1px] pt-[37px] lg:pt-[60px]',
          '[&>:nth-child(2n)]:!border-r-0 [&>:nth-last-child(-n+2)]:border-b-0',
          '[&>*]:border-lightBlack/30 lg:[&>:nth-child(2n)]:!border-r-[1px] lg:[&>:not(:nth-last-child(-n+4))]:border-b-[1px] lg:[&>:nth-last-child(-n+4)]:!border-b-0 lg:[&>:nth-child(4n)]:!border-r-0'
        )}
      >
        {clientLogo.map((img, index) => (
          <div
            key={index}
            className='w-full  flex items-center justify-center h-[130px]'
          >
            <Image src={img} alt='' />
          </div>
        ))}
      </div>
    </section>
    <LeftArrowsSVG className='absolute right-0 w-[119px] h-[14px] top-[15px] lg:right-[-28px] lg:w-[142px] lg:h-[16px] lg:top-[38px] xl:w-[167px] xl:h-[19px] xl:top-[50px] xl:right-[-2px] 2xl:[56px] 2xl:w-[188px] 2xl:h-[22px]' />
    <CircleSVG className='absolute left-0 top-[67px] hidden lg:block lg:left-[-14px] h-[107px] w-[107px] xl:top-[400px] xl:right-[-19px] 2xl:right-[-25px] ' />
  </section>
);
export default OurClient;
