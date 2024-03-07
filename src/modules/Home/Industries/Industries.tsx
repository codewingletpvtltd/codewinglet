import Image from 'next/image';
import Link from 'next/link';
import { Button, SectionHeader, Typography } from '@codewinglet/components';

const INDUCARD = [
  {
    image: '/assets/industries/wasteManagement.png',
    title: 'Waste Management',
    mobileTitle: 'Waste Management',
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
  <section className='bg-white xl:py-20 lg:py-14 py-10'>
    <div className='container w-full lg:px-[15px] sm:px-[30px] px-[15px] mx-auto'>
      <SectionHeader
        title={<>Industries We Serve</>}
        description={
          <>Diverse Industry Experience to accelerate Your Business Outcomes</>
        }
        headingClassName=''
      />

      <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-[30px] gap-5 lg:my-[50px] my-5'>
        {INDUCARD.map((card, i) => (
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
              <Typography className='text-primary md:mt-3 mt-2.5 lg:text-subtitle2 md:text-body2 sm:text-body2 text-tagLight'>
                {card.title}
                {/* <div className='block sm:hidden'>{card.mobileTitle}</div> */}
              </Typography>
            </div>
          </>
        ))}
      </div>
      <Button
        className='w-[333px] mt-[30px] block border-primary m-auto text-center'
        variant='outline'
      >
        <Link
          href='#'
          rel='noopener noreferrer'
          target='_blank'
          className='text-black text-center flex items-center justify-center gap-3'
        >
          Talk to our industry expert
          <Image
            src={'/assets/icons/BlackArrow.svg'}
            alt='BlackArrow'
            className=''
            width={18}
            height={18}
          ></Image>
        </Link>
      </Button>
    </div>
  </section>
);

export default ContactUs;
