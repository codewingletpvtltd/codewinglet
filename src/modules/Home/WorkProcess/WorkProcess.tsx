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
  <section className='m-soft'>
    <div className='container'>
      <SectionHeader
        title={<>Our Work Process</>}
        description={
          <>
            "Here, we make almost every genre of applications. <br /> You name
            it and we build it."
          </>
        }
        headingClassName=''
      />

      <div className='our-card'>
        {PROCESS.map((card) => (
          <>
            <div className='soft-card'>
              <Typography variant='h1' className='soft-head'>
                {card.number}
              </Typography>
              <Typography variant='h5' className='soft-subhead'>
                {card.title}
              </Typography>
              <Typography variant='body2' className='soft-des'>
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
