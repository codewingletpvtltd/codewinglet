import Image from 'next/image';
import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import { SectionHeader } from '@codewinglet/components';

const Opportunity = () => (
  <div className='bg-white lg:pt-[134px] md:pt-[138px] pt-[136px]' id='career'>
    <div className='bg-dot-pattern mx-auto lg:flex block gap-[100px] 2xl:items-center items-end justify-between md:pt-5 pt-10'>
      <div className='2xl:w-[874px] md:w-[680px] 2xl:ml-64 lg:ml-20 md:ml-10 md:pl-[15px] pl-5 md:pr-0 pr-5 2xl:py-0 lg:py-[74px]'>
        <SectionHeader
          title={<>Join the Codewinglet Team</>}
          description='At Codewinglet, experience a vibrant work culture that encourages innovation and fosters personal growth while contributing to cutting-edge software development in a supportive and engaging environment.'
          headingClassName='lg:!text-h1 md:!text-h2 !text-subtitle2'
          descriptionClassName='text-secondary md:text-subtitle2Light'
        />
        <div className='flex cursor-pointer text-primary mt-[30px] items-center group gap-2.5'>
          <Link
            href='#jobs'
            target='_parent'
            className='text-paragraph2 underline'
          >
            Current Openings
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
