import { Suspense } from 'react';

import {
  BlogCategory,
  BlogList,
  NoBlogFound,
  Pagination,
  Typography,
} from '@codewinglet/components';
import { fetchAllBlogs, fetchLatestBlog } from '@codewinglet/services';


type BlogsProps = {
  searchParams: {
    page?: string;
    search?: string;
    category?: string;
  };
};

const Blogs = async ({ searchParams }: BlogsProps) => {
  const currentPage = parseInt(searchParams.page || '1');
  const searchQuery = searchParams.search || '';
  const categoryQuery = searchParams.category || '';
  const pageSize = 6;
  const { latestBlog } = await fetchLatestBlog();

  const { blogs, pagination } = await fetchAllBlogs(
    latestBlog[0]?.documentId,
    currentPage,
    pageSize,
    searchQuery,
    categoryQuery
  );

  const showLatest = currentPage === 1 && !searchQuery && !categoryQuery;
  return (
    <div className='text-black'>
      {blogs.length > 0 || latestBlog.length > 0 ? (
        <>
          {/* {showLatest && (
            <>
              <Typography className='text-h6 mb-9'>Latest article</Typography>
              <BlogItem blog={latestBlog[0]} />
            </>
          )} */}
          <div className='lg:block hidden'>
          <Suspense fallback={<div>Loading...</div>}>
            <BlogCategory />
            </Suspense>
          </div>
          {blogs.length > 0 ? (
            <div className='border-b border-headerBoxBorder lg:pb-[45px] pb-10 lg:mt-[50px]'>
              <Typography className='text-h6 mb-[37px]'>
                Resources and insights
              </Typography>
              <BlogList blogs={blogs} />
            </div>
          ) : (
            <div className='border-t border-headerBoxBorder lg:py-[45px] text-center pb-10 lg:mt-[50px]'>
              <h1>No Blogs Found</h1>
            </div>
          )}
          {pagination.page && (
            <Pagination
              totalPages={pagination.pageCount}
              currentPage={currentPage}
              searchQuery={searchParams.search}
            />
          )}
        </>
      ) : (
        <NoBlogFound />
      )}
    </div>
  );
};

export default Blogs;
