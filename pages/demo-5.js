import About5 from "../src/components/Common/About-5";
import Banner5 from "../src/components/Common/Banner-5";
import Statistic1 from "../src/components/Common/Statistic-1";
import Tabs1 from "../src/components/Common/Tabs-1";
import Demo2Gallery1 from "../src/components/Demo-2/Demo2Gallery1";
import Demo2Reviews2 from "../src/components/Demo-2/Demo2Reviews2";
import Demo5About2 from "../src/components/Demo-5/Demo5About2";
import Demo5About6 from "../src/components/Demo-5/Demo5About6";
import Demo5Blog1 from "../src/components/Demo-5/Demo5Blog1";
import Demo5Contacts1 from "../src/components/Demo-5/Demo5Contacts1";
import Demo5Doctors1 from "../src/components/Demo-5/Demo5Doctors1";
import Demo5Hero5 from "../src/components/Demo-5/Demo5Hero5";
import Demo5Pricing3 from "../src/components/Demo-5/Demo5Pricing3";
import Demo5Services2 from "../src/components/Demo-5/Demo5Services2";
import Layouts from "../src/layout/Layouts";

const Demo5 = () => {
  return (
    <Layouts header={1} footer={4}>
      <Demo5Hero5 />
      {/* END HERO-5 */}
      {/* ABOUT-2
			============================================= */}
      <Demo5About2 />
      {/* END ABOUT-2 */}
      {/* ABOUT-5
			============================================= */}
      <About5 />
      {/* END ABOUT-5 */}
      {/* SERVICES-2
			============================================= */}
      <Demo5Services2 />
      {/* END SERVICES-2 */}
      {/* TABS-1
			============================================= */}
      <Tabs1 />
      {/* END TABS-1 */}
      {/* ABOUT-6
			============================================= */}
      <Demo5About6 />
      {/* END ABOUT-6 */}
      {/* STATISTIC-1
			============================================= */}
      <Statistic1 />
      {/* END STATISTIC-1 */}
      {/* DOCTORS-1
			============================================= */}
      <Demo5Doctors1 />
      {/* END DOCTORS-1 */}
      {/* TESTIMONIALS-2
			============================================= */}
      <Demo2Reviews2 />
      {/* END TESTIMONIALS-2 */}
      {/* PRICING-3
			============================================= */}
      <Demo5Pricing3 />
      {/* END PRICING-3 */}
      {/* GALLERY-1
			============================================= */}
      <Demo2Gallery1 />
      {/* END GALLERY-1 */}
      {/* BLOG-1
			============================================= */}
      <Demo5Blog1 />
      {/* END BLOG-1 */}
      {/* CONTACTS-1
			============================================= */}
      <Demo5Contacts1 />
      {/* END CONTACTS-1 */}
      {/* BANNER-5
			============================================= */}
      <Banner5 />
    </Layouts>
  );
};

export default Demo5;
