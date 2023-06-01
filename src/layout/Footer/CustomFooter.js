import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getTranslations } from "../../../utils/translationUtils";
import { useContext } from "react";
import LanguageContext from "../../contexts/LanguageContext";
const CustomFooter = () => {
  const { currentLanguage } = useContext(LanguageContext);
  const [footer, setFooter] = useState({});

  useEffect(() => {
    const translations = getTranslations(currentLanguage);
    setFooter(translations.footer);
  }, [currentLanguage]);

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
              <h5 className="h5-xs">{footer.address?.name}</h5>
              {/* Address */}
              <p>{footer.address?.address1}</p>
              <p>{footer.address?.address2}</p>
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
                    mail@physio-stützpunkt.de
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
              <h5 className="h5-xs">{footer.working_time?.name}</h5>
              {/* Working Hours */}
              <p className="p-sm">
                {footer.working_time?.working_day}<span>{footer.working_time?.working_time}</span>
              </p>
              <p className="p-sm">
                {footer.working_time?.closed_day}<span>{footer.working_time?.closed_title}</span>
              </p>
            </div>
          </div>
          {/* FOOTER PHONE NUMBER */}
          <div className="col-md-6 col-lg-3">
            <div className="footer-box mb-40 flex flex-col">
              {/* Title */}
              <h5 className="h5-xs">{footer.policy?.name}</h5>
              {/* Text */}
              <ul className="blog-category-list clearfix">
                <li>
                  <Link href="/terms">
                    <a>
                      <i className="fas fa-angle-double-right blue-color"></i>
                      {footer.policy?.link1}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/impression">
                    <a>
                      <i className="fas fa-angle-double-right blue-color"></i>
                      {footer.policy?.link2}
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
