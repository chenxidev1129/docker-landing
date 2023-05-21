import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { heroSliderProps } from "../../sliderProps";

const Demo3Hero3 = () => {
  return (
    <section id="hero-3" className="hero-section division">
      {/* SLIDER */}
      <div className="slider blue-nav">
        <Swiper {...heroSliderProps} className="slides">
          {/* SLIDE #1 */}
          <SwiperSlide className="li">
            {/* Background Image */}
            <div className="img" data-bg="images/slider/slide-11.jpg" />
            {/* Image Caption */}
            <div className="caption d-flex align-items-center left-align">
              <div className="container">
                <div className="row">
                  <div className="col-sm-10 col-md-7 col-lg-6">
                    <div className="caption-txt">
                      {/* Title */}
                      <h2 className="steelblue-color">
                        With a Touch of <span>Kindness</span>
                      </h2>
                      {/* Text */}
                      <p className="p-md">
                        Feugiat primis ligula risus auctor egestas augue mauri
                        viverra tortor in iaculis and placerat purus feugiat
                        primis ultrice in ligula impedit magna purus at pretium
                      </p>
                      {/* Button */}
                      <Link href="/about-us">
                        <a className="btn btn-md btn-blue blue-hover">
                          More About Clinic
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* End row */}
              </div>
              {/* End container */}
            </div>
            {/* End Image Caption */}
          </SwiperSlide>
          {/* END SLIDE #1 */}
          {/* SLIDE #2 */}
          <SwiperSlide className="li">
            {/* Background Image */}
            <div className="img" data-bg="images/slider/slide-12.jpg" />
            {/* Image Caption */}
            <div className="caption d-flex align-items-center right-align">
              <div className="container">
                <div className="row">
                  <div className="col-sm-10 col-md-7 col-lg-6">
                    <div className="caption-txt">
                      {/* Title */}
                      <h2 className="steelblue-color">
                        <span>Child Care</span>
                        Treatments
                      </h2>
                      {/* CONTENT BOX #1 */}
                      <div className="box-list">
                        <div className="box-list-icon">
                          <i className="fas fa-genderless" />
                        </div>
                        <p className="p-md">
                          Fringilla risus nec, luctus mauris orci auctor purus
                          euismod pretium purus at pretium ligula rutrum
                        </p>
                      </div>
                      {/* CONTENT BOX #2 */}
                      <div className="box-list">
                        <div className="box-list-icon">
                          <i className="fas fa-genderless" />
                        </div>
                        <p className="p-md">
                          Quaerat sodales sapien undo euismod risus auctor
                          egestas augue mauri viverra tortor sapien
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End row */}
              </div>
              {/* End container */}
            </div>
            {/* End Image Caption */}
          </SwiperSlide>
          {/* END SLIDE #2 */}
          {/* SLIDE #3 */}
          <SwiperSlide className="li">
            {/* Background Image */}
            <div className="img" data-bg="images/slider/slide-13.jpg" />
            {/* Image Caption */}
            <div className="caption d-flex align-items-center left-align">
              <div className="container">
                <div className="row">
                  <div className="col-sm-10 col-md-7 col-lg-6">
                    <div className="caption-txt">
                      {/* Title */}
                      <h2 className="steelblue-color">
                        <span>Newborn</span> Care Services
                      </h2>
                      {/* Option Box #1 */}
                      <div className="box-list">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p className="p-md">
                          Fringilla risus nec, luctus mauris orci auctor purus
                          euismod pretium purus pretium ligula rutrum tempor
                        </p>
                      </div>
                      {/* Option Box #2 */}
                      <div className="box-list">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p className="p-md">
                          Feugiat primis ultrice in ligula risus auctor tempus
                          impedit
                        </p>
                      </div>
                      {/* Option Box #3 */}
                      <div className="box-list">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p className="p-md">
                          Luctus mauris orci auctor purus euismod pretium purus
                          dolor impedit magna purus at pretium donec
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End row */}
              </div>
              {/* End container */}
            </div>
            {/* End Image Caption */}
          </SwiperSlide>
          {/* END SLIDE #3 */}
        </Swiper>
      </div>
      {/* END SLIDER */}
    </section>
  );
};

export default Demo3Hero3;
