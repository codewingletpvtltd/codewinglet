import Image from 'next/image';
import { BackgroundCircle } from '@codewinglet/assets';
import SectionHeader from '../SectionHeader/SectionHeader';
import { Heading } from './components';
import { portfolio } from './data';

const OurPortfolio = () => (
  <div className='my-[50px] mx-[20px] md:mx-[38px] max-w-screen-xl xl:mx-auto'>
    <SectionHeader
      title='Our Portfolio'
      description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      highlight={[0]}
    />
    <div className='relative'>
      <BackgroundCircle className='invisible absolute top-[32%] xl:visible xl:left-[-12%] 2xl:left-[-20%] 2xl:w-[148px] 2xl:h-[103px]' />
      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-[23px]'>
        {portfolio.map((data, index) => (
          <div key={`portfolio-${data.id}-${index}`}>
            <Heading title={data.title} description={data.description} />
            <Image
              src={data.image}
              alt='portfolio image'
              className='w-[100%]'
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default OurPortfolio;
