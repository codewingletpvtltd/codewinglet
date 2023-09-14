import Image from 'next/image';
import { memo } from 'react';
import { BackgroundCircle } from '@codewinglet/assets';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import { portfolio } from './data';
import Heading from './components/Heading';

const OurPortfolio = () => (
  <div className='my-[50px] mx-[20px] md:mx-[38px] max-w-screen-xl xl:mx-auto'>
    <SectionHeader
      title={
        <>
          <strong className='font-[800]'>Our</strong> Portfolio
        </>
      }
      description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      descriptionTextWrap
    />
    <div className='relative'>
      <BackgroundCircle className='invisible absolute top-[32%] 2xl:visible xl:left-[-12%] 2xl:left-[-20%] 2xl:w-[148px] 2xl:h-[103px]' />
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

export default memo(OurPortfolio);
