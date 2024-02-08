import Image from 'next/image';
import {
  AboutUsBoxIcon,
  about1,
  about2,
  about3,
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
        headingClassName='text-[22px] text-white'
        descriptionClassName=' mt-[9px] text-white'
      />

      <div className='flex gap-5 mt-12'>
        <div className='w-[70%] pr-[60px]'>
          <Typography
            variant='subtitle2'
            className='pb-[20px] !text-[22px] font-300 leading-[40px]  text-white'
          >
            Codewinglet Private Limited excels as a globally recognized,
            award-winner software and IT consulting firm, offering digitally
            transforming solution since long.
          </Typography>
          <Typography
            variant='subtitle2'
            className='!text-[22px] font-300 leading-[40px] text-white pb-[20px]'
          >
            Our speciality lies in providing expert tech solutions, built on
            deep industry insights and collaboration. We boost client growth by
            leveraging our innovative ecosystem to facilitate IT knowledge
            transfers, thereby fostering consistent advancement.
          </Typography>

          <div className='flex justify-between items-center'>
            <ul className='mt-[60px]'>
              <li className='relative mb-[30px]'>
                <h5 className='text-[30px] font-600 text-white flex item-center'>
                  250+
                </h5>
                <p className='text-[18px] font-300 text-white'>
                  Successful Projects
                </p>
              </li>
              <li className='relative mb-[30px]'>
                <h5 className='text-[30px] font-600 text-white flex item-center'>
                  10+
                </h5>
                <p className='text-[18px] font-300 text-white'>
                  Year’s in industry
                </p>
              </li>
              <li className='relative mb-[30px]'>
                <h5 className='text-[30px] font-600 text-white flex item-center'>
                  100%
                </h5>
                <p className='text-[18px] font-300 text-white'>
                  {' '}
                  Client Satisfaction
                </p>
              </li>
              <li className='relative mb-[30px]'>
                <h5 className='text-[30px] font-600 text-white flex item-center'>
                  5 <Image src={rating} alt='rating' className='ml-[8px]' />
                </h5>
                <p className='text-[18px] font-300 text-white'>
                  Upwork Ratings
                </p>
              </li>
            </ul>
            <div className='w-[408px] bg-[#131315] p-[18px] mb-10'>
              <div className='w-full overflow-hidden'>
                <Image
                  className='w-full object-cover object-center transition-transform duration-[0.5s] hover:scale-110'
                  src={about3}
                  alt='about'
                />
              </div>
              <div className='flex justify-between items-baseline mt-[10px]'>
                <h5 className='text-[25px] font-400 text-white'>
                  XtendR for extended reach of robots
                </h5>
                <Image
                  className='w-[5%] '
                  src={AboutUsBoxIcon}
                  alt='AboutUs Box Icon'
                />
              </div>
              <p className='text-white text-[18px] font-200 m-0'>
                A plug produce solution for cobot applications demanding
                extended operational reach.
              </p>
            </div>
          </div>
        </div>
        <div className='w-[30%]'>
          <div className='bg-[#131315] p-[18px] mb-10'>
            <div className='w-full overflow-hidden'>
              <Image
                className='w-full object-cover object-center transition-transform duration-[0.5s] hover:scale-110'
                src={about1}
                alt='about'
              />
            </div>
            <div className='flex justify-between items-baseline mt-[10px]'>
              <h5 className='text-[25px] font-400 text-white'>
                XtendR for extended reach of robots
              </h5>
              <Image
                className='w-[5%] '
                src={AboutUsBoxIcon}
                alt='AboutUs Box Icon'
              />
            </div>
            <p className='text-white text-[18px] font-200 m-0'>
              A plug produce solution for cobot applications demanding extended
              operational reach.
            </p>
          </div>
          <div className=' bg-[#131315] p-[18px] mb-10'>
            <div className='w-full overflow-hidden'>
              <Image
                className='w-full object-cover object-center transition-transform duration-[0.5s] hover:scale-110'
                src={about2}
                alt='about'
              />
            </div>
            <div className='flex justify-between items-baseline mt-[10px]'>
              <h5 className='text-[25px] font-400 text-white'>
                XtendR for extended reach of robots
              </h5>
              <Image
                className='w-[5%] '
                src={AboutUsBoxIcon}
                alt='AboutUs Box Icon'
              />
            </div>
            <p className='text-white text-[18px] font-200 m-0'>
              A plug produce solution for cobot applications demanding extended
              operational reach.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
