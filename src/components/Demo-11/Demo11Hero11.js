import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Demo11Hero11 = () => {
  return (
    <section id="hero-11" className="bg-fixed hero-section division">
      {/* SLIDER */}
      <div className="slider blue-nav">
        <Swiper className="slides">
          {/* SLIDE #1 */}
          <SwiperSlide className="li">
            {/* Background Image */}
            <div className="img" data-bg="images/slider/slide-10.jpg" />
            {/* Image Caption */}
            <div className="caption d-flex align-items-center right-align">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 col-xl-7">
                    <div className="caption-txt text-left white-color">
                      {/* Title */}
                      <h2>Treatment</h2>
                      <h3>Innovative Approach to Treatment</h3>
                      {/* CONTENT BOX #1 */}
                      <div className="box-list">
                        <div className="box-list-icon">
                          <i className="fas fa-genderless" />
                        </div>
                        <p className="p-md">
                          Nemo ipsam egestas volute turpis dolores ut aliquam
                          quaerat sodales sapien undo pretium purus feugiat
                          dolor impedit magna at purus suscipit
                        </p>
                      </div>
                      {/* CONTENT BOX #2 */}
                      <div className="box-list">
                        <div className="box-list-icon">
                          <i className="fas fa-genderless" />
                        </div>
                        <p className="p-md">
                          Fringilla risus nec, luctus mauris orci auctor purus
                          euismod pretium purus pretium ligula rutrum suscipit
                          lectus mauris tempor sapien
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
          {/* END SLIDE #1 */}
          {/* SLIDE #2 */}
          <SwiperSlide className="li">
            {/* Background Image */}
            <div className="img" data-bg="images/slider/slide-10.jpg" />
            {/* Image Caption */}
            <div className="caption d-flex align-items-center right-align">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 col-xl-7">
                    <div className="caption-txt text-left white-color">
                      {/* Title */}
                      <h2>Diagnostic</h2>
                      <h3>We Provide All Kind of Diagnostics</h3>
                      {/* Text */}
                      <p className="p-md">
                        Feugiat primis ligula risus auctor egestas augue mauri
                        viverra tortor in iaculis placerat eugiat mauris ipsum
                        in viverra tortor and gravida purus pretium lorem primis
                        integer congue magna at pretium purus pretium ligula
                      </p>
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
            <div className="img" data-bg="images/slider/slide-10.jpg" />
            {/* Image Caption */}
            <div className="caption d-flex align-items-center right-align">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 col-xl-7">
                    <div className="caption-txt text-left white-color">
                      {/* Title */}
                      <h2>Specialists</h2>
                      <h3>Our Staff are High-Class Professionals</h3>
                      {/* CONTENT BOX #1 */}
                      <div className="box-list">
                        <div className="box-list-icon">
                          <i className="fas fa-genderless" />
                        </div>
                        <p className="p-md">
                          Nemo ipsam egestas volute turpis dolores ut aliquam
                          quaerat sodales sapien undo pretium purus feugiat
                          dolor impedit magna at purus mauris
                        </p>
                      </div>
                      {/* CONTENT BOX #2 */}
                      <div className="box-list">
                        <div className="box-list-icon">
                          <i className="fas fa-genderless" />
                        </div>
                        <p className="p-md">
                          Fringilla risus nec, luctus mauris orci auctor purus
                          euismod pretium purus pretium ligula rutrum suscipit
                          lectus mauris tempor sapien
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

export default Demo11Hero11;
