import { BlogCard, SectionHeader } from '@codewinglet/components';
import { blogList } from './constants';

const OurBlog = () => (
  <div className='my-[50px] mx-[20px] md:mx-[38px] max-w-screen-xl xl:mx-auto relative'>
    <SectionHeader
      title={
        <>
          <strong className='font-800'>Our</strong> Blog
        </>
      }
      description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      wrapperClassName='flex flex-col items-center justify-center'
      descriptionClassName='text-center'
      headingClassName='text-center'
      descriptionTextWrap
    />
    <div
      className={
        'grid grid-flow-row md:grid-cols-2 mt-[30px] lg:grid-cols-3 md:gap-[21px]'
      }
    >
      {blogList.map((blog, index) => (
        <BlogCard
          key={`Blog-${index}`}
          title={blog.title}
          image={blog.image}
          desc={blog.desc}
          date={blog.date}
        />
      ))}
    </div>
  </div>
);

export default OurBlog;
