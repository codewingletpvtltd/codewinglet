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
    title: 'Real Estate',
  },
  {
    image: travel,
    title: 'Tour & Travel',
  },
  {
    image: healthcare,
    title: 'Healthcare',
  },
  {
    image: eCommerce,
    title: 'E-commerce',
  },
  {
    image: edTech,
    title: 'Ed-tech',
  },
  {
    image: crm,
    title: 'CRM-ERM',
  },
  {
    image: finance,
    title: 'Finance',
  },
  {
    image: social,
    title: 'Social Networking',
  },
  {
    image: food,
    title: 'Food & Delivery',
  },
  {
    image: fitness,
    title: 'Health & Fitness',
  },
  {
    image: shopping,
    title: 'Shopping',
  },
  {
    image: event,
    title: 'Event & Ticket',
  },
];

const ContactUs = () => (
  <section className='bg-white sm:py-20 py-10'>
    <div className='max-w-[1410px] w-full px-[15px] mx-auto'>
      <SectionHeader
        title={<>Industries We Serve</>}
        description={
          <>
            "Here, we make almost every genre of applications. You name it and
            we build it."
          </>
        }
        headingClassName=''
      />

      <div className='grid sm:grid-cols-4 grid-cols-2 sm:gap-[30px] gap-5 sm:mt-12 mt-7'>
        {INDUCARD.map((card) => (
          <>
            <div>
              <Image src={card.image} alt='Menu Icon' className='w-full' />
              <Typography className='text-black mt-3 sm:text-h6 text-subtitle2'>
                {card.title}
              </Typography>
            </div>
          </>
        ))}
      </div>
      <Button className='w-full text-black mt-[30px] sm:hidden block'>
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
