import Contacts02 from "../src/components/Contacts-2/Contacts02";
import ContactsBanner8 from "../src/components/Contacts-2/ContactsBanner8";
import Layouts from "../src/layout/Layouts";
import PageBanner from "../src/layout/PageBanner";

const Contacts2 = () => {
  return (
    <Layouts>
      <PageBanner pageTitle="Contact Us" />
      <Contacts02 />
      <ContactsBanner8 />
    </Layouts>
  );
};

export default Contacts2;
