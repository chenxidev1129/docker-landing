import Info6 from "../src/components/Common/Info-6";
import Services7 from "../src/components/Common/Services-7";
import Tabs1 from "../src/components/Common/Tabs-1";
import Demo2Reviews2 from "../src/components/Demo-2/Demo2Reviews2";
import Demo4About6 from "../src/components/Demo-4/Demo4About6";
import Demo4Banner7 from "../src/components/Demo-4/Demo4Banner7";
import Demo4Blog1 from "../src/components/Demo-4/Demo4Blog1";
import Demo4Doctors1 from "../src/components/Demo-4/Demo4Doctors1";
import Demo4Hero4 from "../src/components/Demo-4/Demo4Hero4";
import Demo4Info4 from "../src/components/Demo-4/Demo4Info4";
import Demo4Statistic3 from "../src/components/Demo-4/Demo4Statistic3";
import Demo4Video2 from "../src/components/Demo-4/Demo4Video2";
import Layouts from "../src/layout/Layouts";

const Demo4 = () => {
  return (
    <Layouts header={5} footer={4}>
      <Demo4Hero4 />
      {/* END HERO-4 */}
      {/* INFO-4
			============================================= */}
      <Demo4Info4 />
      {/* END INFO-4 */}
      {/* SERVICES-7
			============================================= */}
      <Services7 />
      {/* END SERVICES-7 */}
      {/* STATISTIC-3
			============================================= */}
      <Demo4Statistic3 />
      {/* END STATISTIC-3 */}
      {/* INFO-6
			============================================= */}
      <Info6 />
      {/* END INFO-6 */}
      {/* TABS-1
			============================================= */}
      <Tabs1 />
      {/* END TABS-1 */}
      {/* TESTIMONIALS-2
			============================================= */}
      <Demo2Reviews2 />
      {/* END TESTIMONIALS-2 */}
      {/* DOCTORS-1
			============================================= */}
      <Demo4Doctors1 />
      {/* END DOCTORS-1 */}
      {/* BANNER-7
			============================================= */}
      <Demo4Banner7 />
      {/* END BANNER-7 */}
      {/* VIDEO-2
			============================================= */}
      <Demo4Video2 />
      {/* END VIDEO-2 */}
      {/* BLOG-1
			============================================= */}
      <Demo4Blog1 />
      {/* END BLOG-1 */}
      {/* ABOUT-6
			============================================= */}
      <Demo4About6 />
    </Layouts>
  );
};

export default Demo4;
