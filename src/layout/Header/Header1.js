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
          {/* MAIN MENU */}
          <nav className="wsmenu clearfix">
            <ul className="wsmenu-list">
              {/* DROPDOWN MENU */}
              <li aria-haspopup="true">
                <a href="#">
                  Home <span className="wsarrow" />
                </a>
                <ul className="sub-menu">
                  <li aria-haspopup="true">
                    <Link href="/demo-1">
                      <a>Home Concept #1</a>
                    </Link>
                  </li>
                  <li aria-haspopup="true">
                    <Link href="/demo-3">
                      <a>Home Concept #3</a>
                    </Link>
                  </li>
                  <li aria-haspopup="true">
                    <Link href="/demo-4">
                      <a>Home Concept #4</a>
                    </Link>
                  </li>
                  <li aria-haspopup="true">
                    <Link href="/demo-5">
                      <a>Home Concept #5</a>
                    </Link>
                  </li>
                  <li aria-haspopup="true">
                    <Link href="/demo-6">
                      <a>Home Concept #6</a>
                    </Link>
                  </li>
                  <li aria-haspopup="true">
                    <Link href="/demo-7">
                      <a>Home Concept #7</a>
                    </Link>
                  </li>
                  <li aria-haspopup="true">
                    <Link href="/demo-8">
                      <a>Home Concept #8</a>
                    </Link>
                  </li>
                  <li aria-haspopup="true">
                    <Link href="/demo-9">
                      <a>Home Concept #9</a>
                    </Link>
                  </li>
                  <li aria-haspopup="true">
                    <Link href="/demo-10">
                      <a>Home Concept #10</a>
                    </Link>
                  </li>
                  <li aria-haspopup="true">
                    <Link href="/demo-11">
                      <a>Home Concept #11</a>
                    </Link>
                  </li>
                  <li aria-haspopup="true">
                    <Link href="/demo-12">
                      <a>Home Concept #12</a>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* END DROPDOWN MENU */}
              {/* PAGES */}
              <li aria-haspopup="true">
                <a href="#">
                  Pages <span className="wsarrow" />
                </a>
                <div className="wsmegamenu clearfix">
                  <div className="container">
                    <div className="row">
                      {/* MEGAMENU LINKS */}
                      <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                        <li className="title">Standard Pages:</li>
                        <li>
                          <Link href="/about-us">
                            <a>About Us Page</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/who-we-are">
                            <a>Who We Are</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/all-services">
                            <a>Our Services</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/service-1">
                            <a>Service Single #1</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/service-2">
                            <a>Service Single #2</a>
                          </Link>
                        </li>
                      </ul>
                      {/* MEGAMENU LINKS */}
                      <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                        <li className="title">Medical Pages:</li>
                        <li>
                          <Link href="/all-departments">
                            <a>Our Departments</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/department-single">
                            <a>Department Single</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/all-doctors">
                            <a>Meet the Doctors</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/doctor-1">
                            <a>{`Doctor's Profile #1`}</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/doctor-2">
                            <a>{`Doctor's Profile #2`}</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/timetable">
                            <a>Doctors Timetable</a>
                          </Link>
                        </li>
                      </ul>
                      {/* MEGAMENU LINKS */}
                      <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                        <li className="title">Special Pages:</li>
                        <li>
                          <Link href="/pricing-1">
                            <a>Pricing Packages #1</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/pricing-2">
                            <a>Pricing Packages #2</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/appointment">
                            <a>Make an Appointment</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/faqs">
                            <a>FAQs Page</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/terms">
                            <a>Terms of Use</a>
                          </Link>
                        </li>
                      </ul>
                      {/* MEGAMENU LINKS */}
                      <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                        <li className="title">Auxiliary Pages:</li>
                        <li>
                          <Link href="/gallery">
                            <a>Our Gallery</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog-listing">
                            <a>Blog Listing Page</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/single-post">
                            <a>Single Blog Post</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/contacts-1">
                            <a>Contact Us #1</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/contacts-2">
                            <a>Contact Us #2</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* End row */}
                  </div>
                  {/* End container */}
                </div>
                {/* End wsmegamenu */}
              </li>
              {/* END PAGES */}
              {/* HALF MENU */}
              <li aria-haspopup="true">
                <a href="#">
                  Half Menu <span className="wsarrow" />
                </a>
                <div className="wsmegamenu clearfix halfmenu">
                  <div className="container-fluid">
                    <div className="row">
                      {/* Links */}
                      <ul className="col-lg-6 col-md-12 col-xs-12 link-list">
                        <li className="title">For Patients:</li>
                        <li>
                          <a href="#">Meet The Doctors</a>
                        </li>
                        <li>
                          <a href="#">Patient Info Sheets</a>
                        </li>
                        <li>
                          <a href="#">Online Patients Portal</a>
                        </li>
                        <li>
                          <a href="#">Patients Testimonials</a>
                        </li>
                        <li>
                          <a href="#">Blog &amp; Latest News</a>
                        </li>
                      </ul>
                      {/* Links */}
                      <ul className="col-lg-6 col-md-12 col-xs-12 link-list">
                        <li className="title">Quick Links:</li>
                        <li>
                          <a href="#">Terms &amp; Privacy Policy</a>
                        </li>
                        <li>
                          <a href="#">Donor Privacy Policy</a>
                        </li>
                        <li>
                          <a href="#">Workers Compensation</a>
                        </li>
                        <li>
                          <a href="#">Insurance Information</a>
                        </li>
                        <li>
                          <a href="#">After Hours Care</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              {/* END HALF MENU */}
              {/* MEGAMENU */}
              <li aria-haspopup="true">
                <a href="#">
                  Mega Menu <span className="wsarrow" />
                </a>
                <div className="wsmegamenu clearfix">
                  <div className="container">
                    <div className="row">
                      {/* MEGAMENU QUICK LINKS */}
                      <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                        <li className="title">Quick Links:</li>
                        <li>
                          <a href="#">For Referring Doctors</a>
                        </li>
                        <li>
                          <a href="#">Terms &amp; Privacy Policy</a>
                        </li>
                        <li>
                          <a href="#">Donor Privacy Policy</a>
                        </li>
                        <li>
                          <a href="#">Patient Info Sheets</a>
                        </li>
                        <li>
                          <a href="#">Online Patients Portal</a>
                        </li>
                        <li>
                          <a href="#">Insurance Information</a>
                        </li>
                        <li>
                          <a href="#">Patients Testimonials</a>
                        </li>
                      </ul>
                      {/* MEGAMENU FEATURED NEWS */}
                      <div className="col-lg-5 col-md-12 col-xs-12">
                        {/* Title */}
                        <h3 className="title">Featured News:</h3>
                        {/* Image */}
                        <div className="fluid-width-video-wrapper">
                          <img
                            src="images/blog/featured-news.jpg"
                            alt="featured-news"
                          />
                        </div>
                        {/* Text */}
                        <h5 className="h5-xs">
                          <a href="#">5 Benefits of integrative medicine</a>
                        </h5>
                        <p className="wsmwnutxt">
                          Porta semper lacus cursus, feugiat primis ultrice in
                          ligula risus auctor tempus feugiat dolor impedit magna
                          purus at pretium gravida donec
                        </p>
                      </div>
                      {/* END MEGAMENU FEATURED NEWS */}
                      {/* MEGAMENU LATEST NEWS */}
                      <div className="col-lg-4 col-md-12 col-xs-12">
                        {/* Title */}
                        <h3 className="title">Latest News:</h3>
                        {/* Latest News */}
                        <ul className="latest-news">
                          {/* Post #1 */}
                          <li className="clearfix d-flex align-items-center">
                            {/* Image */}
                            <img
                              className="img-fluid"
                              src="images/blog/latest-post-1.jpg"
                              alt="blog-post-preview"
                            />
                            {/* Text */}
                            <div className="post-summary">
                              <Link href="/single-post">
                                <a>
                                  Etiam sapien risus ante auctor tempus accumsan
                                  an empor ...
                                </a>
                              </Link>
                              <p>43 Comments</p>
                            </div>
                          </li>
                          {/* Post #2 */}
                          <li className="clearfix d-flex align-items-center">
                            {/* Image */}
                            <img
                              className="img-fluid"
                              src="images/blog/latest-post-2.jpg"
                              alt="blog-post-preview"
                            />
                            {/* Text */}
                            <div className="post-summary">
                              <Link href="/single-post">
                                <a>
                                  Blandit tempor a sapien ipsum, porta risus
                                  auctor justo ...
                                </a>
                              </Link>
                              <p>38 Comments</p>
                            </div>
                          </li>
                          {/* Post #3 */}
                          <li className="clearfix d-flex align-items-center">
                            {/* Image */}
                            <img
                              className="img-fluid"
                              src="images/blog/latest-post-3.jpg"
                              alt="blog-post-preview"
                            />
                            {/* Text */}
                            <div className="post-summary">
                              <Link href="/single-post">
                                <a>
                                  Cursus risus auctor tempus risus laoreet
                                  turpis auctor varius ...
                                </a>
                              </Link>
                              <p>29 Comments</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      {/* END MEGAMENU LATEST NEWS */}
                    </div>
                    {/* End row */}
                  </div>
                  {/* End container */}
                </div>
                {/* End wsmegamenu */}
              </li>
              {/* END MEGAMENU */}
              {/* SIMPLE NAVIGATION LINK */}
              <li className="nl-simple" aria-haspopup="true">
                <a href="#">Simple Link</a>
              </li>
              {/* NAVIGATION MENU BUTTON */}
              <li className="nl-simple header-btn" aria-haspopup="true">
                <Link href="/appointment">
                  <a>Make an Appointment</a>
                </Link>
              </li>
            </ul>
          </nav>
          {/* END MAIN MENU */}
        </div>
      </div>
      <MobileMenu />
      {/* END NAVIGATION MENU */}
    </header>
  );
};

export default Header1;
