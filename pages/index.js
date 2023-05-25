import AllServicesTabsPanel from "../src/components/custom/home/AllServicesTabsPanel";
import CookieConsentPanel from "../src/components/custom/home/CookieConsentPanel";
import HeroPanel from "../src/components/custom/home/HeroPanel";
import Layouts from "../src/layout/Layouts";

const Home = () => {
  return (
    <Layouts header={0} footer={0}>
      <HeroPanel />
      <AllServicesTabsPanel />
      <CookieConsentPanel />
    </Layouts>
  );
};

export default Home;
