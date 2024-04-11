'use client';
import Link from 'next/link';
import { Arrow } from '@codewinglet/assets';
import { BlogCard, Button, SectionHeader } from '@codewinglet/components';
import Counter from '@codewinglet/components/Counter';
import RelatedFaq from '@codewinglet/components/RelatedFaq';
import Reveal from '@codewinglet/components/Reveal';
import WhyWork from '@codewinglet/components/WhyWork';

const CustomComponent = () => (
  <>
    <div className='mt-[86px]'>
      <RelatedFaq />

      {/* Powerful data insights */}
      <div className='bg-black sm:py-20 py-[30px]'>
        <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
          <Reveal>
            <SectionHeader
              title={<>Powerful data insights</>}
              description={
                <>
                  Lorem ipsum dolor sit amet consectetur. Aliquet varius lacus
                </>
              }
              headingClassName='text-white'
              descriptionClassName='text-white'
            />
          </Reveal>

          <div className='lg:mt-[50px] md:mt-10 mt-5'>
            <Counter />
            <Button className='sm:w-[231px] w-[203px] h-12 lg:m-auto 2xl:mt-[50px] xl:mt-10 flex m-auto '>
              <Link
                href='/contact-us'
                rel='noopener noreferrer'
                className='flex items-center justify-center gap-3'
              >
                Let's connect
                <Arrow />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <WhyWork />

      {/* Latest Blogs */}
      <div className='bg-white sm:py-20 py-[30px]'>
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
            <div className='flex'>
              <BlogCard
                date='1 Jan 2023'
                image='/assets/blog/blog_Img1.png'
                title='Bill Walsh leadership lessons Bill Walsh leadership lessons'
                desc='Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?'
              />
              <BlogCard
                image='/assets/blog/blog_Img2.png'
                title='PM mental models Bill Walsh leadership lessons'
                desc='Mental models are simple expressions of complex processes or relationships.'
              />
              <BlogCard
                image='/assets/blog/blog_Img3.png'
                title='What is Wireframing? Bill Walsh leadership lessons'
                desc='Introduction to Wireframing and its Principles. Learn from the best in the industry.'
              />
            </div>
            <Button
              className='sm:w-[231px] w-[203px] h-12 lg:m-auto 2xl:mt-[50px] xl:mt-10 flex m-auto'
              variant='blackOutline'
            >
              <Link
                href='/contact-us'
                rel='noopener noreferrer'
                className='flex items-center justify-center gap-3'
              >
                Let's connect
                <Arrow />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default CustomComponent;
