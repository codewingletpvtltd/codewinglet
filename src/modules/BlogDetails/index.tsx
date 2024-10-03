import { Suspense } from 'react';

import Articles from '../Technology/Articles/Articles';
import BlogDescription from './BlogDescription/BlogDescription';
import BlogDetailsLink from './BlogDetailsLink/BlogDetailsLink';
import BlogHeroSection from './BlogHeroSection/BlogHeroSection';

const BlogDetails = ({ blogData }: any) => (
  <>
    <BlogDetailsLink blogData={blogData} />
    <BlogHeroSection blogData={blogData} />
    <BlogDescription contentData={blogData.content} />
    <Suspense fallback={<div>Loading...</div>}>
      <Articles blogData={blogData} />
    </Suspense>
  </>
);

export default BlogDetails;
