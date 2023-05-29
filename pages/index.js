import AllServicesTabsPanel from "../src/components/custom/home/AllServicesTabsPanel";
import CookieConsentPanel from "../src/components/custom/home/CookieConsentPanel";
import HeroPanel from "../src/components/custom/home/HeroPanel";
import Layouts from "../src/layout/Layouts";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Home = () => {
  const { t } = useTranslation()

  return (
    <Layouts header={0} footer={0}>
      <HeroPanel />
      <AllServicesTabsPanel />
      <CookieConsentPanel />
    </Layouts>
  );
};

export default Home;

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  }
}