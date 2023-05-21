import About5 from "../src/components/Common/About-5";
import DepartmentDoctors1 from "../src/components/Department-single/DepartmentDoctors1";
import DepartmentPage from "../src/components/Department-single/DepartmentPage";
import Layouts from "../src/layout/Layouts";
import PageBanner from "../src/layout/PageBanner";

const DepartmentSingle = () => {
  return (
    <Layouts>
      <PageBanner
        pageTitle="Cardiology"
        motherTitle="Departments"
        url="departments"
      />
      <DepartmentPage />
      <DepartmentDoctors1 />
      <About5 />
    </Layouts>
  );
};

export default DepartmentSingle;
