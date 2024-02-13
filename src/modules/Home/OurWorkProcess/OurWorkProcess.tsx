import { SectionHeader } from '@codewinglet/components';
import Typography from '../../../components/Typography';
import './scss/process.css';

const PROCESS = [
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
  <section className='relative sm:py-20 py-10 bg-secondary'>
    <div className='max-w-[1410px] w-full px-[15px] mx-auto'>
      <SectionHeader
        title={<>Our Work Process</>}
        description={
          <>
            "Here, we make almost every genre of applications. You name it and
            we build it."
          </>
        }
        headingClassName=''
      />

      <div className='grid sm:gap-[30px] gap-2.5 sm:grid-cols-3 grid-cols-2  sm:mt-12 mt-7'>
        {PROCESS.map((card) => (
          <>
            <div className='soft-card sm:p-10 p-2.5 bg-white hover:bg-primary hover:text-white'>
              <Typography
                variant='h1'
                className='soft-head !text-[50px] font-700 leading-[50px] relative text-transparent after:content after:absolute after:bottom-2.5 after:left-[70px] after:w-[30px] after:h-[2px] after:bg-primary hover:after:bg-white after:duration-[0.9s] after:transition-all after:ease-in'
              >
                {card.number}
              </Typography>
              <Typography className='sm:text-[18px] text-[12px] font-500  sm:mb-3 sm:mt-3 mb-1 mt-1'>
                {card.title}
              </Typography>
              <Typography className='m-0 sm:text-[15px] text-[12px] font-300'>
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
