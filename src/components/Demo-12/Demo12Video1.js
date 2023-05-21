import Link from "next/link";
import React from "react";

const Demo12Video1 = () => {
  return (
    <section id="video-1" className="wide-60 video-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* VIDEO TEXT */}
          <div className="col-lg-6">
            <div
              className="txt-block pc-30 mb-40 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              {/* Section ID */}
              <span className="section-id blue-color">
                Highest Quality Care
              </span>
              {/* Title */}
              <h3 className="h3-md steelblue-color">
                Solutions to Complex Medical Problems
              </h3>
              {/* CONTENT BOX #1 */}
              <div className="box-list">
                <div className="box-list-icon">
                  <i className="fas fa-genderless" />
                </div>
                <p>
                  Nemo ipsam egestas volute turpis dolores ut aliquam quaerat
                  sodales sapien undo pretium purus feugiat dolor impedit
                </p>
              </div>
              {/* CONTENT BOX #2 */}
              <div className="box-list">
                <div className="box-list-icon">
                  <i className="fas fa-genderless" />
                </div>
                <p>
                  Gravida quis vehicula magna luctus tempor quisque vel laoreet
                  turpis urna augue, viverra a augue eget dictum
                </p>
              </div>
              {/* CONTENT BOX #3 */}
              <div className="box-list">
                <div className="box-list-icon">
                  <i className="fas fa-genderless" />
                </div>
                <p>
                  Nemo ipsam egestas volute turpis dolores ut aliquam quaerat
                  sodales sapien undo pretium purus feugiat dolor impedit
                </p>
              </div>
            </div>
          </div>
          {/* VIDEO LINK */}
          <div className="col-lg-6">
            <div
              className="video-preview mb-40 text-center wow fadeInUp"
              data-wow-delay="0.6s"
            >
              {/* Change the link HERE!!! */}
              <Link href="#">
                <a
                  className="video-popup1"
                  href="https://www.youtube.com/embed/SZEflIVnhH8"
                >
                  {/* Play Icon */}
                  <div className="video-btn play-icon-blue">
                    <div className="video-block-wrapper">
                      <i className="fas fa-play" />
                    </div>
                  </div>
                  {/* Preview */}
                  <img
                    className="img-fluid"
                    src="images/video-1.png"
                    alt="video-photo"
                  />
                </a>
              </Link>
            </div>
          </div>
          {/* END VIDEO LINK */}
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo12Video1;
