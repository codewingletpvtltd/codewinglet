import Image from 'next/image';
import Link from 'next/link';
import { Button, SectionHeader, Typography } from '@codewinglet/components';

import {
  realEstate,
  travel,
  healthcare,
  eCommerce,
  edTech,
  crm,
  finance,
  social,
  food,
  fitness,
  shopping,
  event,
} from '@codewinglet/assets';

const INDUCARD = [
  {
    image: realEstate,
    title: 'Waste Management',
  },
  {
    image: travel,
    title: 'Sustainable IoT Solution',
  },
  {
    image: healthcare,
    title: 'Staffing Management',
  },
  {
    image: eCommerce,
    title: 'E-commerce',
  },
  {
    image: edTech,
    title: 'Healthcare',
  },
  {
    image: crm,
    title: 'Logistics',
  },
  {
    image: finance,
    title: 'Ed-Tech',
  },
  {
    image: social,
    title: 'Fintech',
  },
  {
    image: food,
    title: 'Manufacturing & Retails',
  },
  {
    image: fitness,
    title: 'Real Estate',
  },
  {
    image: shopping,
    title: 'Travel & Hospitality',
  },
  {
    image: event,
    title: 'Media & Entertainment',
  },
];

const ContactUs = () => (
  <section className='bg-secondary xl:py-20 lg:py-14 py-10'>
    <div className='container w-full lg:px-[15px] sm:px-[30px] px-[15px] mx-auto'>
      <SectionHeader
        title={<>Industries We Serve</>}
        description={
          <>
            Here, we make almost every genre of applications. You name it and we
            build it.
          </>
        }
        headingClassName=''
      />

      <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-[30px] gap-5 lg:mt-[50px] md:mt-6 mt-7'>
        {INDUCARD.map((card, i) => (
          <>
            <div className={i >= 6 ? 'sm:block hidden' : undefined}>
              <Image src={card.image} alt='Menu Icon' className='w-full' />
              <Typography className='text-primary mt-3 lg:text-h6 md:text-body2 sm:text-body2 text-subtitle2'>
                {card.title}
              </Typography>
            </div>
          </>
        ))}
      </div>
      <Button className='w-full text-primary mt-[30px] sm:hidden block'>
        <Link
          href='#'
          rel='noopener noreferrer'
          target='_blank'
          className='text-black'
        >
          View All
        </Link>
      </Button>
    </div>
  </section>
);

export default ContactUs;
