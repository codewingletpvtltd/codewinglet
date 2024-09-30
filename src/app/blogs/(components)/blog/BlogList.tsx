import { BlogCard } from '@codewinglet/components';

import { Blog } from './types';

interface BlogListProps {
  blogs: Blog[];
}
const BlogList: React.FC<BlogListProps> = ({ blogs }) => (
  <div className='grid md:grid-cols-2 grid-cols-1 lg:gap-[45px] gap-5 gap-y-[45px]'>
    {blogs.map((blog) => (
      <BlogCard
        key={blog.id}
        image={`http://127.0.0.1:1337${blog.image.url}`}
        date={blog.createdAt}
        title={blog.title}
        desc={blog.summary}
        readTime={blog.read}
        category={blog.category}
        href={`/blogs/${blog.slug}`}
        className='!mx-0 !w-full custom-other-layout'
        imageSrc='/assets/icons/crossArrow.svg'
      />
    ))}
  </div>
);

export default BlogList;
