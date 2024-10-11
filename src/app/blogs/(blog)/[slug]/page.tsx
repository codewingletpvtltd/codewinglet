import { notFound } from 'next/navigation';

import { BlogDetailsModule } from '@codewinglet/modules';
import { fetchBlogDetails, updateViewCount } from '@codewinglet/services';

const BlogDetails = async ({ params }: any) => {
  const blog = await fetchBlogDetails(params?.slug);
  if (blog && blog.length > 0) {
    const blogId = blog[0].documentId;
    updateViewCount(blogId, blog[0].views);

    return <BlogDetailsModule blogData={blog[0]} />;
  } else {
    notFound();
  }
};

export default BlogDetails;
