import { useEffect, useState } from "react";
import { aTagClick, dataImage, stickyNav } from "../utils";
import Footer2 from "./Footer/Footer2";
import Footer3 from "./Footer/Footer3";
import Footer4 from "./Footer/Footer4";
import Footer5 from "./Footer/Footer5";
import Header1 from "./Header/Header1";
import Header2 from "./Header/Header2";
import Header3 from "./Header/Header3";
import Header4 from "./Header/Header4";
import Header5 from "./Header/Header5";
import Header6 from "./Header/Header6";

const Layouts = ({ children, header, footer }) => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    dataImage();
    aTagClick();
    window.addEventListener("scroll", stickyNav);
  });
  useEffect(() => {
    document.querySelector("body").classList.remove("wsactive");
  }, []);
  const openClick = () => {
    setToggle(!toggle);
    document.querySelector("body").classList.toggle("wsactive");
  };
  const getHeader = () => {
    switch (header) {
      // case 2:
      //   return <Header2 toggleMenu={() => openClick()} toggle={toggle} />;
      // case 3:
      //   return <Header3 toggleMenu={() => openClick()} toggle={toggle} />;
      // case 4:
      //   return <Header4 toggleMenu={() => openClick()} toggle={toggle} />;
      // case 5:
      //   return <Header5 toggleMenu={() => openClick()} toggle={toggle} />;
      // case 6:
      //   return <Header6 toggleMenu={() => openClick()} toggle={toggle} />;

      default:
        return <Header1 toggleMenu={() => openClick()} toggle={toggle} />;
    }
  };
  const getFooter = () => {
    switch (footer) {
      case 2:
        return <Footer2 />;
      case 3:
        return <Footer3 />;
      case 4:
        return <Footer4 />;
      case 5:
        return <Footer5 />;

      default:
        return <Footer4 />;
    }
  };
  return (
    <div id="page" className="page-wrapper demo">
      {getHeader()}
      {/* <MobileMenu /> */}
      {children}
      {getFooter()}
    </div>
  );
};

export default Layouts;
