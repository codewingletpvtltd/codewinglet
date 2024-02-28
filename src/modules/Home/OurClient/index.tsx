import Image from 'next/image';
import { memo } from 'react';
import { SectionHeader } from '@codewinglet/components';
import { getClassNames } from '@codewinglet/utils';

const clientLogo = [
  '/assets/ourClient/vidiren.png',
  '/assets/ourClient/infineo.png',
  '/assets/ourClient/content_stack.png',
  '/assets/ourClient/magics.png',
  '/assets/ourClient/ninja_van.png',
  '/assets/ourClient/prime_lab.png',
  '/assets/ourClient/junomoneta.png',
  '/assets/ourClient/circle_dna.png',
];

const OurClient = () => (
  <section className='relative overflow-hidden lg:py-20 py-10 bg-white'>
    <section className='container w-full px-[15px] mx-auto'>
      <SectionHeader
        title={<>Our Clients</>}
        description='Our Global Clients'
        headingClassName='text-[22px]'
      />
      <div
        className={getClassNames(
          'grid grid-cols-2 lg:grid-cols-4 [&>*]:border-r-[1px] [&>*]:border-b-[1px] md:mt-12 mt-7 lg:pt-[60px]',
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
              width={500}
              height={500}
            />
          </div>
        ))}
      </div>
    </section>
  </section>
);
export default memo(OurClient);
