import { notFound } from 'next/navigation';

import {
  BlogItem,
  BlogList,
  Pagination,
  Typography,
} from '@codewinglet/components';

// import BlogItem from '../(components)/blog/BlogItem';
// import BlogList from '../(components)/blog/BlogList';
// import Pagination from '../(components)/pagination/Pagination';

const fetchLatestBlog = async () => {
  try {
    const reqOptions = {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    };

    const blogRequest = await fetch(
      `http://127.0.0.1:1337/api/blogs?sort=createdAt:desc&populate=*&pagination[page]=${1}&pagination[pageSize]=${1}`,
      reqOptions
    );

    if (!blogRequest.ok) {
      throw new Error(`HTTP error! Status: ${blogRequest.status}`);
    }

    const response = await blogRequest.json();
    return {
      latestBlog: response.data,
    };
  } catch (error) {
    console.error('Fetch failed for latest blog: ', error);
    notFound();
  }
};

const fetchAllBlogs = async (
  latestBlogId: string,
  page: number = 1,
  pageSize: number,
  searchQuery: string = ''
) => {
  try {
    const reqOptions = {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    };

    const searchFilter = searchQuery
      ? `&filters[title][$containsi]=${encodeURIComponent(searchQuery)}`
      : '';
    const tagsFilter = '&filters[tags][career][$eq]=true';

    const blogRequest = await fetch(
      `http://127.0.0.1:1337/api/blogs?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}&filters[documentId][$ne]=${latestBlogId}${searchFilter}${tagsFilter}`,
      reqOptions
    );

    if (!blogRequest.ok) {
      throw new Error(`HTTP error! Status: ${blogRequest.status}`);
    }

    const response = await blogRequest.json();
    console.log('🚀 ~ response:', response?.data?.at(0)?.tags);
    return {
      blogs: response.data,
      pagination: response.meta.pagination,
    };
  } catch (error) {
    console.error('Fetch failed: ', error);
    notFound();
  }
};

const Blogs = async ({
  searchParams,
}: {
  searchParams: { page?: string; search?: string; category?: string };
}) => {
  const currentPage = parseInt(searchParams.page || '1');
  const searchQuery = searchParams.search || '';
  const categoryQuery = searchParams.category || '';
  const pageSize = 2;
  const { latestBlog } = await fetchLatestBlog();
  const { blogs, pagination } = await fetchAllBlogs(
    latestBlog[0].documentId,
    currentPage,
    pageSize,
    searchQuery
  );

  return (
    <div className='text-black pl-14'>
      {blogs.length > 0 || latestBlog ? (
        <>
          {currentPage === 1 && !searchQuery ? (
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
          ) : (
            <div className='border-b border-headerBoxBorder lg:pb-[45px] pb-10'>
              <Typography className='text-h6 mb-[37px]'>
                Resources and insights
              </Typography>
              <BlogList blogs={blogs} />
            </div>
          )}
          <Pagination
            totalPages={pagination.pageCount}
            currentPage={currentPage}
            searchQuery={searchParams.search}
          />
        </>
      ) : (
        <p>No blogs available.</p>
      )}
    </div>
  );
};

export default Blogs;
