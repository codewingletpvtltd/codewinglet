import { notFound } from 'next/navigation';

import { BlogDetailsModule } from '@codewinglet/modules';

const fetchBlogDetails = async (slug: string) => {
  try {
    const reqOptions = {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    };

    const blogRequest = await fetch(
      `http://127.0.0.1:1337/api/blogs?filters[slug][$eq]=${slug}&populate=*`,
      reqOptions
    );

    if (!blogRequest.ok) {
      throw new Error(`HTTP error! Status: ${blogRequest.status}`);
    }

    const response = await blogRequest.json();
    return response.data;
  } catch (error) {
    console.error('Fetch failed: ', error);
    notFound();
  }
};

const updateViewCount = async (blogId: string, currentViews: number = 0) => {
  try {
    const reqOptions: RequestInit = {
      cache: 'no-store',
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          views: currentViews + 1,
        },
      }),
    };

    const updateRequest = await fetch(
      `http://127.0.0.1:1337/api/blogs/${blogId}`,
      reqOptions
    );

    if (!updateRequest.ok) {
      throw new Error(
        `Failed to update view count. Status: ${updateRequest.status}`
      );
    }
  } catch (error) {
    console.error('View count update failed: ', error);
    notFound();
  }
};

const BlogDetails = async ({ params }: any) => {
  const blog = await fetchBlogDetails(params?.slug);
  if (blog && blog.length > 0) {
    const blogId = blog[0].documentId;

    updateViewCount(blogId, blog[0].views);

    return (
      <>
        <BlogDetailsModule blogData={blog[0]} />
      </>
    );
  }
};

export default BlogDetails;
