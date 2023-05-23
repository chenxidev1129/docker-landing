import TermsPanel from "../src/components/custom/home/TermsPanel";
import Layouts from "../src/layout/Layouts";
import PageBanner from "../src/layout/PageBanner";

const Terms = () => {
  return (
    <Layouts>
      <PageBanner pageTitle="Datenschutzrichtlinien" />
      <TermsPanel />
    </Layouts>
  );
};

export default Terms;
