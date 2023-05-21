import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { heroSliderProps } from "../../sliderProps";

const Demo7Hero7 = () => {
  return (
    <section id="hero-7" className="hero-section division">
      {/* SLIDER */}
      <div className="slider blue-nav">
        <Swiper {...heroSliderProps} className="slides">
          {/* SLIDE #1 */}
          <SwiperSlide className="li">
            {/* Background Image */}
            <div className="img" data-bg="images/slider/slide-7.jpg" />
            {/* Image Caption */}
            <div className="caption d-flex align-items-center left-align">
              <div className="container">
                <div className="row">
                  <div className="col-sm-9 col-md-8 col-lg-7 col-xl-6">
                    <div className="caption-txt">
                      {/* Title */}
                      <h5 className="blue-color">Welcome to MedService</h5>
                      <h2 className="steelblue-color">
                        Healthy smile you deserve
                      </h2>
                      {/* CONTENT BOX #1 */}
                      <div className="box-list">
                        <div className="box-list-icon">
                          <i className="fas fa-genderless" />
                        </div>
                        <p className="p-md">
                          Fringilla risus nec, luctus mauris auctor purus sapien
                          euismod pretium purus at pretium ligula rutrum euismod
                        </p>
                      </div>
                      {/* CONTENT BOX #3 */}
                      <div className="box-list">
                        <div className="box-list-icon">
                          <i className="fas fa-genderless" />
                        </div>
                        <p className="p-md">
                          Nemo ipsam egestas volute turpis dolores luctus
                          aliquam and quaerat sodales at sapien undo pretium
                          purus feugiat
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
            <div className="img" data-bg="images/slider/slide-8.jpg" />
            {/* Image Caption */}
            <div className="caption d-flex align-items-center left-align">
              <div className="container">
                <div className="row">
                  <div className="col-sm-9 col-md-8 col-lg-7 col-xl-6">
                    <div className="caption-txt">
                      {/* Title */}
                      <h5 className="blue-color">
                        Friendly, caring dental services
                      </h5>
                      <h2 className="steelblue-color">
                        High-class professionals
                      </h2>
                      {/* Text */}
                      <p className="p-md">
                        Feugiat primis ligula risus auctor egestas augue mauri
                        viverra tortor in iaculis placerat eugiat mauris ipsum
                        in viverra tortor and gravida purus and pretium at lorem
                        primis in orci integer
                      </p>
                      {/* Button */}
                      <Link href="/all-doctors">
                        <a className="btn btn-blue blue-hover">
                          Meet the Doctors
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
            <div className="img" data-bg="images/slider/slide-9.jpg" />
            {/* Image Caption */}
            <div className="caption d-flex align-items-center left-align">
              <div className="container">
                <div className="row">
                  <div className="col-sm-9 col-md-8 col-lg-7 col-xl-6">
                    <div className="caption-txt">
                      {/* Title */}
                      <h5 className="blue-color">
                        Straighter Teeth...Healthier Smile!
                      </h5>
                      <h2 className="steelblue-color">
                        We create radiant smiles
                      </h2>
                      {/* Option Box #1 */}
                      <div className="box-list">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p className="p-md">
                          Fringilla risus nec, luctus mauris orci auctor purus
                          euismod pretium purus pretium ligula rutrum tempor
                          sapien at ligula
                        </p>
                      </div>
                      {/* Option Box #2 */}
                      <div className="box-list mb-15">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p className="p-md">
                          Feugiat primis ultrice in ligula risus auctor tempus
                          feugiat impedit dolores ut aliquam quaerat sodales
                        </p>
                      </div>
                      {/* Button */}
                      <Link href="/who-we-are">
                        <a className="btn btn-blue blue-hover">Discover More</a>
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
          {/* END SLIDE #3 */}
        </Swiper>

        <div className="indicators"></div>
      </div>
      {/* END SLIDER */}
    </section>
  );
};

export default Demo7Hero7;
