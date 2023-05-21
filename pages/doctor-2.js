import Doctor2Details from "../src/components/Doctor-2/Doctor2Details";
import Doctor2Reviews2 from "../src/components/Doctor-2/Doctor2Reviews2";
import Layouts from "../src/layout/Layouts";
import PageBanner from "../src/layout/PageBanner";

const Doctor2 = () => {
  return (
    <Layouts>
      <PageBanner
        pageTitle="Doctor Page"
        motherTitle="Our Doctors"
        url="all-doctors"
      />

      <Doctor2Details />
      <Doctor2Reviews2 />
    </Layouts>
  );
};

export default Doctor2;
