import Image from 'next/image';
import { rating } from '@codewinglet/assets/AboutUs';
import { Typography } from '@codewinglet/components';

type ListItemProps = {
  number: string | React.ReactNode;
  label: string | React.ReactNode;
};

const data = [
  {
    number: '250+',
    label: 'Successful Projects',
  },
  {
    number: '10+',
    label: <>Year's in industry</>,
  },
  {
    number: '100%',
    label: 'Client Satisfaction',
  },
  {
    number: (
      <>
        5.0 <Image src={rating} alt='rating' className='ml-[8px]' />
      </>
    ),
    label: 'Upwork Ratings',
  },
];

const ListItem = ({ data }: { data: ListItemProps[] }) => (
  <>
    {data.map(({ number, label }, index) => (
      <li key={index} className='relative mb-[30px]'>
        <Typography variant='h3' className=' text-white flex item-center'>
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
