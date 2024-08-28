/* eslint-disable import/order */
'use client';
import { Arrow } from '@codewinglet/assets';
import { BlogCard, Button, SectionHeader } from '@codewinglet/components';
import Reveal from '@codewinglet/components/Reveal';
import Link from 'next/link';

const Articles = () => (
  <>
    <div className='bg-white lg:py-20 md:py-[60px] py-[30px]' id='blog'>
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
          <div className='flex gap-[50px]'>
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
          <Button
            className='sm:w-[248px] w-[203px] h-[52px] lg:m-auto 2xl:mt-12 xl:mt-10 flex m-auto'
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

export default Articles;
