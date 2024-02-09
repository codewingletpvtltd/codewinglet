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
    className='py-20'
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

      <div className='flex gap-5 mt-12'>
        <div className='w-[70%] pr-[60px]'>
          <Typography
            variant='body1'
            className='pb-[20px] leading-[40px]  text-white'
          >
            Codewinglet Private Limited excels as a globally recognized,
            award-winner software and IT consulting firm, offering digitally
            transforming solution since long.
          </Typography>
          <Typography
            variant='body1'
            className='leading-[40px] text-white pb-[20px]'
          >
            Our speciality lies in providing expert tech solutions, built on
            deep industry insights and collaboration. We boost client growth by
            leveraging our innovative ecosystem to facilitate IT knowledge
            transfers, thereby fostering consistent advancement.
          </Typography>

          <div className='flex justify-between items-center'>
            <ul className='mt-[60px]'>
              <li className='relative mb-[30px]'>
                <Typography
                  variant='h3'
                  className=' text-white flex item-center'
                >
                  250+
                </Typography>
                <Typography variant='body2' className=' text-white'>
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
                <Typography variant='body2' className=' text-white'>
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
                <Typography variant='body2' className=' text-white'>
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
                <Typography variant='body2' className=' text-white'>
                  Upwork Ratings
                </Typography>
              </li>
            </ul>
            <div className='w-[408px] bg-[#131315] p-[18px] mb-10'>
              <div className='w-full overflow-hidden'>
                <Image
                  className='w-full object-cover object-center transition-transform duration-[0.5s] hover:scale-110'
                  src={building}
                  alt='building'
                />
              </div>
              <div className='flex justify-between items-baseline mt-[10px]'>
                <Typography variant='h4' className='text-white'>
                  XtendR for extended reach of robots
                </Typography>
              </div>
              <Typography variant='body2' className='text-white m-0'>
                A plug produce solution for cobot applications demanding
                extended operational reach.
              </Typography>
            </div>
          </div>
        </div>
        <div className='w-[30%]'>
          <div className='bg-[#131315] p-[18px] mb-10'>
            <div className='w-full overflow-hidden'>
              <Image
                className='w-full object-cover object-center transition-transform duration-[0.5s] hover:scale-110'
                src={pioneering}
                alt='pioneering'
              />
            </div>
            <div className='flex justify-between items-baseline mt-[10px]'>
              <Typography variant='h4' className='text-white'>
                XtendR for extended reach of robots
              </Typography>
            </div>
            <Typography variant='body2' className='text-white m-0'>
              A plug produce solution for cobot applications demanding extended
              operational reach.
            </Typography>
          </div>
          <div className=' bg-[#131315] p-[18px] mb-10'>
            <div className='w-full overflow-hidden'>
              <Image
                className='w-full object-cover object-center transition-transform duration-[0.5s] hover:scale-110'
                src={crafting}
                alt='crafting'
              />
            </div>
            <div className='flex justify-between items-baseline mt-[10px]'>
              <Typography variant='h4' className='text-white'>
                XtendR for extended reach of robots
              </Typography>
            </div>
            <Typography variant='body2' className='text-white m-0'>
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
