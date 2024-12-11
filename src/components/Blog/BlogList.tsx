import { BlogCard } from '@codewinglet/components';
import { calculateReadTime } from '@codewinglet/utils';

import { Blog } from './types';

interface BlogListProps {
  blogs: Blog[];
}
export const BlogList: React.FC<BlogListProps> = ({ blogs }) => (
  <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-[45px] gap-5 md:gap-y-[45px]'>
    {blogs.map((blog) => (
      <BlogCard
        key={blog.id}
        image={blog?.image?.url || ''}
        date={blog.createdAt}
        title={blog.title}
        desc={blog.summary}
        readTime={calculateReadTime(blog.content)}
        tags={blog?.tags}
        href={`/blogs/${blog.slug}`}
        className='!mx-0 !w-full custom-other-layout'
        imageSrc='/assets/icons/crossArrow.svg'
      />
    ))}
  </div>
);
