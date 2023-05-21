import HomeBanner from "../src/components/Home/HomeBanner";
import HomeBanner2 from "../src/components/Home/HomeBanner2";
import HomeFeatures from "../src/components/Home/HomeFeatures";
import HomeFooter from "../src/components/Home/HomeFooter";
import HomeHero from "../src/components/Home/HomeHero";
import HomeInnerPage from "../src/components/Home/HomeInnerPage";
import HomeSelect from "../src/components/Home/HomeSelect";

const Home = () => {
  return (
    <div id="page" className="page-wrapper demo">
      {/* HERO
        ============================================= */}
      <HomeHero />
      {/* END HERO */}
      {/* SELECT
        ============================================= */}
      <HomeSelect />
      {/* END SELECT */}
      {/* FEATURES
        ============================================= */}
      <HomeFeatures />
      {/* END FEATURES */}
      {/* BANNER-1
        ============================================= */}
      <HomeBanner />
      {/* END BANNER-1 */}
      {/* INNER PAGES
        ============================================= */}
      <HomeInnerPage />
      {/* END INNER PAGES */}
      {/* BANNER-2
        ============================================= */}
      <HomeBanner2 />
      {/* END BANNER-2 */}
      {/* FOOTER
        ============================================= */}
      <HomeFooter />
      {/* END FOOTER */}
    </div>
  );
};

export default Home;
