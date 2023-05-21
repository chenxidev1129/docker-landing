import Link from "next/link";
import React from "react";

const HomeBanner2 = () => {
  return (
    <div id="banner-2" className="banner-section division">
      <div className="container-fluid">
        <div className="st-content">
          <div className="row d-flex align-items-center">
            {/* IMAGE */}
            <div className="col-lg-6">
              <div className="banner-img">
                <img
                  className="img-fluid"
                  src="images/banner-2.png"
                  alt="banner-image"
                />
              </div>
            </div>
            {/* TEXT*/}
            <div className="col-lg-6">
              <div className="banner-txt">
                <span className="section-id id-color">Powerful Shortcodes</span>
                <h2>70+ Ready to Use Sections</h2>
                <p>
                  MedService includes well designed components which always
                  gives you best results as you wanted. Each content element has
                  been crafted with terrific attention to details and offers
                  multiple options. Combine the content elements to create
                  unique websites in minutes. You are free to move the blocks
                  between demos
                </p>
                <Link href="/demo-1">
                  <a className="btn black-hover" target="_blank">
                    Launch Main Demo
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner2;
