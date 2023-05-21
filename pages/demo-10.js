import Statistic1 from "../src/components/Common/Statistic-1";
import Demo10About3 from "../src/components/Demo-10/Demo10About3";
import Demo10About6 from "../src/components/Demo-10/Demo10About6";
import Demo10Banner2 from "../src/components/Demo-10/Demo10Banner2";
import Demo10Blog1 from "../src/components/Demo-10/Demo10Blog1";
import Demo10Doctors1 from "../src/components/Demo-10/Demo10Doctors1";
import Demo10Hero10 from "../src/components/Demo-10/Demo10Hero10";
import Demo10Info2 from "../src/components/Demo-10/Demo10Info2";
import Demo10Info9 from "../src/components/Demo-10/Demo10Info9";
import Demo10Reviews2 from "../src/components/Demo-10/Demo10Reviews2";
import Demo10Services4 from "../src/components/Demo-10/Demo10Services4";
import Demo10Tabs1 from "../src/components/Demo-10/Demo10Tabs1";
import Layouts from "../src/layout/Layouts";

const Demo10 = () => {
  return (
    <Layouts footer={3} header={2}>
      <Demo10Hero10 />
      {/* END HERO-10 */}
      {/* ABOUT-3
			============================================= */}
      <Demo10About3 />
      {/* END ABOUT-3 */}
      {/* ABOUT-6
			============================================= */}
      <Demo10About6 />
      {/* END ABOUT-6 */}
      {/* STATISTIC-1
			============================================= */}
      <Statistic1 />
      {/* END STATISTIC-1 */}
      {/* SERVICES-4
			============================================= */}
      <Demo10Services4 />
      {/* END SERVICES-4 */}
      {/* INFO-2
			============================================= */}
      <Demo10Info2 />
      {/* END INFO-2 */}
      {/* DOCTORS-1
			============================================= */}
      <Demo10Doctors1 />
      {/* END DOCTORS-1 */}
      {/* INFO-9
			============================================= */}
      <Demo10Info9 />
      {/* END INFO-9 */}
      {/* TABS-1
			============================================= */}
      <Demo10Tabs1 />
      {/* END TABS-1 */}
      {/* TESTIMONIALS-2
			============================================= */}
      <Demo10Reviews2 />
      {/* END TESTIMONIALS-2 */}
      {/* BLOG-1
			============================================= */}
      <Demo10Blog1 />
      {/* END BLOG-1 */}
      {/* BANNER-2
			============================================= */}
      <Demo10Banner2 />
    </Layouts>
  );
};

export default Demo10;
