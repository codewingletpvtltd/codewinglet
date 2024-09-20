import Articles from '../Technology/Articles/Articles';
import BlogDescription from './BlogDescription/BlogDescription';
import BlogDetailsLink from './BlogDetailsLink/BlogDetailsLink';
import BlogHeroSection from './BlogHeroSection/BlogHeroSection';

const BlogDetails = () => (
  <>
    <BlogDetailsLink />
    <BlogHeroSection />
    <BlogDescription />
    <Articles />
  </>
);

export default BlogDetails;
