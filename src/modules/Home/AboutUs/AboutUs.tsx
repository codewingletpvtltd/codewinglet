import Image from 'next/image';
import {
  pioneering,
  crafting,
  building,
  rating,
} from '@codewinglet/assets/AboutUs';
import { SectionHeader, Typography } from '@codewinglet/components';

const AboutUs = () => (
  <section
    className='md:py-20 py-10'
    style={{
      backgroundImage: `url(${require('./about-bg-boxline.png').default.src})`,
      backgroundRepeat: 'no-repeat',
      backgroundPositionX: 'left',
      backgroundPositionY: 'bottom',
    }}
  >
    <div className='container w-full px-[15px] mx-auto'>
      <SectionHeader
        title={<>About us</>}
        description={<>"We are more than digital agency”</>}
        headingClassName='text-white'
        descriptionClassName='text-white'
      />

      <div className='lg:flex block gap-5 md:mt-12 mt-7'>
        <div className='lg:w-[70%] w-full xl:pr-[60px] lg:pr-[20px] pr-0'>
          <Typography className='xl:text-body1 lg:text-body2 md:text-body1 text-subtitle1 pb-[20px] md:leading-[40px] text-white md:text-justify text-left'>
            Codewinglet Private Limited excels as a globally recognized,
            award-winner software and IT consulting firm, offering digitally
            transforming solution since long.
          </Typography>
          <Typography className='xl:text-body1 lg:text-body2 md:text-body1 text-subtitle1 md:leading-[40px] text-white pb-[20px] md:text-justify text-left'>
            Our speciality lies in providing expert tech solutions, built on
            deep industry insights and collaboration. We boost client growth by
            leveraging our innovative ecosystem to facilitate IT knowledge
            transfers, thereby fostering consistent advancement.
          </Typography>

          <div className='md:flex block justify-between items-center'>
            <ul className='lg:mt-[60px] mt-2.5 lg:block md:block grid grid-cols-2'>
              <li className='relative mb-[30px]'>
                <Typography
                  variant='h3'
                  className=' text-white flex item-center'
                >
                  250+
                </Typography>
                <Typography className=' text-white md:text-body2 text-subtitle2'>
                  Successful Projects
                </Typography>
              </li>
              <li className='relative mb-[30px]'>
                <Typography
                  variant='h3'
                  className=' text-white flex item-center'
                >
                  10+
                </Typography>
                <Typography className=' text-white md:text-body2 text-subtitle2'>
                  Year’s in industry
                </Typography>
              </li>
              <li className='relative mb-[30px]'>
                <Typography
                  variant='h3'
                  className=' text-white flex item-center'
                >
                  100%
                </Typography>
                <Typography className=' text-white md:text-body2 text-subtitle2'>
                  Client Satisfaction
                </Typography>
              </li>
              <li className='relative mb-[30px]'>
                <Typography
                  variant='h3'
                  className=' text-white flex item-center'
                >
                  5.0 <Image src={rating} alt='rating' className='ml-[8px]' />
                </Typography>
                <Typography className=' text-white md:text-body2 text-subtitle2'>
                  Upwork Ratings
                </Typography>
              </li>
            </ul>
            <div className='xl:w-[408px] lg:w-[292px] md:w-[358px] w-full bg-[#131315] p-[18px] mb-10'>
              <div className='w-full overflow-hidden'>
                <Image
                  className='w-full object-cover object-center transition-transform duration-[0.5s] hover:scale-110'
                  src={building}
                  alt='building'
                />
              </div>
              <div className='flex justify-between items-baseline mt-[10px]'>
                <Typography className='text-white leading-[1.2] font-300 xl:text-h4 lg:text-[20px] text-[16px]'>
                  XtendR for extended reach of robots
                </Typography>
              </div>
              <Typography className='text-white sm:mt-6 mt-3 md:text-body2 text-[13px] font-300'>
                A plug produce solution for cobot applications demanding
                extended operational reach.
              </Typography>
            </div>
          </div>
        </div>
        <div className='lg:w-[30%] w-full lg:block md:flex block md:gap-6'>
          <div className='bg-[#131315] p-[18px] lg:mb-10 md:mb-0 mb-10'>
            <div className='w-full overflow-hidden'>
              <Image
                className='w-full object-cover object-center transition-transform duration-[0.5s] hover:scale-110'
                src={pioneering}
                alt='pioneering'
              />
            </div>
            <div className='flex justify-between items-baseline mt-[10px]'>
              <Typography className='text-white leading-[1.2] font-300 xl:text-h4 lg:text-[20px] text-[16px]'>
                XtendR for extended reach of robots
              </Typography>
            </div>
            <Typography className='text-white sm:mt-6 mt-3 xl:text-body2 lg:text-subtitle2 md:text-body2 text-[13px] font-300'>
              A plug produce solution for cobot applications demanding extended
              operational reach.
            </Typography>
          </div>
          <div className=' bg-[#131315] p-[18px] lg:mb-10 mb-0'>
            <div className='w-full overflow-hidden'>
              <Image
                className='w-full object-cover object-center transition-transform duration-[0.5s] hover:scale-110'
                src={crafting}
                alt='crafting'
              />
            </div>
            <div className='flex justify-between items-baseline mt-[10px]'>
              <Typography className='text-white leading-[1.2] font-300 xl:text-h4 lg:text-[20px] text-[16px]'>
                XtendR for extended reach of robots
              </Typography>
            </div>
            <Typography className='text-white sm:mt-6 mt-3 xl:text-body2 lg:text-subtitle2 md:text-body2 text-[13px] font-300'>
              A plug produce solution for cobot applications demanding extended
              operational reach.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
