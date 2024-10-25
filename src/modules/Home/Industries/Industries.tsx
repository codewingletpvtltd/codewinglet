'use client';
import Image from 'next/image';

import { SectionHeader, Typography } from '@codewinglet/components';

const industriesCard = [
  {
    image: '/assets/industries/wasteManagement.png',
    title: 'Waste Management',
    mobileTitle: 'Waste Management',
    animation: '',
  },
  {
    image: '/assets/industries/sustainableSolution.png',
    title: 'Sustainable Solution',
    mobileTitle: 'Sustainable Solution',
  },
  {
    image: '/assets/industries/staffingManagement.png',
    title: 'Staffing Management',
    mobileTitle: 'Staffing Management',
  },
  {
    image: '/assets/industries/eCommerces.png',
    title: 'E-commerce',
    mobileTitle: 'E-commerce',
  },
  {
    image: '/assets/industries/healthcares.png',
    title: 'Healthcare',
    mobileTitle: 'Healthcare',
  },
  {
    image: '/assets/industries/logistics.png',
    title: 'Logistics',
    mobileTitle: 'Logistics',
  },
  {
    image: '/assets/industries/edTechs.png',
    title: 'EdTech',
    mobileTitle: 'Ed-Tech',
  },
  {
    image: '/assets/industries/fintech.png',
    title: 'Fintech',
    mobileTitle: 'Fintech',
  },
  {
    image: '/assets/industries/manufacturingRetails.png',
    title: 'Manufacturing & Retails',
    mobileTitle: 'Manufacturing',
  },
  {
    image: '/assets/industries/realEstates.png',
    title: 'Real Estate',
    mobileTitle: 'Real Estate',
  },
  {
    image: '/assets/industries/travelHospitality.png',
    title: 'Travel & Hospitality',
    mobileTitle: 'Travel & Hospitality',
  },
  {
    image: '/assets/industries/mediaEntertainment.png',
    title: 'Media & Entertainment',
    mobileTitle: 'Entertainment',
  },
];

const ContactUs = () => (
  <section
    className='bg-white xl:py-20 lg:py-14 md:py-[60px] py-10 scroll-mt-40'
    id='industry'
  >
    <div className='container w-full lg:px-[15px] sm:px-[30px] px-5 mx-auto'>
      <SectionHeader
        title={<>Industries we work</>}
        description={
          <>
            Diverse industry experience to accelerate your business outcomes
            industries
          </>
        }
        headingClassName=''
      />

      <div className='grid lg:grid-cols-4 grid-cols-2 md:mt-10 md:mb-0 sm:gap-[30px] gap-5 lg:mt-[50px] my-5'>
        {industriesCard.map((card) => (
          <>
            <div>
              <div className='w-full overflow-hidden cursor-pointer'>
                <Image
                  src={card.image}
                  alt='Menu Icon'
                  className='w-full object-cover object-center transition-transform duration-500 hover:scale-110'
                  width={800}
                  height={800}
                />
              </div>
              <Typography className='text-primary mt-3 lg:text-subtitle2 md:text-subtitle2 text-tagLight'>
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
