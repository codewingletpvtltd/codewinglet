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
  <section className='relative py-[80px] bg-[#F5F5F5]'>
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

      <div className='grid gap-[30px] grid-cols-3 mt-12'>
        {PROCESS.map((card) => (
          <>
            <div className='soft-card p-10 bg-white hover:bg-primary hover:text-white'>
              <Typography
                variant='h1'
                className='soft-head !text-[50px] font-700 leading-[50px] relative text-transparent after:content after:absolute after:bottom-2.5 after:left-[70px] after:w-[30px] after:h-[2px] after:bg-primary hover:after:bg-white after:duration-[0.9s] after:transition-all after:ease-in'
              >
                {card.number}
              </Typography>
              <Typography
                variant='h5'
                className='text-[18px] font-500  mb-3 mt-3'
              >
                {card.title}
              </Typography>
              <Typography variant='subtitle2' className='m-0'>
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
