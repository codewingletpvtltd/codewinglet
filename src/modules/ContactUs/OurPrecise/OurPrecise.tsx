'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Typography } from '@codewinglet/components';
import { Reveal } from '@codewinglet/modules/Reveal';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';

const OurPrecise = () => (
  <div className='bg-bg sm:py-20 py-[30px]'>
    <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
      <div className='lg:flex block justify-between items-center 2xl:gap-[37px] gap-[48px]'>
        <div className='2xl:w-[30%] lg:w-[35%] w-full'>
          <Reveal>
            <SectionHeader
              title={<>Our Precise Location</>}
              description={
                <>
                  Reach out today to explore how we can empower your business.
                </>
              }
              descriptionClassName='sm:!text-subtitle2Light text-tagLight lg:!mt-[25px] mt-0 leading-normal'
            />
          </Reveal>
        </div>

        <div className='relative p-10 lg:grid hidden bg-white grid-flow-col 2xl:grid-cols-[42%_33%_25%] xl:grid-cols-[38%_33%_25%] grid-rows-1 after:content after:absolute 2xl:after:top-[43%] 2xl:after:left-[40%] xl:after:top-[40%] xl:after:left-[36%] after:bg-headerBoxBorder after:w-[1px] after:h-[40%] before:content before:absolute 2xl:before:top-[43%] 2xl:before:left-[69%] xl:before:top-[40%] xl:before:left-[67%] before:bg-headerBoxBorder before:w-[1px] before:h-[40%]'>
          <Reveal>
            <div className='flex flex-col'>
              <Typography className='text-primary uppercase md:text-paragraph1 text-paragraph2Light flex items-center'>
                <Image
                  src={'/assets/icons/contactLocation.svg'}
                  alt='contactLocation'
                  width={40}
                  height={40}
                  className='mr-[15px]'
                />
                Address
              </Typography>
              <div>
                <Typography className='text-secondary text-paragraph2Light mt-5 mb-[27px] 2xl:w-full xl:w-[80%]'>
                  A901-905, Vivanta Icon, Opp. Shell Petrol Pump, Adajan, Surat,
                  Gujarat 395009.
                </Typography>
                <div className='flex group cursor-pointer'>
                  <Link
                    href='https://maps.app.goo.gl/mAtBMrDpnf58GjJNA'
                    target='_blank'
                    className='text-paragraph2 underline'
                  >
                    Google map
                  </Link>
                  <Image
                    src={'/assets/icons/contactArrow.svg'}
                    alt='contactArrow'
                    width={14}
                    height={14}
                    className='ml-1.5 group-hover:transition-all duration-700 group-hover:translate-x-1'
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className='flex flex-col'>
              <Typography className='text-primary uppercase md:text-paragraph1 text-paragraph2Light flex items-center'>
                <Image
                  src={'/assets/icons/contactEmail.svg'}
                  alt='contactEmail'
                  width={40}
                  height={40}
                  className='mr-[15px]'
                />
                Email
              </Typography>
              <div className='flex flex-col'>
                <Link
                  href='mailto:jobs@codewinglet.com'
                  className=' text-secondary hover:text-primary text-paragraph2Light mt-5'
                >
                  jobs@codewinglet.com
                </Link>
                <Link
                  href='mailto:info@codewinglet.com'
                  className='text-secondary hover:text-primary text-paragraph2Light mt-[15px]'
                >
                  info@codewinglet.com
                </Link>
                <Link
                  href='mailto:sales@codewinglet.com'
                  className='text-secondary hover:text-primary text-paragraph2Light mt-[15px]'
                >
                  sales@codewinglet.com
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className='flex flex-col'>
              <Typography className='text-primary uppercase md:text-paragraph1 text-paragraph2Light flex items-center'>
                <Image
                  src={'/assets/icons/contactCall.svg'}
                  alt='contactCall'
                  width={40}
                  height={40}
                  className='mr-[15px]'
                />
                Contact
              </Typography>
              <div className='flex flex-col'>
                <Link
                  href='tel:+918160868310'
                  className=' text-secondary hover:text-primary text-paragraph2Light mt-5'
                >
                  +91 81608 68310 (Jobs)
                </Link>
                <Link
                  href='tel:+918320111741'
                  className='text-secondary hover:text-primary text-paragraph2Light mt-[15px]'
                >
                  +91 83201 11741 (Inquiry)
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        <div className='lg:hidden block sm:mt-10 mt-5'>
          <div className='bg-white p-[30px]'>
            <div className='flex flex-col'>
              <Typography className='text-primary uppercase md:text-paragraph1 text-paragraph2 flex items-center'>
                <Image
                  src={'/assets/icons/contactLocation.svg'}
                  alt='contactLocation'
                  width={40}
                  height={40}
                  className='mr-[15px]'
                />
                Address
              </Typography>
              <div>
                <Typography className='text-secondary text-paragraph2Light sm:mt-5 mt-[12px] mb-[15px] sm:w-[80%] w-full'>
                  A901-905, Vivanta Icon, Opp. Shell Petrol Pump, Adajan, Surat,
                  Gujarat 395009.
                </Typography>
                <div className='flex group cursor-pointer'>
                  <Link
                    href='https://maps.app.goo.gl/mAtBMrDpnf58GjJNA'
                    target='_blank'
                    className='text-paragraph2 underline'
                  >
                    Google map
                  </Link>
                  <Image
                    src={'/assets/icons/contactArrow.svg'}
                    alt='contactArrow'
                    width={14}
                    height={14}
                    className='ml-1.5 group-hover:transition-all duration-700 group-hover:translate-x-1'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white p-[30px] my-5'>
            <div className=' flex flex-col '>
              <Typography className='text-primary uppercase md:text-paragraph1 text-paragraph2 flex items-center'>
                <Image
                  src={'/assets/icons/contactEmail.svg'}
                  alt='contactEmail'
                  width={40}
                  height={40}
                  className='mr-[15px]'
                />
                Email
              </Typography>
              <div className='relative flex items-center flex-wrap after:sm:block after:hidden after:content after:absolute after:left-[36%] after:top-5 after:bg-headerBoxBorder after:w-[1px] after:h-[22px]'>
                <Link
                  href='mailto:jobs@codewinglet.com'
                  className=' text-secondary text-paragraph2Light sm:mt-5 mt-[12px] pr-[60px]'
                >
                  jobs@codewinglet.com
                </Link>
                <Link
                  href='mailto:info@codewinglet.com'
                  className='text-secondary text-paragraph2Light sm:mt-5 mt-2 pr-[60px]'
                >
                  info@codewinglet.com
                </Link>
                <Link
                  href='mailto:sales@codewinglet.com'
                  className='text-secondary text-paragraph2Light sm:mt-5 mt-2'
                >
                  sales@codewinglet.com
                </Link>
              </div>
            </div>
          </div>
          <div className='bg-white p-[30px]'>
            <div className='flex flex-col'>
              <Typography className='text-primary uppercase md:text-paragraph1 text-paragraph2 flex items-center'>
                <Image
                  src={'/assets/icons/contactCall.svg'}
                  alt='contactCall'
                  width={40}
                  height={40}
                  className='mr-[15px]'
                />
                Contact
              </Typography>
              <div className='relative flex sm:flex-row flex-col sm:items-center items-start sm:gap-10 gap-0 sm:after:block after:hidden after:content after:absolute after:left-[33%] after:top-5 after:bg-headerBoxBorder after:w-[1px] after:h-[22px]'>
                <Link
                  href='tel:+918160868310'
                  className=' text-secondary hover:text-primary text-paragraph2Light sm:mt-5 mt-[12px]'
                >
                  +91 81608 68310 (Jobs)
                </Link>
                <Link
                  href='tel:+918320111741'
                  className='text-secondary hover:text-primary text-paragraph2Light sm:mt-5 mt-2'
                >
                  +91 83201 11741 (Inquiry)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OurPrecise;
