import Image from 'next/image';
import { memo } from 'react';
import {
  circle_dna,
  content_stack,
  infineo,
  junomoneta,
  magics,
  ninja_van,
  prime_lab,
  vidiren,
} from '@codewinglet/assets';
import { SectionHeader } from '@codewinglet/components';
import { getClassNames } from '@codewinglet/utils';

const clientLogo = [
  vidiren,
  infineo,
  content_stack,
  magics,
  ninja_van,
  prime_lab,
  junomoneta,
  circle_dna,
];

const OurClient = () => (
  <section className='relative overflow-hidden py-[50px] lg:py-[80px] xl:py-[120px] 2xl:py-[80px] 2xl:!pb-[80px]  px-[20px]'>
    <section className='max-w-screen-xl md:w-full  mx-auto'>
      <SectionHeader
        title={<>Our Clients</>}
        description='"Our Global Clients"'
        headingClassName='text-[22px]'
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
            className='w-full flex items-center justify-center h-[130px] p-[35px] our-client'
          >
            <Image
              src={img}
              alt='client-logo'
              className='object-contain h-full w-full '
            />
          </div>
        ))}
      </div>
    </section>
  </section>
);
export default memo(OurClient);
