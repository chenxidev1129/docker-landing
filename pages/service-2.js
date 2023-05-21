import Banner5 from "../src/components/Common/Banner-5";
import Service2Page from "../src/components/Service-2/Service2Page";
import Service2Reviews2 from "../src/components/Service-2/Service2Reviews2";
import Layouts from "../src/layout/Layouts";
import PageBanner from "../src/layout/PageBanner";

const Service2 = () => {
  return (
    <Layouts>
      <PageBanner
        pageTitle="Service Single #1"
        motherTitle="Our Services"
        url="all-services"
      />
      {/* END BREADCRUMB */}
      {/* SERVICE DETAILS
			============================================= */}
      <Service2Page />
      {/* END SERVICE DETAILS */}
      {/* TESTIMONIALS-2
			============================================= */}
      <Service2Reviews2 />
      {/* END TESTIMONIALS-2 */}
      {/* BANNER-5
			============================================= */}
      <Banner5 />
    </Layouts>
  );
};

export default Service2;
