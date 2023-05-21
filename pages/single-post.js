import SinglePostBlogPage from "../src/components/Single-post/SinglePostBlogPage";
import Layouts from "../src/layout/Layouts";
import PageBanner from "../src/layout/PageBanner";

const SinglePost = () => {
  return (
    <Layouts>
      <PageBanner
        pageTitle="5 Benefits of ..."
        url="blog-listing"
        motherTitle="Our Blog
"
      />
      <SinglePostBlogPage />
    </Layouts>
  );
};

export default SinglePost;
