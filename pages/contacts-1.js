import Contacts1 from "../src/components/Contacts-1/Contacts1";
import Layouts from "../src/layout/Layouts";

const Contacts1_ = () => {
  return (
    <Layouts>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d233806.52658823103!2d90.24055135854522!3d23.70358719902013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1638184847251!5m2!1sen!2sbd"
        height={450}
        width="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      />

      <Contacts1 />
    </Layouts>
  );
};

export default Contacts1_;
