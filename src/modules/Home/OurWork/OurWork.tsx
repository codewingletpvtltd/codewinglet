import Image from 'next/image';
import { memo } from 'react';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import { portfolio, btnArrow } from './data';

const OurWork = () => (
  <section className='py-20 bg-white'>
    <section className='max-w-[1410px] w-full px-[15px] mx-auto'>
      <SectionHeader
        title={<>Our Work</>}
        description={
          <>"Cutting-Edge Technologies We Work With for Optimal Results”</>
        }
        headingClassName='text-[22px]'
        descriptionClassName=' mt-[9px] '
      />
      <div className='relative'>
        <div className='grid grid-cols-3 gap-10 pt-12'>
          {portfolio.map((data, index) => (
            <div key={`portfolio-${data.id}-${index}`} className='port-1'>
              <div className='relative w-full overflow-hidden m-auto group'>
                <a href='#' target='_blank'>
                  <div className='bg-[#00000099] absolute w-full h-full left-0 top-0 bottom-0 right-0 opacity-0 z-[1] group-hover:opacity-[1]'></div>
                  <Image
                    className='w-full transition-transform duration-[0.5s] group-hover:scale-110'
                    src={data.image}
                    alt='portfolio image'
                  />
                  <div className='absolute px-4 top-2/4 left-1/2 opacity-0 z-[2] bg-[#00000099] transform -translate-x-1/2 -translate-y-1/2 transition-all ease-in-out duration-[0.3s] group-hover:opacity-[1]'>
                    <button className='w-[180px] h-[50px] text-white block border-none cursor-pointer mx-auto flex items-center justify-center'>
                      {data.button}{' '}
                      <Image className='ml-[10px]' src={btnArrow} alt='Arrow' />
                    </button>
                  </div>
                </a>
              </div>
              <div className='project-head'>
                <h4 className='text-[15px] font-300 mt-[5px] mt-5'>
                  {data.subtitle}
                </h4>
                <h3 className='text-black font-300 text-[28px] mb-[10px]'>
                  {data.title}
                </h3>
                <p className='text-black text-[16px] font-300 mb-0'>
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </section>
);

export default memo(OurWork);
