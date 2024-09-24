/* eslint-disable import/order */
'use client';
import { Arrow } from '@codewinglet/assets';
import { BlogCard, Button, SectionHeader } from '@codewinglet/components';
import Reveal from '@codewinglet/components/Reveal';
import Link from 'next/link';
import Slider from 'react-slick';

const Articles = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1500,
    autoplaySpeed: 2800,
    cssEase: 'linear',
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
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
          slidesToShow: 3,
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
        className='bg-white lg:py-20 md:py-[60px] py-[30px] scroll-mt-40 m_blog'
        id='blog'
      >
        <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
          <Reveal>
            <SectionHeader
              title={<>Latest Articles</>}
              description={
                <>Cutting-Edge Technologies We Work With for Optimal Results</>
              }
            />
          </Reveal>

          <div className='lg:mt-[50px] md:mt-10 mt-5'>
            <div className='lg:grid lg:grid-cols-3 md:grid-cols-2 md:gap-[50px] gap-5 hidden'>
              <BlogCard
                image='/assets/blog/blog_Img1.jpg'
                title='Bill Walsh leadership lessons Bill Walsh leadership lessons'
                desc='Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?'
              />
              <BlogCard
                image='/assets/blog/blog_Img2.jpg'
                title='PM mental models Bill Walsh leadership lessons'
                desc='Mental models are simple expressions of complex processes or relationships.'
              />
              <BlogCard
                image='/assets/blog/blog_Img3.jpg'
                title='What is Wireframing? Bill Walsh leadership lessons'
                desc='Introduction to Wireframing and its Principles. Learn from the best in the industry.'
              />
            </div>

            <div className='lg:hidden'>
              <Slider {...settings}>
                <BlogCard
                  image='/assets/blog/blog_Img1.jpg'
                  title='Bill Walsh leadership lessons Bill Walsh leadership lessons'
                  desc='Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?'
                />
                <BlogCard
                  image='/assets/blog/blog_Img2.jpg'
                  title='PM mental models Bill Walsh leadership lessons'
                  desc='Mental models are simple expressions of complex processes or relationships.'
                />
                <BlogCard
                  image='/assets/blog/blog_Img3.jpg'
                  title='What is Wireframing? Bill Walsh leadership lessons'
                  desc='Introduction to Wireframing and its Principles. Learn from the best in the industry.'
                />
              </Slider>
            </div>

            <Button
              className='sm:w-[248px] w-[203px] h-[52px] lg:m-auto 2xl:mt-12 mt-10 mx-auto lg:flex hidden'
              variant='blackOutline'
            >
              <Link
                href='/contact-us'
                rel='noopener noreferrer'
                className='flex items-center justify-center gap-3'
              >
                Explore blogs
                <Arrow />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
