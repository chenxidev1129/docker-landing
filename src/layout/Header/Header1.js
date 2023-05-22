import Link from "next/link";
import React from "react";
import MobileMenu from "../MobileMenu";

const Header1 = ({ toggleMenu, toggle }) => {
  return (
    <header id="header" className="header">
      {/* MOBILE HEADER */}
      <div className="wsmobileheader clearfix">
        <Link href="#">
          <a
            id="wsnavtoggle"
            onClick={() => toggleMenu()}
            className="wsanimated-arrow"
          >
            <span />
          </a>
        </Link>
        <span className="smllogo">
          <img
            src="images/logo.png"
            width={180}
            height={40}
            alt="mobile-logo"
          />
        </span>
        <Link href="#">
          <a href="tel:123456789" className="callusbtn">
            <i className="fas fa-phone" />
          </a>
        </Link>
      </div>
      {/* HEADER STRIP */}
      <div className="headtoppart bg-blue clearfix">
        <div className="headerwp clearfix">
          {/* Address */}
          <div className="headertopleft">
            <div className="address clearfix">
              <span>
                <i className="fas fa-map-marker-alt" />
                121 King St, Melbourne, VIC 3000
              </span>
              <Link href="#">
                <a href="tel:123456789" className="callusbtn">
                  <i className="fas fa-phone" />
                  (800)-569-7890
                </a>
              </Link>
            </div>
          </div>
          {/* Social Links */}
          <div className="headertopright">
            <a className="googleicon" title="Google" href="#">
              <i className="fab fa-google" />
              <span className="mobiletext02">Google</span>
            </a>
            <a className="linkedinicon" title="Linkedin" href="#">
              <i className="fab fa-linkedin-in" />
              <span className="mobiletext02">Linkedin</span>
            </a>
            <a className="twittericon" title="Twitter" href="#">
              <i className="fab fa-twitter" />
              <span className="mobiletext02">Twitter</span>
            </a>
            <a className="facebookicon" title="Facebook" href="#">
              <i className="fab fa-facebook-f" />
              <span className="mobiletext02">Facebook</span>
            </a>
          </div>
        </div>
      </div>
      {/* END HEADER STRIP */}
      {/* NAVIGATION MENU */}
      <div className="wsmainfull menu clearfix d-none d-lg-block">
        <div className="wsmainwp clearfix">
          {/* LOGO IMAGE */}
          {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 360 x 80 pixels) */}
          <div className="desktoplogo">
            <a href="#">
              <img
                src="images/logo.png"
                width={180}
                height={40}
                alt="header-logo"
              />
            </a>
          </div>
          {/* END MAIN MENU */}
        </div>
      </div>
      <MobileMenu />
      {/* END NAVIGATION MENU */}
    </header>
  );
};

export default Header1;
