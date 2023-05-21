import FaqsPage from "../src/components/Faqs/FaqsPage";
import Layouts from "../src/layout/Layouts";
import PageBanner from "../src/layout/PageBanner";

const Faqs = () => {
  return (
    <Layouts>
      <PageBanner pageTitle="FAQs" />
      <FaqsPage />
    </Layouts>
  );
};

export default Faqs;
