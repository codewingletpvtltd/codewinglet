/* eslint-disable import/order */
'use client';

import Image from 'next/image';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import { getStrapiMediaFullURL } from '@codewinglet/helper';

interface BenefitProps {
  benefitData: any;
}

const Benefit = ({ benefitData }: BenefitProps) => (
  <>
    <div className='bg-white md:py-20 py-10 scroll-mt-40' id='benefit'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto lg:flex gap-[86px]'>
        <div className='lg:mt-14 relative lg:w-[655px]'>
          <SectionHeader
            title={benefitData?.heading}
            description={benefitData?.description}
            headingClassName='text-primary'
            descriptionClassName='text-secondary !text-paragraph1ExtraLight'
          />

          <ul className='md:mt-[70px] mt-10 flex flex-col gap-5'>
            {benefitData?.benefitsPoints.map((benefitPoint: any) => (
              <li
                key={benefitPoint?.id}
                className='relative !pl-12 md:p-5 p-4 text-primary bg-bg lg:w-fit md:text-subtitle2 text-tag'
              >
                <Image
                  src={'/assets/OurService/check.svg'}
                  alt='Arrow'
                  width={16}
                  height={16}
                  className='absolute left-5 md:top-7 top-5 sm:w-[16px] w-[15px]'
                />
                {benefitPoint?.text}
              </li>
            ))}
          </ul>
        </div>
        <div className='lg:w-[669px] lg:mt-0 mt-10'>
          <Image
            src={getStrapiMediaFullURL(
              benefitData?.benefitsImages[0].image.data.attributes.url
            )}
            alt={
              benefitData?.benefitsImages[0].image.data.attributes
                .alternativeText
            }
            width={669}
            height={737}
          />
        </div>
      </div>
    </div>
  </>
);
export default Benefit;
