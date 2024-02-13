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
    className='sm:py-20 py-10'
    style={{
      backgroundImage: `url(${require('./about-bg-boxline.png').default.src})`,
      backgroundRepeat: 'no-repeat',
      backgroundPositionX: 'left',
      backgroundPositionY: 'bottom',
    }}
  >
    <div className='max-w-[1410px] w-full px-[15px] mx-auto'>
      <SectionHeader
        title={<>About us</>}
        description={<>"We are more than digital agency”</>}
        headingClassName='text-white'
        descriptionClassName='text-white'
      />

      <div className='sm:flex block gap-5 sm:mt-12 mt-7'>
        <div className='sm:w-[70%] w-full sm:pr-[60px] pr-0'>
          <Typography className='sm:text-body1 text-subtitle1 pb-[20px] sm:leading-[40px]  text-white text-justify'>
            Codewinglet Private Limited excels as a globally recognized,
            award-winner software and IT consulting firm, offering digitally
            transforming solution since long.
          </Typography>
          <Typography className='sm:text-body1 text-subtitle1 sm:leading-[40px] text-white pb-[20px] text-justify'>
            Our speciality lies in providing expert tech solutions, built on
            deep industry insights and collaboration. We boost client growth by
            leveraging our innovative ecosystem to facilitate IT knowledge
            transfers, thereby fostering consistent advancement.
          </Typography>

          <div className='sm:flex block justify-between items-center'>
            <ul className='sm:mt-[60px] mt-[10px] sm:block grid grid-cols-2'>
              <li className='relative mb-[30px]'>
                <Typography
                  variant='h3'
                  className=' text-white flex item-center'
                >
                  250+
                </Typography>
                <Typography className=' text-white sm:text-body2 text-subtitle2'>
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
                <Typography className=' text-white sm:text-body2 text-subtitle2'>
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
                <Typography className=' text-white sm:text-body2 text-subtitle2'>
                  Client Satisfaction
                </Typography>
              </li>
              <li className='relative mb-[30px]'>
                <Typography
                  variant='h3'
                  className=' text-white flex item-center'
                >
                  5 <Image src={rating} alt='rating' className='ml-[8px]' />
                </Typography>
                <Typography className=' text-white sm:text-body2 text-subtitle2'>
                  Upwork Ratings
                </Typography>
              </li>
            </ul>
            <div className='sm:w-[408px] w-full bg-[#131315] p-[18px] mb-10'>
              <div className='w-full overflow-hidden'>
                <Image
                  className='w-full object-cover object-center transition-transform duration-500 hover:scale-110'
                  src={building}
                  alt='building'
                />
              </div>
              <div className='flex justify-between items-baseline mt-[10px]'>
                <Typography className='text-white sm:text-h4 text-subtitle1 leading-[1.2]'>
                  XtendR for extended reach of robots
                </Typography>
              </div>
              <Typography className='text-white sm:text-body2 text-[13px] font-300 mt-6'>
                A plug produce solution for cobot applications demanding
                extended operational reach.
              </Typography>
            </div>
          </div>
        </div>
        <div className='sm:w-[30%] w-full'>
          <div className='bg-[#131315] p-[18px] mb-10'>
            <div className='w-full overflow-hidden'>
              <Image
                className='w-full object-cover object-center transition-transform duration-500 hover:scale-110'
                src={pioneering}
                alt='pioneering'
              />
            </div>
            <div className='flex justify-between items-baseline mt-[10px]'>
              <Typography className='text-white sm:text-h4 text-subtitle1 leading-[1.2]'>
                XtendR for extended reach of robots
              </Typography>
            </div>
            <Typography className='text-white sm:text-body2 text-[13px] font-300 mt-6'>
              A plug produce solution for cobot applications demanding extended
              operational reach.
            </Typography>
          </div>
          <div className=' bg-[#131315] p-[18px] mb-10'>
            <div className='w-full overflow-hidden'>
              <Image
                className='w-full object-cover object-center transition-transform duration-500 hover:scale-110'
                src={crafting}
                alt='crafting'
              />
            </div>
            <div className='flex justify-between items-baseline mt-[10px]'>
              <Typography className='text-white sm:text-h4 text-subtitle1 leading-[1.2]'>
                XtendR for extended reach of robots
              </Typography>
            </div>
            <Typography className='text-white sm:text-body2 text-[13px] font-300 mt-6'>
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
