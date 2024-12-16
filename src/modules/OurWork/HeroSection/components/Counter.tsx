'use client';
import { Typography } from '@codewinglet/components';
import AboutCount from '@codewinglet/modules/Home/AboutUs/components/AboutCount';

type ListItemProps = {
  number: string | React.ReactNode;
  label: string | React.ReactNode;
};

const data = [
  {
    number: 60,
    label: 'Happy clients across the globe',
  },
  {
    number: 7,
    label: 'Years in the IT Industry',
  },
  {
    number: 80,
    label: 'Projects successfully completed',
  },

  {
    number: '100%',
    label: 'Client’s satisfaction with our work',
  },
];

const ListItem = ({ data }: { data: ListItemProps[] }) => (
  <>
    {data.map(({ number, label }, index) => (
      <div
        key={index}
        className='relative after:content after:absolute after:w-[1px] after:top-[26px] md:after:-right-0 after:-right-4 after:h-[75px] lg:after:bg-white/20 last:after:bg-transparent'
      >
        <div className='xl:text-h2 md:text-h4 text-[30px] text-white flex item-center'>
          {typeof number === 'number' ? (
            <>
              <AboutCount number={number} />+
            </>
          ) : (
            <Typography>{number}</Typography>
          )}
        </div>
        <Typography className='text-white lg:text-subtitle2Light md:text-paragraph1ExtraLight text-tagLight font-light lg:pr-[90px]'>
          {label}
        </Typography>
      </div>
    ))}
  </>
);

const Counter = () => (
  <>
    <div className='lg:mt-28 md:mt-56 mt-[78px] lg:flex md:gap-16 gap-[30px] grid md:grid-cols-2'>
      <ListItem data={data} />
    </div>
  </>
);

export default Counter;
