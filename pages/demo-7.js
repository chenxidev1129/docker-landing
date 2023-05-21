import Statistic1 from "../src/components/Common/Statistic-1";
import Demo2Gallery1 from "../src/components/Demo-2/Demo2Gallery1";
import Demo2Reviews2 from "../src/components/Demo-2/Demo2Reviews2";
import Demo7About4 from "../src/components/Demo-7/Demo7About4";
import Demo7About5 from "../src/components/Demo-7/Demo7About5";
import Demo7Banner2 from "../src/components/Demo-7/Demo7Banner2";
import Demo7Blog1 from "../src/components/Demo-7/Demo7Blog1";
import Demo7Doctors1 from "../src/components/Demo-7/Demo7Doctors1";
import Demo7Hero7 from "../src/components/Demo-7/Demo7Hero7";
import Demo7Info2 from "../src/components/Demo-7/Demo7Info2";
import Demo7Pricing1 from "../src/components/Demo-7/Demo7Pricing1";
import Demo7Services2 from "../src/components/Demo-7/Demo7Services2";
import Demo7Services4 from "../src/components/Demo-7/Demo7Services4";
import Demo7Services6 from "../src/components/Demo-7/Demo7Services6";
import Demo7Video2 from "../src/components/Demo-7/Demo7Video2";
import Layouts from "../src/layout/Layouts";

const Demo7 = () => {
  return (
    <Layouts header={5} footer={5}>
      {" "}
      <Demo7Hero7 />
      {/* END HERO-7 */}
      {/* ABOUT-4
			============================================= */}
      <Demo7About4 />
      {/* END ABOUT-4 */}
      {/* ABOUT-5
			============================================= */}
      <Demo7About5 />
      {/* END ABOUT-5 */}
      {/* SERVICES-4
			============================================= */}
      <Demo7Services4 />
      {/* END SERVICES-4 */}
      {/* SERVICES-6
			============================================= */}
      <Demo7Services6 />
      {/* END SERVICES-6 */}
      {/* INFO-2
			============================================= */}
      <Demo7Info2 />
      {/* END INFO-2 */}
      {/* GALLERY-1
			============================================= */}
      <Demo2Gallery1 />
      {/* END GALLERY-1 */}
      {/* SERVICES-2
			============================================= */}
      <Demo7Services2 />
      {/* END SERVICES-2 */}
      {/* STATISTIC-1
			============================================= */}
      <Statistic1 />
      {/* END STATISTIC-1 */}
      {/* VIDEO-2
			============================================= */}
      <Demo7Video2 />
      {/* END VIDEO-2 */}
      {/* TESTIMONIALS-2
			============================================= */}
      <Demo2Reviews2 />
      {/* END TESTIMONIALS-2 */}
      {/* DOCTORS-1
			============================================= */}
      <Demo7Doctors1 />
      {/* END DOCTORS-1 */}
      {/* BANNER-2
			============================================= */}
      <Demo7Banner2 />
      {/* END BANNER-2 */}
      {/* PRICING-1
			============================================= */}
      <Demo7Pricing1 />
      {/* END PRICING-1 */}
      {/* BLOG-1
			============================================= */}
      <Demo7Blog1 />
    </Layouts>
  );
};

export default Demo7;
