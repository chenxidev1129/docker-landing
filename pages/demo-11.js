import About5 from "../src/components/Common/About-5";
import Tabs1 from "../src/components/Common/Tabs-1";
import Demo11About2 from "../src/components/Demo-11/Demo11About2";
import Demo11Banner2 from "../src/components/Demo-11/Demo11Banner2";
import Demo11Banner3 from "../src/components/Demo-11/Demo11Banner3";
import Demo11Banner6 from "../src/components/Demo-11/Demo11Banner6";
import Demo11Banner7 from "../src/components/Demo-11/Demo11Banner7";
import Demo11Doctors2 from "../src/components/Demo-11/Demo11Doctors2";
import Demo11Hero11 from "../src/components/Demo-11/Demo11Hero11";
import Demo11Info9 from "../src/components/Demo-11/Demo11Info9";
import Demo11Pricing2 from "../src/components/Demo-11/Demo11Pricing2";
import Demo11Reviews2 from "../src/components/Demo-11/Demo11Reviews2";
import Demo11Services1 from "../src/components/Demo-11/Demo11Services1";
import Demo11Services2 from "../src/components/Demo-11/Demo11Services2";
import Demo11Statistic3 from "../src/components/Demo-11/Demo11Statistic3";
import Demo2Gallery1 from "../src/components/Demo-2/Demo2Gallery1";
import Layouts from "../src/layout/Layouts";

const Demo11 = () => {
  return (
    <Layouts footer={2} header={6}>
      <Demo11Hero11 />
      {/* END HERO-11 */}
      {/* ABOUT-2
			============================================= */}
      <Demo11About2 />
      {/* END ABOUT-2 */}
      {/* SERVICES-1
			============================================= */}
      <Demo11Services1 />
      {/* END SERVICES-1 */}
      {/* ABOUT-5
			============================================= */}
      <About5 />
      {/* END ABOUT-5 */}
      {/* SERVICES-2
			============================================= */}
      <Demo11Services2 />
      {/* END SERVICES-2 */}
      {/* BANNER-2
			============================================= */}
      <Demo11Banner2 />
      {/* END BANNER-2 */}
      {/* STATISTIC-3
			============================================= */}
      <Demo11Statistic3 />
      {/* END STATISTIC-3 */}
      {/* GALLERY-1
			============================================= */}
      <Demo2Gallery1 />
      {/* END GALLERY-1 */}
      {/* TABS-1
			============================================= */}
      <Tabs1 />
      {/* END TABS-1 */}
      {/* BANNER-7
			============================================= */}
      <Demo11Banner7 />
      {/* END BANNER-7 */}
      {/* DOCTORS-2
			============================================= */}
      <Demo11Doctors2 />
      {/* END DOCTORS-2 */}
      {/* INFO-9
			============================================= */}
      <Demo11Info9 />
      {/* END INFO-9 */}
      {/* PRICING-2
			============================================= */}
      <Demo11Pricing2 />
      {/* END PRICING-2 */}
      {/* TESTIMONIALS-2
			============================================= */}
      <Demo11Reviews2 />
      {/* END TESTIMONIALS-2 */}
      {/* BANNER-3
			============================================= */}
      <Demo11Banner3 />
      {/* END BANNER-3 */}
      {/* BANNER-6
			============================================= */}
      <Demo11Banner6 />
    </Layouts>
  );
};

export default Demo11;
