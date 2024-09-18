/* eslint-disable import/order */
'use client';
import { Typography } from '@codewinglet/components';
import Reveal from '@codewinglet/components/Reveal';
import AboutCount from './AboutCount';

type ListItemProps = {
  number: string | React.ReactNode;
  label: string | React.ReactNode;
};

const data = [
  {
    number: 60,
    label: 'Happy Clients',
  },
  {
    number: 80,
    label: 'Successful Projects',
  },
  {
    number: 7,
    label: 'Years in the IT Industry',
  },
  {
    number: '100%',
    label: 'Client’s satisfaction',
  },
];

const ListItem = ({ data }: { data: ListItemProps[] }) => (
  <>
    {data.map(({ number, label }, index) => (
      <div key={index} className='relative lg:mb-[50px] last:lg:mb-0 mb-0'>
        <Typography className='xl:text-h4 md:text-h4 text-h5 text-white flex item-center  '>
          {typeof number === 'number' ? (
            <>
              <AboutCount number={number} />+
            </>
          ) : (
            <Typography>{number}</Typography>
          )}
        </Typography>
        <Typography className=' text-white lg:text-paragraph1 md:text-paragraph1ExtraLight text-paragraph2Light'>
          {label}
        </Typography>
      </div>
    ))}
  </>
);

const Statistics = () => (
  <>
    <Reveal>
      <div className='lg:mt-0 lg:mb-0 mt-5 mb-20 lg:block grid grid-cols-2 lg:gap-0 md:gap-5 gap-4'>
        <ListItem data={data} />
      </div>
    </Reveal>
  </>
);

export default Statistics;
