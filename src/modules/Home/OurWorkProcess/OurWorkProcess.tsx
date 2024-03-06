import { SectionHeader } from '@codewinglet/components';
import Typography from '../../../components/Typography';
import './scss/process.css';

const process = [
  {
    number: '01',
    title: 'Requirement Analysis',
    description:
      'Understand your needs, objectives, and the challenges the software aims, to address.',
  },
  {
    number: '02',
    title: 'Planning& Design',
    description:
      'Understand your needs, objectives, and the challenges the software aims, to address.',
  },
  {
    number: '03',
    title: 'Development',
    description:
      'Understand your needs, objectives, and the challenges the software aims, to address.',
  },
  {
    number: '04',
    title: 'Testing and QA',
    description:
      'Understand your needs, objectives, and the challenges the software aims, to address.',
  },
  {
    number: '05',
    title: 'Deployment',
    description:
      'Understand your needs, objectives, and the challenges the software aims, to address.',
  },
  {
    number: '06 ',
    title: 'Maintenance & Support',
    description:
      'Understand your needs, objectives, and the challenges the software aims, to address.',
  },
];

const ContactUs = () => (
  <section className='relative xl:py-20 lg:py-14 py-10 bg-bg'>
    <div className='container w-full lg:px-[15px] sm:px-[30px] px-[15px] mx-auto'>
      <SectionHeader
        title={<>Our Work Process</>}
        description={
          <>
            Here, we make almost every genre of applications. You name it and we
            build it.
          </>
        }
        headingClassName=''
      />

      <div className='grid sm:gap-[30px] gap-2.5 lg:grid-cols-3 grid-cols-2 lg:mt-[50px] md:mt-6 mt-7 process-card'>
        {process.map((card) => (
          <>
            <div className='soft-card xl:p-10 lg:p-7 md:p-8 sm:p-5 p-2.5 bg-white hover:bg-primary hover:text-white'>
              <Typography
                variant='h1'
                className='soft-head leading-[50px] relative after:content after:absolute after:bottom-2.5 sm:after:left-[70px] after:left-[60px] after:w-[30px] after:h-[2px] after:bg-primary hover:after:bg-white after:duration-[0.9s] after:transition-all after:ease-in'
              >
                {card.number}
              </Typography>
              <Typography className='sm:text-paragraph1 text-[12px] sm:mb-3 sm:mt-3 mb-1 mt-1 text-primary'>
                {card.title}
              </Typography>
              <Typography className='m-0 sm:text-paragraph2Light text-[12px] text-primary'>
                {card.description}
              </Typography>
            </div>
          </>
        ))}
      </div>
    </div>
  </section>
);

export default ContactUs;
