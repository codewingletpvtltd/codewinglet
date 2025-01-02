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

import { categorizedServices } from './constant';

function SamplePrevArrow(props: any) {
  const { className, onClick } = props;
  return (
    <Arrow
      className={`${className} !block !text-black !rotate-180 !absolute md:!-bottom-5 !-bottom-2 lg:!left-0 md:!left-[48%] !left-[42%] !top-auto`}
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props: any) {
  const { className, onClick } = props;
  return (
    <>
      <Arrow
        className={`${className} !block !text-black !absolute md:!-bottom-5 !-bottom-2 lg:!left-10 !left-auto lg:!right-auto !right-[44%] !top-auto !transform-none`}
        onClick={onClick}
      />
    </>
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
        <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto lg:flex'>
          <div className='lg:w-[370px] lg:pr-[50px] lg:border-r border-gray-100'>
            <SectionHeader
              title={<>Looking for other Services?</>}
              description={
                <>
                  Explore our other related services to enhance the performance.
                </>
              }
              headingClassName='text-gray-800'
              descriptionClassName='text-gray-800 lg:!text-subtitle2Light md:!text-paragraph1ExtraLight'
            />

            <Button
              className='sm:w-[250px] w-[203px] mt-[70px] bg-transparent lg:block hidden'
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

          <div className='relative 2xl:w-[63rem] lg:w-[55rem] lg:pl-[50px] md:pb-[50px] pb-[30px] lg:mt-0 mt-10'>
            <Slider settings={settings}>
              {categorizedServices.map((category, index) => (
                <div key={index}>
                  {category.services.map((service) => (
                    <div
                      key={service.id}
                      className='2xl:mr-[50px] md:mr-10 md:mb-10 mb-5 md:block flex gap-3'
                    >
                      <Image
                        src={service.img}
                        alt={service.title}
                        width={450}
                        height={212}
                        className='md:w-[450px] w-[131px]'
                      />
                      <div>
                        <Typography className='text-gray-800 lg:text-paragraph1Light md:text-paragraph2 text-tag lg:pb-3 pb-1.5 md:pt-[15px]'>
                          {service.title}
                        </Typography>
                        <Typography className='text-gray-400 lg:text-paragraph2Light md:text-tagLight text-tagExtraLight font-light'>
                          {service.description}
                        </Typography>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </Slider>
          </div>
          <Button
            className='sm:w-[250px] w-[230px] mt-[70px] m-auto bg-transparent lg:hidden block'
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
      </div>
    </>
  );
};

export default OtherService;
