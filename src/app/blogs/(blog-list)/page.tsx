import { notFound } from 'next/navigation';

import { Typography } from '@codewinglet/components';

import BlogItem from '../(components)/blog/BlogItem';
import BlogList from '../(components)/blog/BlogList';
import Pagination from '../(components)/pagination/Pagination';

const fetchAllBlogs = async (page: number = 1, pageSize: number) => {
  try {
    const reqOptions = {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    };

    const blogRequest = await fetch(
      `http://127.0.0.1:1337/api/blogs?sort=createdAt:desc&populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
      reqOptions
    );

    if (!blogRequest.ok) {
      throw new Error(`HTTP error! Status: ${blogRequest.status}`);
    }

    const response = await blogRequest.json();
    return {
      blogs: response.data,
      pagination: response.meta.pagination,
    };
  } catch (error) {
    console.error('Fetch failed: ', error);
    notFound();
  }
};

const Blogs = async ({ searchParams }: { searchParams: { page?: string } }) => {
  const currentPage = parseInt(searchParams.page || '1');
  const pageSize = currentPage === 1 ? 5 : 6;
  const { blogs, pagination } = await fetchAllBlogs(currentPage, pageSize);

  console.log('pagination', pagination, blogs.length);

  return (
    <div className='text-black pl-14'>
      {blogs.length > 0 ? (
        <>
          {currentPage === 1 ? (
            <>
              <Typography className='text-h6 mb-[37px]'>
                Latest article
              </Typography>
              <BlogItem blog={blogs[0]} />
              <div className='border-b border-headerBoxBorder lg:pb-[45px] pb-10 mb-5'>
                <Typography className='text-h6 mb-[37px] mt-[60px]'>
                  Resources and insights
                </Typography>
                <BlogList blogs={blogs.slice(1)} />
              </div>
            </>
          ) : (
            <>
              <Typography className='text-h6 mb-[37px]'>
                Resources and insights
              </Typography>
              <BlogList blogs={blogs} />
            </>
          )}
          <Pagination
            totalPages={pagination.pageCount}
            currentPage={currentPage}
          />
        </>
      ) : (
        <p>No blogs available.</p>
      )}
    </div>
  );
};

export default Blogs;
