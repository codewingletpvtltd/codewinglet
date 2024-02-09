import Image from 'next/image';
import { SectionHeader, Typography } from '@codewinglet/components';
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
  <section className='bg-white py-20'>
    <div className='max-w-[1410px] w-full px-[15px] mx-auto'>
      <SectionHeader
        title={<>Industries We Serve</>}
        description={
          <>
            "Here, we make almost every genre of applications. <br /> You name
            it and we build it."
          </>
        }
        headingClassName=''
      />

      <div className='grid grid-cols-4 gap-[30px] pt-10'>
        {INDUCARD.map((card) => (
          <>
            <div>
              <Image src={card.image} alt='Menu Icon' className='w-full' />
              <Typography variant='h6' className='text-black mt-3'>
                {card.title}
              </Typography>
            </div>
          </>
        ))}
      </div>
    </div>
  </section>
);

export default ContactUs;
