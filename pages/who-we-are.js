import Services3 from "../src/components/Common/Services-3";
import Tabs1 from "../src/components/Common/Tabs-1";
import WhoWeAreAbout5 from "../src/components/Who-we-are/WhoWeAreAbout5";
import WhoWeAreDoctors1 from "../src/components/Who-we-are/WhoWeAreDoctors1";
import WhoWeAreInfo1 from "../src/components/Who-we-are/WhoWeAreInfo1";
import WhoWeAreInfo9 from "../src/components/Who-we-are/WhoWeAreInfo9";
import WhoWeAreReviews2 from "../src/components/Who-we-are/WhoWeAreReviews2";
import Layouts from "../src/layout/Layouts";
import PageBanner from "../src/layout/PageBanner";

const WhoWeAre = () => {
  return (
    <Layouts>
      <PageBanner pageTitle="Who We Are" />
      {/* END BREADCRUMB */}
      {/* INFO-1
			============================================= */}
      <WhoWeAreInfo1 />
      {/* END INFO-1 */}
      {/* SERVICES-3
			============================================= */}
      <Services3 />
      {/* END SERVICES-3 */}
      {/* ABOUT-5
			============================================= */}
      <WhoWeAreAbout5 />
      {/* END ABOUT-5 */}
      {/* INFO-9
			============================================= */}
      <WhoWeAreInfo9 />
      {/* END INFO-9 */}
      {/* TABS-1
			============================================= */}
      <Tabs1 />
      {/* END TABS-1 */}
      {/* TESTIMONIALS-2
			============================================= */}
      <WhoWeAreReviews2 />
      {/* END TESTIMONIALS-2 */}
      {/* DOCTORS-1
			============================================= */}
      <WhoWeAreDoctors1 />
    </Layouts>
  );
};

export default WhoWeAre;
