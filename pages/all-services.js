import AllServicesTabs2 from "../src/components/All-services/AllServicesTabs2";
import AllServicesTestimonials2 from "../src/components/All-services/AllServicesTestimonials2";
import Banner5 from "../src/components/Common/Banner-5";
import Layouts from "../src/layout/Layouts";
import PageBanner from "../src/layout/PageBanner";

const AllServices = () => {
  return (
    <Layouts>
      <PageBanner pageTitle="Our Services" />
      <AllServicesTabs2 />
      <AllServicesTestimonials2 />
      <Banner5 />
    </Layouts>
  );
};

export default AllServices;
