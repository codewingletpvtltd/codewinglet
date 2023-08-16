import Image from 'next/image';
import SectionHeader from '../SectionHeader/SectionHeader';
import { Header } from './components';
import { portfolio } from './data';

const OurPortfolio = () => (
  <div className='my-[50px] mx-[20px] max-w-screen-xl md:mx-[38px] xl:mx-auto'>
    <SectionHeader
      title='Our Portfolio'
      description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      highlight={[0]}
    />
    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-[23px]'>
      {portfolio.map((data, index) => (
        <div key={`portfolio-${data.id}-${index}`}>
          <Header title={data.title} description={data.description} />
          <Image src={data.image} alt='portfolio image' className='w-[100%]' />
        </div>
      ))}
    </div>
  </div>
);

export default OurPortfolio;
