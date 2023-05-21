import Info2 from "../src/components/Common/Info-2";
import Services3 from "../src/components/Common/Services-3";
import Tabs1 from "../src/components/Common/Tabs-1";
import Demo2Reviews2 from "../src/components/Demo-2/Demo2Reviews2";
import Demo3About3 from "../src/components/Demo-3/Demo3About3";
import Demo3About4 from "../src/components/Demo-3/Demo3About4";
import Demo3Banner2 from "../src/components/Demo-3/Demo3Banner2";
import Demo3Banner3 from "../src/components/Demo-3/Demo3Banner3";
import Demo3Doctors1 from "../src/components/Demo-3/Demo3Doctors1";
import Demo3Gallery1 from "../src/components/Demo-3/Demo3Gallery1";
import Demo3Hero3 from "../src/components/Demo-3/Demo3Hero3";
import Demo3Info4 from "../src/components/Demo-3/Demo3Info4";
import Demo3Statistic1 from "../src/components/Demo-3/Demo3Statistic1";
import Layouts from "../src/layout/Layouts";

const Demo3 = () => {
  return (
    <Layouts header={3} footer={1}>
      <Demo3Hero3 />
      {/* END HERO-3 */}
      {/* ABOUT-3
			============================================= */}
      <Demo3About3 />
      {/* END ABOUT-3 */}
      {/* INFO-4
			============================================= */}
      <Demo3Info4 />
      {/* END INFO-4 */}
      {/* STATISTIC-1
			============================================= */}
      <Demo3Statistic1 />
      {/* END STATISTIC-1 */}
      {/* INFO-2
			============================================= */}
      <Info2 />
      {/* END INFO-2 */}
      {/* GALLERY-1
			============================================= */}
      <Demo3Gallery1 />
      {/* END GALLERY-1 */}
      {/* TABS-1
			============================================= */}
      <Tabs1 />
      {/* END TABS-1 */}
      {/* SERVICES-3
			============================================= */}
      <Services3 />
      {/* END SERVICES-3 */}
      {/* ABOUT-4
			============================================= */}
      <Demo3About4 />
      {/* END ABOUT-4 */}
      {/* BANNER-2
			============================================= */}
      <Demo3Banner2 />
      {/* END BANNER-2 */}
      {/* DOCTORS-1
			============================================= */}
      <Demo3Doctors1 />
      {/* END DOCTORS-1 */}
      {/* TESTIMONIALS-2
			============================================= */}
      <Demo2Reviews2 />
      {/* END TESTIMONIALS-2 */}
      {/* BANNER-3
			============================================= */}
      <Demo3Banner3 />
    </Layouts>
  );
};

export default Demo3;
