import Link from "next/dist/client/link";
import React from "react";
import MobileMenu from "../MobileMenu";

const Header5 = ({ toggleMenu }) => {
  return (
    <header id="header-2" className="header">
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
      {/* HEADER WIDGETS */}
      <div className="hero-widget clearfix">
        <div className="container">
          <div className="row d-flex align-items-center">
            {/* LOGO IMAGE */}
            {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 360 x 80 pixels) */}
            <div className="col-md-5 col-xl-6">
              <div className="desktoplogo">
                <a href="#hero-4">
                  <img
                    src="images/logo.png"
                    width={180}
                    height={40}
                    alt="header-logo"
                  />
                </a>
              </div>
            </div>
            {/* WIDGETS */}
            <div className="col-md-7 col-xl-6">
              <div className="row">
                {/* Emergency Cases Widget 
						    		<div class="col-md-6">
						    			<div class="header-widget icon-xs">
						    				<span class="flaticon-039-emergency-call-1 blue-color"></span>
							    			<div class="header-widget-txt">
								    			<p>Emergency Cases</p> 
												<p class="header-widget-phone steelblue-color">1-800-123-4560</p>
											</div>
						    			</div>
						    		</div>*/}
                {/* Working Hours Widget */}
                <div className="col-md-6">
                  <div className="header-widget icon-xs">
                    <span className="flaticon-092-clock blue-color" />
                    <div className="header-widget-txt">
                      <p className="txt-400">Mon – Fri : - 8:00 AM - 8:00 PM</p>
                      <p className="lightgrey-color">Sat - Sun : - Closed</p>
                    </div>
                  </div>
                </div>
                {/* Location Widget */}
                <div className="col-md-6">
                  <div className="header-widget icon-xs">
                    <span className="flaticon-021-hospital-9 blue-color" />
                    <div className="header-widget-txt">
                      <p className="txt-400">121 King Street, Melbourne,</p>
                      <p className="lightgrey-color">Victoria 3000 Australia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END WIDGETS */}
          </div>
        </div>
      </div>
      {/* END HEADER WIDGETS */}
      {/* NAVIGATION MENU */}
      <div className="wsmainfull menu clearfix d-none d-lg-block">
        <div className="wsmainwp clearfix">
          {/* LOGO IMAGE */}
          {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 360 x 80 pixels) */}
          <div className="desktoplogo">
            <a href="#hero-4">
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
                    <Link href="/demo-2">
                      <a>Home Concept #2</a>
                    </Link>
                  </li>
                  <li aria-haspopup="true">
                    <Link href="/demo-3">
                      <a>Home Concept #3</a>
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
                              src="images/blog/header-post-1.jpg"
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
                              src="images/blog/header-post-2.jpg"
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
                              src="images/blog/header-post-3.jpg"
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
              {/* HIDDEN NAVIGATION MENU BUTTON */}
              <li className="nl-simple header-btn" aria-haspopup="true">
                <Link href="/timetable">
                  <a className="blue-hover">Our Doctors Timetable</a>
                </Link>
              </li>
            </ul>
          </nav>
          {/* END MAIN MENU */}
          {/* NAVIGATION MENU BUTTON */}
          <div className="header-button">
            <span className="nl-simple header-btn blue-hover">
              <Link href="/timetable">
                <a>Our Doctors Timetable</a>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <MobileMenu />
      {/* END NAVIGATION MENU */}
    </header>
  );
};

export default Header5;
