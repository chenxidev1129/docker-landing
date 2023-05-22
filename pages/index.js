import About5 from "../src/components/Common/About-5";
import Banner7 from "../src/components/Common/Banner-7";
import Info2 from "../src/components/Common/Info-2";
import Info6 from "../src/components/Common/Info-6";
// import Statistic1 from "../src/components/Common/Statistic-1";
import Tabs1 from "../src/components/Common/Tabs-1";
import Testimonials2 from "../src/components/Common/Testimonials-2";
import Video1 from "../src/components/Common/Video-1";
import Demo1Banner2 from "../src/components/Demo-1/Demo1Banner2";
import Demo1Blog1 from "../src/components/Demo-1/Demo1Blog1";
import Demo1Doctors1 from "../src/components/Demo-1/Demo1Doctors1";
import Demo1Info8 from "../src/components/Demo-1/Demo1Info8";
import Demo1Pricing1 from "../src/components/Demo-1/Demo1Pricing1";
import AboutPanel from "../src/components/custom/home/AboutPanel";
import HeroPanel from "../src/components/custom/home/HeroPanel";
import ServicesPanel from "../src/components/custom/home/ServicesPanel";
import Layouts from "../src/layout/Layouts";

const Home = () => {
  return (
    <Layouts header={3} footer={2}>
      <HeroPanel />
      {/* <AboutPanel /> */}
      {/* <About5 /> */}
      <ServicesPanel />
      {/* <Info2 />
      <Info6 />
      <Video1 />
      <Testimonials2 />
      <Demo1Doctors1 />
      <Demo1Info8 />
      <Tabs1 />
      <Statistic1 />
      <Demo1Pricing1 />
      <Banner7 />
      <Demo1Blog1 />
      <Demo1Banner2 /> */}
    </Layouts>
  );
};

export default Home;
