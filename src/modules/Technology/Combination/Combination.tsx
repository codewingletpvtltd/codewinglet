'use client';
import Image from 'next/image';
import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import {
  Button,
  SectionHeader,
  Slider,
  Typography,
} from '@codewinglet/components';

import { technologies } from './utils';

const Combination = () => {
  const settings = {
    // dots: false,
    infinite: true,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    autoplay: true,
    speed: 1800,
    autoplaySpeed: 1500,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div
        className='bg-gray-50 lg:py-20 md:py-[60px] lg:!pb-20 !pb-24 py-[30px] scroll-mt-40'
        id='combination'
      >
        <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
          <SectionHeader
            title={<>Most-preferred AngularJS combinations</>}
            description={
              <>
                Angular has earned the trust of some of the most influential
                companies in the tech world, including
              </>
            }
            headingClassName='text-gray-800 lg:text-h2'
            descriptionClassName='text-gray-800 lg:!text-subtitle2Light md:!text-paragraph1ExtraLight'
          />

          <div className='lg:mt-[50px] md:mt-10 mt-5 relative'>
            <Slider {...settings} hideArrow>
              {technologies?.map((tech) => (
                <div
                  key={tech.id}
                  className='bg-white p-10 mr-[50px] 2xl:!w-[435px] lg:!w-[400px] !w-[324px] group cursor-pointer'
                >
                  <div className='flex justify-center items-center gap-5'>
                    {/* First Image - Order 1 */}
                    <Image
                      src={tech.images[0].src}
                      alt={tech.images[0].alt}
                      width={89}
                      height={89}
                      className='order-1 lg:w-[89px] lg:h-[89px] w-[50px] h-[50px]'
                    />
                    {/* Span - Order 2 */}
                    <span className='text-gray-400 text-h4 font-extralight order-2 group-hover:rotate-180 transform'>
                      +
                    </span>
                    {/* Second Image - Order 3 */}
                    <Image
                      src={tech.images[1].src}
                      alt={tech.images[1].alt}
                      width={89}
                      height={89}
                      className='order-3 lg:w-[89px] lg:h-[89px] w-[50px] h-[50px]'
                    />
                  </div>
                  <Typography className='text-gray-800 lg:text-subtitle2 text-paragraph1 text-center pt-10 pb-3'>
                    {tech.title}
                  </Typography>
                  <Typography className='text-gray-400 text-paragraph2Light text-center'>
                    {tech.description}
                  </Typography>
                </div>
              ))}
            </Slider>

            <Button
              className='sm:w-[224px] w-[203px] h-[52px] lg:m-auto xl:mt-24 mt-[104px] lg:flex mx-auto bg-transparent hidden'
              variant='blackOutline'
            >
              <Link
                href='/contact-us'
                rel='noopener noreferrer'
                className='flex items-center justify-center gap-3'
              >
                Let’s connect
                <Arrow />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Combination;
