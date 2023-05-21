import TimetablePage from "../src/components/Timetable/TimetablePage";
import Layouts from "../src/layout/Layouts";
import PageBanner from "../src/layout/PageBanner";

const Timetable = () => {
  return (
    <Layouts>
      <PageBanner pageTitle="Timetable" />
      <TimetablePage />
    </Layouts>
  );
};

export default Timetable;
