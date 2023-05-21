import Link from "next/dist/client/link";
import { useState } from "react";

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" },
    activeArrow = (value) => (value === activeMenu ? "ws-activearrow" : "");
  console.log(activeMenu);
  return (
    <div
      className="wsmainfull menu clearfix cloned d-block d-lg-none"
      style={{
        position: "fixed",
        top: 0,
        marginTop: 0,
        zIndex: 500,
        display: "block",
        left: 0,
        width: 731,
      }}
    >
      <div className="wsmainwp clearfix">
        {/* LOGO IMAGE */}
        {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 360 x 80 pixels) */}
        <div className="desktoplogo">
          <a href="#hero-2">
            <img
              src="images/logo.png"
              width={180}
              height={40}
              alt="header-logo"
            />
          </a>
        </div>
        {/* MAIN MENU */}
        <nav className="wsmenu clearfix" style={{ height: 294 }}>
          <div className="overlapblackbg" />
          <ul className="wsmenu-list">
            {/* DROPDOWN MENU */}
            <li aria-haspopup="true">
              <span
                className={`wsmenu-click ${activeArrow("home")}`}
                onClick={() => activeMenuSet("home")}
              >
                <i className="wsmenu-arrow" />
              </span>
              <a href="#" onClick={() => activeMenuSet("home")}>
                Home <span className="wsarrow" />
              </a>
              <ul className="sub-menu" style={activeLi("home")}>
                <li aria-haspopup="true">
                  <Link href="/demo-1">Home Concept #1</Link>
                </li>
                <li aria-haspopup="true">
                  <Link href="/demo-3">Home Concept #3</Link>
                </li>
                <li aria-haspopup="true">
                  <Link href="/demo-4">Home Concept #4</Link>
                </li>
                <li aria-haspopup="true">
                  <Link href="/demo-5">Home Concept #5</Link>
                </li>
                <li aria-haspopup="true">
                  <Link href="/demo-6">Home Concept #6</Link>
                </li>
                <li aria-haspopup="true">
                  <Link href="/demo-7">Home Concept #7</Link>
                </li>
                <li aria-haspopup="true">
                  <Link href="/demo-8">Home Concept #8</Link>
                </li>
                <li aria-haspopup="true">
                  <Link href="/demo-9">Home Concept #9</Link>
                </li>
                <li aria-haspopup="true">
                  <Link href="/demo-10">Home Concept #10</Link>
                </li>
                <li aria-haspopup="true">
                  <Link href="/demo-11">Home Concept #11</Link>
                </li>
                <li aria-haspopup="true">
                  <Link href="/demo-12">Home Concept #12</Link>
                </li>
              </ul>
            </li>{" "}
            {/* END DROPDOWN MENU */}
            {/* PAGES */}
            <li aria-haspopup="true">
              <span
                className={`wsmenu-click ${activeArrow("Pages")}`}
                onClick={() => activeMenuSet("Pages")}
              >
                <i className="wsmenu-arrow" />
              </span>
              <a href="#" onClick={() => activeMenuSet("Pages")}>
                Pages <span className="wsarrow" />
              </a>
              <div
                className="wsmegamenu clearfix pl-3"
                style={activeLi("Pages")}
              >
                <div className="container">
                  <div className="row">
                    {/* MEGAMENU LINKS */}
                    <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                      <li className="title">Standard Pages:</li>
                      <li>
                        <Link href="/about-us">About Us Page</Link>
                      </li>
                      <li>
                        <Link href="/who-we-are">Who We Are</Link>
                      </li>
                      <li>
                        <Link href="/all-services">Our Services</Link>
                      </li>
                      <li>
                        <Link href="/service-1">Service Single #1</Link>
                      </li>
                      <li>
                        <Link href="/service-2">Service Single #2</Link>
                      </li>
                    </ul>
                    {/* MEGAMENU LINKS */}
                    <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                      <li className="title">Medical Pages:</li>
                      <li>
                        <Link href="/all-departments">Our Departments</Link>
                      </li>
                      <li>
                        <Link href="/department-single">Department Single</Link>
                      </li>
                      <li>
                        <Link href="/all-doctors">Meet the Doctors</Link>
                      </li>
                      <li>
                        <Link href="/doctor-1">
                          <a>{`Doctor's`} Profile #1</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/doctor-2">
                          <a>{`Doctor's`} Profile #2</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/timetable">Doctors Timetable</Link>
                      </li>
                    </ul>
                    {/* MEGAMENU LINKS */}
                    <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                      <li className="title">Special Pages:</li>
                      <li>
                        <Link href="/pricing-1">Pricing Packages #1</Link>
                      </li>
                      <li>
                        <Link href="/pricing-2">Pricing Packages #2</Link>
                      </li>
                      <li>
                        <Link href="/appointment">Make an Appointment</Link>
                      </li>
                      <li>
                        <Link href="/faqs">FAQs Page</Link>
                      </li>
                      <li>
                        <Link href="/terms">Terms of Use</Link>
                      </li>
                    </ul>
                    {/* MEGAMENU LINKS */}
                    <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                      <li className="title">Auxiliary Pages:</li>
                      <li>
                        <Link href="/gallery">Our Gallery</Link>
                      </li>
                      <li>
                        <Link href="/blog-listing">Blog Listing Page</Link>
                      </li>
                      <li>
                        <Link href="/single-post">Single Blog Post</Link>
                      </li>
                      <li>
                        <Link href="/contacts-1">Contact Us #1</Link>
                      </li>
                      <li>
                        <Link href="/contacts-2">Contact Us #2</Link>
                      </li>
                    </ul>
                  </div>{" "}
                  {/* End row */}
                </div>{" "}
                {/* End container */}
              </div>{" "}
              {/* End wsmegamenu */}
            </li>{" "}
            {/* END PAGES */}
            {/* HALF MENU */}
            <li aria-haspopup="true">
              <span
                className={`wsmenu-click ${activeArrow("Half Menu")}`}
                onClick={() => activeMenuSet("Half Menu")}
              >
                <i className="wsmenu-arrow" />
              </span>
              <a href="#" onClick={() => activeMenuSet("Half Menu")}>
                Half Menu <span className="wsarrow" />
              </a>
              <div
                className="wsmegamenu clearfix pl-3 halfmenu"
                style={activeLi("Half Menu")}
              >
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
            </li>{" "}
            {/* END HALF MENU */}
            {/* MEGAMENU */}
            <li aria-haspopup="true">
              <span
                className={`wsmenu-click ${activeArrow("Mega Menu")}`}
                onClick={() => activeMenuSet("Mega Menu")}
              >
                <i className="wsmenu-arrow" />
              </span>
              <a href="#" onClick={() => activeMenuSet("Mega Menu")}>
                Mega Menu <span className="wsarrow" />
              </a>
              <div
                className="wsmegamenu clearfix pl-3"
                style={activeLi("Mega Menu")}
              >
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
                    </div>{" "}
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
                              Etiam sapien risus ante auctor tempus accumsan an
                              empor ...
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
                              Blandit tempor a sapien ipsum, porta risus auctor
                              justo ...
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
                              Cursus risus auctor tempus risus laoreet turpis
                              auctor varius ...
                            </Link>
                            <p>29 Comments</p>
                          </div>
                        </li>
                      </ul>
                    </div>{" "}
                    {/* END MEGAMENU LATEST NEWS */}
                  </div>{" "}
                  {/* End row */}
                </div>{" "}
                {/* End container */}
              </div>{" "}
              {/* End wsmegamenu */}
            </li>{" "}
            {/* END MEGAMENU */}
            {/* SIMPLE NAVIGATION LINK */}
            <li className="nl-simple" aria-haspopup="true">
              <a href="#">Simple Link</a>
            </li>
            {/* NAVIGATION MENU BUTTON */}
            <li className="nl-simple header-btn" aria-haspopup="true">
              <Link href="/appointment">Make an Appointment</Link>
            </li>
          </ul>
        </nav>{" "}
        {/* END MAIN MENU */}
      </div>
    </div>
  );
};

export default MobileMenu;
