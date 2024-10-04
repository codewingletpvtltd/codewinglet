import {
  BlogItem,
  BlogList,
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
  const pageSize = 2;
  const { latestBlog } = await fetchLatestBlog();
  const { blogs, pagination } = await fetchAllBlogs(
    latestBlog[0].documentId,
    currentPage,
    pageSize,
    searchQuery,
    categoryQuery
  );

  return (
    <div className='text-black pl-14'>
      {blogs.length > 0 || latestBlog ? (
        <>
          {currentPage === 1 && !searchQuery && !categoryQuery ? (
            <>
              <Typography className='text-h6 mb-[37px]'>
                Latest article
              </Typography>
              <BlogItem blog={latestBlog[0]} />
              <div className='border-b border-headerBoxBorder lg:pb-[45px] pb-10'>
                <Typography className='text-h6 mb-[37px] mt-[60px]'>
                  Resources and insights
                </Typography>
                <BlogList blogs={blogs} />
              </div>
            </>
          ) : blogs.length > 0 ? (
            <div className='border-b border-headerBoxBorder lg:pb-[45px] pb-10'>
              <Typography className='text-h6 mb-[37px]'>
                Resources and insights
              </Typography>
              <BlogList blogs={blogs} />
            </div>
          ) : (
            <p className='text-black'>No blogs available.</p>
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
        <p className='text-black'>No blogs available.</p>
      )}
    </div>
  );
};

export default Blogs;
