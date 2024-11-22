import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import { Button, SectionHeader } from '@codewinglet/components';

function ServiceTitle() {
  return (
    <div>
      <div className='2xl:w-[634px] lg:w-[550px] lg:sticky lg:top-[230px]'>
        <SectionHeader
          title={<>Service we offered in Angular development</>}
          description={
            <>
              In today's fast-paced digital world, mobile apps are the go-to
              solution for businesses to engage with customers. Empower your
              business to deliver exactly what users crave.
            </>
          }
          headingClassName='text-white lg:!text-h2 md:!text-[36px] !text-subtitle2'
          descriptionClassName='text-white pt-3 !mt-0 lg:!text-subtitle2Light !text-paragraph1ExtraLight'
        />

        <Link
          className='md:w-auto w-full'
          href='/contact-us'
          aria-label='Instagram'
        >
          <Button
            variant='outline'
            className='w-[306px] gap-2.5 lg:mt-[50px] mt-10'
          >
            Book a free consulatation <Arrow />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ServiceTitle;
