import Statistic1 from "../src/components/Common/Statistic-1";
import Tabs1 from "../src/components/Common/Tabs-1";
import Demo2Reviews2 from "../src/components/Demo-2/Demo2Reviews2";
import Demo6About3 from "../src/components/Demo-6/Demo6About3";
import Demo6About5 from "../src/components/Demo-6/Demo6About5";
import Demo6Banner6 from "../src/components/Demo-6/Demo6Banner6";
import Demo6Banner7 from "../src/components/Demo-6/Demo6Banner7";
import Demo6Blog1 from "../src/components/Demo-6/Demo6Blog1";
import Demo6Doctors1 from "../src/components/Demo-6/Demo6Doctors1";
import Demo6Hero6 from "../src/components/Demo-6/Demo6Hero6";
import Demo6Info2 from "../src/components/Demo-6/Demo6Info2";
import Demo6Info9 from "../src/components/Demo-6/Demo6Info9";
import Demo6Pricing1 from "../src/components/Demo-6/Demo6Pricing1";
import Demo6Services1 from "../src/components/Demo-6/Demo6Services1";
import Demo6Services5 from "../src/components/Demo-6/Demo6Services5";
import Demo6Video1 from "../src/components/Demo-6/Demo6Video1";
import Layouts from "../src/layout/Layouts";

const Demo6 = () => {
  return (
    <Layouts header={3} footer={3}>
      {/* END HEADER */}
      {/* HERO-6
			============================================= */}
      <Demo6Hero6 />
      {/* END HERO-6 */}
      {/* ABOUT-3
			============================================= */}
      <Demo6About3 />
      {/* END ABOUT-3 */}
      {/* SERVICES-1
			============================================= */}
      <Demo6Services1 />
      {/* END SERVICES-1 */}
      {/* SERVICES-5
			============================================= */}
      <Demo6Services5 />
      {/* END SERVICES-5 */}
      {/* TABS-1
			============================================= */}
      <Tabs1 />
      {/* END TABS-1 */}
      {/* STATISTIC-1
			============================================= */}
      <Statistic1 />
      {/* END STATISTIC-1 */}
      {/* INFO-2
			============================================= */}
      <Demo6Info2 />
      {/* END INFO-2 */}
      {/* TESTIMONIALS-2
			============================================= */}
      <Demo2Reviews2 />
      {/* END TESTIMONIALS-2 */}
      {/* DOCTORS-1
			============================================= */}
      <Demo6Doctors1 />
      {/* END DOCTORS-1 */}
      {/* INFO-9
			============================================= */}
      <Demo6Info9 />
      {/* END INFO-9 */}
      {/* ABOUT-5
			============================================= */}
      <Demo6About5 />
      {/* END ABOUT-5 */}
      {/* VIDEO-1
			============================================= */}
      <Demo6Video1 />
      {/* END VIDEO-1 */}
      {/* PRICING-1
			============================================= */}
      <Demo6Pricing1 />
      {/* END PRICING-1 */}
      {/* BANNER-7
			============================================= */}
      <Demo6Banner7 />
      {/* END BANNER-7 */}
      {/* BLOG-1
			============================================= */}
      <Demo6Blog1 />
      {/* END BLOG-1 */}
      {/* BANNER-6
			============================================= */}
      <Demo6Banner6 />
      {/* END BANNER-6 */}
    </Layouts>
  );
};

export default Demo6;
