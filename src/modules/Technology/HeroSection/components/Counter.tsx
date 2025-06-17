'use client';
import { Typography } from '@codewinglet/components';
import AboutCount from '@codewinglet/modules/Home/AboutUs/components/AboutCount';

type ListItemProps = {
  number: string | React.ReactNode;
  label: string | React.ReactNode;
};

const data = [
  {
    number: 7,
    label: 'Years experience',
  },
  {
    number: 80,
    label: 'Successful Projects',
  },
  {
    number: '100%',
    label: 'Client satisfaction',
  },
];

const ListItem = ({ data }: { data: ListItemProps[] }) => (
  <>
    {data.map(({ number, label }, index) => (
      <div
        key={index}
        className='relative after:content after:absolute after:w-[1px] after:top-3 md:after:-right-8 after:-right-4 after:h-[52px] after:bg-white/20 last:after:bg-transparent'
      >
        <div className='xl:text-h4 md:text-h4 text-paragraph1 text-white flex item-center'>
          {typeof number === 'number' ? (
            <>
              <AboutCount number={number} />+
            </>
          ) : (
            <Typography>{number}</Typography>
          )}
        </div>
        <Typography className='text-white lg:text-paragraph1 md:text-paragraph1ExtraLight text-tagExtraLight font-light'>
          {label}
        </Typography>
      </div>
    ))}
  </>
);

const Counter = () => (
  <>
    <div className='lg:mt-28 mt-5 flex md:gap-16 gap-12 md:pb-20 pb-10'>
      <ListItem data={data} />
    </div>
  </>
);

export default Counter;
