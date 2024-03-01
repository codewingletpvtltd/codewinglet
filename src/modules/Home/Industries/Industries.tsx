import Image from 'next/image';
import Link from 'next/link';
import { Button, SectionHeader, Typography } from '@codewinglet/components';

const INDUCARD = [
  {
    image: '/assets/industries/wasteManagement.png',
    title: 'Waste Management',
  },
  {
    image: '/assets/industries/sustainableSolution.png',
    title: 'Sustainable Solution',
  },
  {
    image: '/assets/industries/staffingManagement.png',
    title: 'Staffing Management',
  },
  {
    image: '/assets/industries/eCommerces.png',
    title: 'E-commerce',
  },
  {
    image: '/assets/industries/healthcares.png',
    title: 'Healthcare',
  },
  {
    image: '/assets/industries/logistics.png',
    title: 'Logistics',
  },
  {
    image: '/assets/industries/edTechs.png',
    title: 'EdTech',
  },
  {
    image: '/assets/industries/fintech.png',
    title: 'Fintech',
  },
  {
    image: '/assets/industries/manufacturingRetails.png',
    title: 'Manufacturing & Retails',
  },
  {
    image: '/assets/industries/realEstates.png',
    title: 'Real Estate',
  },
  {
    image: '/assets/industries/travelHospitality.png',
    title: 'Travel & Hospitality',
  },
  {
    image: '/assets/industries/mediaEntertainment.png',
    title: 'Media & Entertainment',
  },
];

const ContactUs = () => (
  <section className='bg-secondary xl:py-20 lg:py-14 py-10'>
    <div className='container w-full lg:px-[15px] sm:px-[30px] px-[15px] mx-auto'>
      <SectionHeader
        title={<>Industries We Serve</>}
        description={
          <>Diverse Industry Experience to accelerate Your Business Outcomes</>
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
                className='w-full h-[200px]'
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
