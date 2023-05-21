import Services3 from "../src/components/Common/Services-3";
import Statistic1 from "../src/components/Common/Statistic-1";
import Tabs1 from "../src/components/Common/Tabs-1";
import Demo9About4 from "../src/components/Demo-9/Demo9About4";
import Demo9About6 from "../src/components/Demo-9/Demo9About6";
import Demo9Banner4 from "../src/components/Demo-9/Demo9Banner4";
import Demo9Banner7 from "../src/components/Demo-9/Demo9Banner7";
import Demo9Blog1 from "../src/components/Demo-9/Demo9Blog1";
import Demo9Doctors1 from "../src/components/Demo-9/Demo9Doctors1";
import Demo9Hero9 from "../src/components/Demo-9/Demo9Hero9";
import Demo9Info2 from "../src/components/Demo-9/Demo9Info2";
import Demo9Info6 from "../src/components/Demo-9/Demo9Info6";
import Demo9Reviews2 from "../src/components/Demo-9/Demo9Reviews2";
import Layouts from "../src/layout/Layouts";

const Demo9 = () => {
  return (
    <Layouts footer={1} header={5}>
      <Demo9Hero9 />
      {/* END HERO-9 */}
      {/* ABOUT-4
			============================================= */}
      <Demo9About4 />
      {/* END ABOUT-4 */}
      {/* SERVICES-3
			============================================= */}
      <Services3 />
      {/* END SERVICES-3 */}
      {/* INFO-2
			============================================= */}
      <Demo9Info2 />
      {/* END INFO-2 */}
      {/* INFO-6
			============================================= */}
      <Demo9Info6 />
      {/* END INFO-6 */}
      {/* TABS-1
			============================================= */}
      <Tabs1 />
      {/* END TABS-1 */}
      {/* TESTIMONIALS-2
			============================================= */}
      <Demo9Reviews2 />
      {/* END TESTIMONIALS-2 */}
      {/* ABOUT-6
			============================================= */}
      <Demo9About6 />
      {/* END ABOUT-6 */}
      {/* STATISTIC-1
			============================================= */}
      <Statistic1 />
      {/* END STATISTIC-1 */}
      {/* DOCTORS-1
			============================================= */}
      <Demo9Doctors1 />
      {/* END DOCTORS-1 */}
      {/* BANNER-7
			============================================= */}
      <Demo9Banner7 />
      {/* END BANNER-7 */}
      {/* BLOG-1
			============================================= */}
      <Demo9Blog1 />
      {/* END BLOG-1 */}
      {/* BANNER-4
			============================================= */}
      <Demo9Banner4 />
    </Layouts>
  );
};

export default Demo9;
