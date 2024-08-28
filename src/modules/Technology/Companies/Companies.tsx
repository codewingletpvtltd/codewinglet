/* eslint-disable import/order */
'use client';
import Reveal from '@codewinglet/components/Reveal';

import Image from 'next/image';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';

const Companies = () => (
  <>
    <div className='bg-black lg:py-20 md:py-[60px] py-10'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
        <Reveal>
          <SectionHeader
            title={<>Companies that used this technology</>}
            description={
              <>
                Accelerating your product with next-gen technologies gen
                technologies Accelerating your product
              </>
            }
            headingClassName='text-white'
            descriptionClassName='text-secondary'
          />
        </Reveal>

        <div className='flex mt-[50px] relative'>
          <Image
            src='/assets/Technologies/pages/microsoft.svg'
            alt='microsoft'
            width={195}
            height={42}
            className='py-8 ml:mx-[100px] mx-[84px]'
          />
          <Image
            src='/assets/Technologies/pages/google.svg'
            alt='google'
            width={127}
            height={42}
            className='py-8 ml:mx-[100px] mx-[84px]'
          />
          <Image
            src='/assets/Technologies/pages/ibm.svg'
            alt='ibm'
            width={98}
            height={42}
            className='py-8 ml:mx-[100px] mx-[84px]'
          />
          <Image
            src='/assets/Technologies/pages/paypal.svg'
            alt='paypal'
            width={156}
            height={42}
            className='py-8 ml:mx-[100px] mx-[84px]'
          />
        </div>
      </div>
    </div>
  </>
);

export default Companies;
