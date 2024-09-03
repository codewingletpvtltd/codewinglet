/* eslint-disable import/order */
'use client';
import Reveal from '@codewinglet/components/Reveal';
import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import { Button } from '@codewinglet/components';
import Counter from '@codewinglet/components/Counter';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';

const Insights = () => (
  <>
    <div className='bg-black lg:py-20 md:py-[60px] py-10'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
        <Reveal>
          <SectionHeader
            title={<>Powerful data insights</>}
            description={
              <>
                We boost business revenue by an average of 90% in the first
                year!
              </>
            }
            headingClassName='text-white'
            descriptionClassName='text-secondary'
          />
        </Reveal>

        <div className='lg:mt-[50px]'>
          <Counter />
          <Button className='sm:w-[231px] w-[203px] h-12 lg:m-auto 2xl:mt-[50px] xl:mt-10 flex m-auto '>
            <Link
              href='/contact-us'
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-3'
            >
              Let's connect
              <Arrow />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </>
);

export default Insights;
