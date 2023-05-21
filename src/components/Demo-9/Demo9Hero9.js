import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { hero9SliderProps } from "../../sliderProps";

const Demo9Hero9 = () => {
  return (
    <section id="hero-9" className="hero-section">
      <Swiper
        {...hero9SliderProps}
        id="heroCarousel"
        className="carousel slide"
      >
        {/* SLIDER CONTENT */}
        <div className="carousel-inner">
          {/* SLIDE 1 */}
          <SwiperSlide className="bg-fixed carousel-item d-block">
            <div className="mask d-flex align-items-center">
              <div className="container">
                <div className="row">
                  {/* SLIDE-1 TEXT */}
                  <div className="col-md-8 col-lg-7">
                    <div className="hero-txt">
                      {/* Title */}
                      <h5 className="blue-color">Welcome to MedService</h5>
                      <h2 className="steelblue-color">
                        We will help you
                        <span>to become healthy</span>
                      </h2>
                      {/* Text */}
                      <p className="p-md">
                        Feugiat primis ligula risus auctor egestas augue mauri
                        viverra tortor in iaculis placerat eugiat mauris ipsum
                        in viverra tortor and gravida purus pretium lorem primis
                        in integer mollis and pretium purus pretium
                      </p>
                      {/* Button */}
                      <Link href="/about-us">
                        <a className="btn btn-blue blue-hover">
                          More About Clinic
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* END SLIDE 1 */}
          {/* SLIDE 2 */}
          <SwiperSlide className="bg-fixed carousel-item d-block">
            <div className="mask d-flex align-items-center">
              <div className="container">
                <div className="row">
                  {/* SLIDE-2 TEXT */}
                  <div className="col-md-8 col-lg-7 offset-md-4 offset-lg-5">
                    <div className="hero-txt">
                      {/* Title */}
                      <h5 className="blue-color">Our clinic Provide</h5>
                      <h2 className="steelblue-color">
                        <span>Best Quality</span>
                        Medical Treatment for You
                      </h2>
                      {/* Text */}
                      <p className="p-md">
                        Feugiat primis ligula risus auctor egestas augue mauri
                        viverra tortor in iaculis placerat eugiat mauris ipsum
                        in viverra tortor and gravida purus pretium lorem primis
                        in integer mollis and pretium purus pretium
                      </p>
                      {/* Button */}
                      <Link href="/who-we-are">
                        <a className="btn btn-black tra-black-hover mr-10">
                          Get More Info
                        </a>
                      </Link>
                      <Link href="/all-services">
                        <a className="btn btn-blue blue-hover">
                          Our Core Services
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* END SLIDE 2 */}
          {/* SLIDE 3 */}
          <SwiperSlide className="bg-fixed carousel-item d-block">
            <div className="mask d-flex align-items-center">
              <div className="container">
                <div className="row">
                  {/* SLIDE-3 TEXT */}
                  <div className="col-md-8 col-lg-7">
                    <div className="hero-txt">
                      {/* Title */}
                      <h5 className="blue-color">Why Choose Our clinic</h5>
                      <h2 className="steelblue-color">
                        We <span>will Care</span>
                        About Your Health
                      </h2>
                      {/* Option Box #1 */}
                      <div className="box-list">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p className="p-md">
                          Fringilla risus nec, luctus mauris orci auctor purus
                          euismod pretium purus pretium ligula rutrum tempor
                          sapien at pretium luctus
                        </p>
                      </div>
                      {/* Option Box #2 */}
                      <div className="box-list">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p className="p-md">
                          Feugiat primis ultrice in ligula risus auctor tempus
                          feugiat
                        </p>
                      </div>
                      {/* Option Box #3 */}
                      <div className="box-list">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p className="p-md">
                          Porta semper lacus cursus, feugiat primis ultrice in
                          ligula risus auctor tempus feugiat dolor impedit magna
                          purus pretium donec
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* END SLIDE 3 */}
        </div>
        {/* END SLIDER CONTENT */}
        {/* SLIDER NAVIGATION */}
        <div className="carousel-nav white-nav">
          <Link href="#">
            <a
              onClick={(e) => {
                e.preventDefault();
              }}
              className="carousel-control-prev"
              href="#heroCarousel"
              role="button"
              data-slide="prev"
              style={{ zIndex: "9999" }}
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
            </a>
          </Link>
          <Link href="#">
            <a
              onClick={(e) => {
                e.preventDefault();
              }}
              style={{ zIndex: "9999" }}
              className="carousel-control-next"
              href="#heroCarousel"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
            </a>
          </Link>
        </div>
      </Swiper>
    </section>
  );
};

export default Demo9Hero9;
