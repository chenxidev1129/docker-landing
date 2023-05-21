import BlogPage from "../src/components/Blog-listing/BlogPage";
import Layouts from "../src/layout/Layouts";
import PageBanner from "../src/layout/PageBanner";

const BlogListing = () => {
  return (
    <Layouts>
      <PageBanner pageTitle="Our Blogs &amp; Latest News" />
      <BlogPage />
    </Layouts>
  );
};

export default BlogListing;
