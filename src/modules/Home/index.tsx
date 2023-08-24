import Image from 'next/image';
import { Consultant, Typography } from '@codewinglet/components';
import { reactSVG } from '@codewinglet/assets';
import OurServices from './OurServices';
import OurPortfolio from './OurPortfolio/OurPortfolio';
import HeroSection from './HeroSection/HeroSection';
import OurClient from './OurClient';

const Home = () => (
  <>
    <HeroSection />
    <OurServices />
    <OurPortfolio />
    <OurClient />
    <Consultant />
    <div className='grid grid-flow-col'>
      <ul className='grid grid-flow-col grid-rows-8'>
        <li className='flex flex-row items-center'>
          <Image
            src={reactSVG}
            alt='test image'
            className='rounded-full h-[36px] w-[36px]'
          />
          <Typography>Header 1</Typography>
        </li>
        <li className='flex flex-row items-center'>
          <Image
            src={reactSVG}
            alt='test image'
            className='rounded-full h-[36px] w-[36px]'
          />
          <Typography>item 1</Typography>
        </li>
        <li className='flex flex-row items-center'>
          <Image
            src={reactSVG}
            alt='test image'
            className='rounded-full h-[36px] w-[36px]'
          />
          <Typography>item 2</Typography>
        </li>
        <li className='flex flex-row items-center'>
          <Image
            src={reactSVG}
            alt='test image'
            className='rounded-full h-[36px] w-[36px]'
          />
          <Typography>item 3</Typography>
        </li>
        <li className='flex flex-row items-center'>
          <Image
            src={reactSVG}
            alt='test image'
            className='rounded-full h-[36px] w-[36px]'
          />
          <Typography>item 4</Typography>
        </li>
        <li className='flex flex-row items-center'>
          <Image
            src={reactSVG}
            alt='test image'
            className='rounded-full h-[36px] w-[36px]'
          />
          <Typography>item 5</Typography>
        </li>
        <li className='flex flex-row items-center'>
          <Image
            src={reactSVG}
            alt='test image'
            className='rounded-full h-[36px] w-[36px]'
          />
          <Typography>item 6</Typography>
        </li>
        <li className='flex flex-row items-center'>
          <Image
            src={reactSVG}
            alt='test image'
            className='rounded-full h-[36px] w-[36px]'
          />
          <Typography>item 7</Typography>
        </li>
      </ul>
      <ul className='grid grid-flow-col grid-rows-8'>
        <li className='flex flex-row items-center'>
          <Image
            src={reactSVG}
            alt='test image'
            className='rounded-full h-[36px] w-[36px]'
          />
          <Typography>Header 1</Typography>
        </li>
        <li className='flex flex-row items-center'>
          <Image
            src={reactSVG}
            alt='test image'
            className='rounded-full h-[36px] w-[36px]'
          />
          <Typography>item 1</Typography>
        </li>
        <li className='flex flex-row items-center'>
          <Image
            src={reactSVG}
            alt='test image'
            className='rounded-full h-[36px] w-[36px]'
          />
          <Typography>item 2</Typography>
        </li>
        <li className='flex flex-row items-center'>
          <Image
            src={reactSVG}
            alt='test image'
            className='rounded-full h-[36px] w-[36px]'
          />
          <Typography>item 3</Typography>
        </li>
        <li className='flex flex-row items-center'>
          <Image
            src={reactSVG}
            alt='test image'
            className='rounded-full h-[36px] w-[36px]'
          />
          <Typography>item 4</Typography>
        </li>
        <li className='flex flex-row items-center'>
          <Image
            src={reactSVG}
            alt='test image'
            className='rounded-full h-[36px] w-[36px]'
          />
          <Typography>item 5</Typography>
        </li>
      </ul>
    </div>
  </>
);

export default Home;
