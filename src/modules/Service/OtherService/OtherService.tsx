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

import { otherService } from './constant';

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

const OtherService = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
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
      <div className='bg-white lg:py-20 md:py-[60px] py-10'>
        <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto flex'>
          <div className='w-[370px] pr-[50px] border-r border-headerBoxBorder'>
            <SectionHeader
              title={<>Looking for other Services?</>}
              description={
                <>
                  Explore our other related services to enhance the performance.
                </>
              }
              headingClassName='text-primary'
              descriptionClassName='text-primary lg:!text-subtitle2Light md:!text-paragraph1ExtraLight'
            />

            <Button
              className='sm:w-[250px] w-[203px] mt-[70px] bg-transparent'
              variant='blackOutline'
            >
              <Link
                href='/contact-us'
                rel='noopener noreferrer'
                className='flex items-center justify-center gap-3'
              >
                Explore all services
                <Arrow />
              </Link>
            </Button>
          </div>

          <div className='relative w-[940px] pl-[50px]'>
            <Slider {...settings}>
              {otherService?.map((service) => (
                <div
                  key={service.id}
                  className='mr-[50px] 2xl:!w-[450px] lg:!w-[420px] !w-[380px]'
                >
                  <Image
                    src={service.img}
                    alt={service.img}
                    width={450}
                    height={212}
                  />
                  <Typography className='text-primary lg:text-paragraph1Light text-paragraph1 pb-3'>
                    {service.title}
                  </Typography>
                  <Typography className='text-secondary text-paragraph2Light'>
                    {service.description}
                  </Typography>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherService;
