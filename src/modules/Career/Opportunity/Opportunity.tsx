/* eslint-disable import/order */
import { Arrow } from '@codewinglet/assets';
import { SectionHeader } from '@codewinglet/components';
import Image from 'next/image';
import Link from 'next/link';

const Opportunity = () => (
  <div className='bg-white lg:mt-[86px] mt-[90px]'>
    <div className='bg-dot-pattern mx-auto flex gap-[100px] items-center justify-between pt-5'>
      <div className='w-[874px] ml-64 pl-[15px]'>
        <SectionHeader
          title={<>Explore internal Opportunity</>}
          description="In today's fast-paced digital world, mobile apps are the go-to solution for businesses to engage with customers. Empower your business to deliver exactly what users crave."
          descriptionClassName='text-secondary'
          headingClassName='!text-h1'
        />
        <div className='lg:flex cursor-pointer text-primary mt-[30px] items-center group gap-2.5 hidden'>
          <Link href='/' target='_blank' className='text-paragraph2 underline'>
            Explore service
          </Link>
          <Arrow className='group-hover:transition-all duration-700 group-hover:translate-x-1' />
        </div>
      </div>
      <div>
        <Image
          src='/assets/career/cHero.png'
          alt='cHero'
          width={791}
          height={509}
        />
      </div>
    </div>
  </div>
);

export default Opportunity;
