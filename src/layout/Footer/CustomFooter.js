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
                E-Mail: 
                <Link href="#">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    href="mailto:yourdomain@mail.com"
                  >
                    mail@xn--physio-sttzpunkt-rzb.de
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
              <ul className="blog-category-list clearfix">
                <li>
                  <Link href="/terms">
                    <a>
                      <i className="fas fa-angle-double-right blue-color"></i>
                      Datenschutzrichtlinien
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/impression">
                    <a>
                      <i className="fas fa-angle-double-right blue-color"></i>
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
