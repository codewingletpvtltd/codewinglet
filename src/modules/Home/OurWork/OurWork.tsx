import Image from 'next/image';
import Link from 'next/link';
import { Button, SectionHeader, Typography } from '@codewinglet/components';

import { portfolio } from './data';

const OurWork = () => (
  <section className='xl:py-20 lg:py-14 py-10 bg-white'>
    <section className='container w-full lg:px-[15px] sm:px-[30px] px-[15px] mx-auto'>
      <SectionHeader
        title={<>Our Work</>}
        description={
          <>Cutting-Edge Technologies We Work With for Optimal Results</>
        }
        headingClassName=''
        descriptionClassName=''
      />
      <div className='relative'>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-5 lg:mt-[50px] md:mt-6 mt-7'>
          {portfolio.map((data, index) => (
            <div
              key={`portfolio-${data.id}-${index}`}
              className={`${index >= 3 ? 'sm:block hidden' : undefined} port-1`}
            >
              <div className='relative w-full overflow-hidden m-auto group'>
                <a href='#' target='_blank'>
                  <div className='bg-[#00000099] absolute w-full h-full left-0 top-0 bottom-0 right-0 opacity-0 z-[1] group-hover:opacity-[1]'></div>
                  <Image
                    className='w-full transition-transform duration-500 group-hover:scale-110'
                    src={data.image}
                    alt='portfolio image'
                    width={500}
                    height={500}
                    quality={100}
                  />
                  <div className='absolute px-4 top-2/4 left-1/2 opacity-0 z-[2] bg-[#00000099] transform -translate-x-1/2 -translate-y-1/2 transition-all ease-in-out duration-500 group-hover:opacity-[1]'>
                    <button className='w-[180px] h-[50px] text-white block border-none cursor-pointer mx-auto flex items-center justify-center'>
                      {data.button}{' '}
                      <Image
                        className='ml-[10px]'
                        src={'/assets/icons/BtnArrow.svg'}
                        alt='Arrow'
                        width={16}
                        height={16}
                      />
                    </button>
                  </div>
                </a>
              </div>
              <div className='project-head'>
                <Typography className='mt-[10px] text-primary text-subtitle1 font-500'>
                  {data.subtitle}
                </Typography>
                <h3 className='text-primary font-500 lg:text-[28px] sm:text-[20px] text-[18px] md:mb-[5px] sm:mb-2 mb-1'>
                  {data.title}
                </h3>
                <p className='text-primary sm:text-[15px] text-[14px] font-300 mb-0'>
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Button className='w-full text-black mt-[30px] sm:hidden block'>
          <Link
            href='#'
            rel='noopener noreferrer'
            target='_blank'
            className='text-black'
          >
            View All
          </Link>
        </Button>
      </div>
    </section>
  </section>
);

export default OurWork;
