'use client';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';

import { Arrow } from '@codewinglet/assets';
import { Button, SectionHeader, Typography } from '@codewinglet/components';

import { technologies } from './utils';

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <>
      <Arrow
        className={className}
        onClick={onClick}
        style={{
          ...style,
          display: 'block',
          color: 'black',
          bottom: '-60px',
          left: 'auto',
          right: '48%',
          top: 'auto',
          transform: 'unset',
        }}
      />
    </>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <Arrow
      className={className}
      onClick={onClick}
      style={{
        ...style,
        display: 'block',
        color: 'black',
        transform: 'rotate(180deg)',
        bottom: '-60px',
        top: 'auto',
        left: '47%',
      }}
    />
  );
}

const Combination = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1500,
    autoplaySpeed: 2800,
    cssEase: 'linear',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
        className='bg-bg lg:py-20 md:py-[60px] py-[30px] scroll-mt-40'
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
            headingClassName='text-primary'
            descriptionClassName='text-primary lg:!text-subtitle2Light !text-paragraph1ExtraLight'
          />

          <div className='lg:mt-[50px] md:mt-10 mt-5'>
            <Slider {...settings}>
              {technologies.map((tech) => (
                <div
                  key={tech.id}
                  className='bg-white p-10 mr-[50px] 2xl:!w-[435px] lg:!w-[400px] md:!w-[374px] !w-[324px] group hover:border border-headerBoxBorder cursor-pointer'
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
                    <span className='text-secondary text-h4 font-extralight order-2 group-hover:rotate-180 transform'>
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
                  <Typography className='text-primary lg:text-subtitle2 text-paragraph1 text-center pt-10 pb-3'>
                    {tech.title}
                  </Typography>
                  <Typography className='text-secondary text-paragraph2Light text-center'>
                    {tech.description}
                  </Typography>
                </div>
              ))}
            </Slider>

            <Button
              className='sm:w-[224px] w-[203px] h-[52px] lg:m-auto xl:mt-24 mt-[104px] flex mx-auto bg-transparent'
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
