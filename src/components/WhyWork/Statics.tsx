import Image from 'next/image';
import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';

import Button from '../ui/Button';
import Typography from '../Typography';

const workData = [
  {
    image: '/assets/comman/best-quality.png',
    title: 'Best quality',
    description:
      'Our track record of excellent work positions as the top choice for all your IT requirements.',
  },
  {
    image: '/assets/comman/committed.png',
    title: 'Committed',
    description:
      'Were committed to innovative IT solutions that meet clients expectations.',
  },
  {
    image: '/assets/comman/timely-support.png',
    title: 'Timely Support',
    description:
      'Our support team is available whenever you need assistance, ensuring minimal downtime.',
  },
  {
    image: '/assets/comman/professional.png',
    title: 'Professional',
    description:
      'Were experts in IT, crafting professional solutions just for you with skill and care.',
  },
  {
    image: '/assets/comman/user-centered.png',
    title: 'User centered',
    description:
      'We focus on creating user-friendly designs to provide the best experience for everyone.',
  },
  {
    image: '/assets/comman/teamwork.png',
    title: 'Teamwork',
    description:
      'We values teamwork, crafting tailored solutions that excel and deliver top results.',
  },
];

const Statics = () => (
  <>
    <hr className='border-headerBoxBorder mt-10 mb-[30px] lg:hidden md:block hidden' />
    <div className='lg:hidden md:grid grid-cols-2 gap-[30px] hidden'>
      {workData.map((workData, i) => (
        <div className='bg-white p-3' key={i}>
          <Image
            src={workData.image}
            alt='Menu Icon'
            className='w-full object-cover object-center transition-transform duration-500 hover:scale-110'
            width={305}
            height={151}
          />
          <Typography className='text-paragraph1 pt-3 pb-2.5'>
            {workData.title}
          </Typography>
          <Typography className='text-paragraph2Light text-placeholderText'>
            {workData.description}
          </Typography>
        </div>
      ))}
    </div>
    <Button
      className='w-[231px] m-auto md:mt-10 mt-16 lg:hidden md:flex block'
      variant='default'
    >
      <Link
        href='/contact-us'
        rel='noopener noreferrer'
        className='flex items-center justify-center gap-3'
      >
        Let's connect
        <Arrow />
      </Link>
    </Button>
  </>
);

export default Statics;
