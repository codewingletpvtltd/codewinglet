import Image from 'next/image';
import { SectionHeader, Typography } from '@codewinglet/components';
import {
  indus_01,
  indus_02,
  indus_03,
  indus_04,
  indus_05,
  indus_06,
  indus_07,
  indus_08,
  indus_09,
  indus_10,
  indus_11,
  indus_12,
} from '@codewinglet/assets';

const INDUCARD = [
  {
    image: indus_01,
    title: 'Real Estate',
  },
  {
    image: indus_02,
    title: 'Tour & Travel',
  },
  {
    image: indus_03,
    title: 'Healthcare',
  },
  {
    image: indus_04,
    title: 'E-commerce',
  },
  {
    image: indus_05,
    title: 'Ed-tech',
  },
  {
    image: indus_06,
    title: 'CRM-ERM',
  },
  {
    image: indus_07,
    title: 'Finance',
  },
  {
    image: indus_08,
    title: 'Social Networking',
  },

  {
    image: indus_09,
    title: 'Food & Delivery',
  },
  {
    image: indus_10,
    title: 'Health & Fitness',
  },
  {
    image: indus_11,
    title: 'Shopping',
  },
  {
    image: indus_12,
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
              <Typography
                variant='subtitle2'
                className='text-black !text-[20px] font-400 mt-3'
              >
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
