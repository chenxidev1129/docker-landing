import AllDoctorsDoctors3 from "../src/components/All-doctors/AllDoctorsDoctors3";
import Statistic1 from "../src/components/Common/Statistic-1";
import Testimonials2 from "../src/components/Common/Testimonials-2";
import Layouts from "../src/layout/Layouts";
import PageBanner from "../src/layout/PageBanner";

const AllDoctors = () => {
  return (
    <Layouts>
      <PageBanner pageTitle="Meet the Doctors" />
      <AllDoctorsDoctors3 />
      <Statistic1 />
      <Testimonials2 />
    </Layouts>
  );
};

export default AllDoctors;
