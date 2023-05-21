import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { heroSliderProps } from "../../sliderProps";

const Demo2Hero2 = () => {
  return (
    <section id="hero-2" className="hero-section division">
      {/* SLIDER */}
      <div className="slider blue-nav">
        <Swiper {...heroSliderProps} className="slides">
          {/* SLIDE #1 */}
          <SwiperSlide className="li">
            <div className="img" data-bg="images/slider/slide-1.jpg" />
            {/* Image Caption */}
            <div className="caption d-flex align-items-center left-align">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-7">
                    <div className="caption-txt">
                      {/* Title */}
                      <h2 className="steelblue-color">
                        We will help you
                        <span className="blue-color">to become healthy</span>
                      </h2>
                      {/* Option Box #1 */}
                      <div className="box-list">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p className="p-md">
                          Fringilla risus nec, luctus mauris orci auctor purus
                          euismod pretium purus pretium ligula rutrum tempor
                          sapien at pretium luctus ligula
                        </p>
                      </div>
                      {/* Option Box #2 */}
                      <div className="box-list">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p className="p-md">
                          Feugiat primis ultrice in ligula risus auctor tempus
                          feugiat impedit
                        </p>
                      </div>
                      {/* Option Box #3 */}
                      <div className="box-list mb-15">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p className="p-md">
                          Porta semper lacus cursus, feugiat primis ultrice in
                          ligula risus auctor tempus feugiat dolor impedit magna
                          purus at pretium donec
                        </p>
                      </div>
                      {/* Button */}
                      <Link href="/about-us">
                        <a className="btn btn-blue blue-hover">
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
          </SwiperSlide>
          {/* END SLIDE #1 */}
          {/* SLIDE #2 */}
          <SwiperSlide className="li">
            {/* Background Image */}
            <div className="img" data-bg="images/slider/slide-2.jpg" />
            {/* Image Caption */}
            <div className="caption d-flex align-items-center right-align">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-7 offset-md-3 offset-lg-5">
                    <div className="caption-txt">
                      {/* Title */}
                      <h2 className="steelblue-color">
                        <span className="blue-color">Highest Quality</span>
                        Medical Treatment
                      </h2>
                      {/* Text */}
                      <p className="p-md">
                        Feugiat primis ligula risus auctor egestas augue mauri
                        viverra tortor in iaculis placerat eugiat mauris ipsum
                        in viverra tortor and gravida purus pretium and lorem
                        primis in integer mollis pretium purus pretium ligula
                      </p>
                      {/* Button */}
                      <Link href="/all-departments">
                        <a className="btn btn-blue blue-hover">
                          Our Departments
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
          {/* END SLIDE #2 */}
          {/* SLIDE #3 */}
          <SwiperSlide className="li">
            {/* Background Image */}
            <div className="img" data-bg="images/slider/slide-4.jpg" />
            {/* Image Caption */}
            <div className="caption d-flex align-items-center left-align">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-7">
                    <div className="caption-txt white-color">
                      {/* Title */}
                      <h2>
                        Solutions to complex
                        <span>medical problems</span>
                      </h2>
                      {/* CONTENT BOX #1 */}
                      <div className="box-list">
                        <div className="box-list-icon">
                          <i className="fas fa-genderless" />
                        </div>
                        <p className="p-md">
                          Fringilla risus nec, luctus mauris orci auctor purus
                          euismod pretium purus pretium ligula rutrum tempor
                          sapien at pretium luctus ligula luctus
                        </p>
                      </div>
                      {/* CONTENT BOX #2 */}
                      <div className="box-list">
                        <div className="box-list-icon">
                          <i className="fas fa-genderless" />
                        </div>
                        <p className="p-md">
                          Quaerat sodales sapien undo euismod purus a blandit
                          pretium
                        </p>
                      </div>
                      {/* CONTENT BOX #3 */}
                      <div className="box-list">
                        <div className="box-list-icon">
                          <i className="fas fa-genderless" />
                        </div>
                        <p className="p-md">
                          Nemo ipsam egestas volute turpis dolores ut aliquam
                          quaerat sodales sapien undo pretium purus feugiat
                          dolor impedit magna risus
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
          <div className="indicators"></div>
        </Swiper>
      </div>
      {/* END SLIDER */}
    </section>
  );
};

export default Demo2Hero2;
