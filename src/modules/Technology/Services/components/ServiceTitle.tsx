import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import { Button, SectionHeader } from '@codewinglet/components';
interface ServiceTitleProps {
  title: string;
  description: string;
  link: {
    linkText: string;
    url: string;
  };
}
function ServiceTitle({ title, description, link }: ServiceTitleProps) {
  return (
    <div>
      <div className='2xl:w-[634px] lg:w-[550px] lg:sticky lg:top-[230px]'>
        <SectionHeader
          title={<>{title}</>}
          description={<>{description}</>}
          headingClassName='text-white lg:!text-h2 md:!text-[36px] !text-subtitle2'
          descriptionClassName='text-white pt-3 !mt-0 lg:!text-subtitle2Light md:!text-paragraph1ExtraLight'
        />

        <Link
          className='md:w-auto w-full'
          href='/contact-us'
          aria-label='Instagram'
        >
          <Button
            variant='outline'
            className='md:w-[306px] w-full gap-2.5 lg:mt-[50px] mt-10'
          >
            {link.linkText}
            <Arrow />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ServiceTitle;
