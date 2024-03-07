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
      <li key={index} className='relative md:mb-[50px] mb-0'>
        <Typography className='xl:text-h4 text-h5 text-white flex item-center'>
          {number}
        </Typography>
        <Typography className=' text-white md:text-paragraph1 text-paragraph2Light'>
          {label}
        </Typography>
      </li>
    ))}
  </>
);

const Statistics = () => (
  <ul className='xl:mt-[0] mt-5 mb-5 lg:block md:block grid grid-cols-2 md:gap-0 gap-4'>
    <ListItem data={data} />
  </ul>
);

export default Statistics;
