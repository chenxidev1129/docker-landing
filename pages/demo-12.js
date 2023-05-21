import Info6 from "../src/components/Common/Info-6";
import Demo12About2 from "../src/components/Demo-12/Demo12About2";
import Demo12Banner2 from "../src/components/Demo-12/Demo12Banner2";
import Demo12Banner8 from "../src/components/Demo-12/Demo12Banner8";
import Demo12Blog1 from "../src/components/Demo-12/Demo12Blog1";
import Demo12Doctors1 from "../src/components/Demo-12/Demo12Doctors1";
import Demo12Hero12 from "../src/components/Demo-12/Demo12Hero12";
import Demo12Info4 from "../src/components/Demo-12/Demo12Info4";
import Demo12Info8 from "../src/components/Demo-12/Demo12Info8";
import Demo12Pricing1 from "../src/components/Demo-12/Demo12Pricing1";
import Demo12Reviews2 from "../src/components/Demo-12/Demo12Reviews2";
import Demo12Services5 from "../src/components/Demo-12/Demo12Services5";
import Demo12Statistic3 from "../src/components/Demo-12/Demo12Statistic3";
import Demo12Video1 from "../src/components/Demo-12/Demo12Video1";
import Layouts from "../src/layout/Layouts";

const Demo12 = () => {
  return (
    <Layouts header={6} footer={1}>
      {" "}
      <Demo12Hero12 />
      {/* END HERO-12 */}
      {/* ABOUT-2
			============================================= */}
      <Demo12About2 />
      {/* END ABOUT-2 */}
      {/* INFO-4
			============================================= */}
      <Demo12Info4 />
      {/* END INFO-4 */}
      {/* SERVICES-5
			============================================= */}
      <Demo12Services5 />
      {/* END SERVICES-5 */}
      {/* STATISTIC-3
			============================================= */}
      <Demo12Statistic3 />
      {/* END STATISTIC-3 */}
      {/* INFO-6
			============================================= */}
      <Info6 />
      {/* END INFO-6 */}
      {/* DOCTORS-1
			============================================= */}
      <Demo12Doctors1 />
      {/* END DOCTORS-1 */}
      {/* TESTIMONIALS-2
			============================================= */}
      <Demo12Reviews2 />
      {/* END TESTIMONIALS-2 */}
      {/* VIDEO-1
			============================================= */}
      <Demo12Video1 />
      {/* END VIDEO-1 */}
      {/* BANNER-2
			============================================= */}
      <Demo12Banner2 />
      {/* END BANNER-2 */}
      {/* PRICING-1
			============================================= */}
      <Demo12Pricing1 />
      {/* END PRICING-1 */}
      {/* INFO-8
			============================================= */}
      <Demo12Info8 />
      {/* END INFO-8 */}
      {/* BLOG-1
			============================================= */}
      <Demo12Blog1 />
      {/* END BLOG-1 */}
      {/* BANNER-8
			============================================= */}
      <Demo12Banner8 />
    </Layouts>
  );
};

export default Demo12;
