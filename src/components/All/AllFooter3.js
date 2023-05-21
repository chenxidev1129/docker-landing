import Link from "next/link";
import React from "react";

const AllFooter3 = () => {
  return (
    <footer id="footer-3" className="wide-40 footer division">
      <div className="container">
        {/* FOOTER CONTENT */}
        <div className="row">
          {/* FOOTER INFO */}
          <div className="col-md-6 col-lg-4">
            <div className="footer-info mb-40">
              {/* Footer Logo */}
              {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 360 x 80  pixels) */}
              <img
                src="images/footer-logo.png"
                width={180}
                height={40}
                alt="footer-logo"
              />
              {/* Text */}
              <p className="p-sm mt-20">
                Aliquam orci nullam tempor sapien gravida donec an enim ipsum
                porta justo velna auctor congue magna laoreet augue sapien
                gravida at purus euismod
              </p>
              {/* Social Icons */}
              <div className="footer-socials-links mt-20">
                <ul className="foo-socials text-center clearfix">
                  <li>
                    <a href="#" className="ico-facebook">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="ico-twitter">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="ico-google-plus">
                      <i className="fab fa-google-plus-g" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="ico-tumblr">
                      <i className="fab fa-tumblr" />
                    </a>
                  </li>
                  {/*
										<li><a href="#" class="ico-behance"><i class="fab fa-behance"></i></a></li>	
										<li><a href="#" class="ico-dribbble"><i class="fab fa-dribbble"></i></a></li>											
										<li><a href="#" class="ico-instagram"><i class="fab fa-instagram"></i></a></li>	
										<li><a href="#" class="ico-linkedin"><i class="fab fa-linkedin-in"></i></a></li>
										<li><a href="#" class="ico-pinterest"><i class="fab fa-pinterest-p"></i></a></li>									
										<li><a href="#" class="ico-youtube"><i class="fab fa-youtube"></i></a></li>											
										<li><a href="#" class="ico-vk"><i class="fab fa-vk"></i></a></li>
										<li><a href="#" class="ico-yelp"><i class="fab fa-yelp"></i></a></li>
										<li><a href="#" class="ico-yahoo"><i class="fab fa-yahoo"></i></a></li>
									    */}
                </ul>
              </div>
            </div>
          </div>
          {/* FOOTER CONTACTS */}
          <div className="col-md-6 col-lg-3 offset-lg-1">
            <div className="footer-box mb-40">
              {/* Title */}
              <h5 className="h5-xs">Our Location</h5>
              {/* Address */}
              <p>121 King Street, Melbourne,</p>
              <p>Victoria 3000 Australia</p>
              {/* Email */}
              <p className="foo-email mt-20">
                E:
                <Link href="#">
                  <a href="mailto:yourdomain@mail.com">hello@yourdomain.com</a>
                </Link>
              </p>
              {/* Phone */}
              <p>P: +12 9 8765 4321</p>
            </div>
          </div>
          {/* FOOTER LINKS */}
          <div className="col-md-6 col-lg-2">
            <div className="footer-links mb-40">
              {/* Title */}
              <h5 className="h5-xs">About Clinic</h5>
              {/* Footer Links */}
              <ul className="foo-links clearfix">
                <li>
                  <a href="#">About Clinic</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Press &amp; Media</a>
                </li>
                <li>
                  <a href="#">Our Blog</a>
                </li>
                <li>
                  <a href="#">Advertising</a>
                </li>
              </ul>
            </div>
          </div>
          {/* FOOTER LINKS */}
          <div className="col-md-6 col-lg-2">
            <div className="footer-links mb-40">
              {/* Title */}
              <h5 className="h5-xs">Discover</h5>
              {/* Footer List */}
              <ul className="clearfix">
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Life Chatting</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Privacy</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Site Map</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* END FOOTER CONTENT */}
        {/* FOOTER COPYRIGHT */}
        <div className="bottom-footer">
          <div className="row">
            <div className="col-md-12">
              <p className="footer-copyright">
                © {new Date().getFullYear()} <span>MedService</span>. All Rights
                Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End container */}
    </footer>
  );
};

export default AllFooter3;
