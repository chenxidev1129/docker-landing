import ImpressionPanel from "../src/components/custom/home/ImpressionPanel";
import Layouts from "../src/layout/Layouts";
import PageBanner from "../src/layout/PageBanner";

const Impression = () => {
  return (
    <Layouts>
      <PageBanner pageTitle="Impressum" />
      <ImpressionPanel />
    </Layouts>
  );
};

export default Impression;
