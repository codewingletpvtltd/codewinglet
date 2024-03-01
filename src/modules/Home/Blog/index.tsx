import { SectionHeader } from '@codewinglet/components';

const Blog = () => (
  <section className='relative overflow-hidden xl:py-20 lg:py-14 py-10 bg-white'>
    <section className='container w-full lg:px-[15px] sm:px-[30px] px-[15px] mx-auto'>
      <SectionHeader
        title={<>Blog</>}
        description='In Progress'
        headingClassName='text-[22px]'
      />
    </section>
  </section>
);
export default Blog;
