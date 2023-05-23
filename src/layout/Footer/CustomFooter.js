import Image from "next/image";
import Link from "next/link";
import React from "react";
const CustomFooter = () => {
  return (
    <footer className="wide-40 footer division custom-footer-no">
      <div className="container">
        {/* FOOTER CONTENT */}
        <div className="row">
          {/* FOOTER INFO */}
          <div className="col-md-6 col-lg-3">
            <div className="footer-info mb-40">
              {/* Footer Logo */}
              {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 360 x 80  pixels) */}
              <Image
                src="/images/custom/icon-big-black.png"
                width={166}
                height={40}
                alt="footer-logo"
              />
              {/* Text */}
              <p className="p-sm mt-20">
                Aliquam orci nullam tempor sapien gravida donec an enim ipsum
                porta justo at velna auctor congue
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
          <div className="col-md-6 col-lg-3">
            <div className="footer-box mb-40">
              {/* Title */}
              <h5 className="h5-xs">Adresse</h5>
              {/* Address */}
              <p>Physiotherapie Stützpunkt Berlin</p>
              <p>Kolonnenstraße 60, 10827 Berlin</p>
              {/* Email */}
              <p className="foo-email mt-20">
                E:
                <Link href="#">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    href="mailto:yourdomain@mail.com"
                  >
                    Mail@physio-stützpunkt.de
                  </a>
                </Link>
              </p>
              {/* Phone */}
              <p>P: +49 30 60977359</p>
            </div>
          </div>
          {/* FOOTER WORKING HOURS */}
          <div className="col-md-6 col-lg-3">
            <div className="footer-box mb-40">
              {/* Title */}
              <h5 className="h5-xs">Öffnungszeiten</h5>
              {/* Working Hours */}
              <p className="p-sm">
                Mo - Fr - <span>8:00 AM - 6:00 PM</span>
              </p>
              <p className="p-sm">
                Sat - Sun - <span>Closed</span>
              </p>
            </div>
          </div>
          {/* FOOTER PHONE NUMBER */}
          <div className="col-md-6 col-lg-3">
            <div className="footer-box mb-40 flex flex-col">
              {/* Title */}
              <h5 className="h5-xs">Rechliches</h5>
              {/* Text */}
              <ul class="blog-category-list clearfix">
                <li>
                  <Link href="/terms">
                    <a>
                      <i class="fas fa-angle-double-right blue-color"></i>
                      Datenschutzrichtlinien
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/impression">
                    <a>
                      <i class="fas fa-angle-double-right blue-color"></i>
                      Impressum
                    </a>
                  </Link>
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
                © {new Date().getFullYear()} <span>Physio Stützpunkt</span>. All Rights
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

export default CustomFooter;