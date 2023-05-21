import Banner5 from "../src/components/Common/Banner-5";
import Pricing2Page from "../src/components/Pricing-2/Pricing2Page";
import Pricing2Pricing1 from "../src/components/Pricing-2/Pricing2Pricing1";
import Layouts from "../src/layout/Layouts";
import PageBanner from "../src/layout/PageBanner";

const Pricing2 = () => {
  return (
    <Layouts>
      <PageBanner pageTitle="Our Pricing" />
      {/* END BREADCRUMB */}
      {/* PRICING-2 PAGE CONTENT
			============================================= */}
      <Pricing2Page />
      {/* END PRICING-2 PAGE CONTENT */}
      {/* PRICING-1
			============================================= */}
      <Pricing2Pricing1 />
      {/* END PRICING-1 */}
      {/* BANNER-5
			============================================= */}
      <Banner5 />
    </Layouts>
  );
};

export default Pricing2;
