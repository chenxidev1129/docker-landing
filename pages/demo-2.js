import About5 from "../src/components/Common/About-5";
import Info2 from "../src/components/Common/Info-2";
import Demo2About4 from "../src/components/Demo-2/Demo2About4";
import Demo2About5 from "../src/components/Demo-2/Demo2About5";
import Demo2Banner2 from "../src/components/Demo-2/Demo2Banner2";
import Demo2Banner8 from "../src/components/Demo-2/Demo2Banner8";
import Demo2Blog1 from "../src/components/Demo-2/Demo2Blog1";
import Demo2Doctors1 from "../src/components/Demo-2/Demo2Doctors1";
import Demo2Gallery1 from "../src/components/Demo-2/Demo2Gallery1";
import Demo2Hero2 from "../src/components/Demo-2/Demo2Hero2";
import Demo2Info3 from "../src/components/Demo-2/Demo2Info3";
import Demo2Reviews2 from "../src/components/Demo-2/Demo2Reviews2";
import Demo2Services2 from "../src/components/Demo-2/Demo2Services2";
import Demo2Statistic2 from "../src/components/Demo-2/Demo2Statistic2";
import Demo2Tabs1 from "../src/components/Demo-2/Demo2Tabs1";
import Layouts from "../src/layout/Layouts";

const Demo2 = () => {
  return (
    <Layouts footer={3}>
      <Demo2Hero2 />
      {/* END HERO-2 */}
      {/* ABOUT-4
			============================================= */}
      <Demo2About4 />
      {/* END ABOUT-4 */}
      {/* ABOUT-5
			============================================= */}
      <About5 />
      {/* END ABOUT-5 */}
      {/* SERVICES-2
			============================================= */}
      <Demo2Services2 />
      {/* END SERVICES-2 */}
      {/* INFO-3
			============================================= */}
      <Demo2Info3 />
      {/* END INFO-3 */}
      {/* INFO-2
			============================================= */}
      <Info2 />
      {/* END INFO-2 */}
      {/* GALLERY-1
			============================================= */}
      <Demo2Gallery1 />
      {/* END GALLERY-1 */}
      {/* ABOUT-6
			============================================= */}
      <Demo2About5 />
      {/* END ABOUT-6 */}
      {/* STATISTIC-2
			============================================= */}
      <Demo2Statistic2 />
      {/* END STATISTIC-2 */}
      {/* TABS-1
			============================================= */}
      <Demo2Tabs1 />
      {/* END TABS-1 */}
      {/* TESTIMONIALS-2
			============================================= */}
      <Demo2Reviews2 />
      {/* END TESTIMONIALS-2 */}
      {/* DOCTORS-1
			============================================= */}
      <Demo2Doctors1 />
      {/* END DOCTORS-1 */}
      {/* BANNER-2
			============================================= */}
      <Demo2Banner2 />
      {/* END BANNER-2 */}
      {/* BLOG-1
			============================================= */}
      <Demo2Blog1 />
      {/* END BLOG-1 */}
      {/* BANNER-8
			============================================= */}
      <Demo2Banner8 />
    </Layouts>
  );
};

export default Demo2;
