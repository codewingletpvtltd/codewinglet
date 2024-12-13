import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import { BlogCard, Button, SectionHeader } from '@codewinglet/components';
import { fetchRelatedBlogs } from '@codewinglet/services';

export default async function LatestArticles({ blogData }: any) {
  let data = null;

  if (blogData?.tags && Object.keys(blogData.tags).length > 0) {
    const tags = Object.keys(blogData.tags).filter(
      (key) => key !== 'id' && blogData.tags[key]
    );

    data = await fetchRelatedBlogs(blogData.documentId, tags);
  }

  const showRelatedBlog = data?.length > 0;
  return (
    <>
      <div
        className='bg-white lg:py-20 md:py-[60px] py-[30px] scroll-mt-40 m_blog'
        id='blog'
      >
        {showRelatedBlog && (
          <>
            <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
              <SectionHeader
                title={<>Related Articles</>}
                description={
                  <>
                    Cutting-Edge Technologies We Work With for Optimal Results
                  </>
                }
              />
              <div className='lg:mt-[50px] md:mt-10 mt-5'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 md:gap-[50px] gap-5'>
                  {data?.slice(0, 3).map((blog: any) => (
                    <BlogCard
                      key={blog.id}
                      href={`/blogs/${blog.slug}`}
                      date={blog.createdAt}
                      readTime={blog.read}
                      image={blog?.image?.url || ''}
                      title={blog.title}
                      desc={blog.summary}
                      tags={blog.tags}
                    />
                  ))}
                </div>
              </div>
            </div>

            <Button
              className='sm:w-[248px] w-[203px] h-[52px] lg:m-auto 2xl:mt-12 mt-10 mx-auto lg:flex hidden'
              variant='blackOutline'
            >
              <Link
                href='/blogs'
                rel='noopener noreferrer'
                className='flex items-center justify-center gap-3'
              >
                Explore blogs
                <Arrow />
              </Link>
            </Button>
          </>
        )}
      </div>
    </>
  );
}
