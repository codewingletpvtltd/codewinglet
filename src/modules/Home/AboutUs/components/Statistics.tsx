import Image from 'next/image';
import { Typography } from '@codewinglet/components';

type ListItemProps = {
  number: string | React.ReactNode;
  label: string | React.ReactNode;
};

const data = [
  {
    number: '150+',
    label: 'Happy Clients across the globe',
  },
  {
    number: '250+',
    label: <>Successful Projects</>,
  },
  {
    number: '7+',
    label: 'years in the IT Industry',
  },
  {
    number: (
      <>
        100%{' '}
        <Image
          src={'/assets/icons/rating.svg'}
          alt='rating'
          className='ml-[8px]'
          width={18}
          height={18}
        />
      </>
    ),
    label: 'Client’s satisfaction',
  },
];

const ListItem = ({ data }: { data: ListItemProps[] }) => (
  <>
    {data.map(({ number, label }, index) => (
      <li key={index} className='relative mb-[30px]'>
        <Typography
          variant='h3'
          className=' text-white flex item-center !font-500'
        >
          {number}
        </Typography>
        <Typography className=' text-white md:text-body2 text-subtitle2'>
          {label}
        </Typography>
      </li>
    ))}
  </>
);

const Statistics = () => (
  <ul className='doubleXl:mt-[60px] xl:mt-[0] mt-2.5 lg:block md:block grid grid-cols-2'>
    <ListItem data={data} />
  </ul>
);

export default Statistics;
