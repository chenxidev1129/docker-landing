import TermsPage from "../src/components/Terms/TermsPage";
import Layouts from "../src/layout/Layouts";
import PageBanner from "../src/layout/PageBanner";

const Terms = () => {
  return (
    <Layouts>
      <PageBanner pageTitle="Terms & Privacy" />
      <TermsPage />
    </Layouts>
  );
};

export default Terms;
