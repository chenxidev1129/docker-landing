import AllServicesTabsPanel from "../src/components/custom/home/AllServicesTabsPanel";
import HeroPanel from "../src/components/custom/home/HeroPanel";
import Layouts from "../src/layout/Layouts";

const Home = () => {
  return (
    <Layouts header={0} footer={0}>
      <HeroPanel />
      <AllServicesTabsPanel />
    </Layouts>
  );
};

export default Home;
