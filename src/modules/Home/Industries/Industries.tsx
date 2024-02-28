import Image from 'next/image';
import Link from 'next/link';
import { Button, SectionHeader, Typography } from '@codewinglet/components';

const INDUCARD = [
  {
    image: '/assets/industries/realEstate.png',
    title: 'Waste Management',
  },
  {
    image: '/assets/industries/travel.png',
    title: 'Sustainable IoT Solution',
  },
  {
    image: '/assets/industries/healthcare.png',
    title: 'Staffing Management',
  },
  {
    image: '/assets/industries/eCommerce.png',
    title: 'E-commerce',
  },
  {
    image: '/assets/industries/edTech.png',
    title: 'Healthcare',
  },
  {
    image: '/assets/industries/crm.png',
    title: 'Logistics',
  },
  {
    image: '/assets/industries/finance.png',
    title: 'Ed-Tech',
  },
  {
    image: '/assets/industries/social.png',
    title: 'Fintech',
  },
  {
    image: '/assets/industries/food.png',
    title: 'Manufacturing & Retails',
  },
  {
    image: '/assets/industries/fitness.png',
    title: 'Real Estate',
  },
  {
    image: '/assets/industries/shopping.png',
    title: 'Travel & Hospitality',
  },
  {
    image: '/assets/industries/event.png',
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
              <Image
                src={card.image}
                alt='Menu Icon'
                className='w-full'
                width={500}
                height={500}
              />
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
