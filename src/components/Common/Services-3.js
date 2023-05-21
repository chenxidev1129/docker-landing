import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { service3Props } from "../../sliderProps";

const Services3 = () => {
  return (
    <section
      id="services-3"
      className="bg-lightgrey wide-100 services-section division"
    >
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row">
          <div className="col-lg-10 offset-lg-1 section-title">
            {/* Title 	*/}
            <h3 className="h3-md steelblue-color">
              Total Health Care Solutions
            </h3>
            {/* Text */}
            <p>
              Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
              primis libero at tempus, blandit posuere ligula varius congue
              cursus porta feugiat
            </p>
          </div>
        </div>
        {/* SERVICES CONTENT */}
        <div className="row">
          <div className="col-md-12">
            <Swiper
              {...service3Props}
              className="owl-carousel owl-theme services-holder"
            >
              {/* SERVICE BOX #1 */}
              <SwiperSlide className="sbox-3 icon-sm">
                {/* Icon */}
                <div className="sbox-3-icon">
                  <span className="flaticon-083-stethoscope" />
                </div>
                {/* Title */}
                <h5 className="h5-xs steelblue-color">Pediatrics</h5>
                {/* Text */}
                <p>
                  Porta semper lacus cursus, feugiat primis ultrice in ligula
                  risus auctor tempus feugiat dolor lacinia cubilia curae
                  integer congue leo metus
                </p>
              </SwiperSlide>
              {/* SERVICE BOX #2 */}
              <SwiperSlide className="sbox-3 icon-sm">
                {/* Icon */}
                <div className="sbox-3-icon">
                  <span className="flaticon-047-head" />
                </div>
                {/* Title */}
                <h5 className="h5-xs steelblue-color">Neurology</h5>
                {/* Text */}
                <p>
                  Porta semper lacus cursus, feugiat primis ultrice in ligula
                  risus auctor tempus feugiat dolor lacinia cubilia curae
                  integer congue leo metus
                </p>
              </SwiperSlide>
              {/* SERVICE BOX #3 */}
              <SwiperSlide className="sbox-3 icon-sm">
                {/* Icon */}
                <div className="sbox-3-icon">
                  <span className="flaticon-015-blood-donation-1" />
                </div>
                {/* Title */}
                <h5 className="h5-xs steelblue-color">Haematology</h5>
                {/* Text */}
                <p>
                  Porta semper lacus cursus, feugiat primis ultrice in ligula
                  risus auctor tempus feugiat dolor lacinia cubilia curae
                  integer congue leo metus
                </p>
              </SwiperSlide>
              {/* SERVICE BOX #4 */}
              <SwiperSlide className="sbox-3 icon-sm">
                {/* Icon */}
                <div className="sbox-3-icon">
                  <span className="flaticon-048-lungs" />
                </div>
                {/* Title */}
                <h5 className="h5-xs steelblue-color">X-Ray Diagnostic</h5>
                {/* Text */}
                <p>
                  Porta semper lacus cursus, feugiat primis ultrice in ligula
                  risus auctor tempus feugiat dolor lacinia cubilia curae
                  integer congue leo metus
                </p>
              </SwiperSlide>
              {/* SERVICE BOX #5 */}
              <SwiperSlide className="sbox-3 icon-sm">
                {/* Icon */}
                <div className="sbox-3-icon">
                  <span className="flaticon-060-cardiogram-4" />
                </div>
                {/* Title */}
                <h5 className="h5-xs steelblue-color">Cardiology</h5>
                {/* Text */}
                <p>
                  Porta semper lacus cursus, feugiat primis ultrice in ligula
                  risus auctor tempus feugiat dolor lacinia cubilia curae
                  integer congue leo metus
                </p>
              </SwiperSlide>
              {/* SERVICE BOX #6 */}
              <SwiperSlide className="sbox-3 icon-sm">
                {/* Icon */}
                <div className="sbox-3-icon">
                  <span className="flaticon-031-scanner" />
                </div>
                {/* Title */}
                <h5 className="h5-xs steelblue-color">MRI</h5>
                {/* Text */}
                <p>
                  Porta semper lacus cursus, feugiat primis ultrice in ligula
                  risus auctor tempus feugiat dolor lacinia cubilia curae
                  integer congue leo metus
                </p>
              </SwiperSlide>
              {/* SERVICE BOX #7 */}
              <SwiperSlide className="sbox-3 icon-sm">
                {/* Icon */}
                <div className="sbox-3-icon">
                  <span className="flaticon-076-microscope" />
                </div>
                {/* Title */}
                <h5 className="h5-xs steelblue-color">Laboratory Services</h5>
                {/* Text */}
                <p>
                  Porta semper lacus cursus, feugiat primis ultrice in ligula
                  risus auctor tempus feugiat dolor lacinia cubilia curae
                  integer congue leo metus
                </p>
              </SwiperSlide>
              {/* SERVICE BOX #8 */}
              <SwiperSlide className="sbox-3 icon-sm">
                {/* Icon */}
                <div className="sbox-3-icon">
                  <span className="flaticon-068-ambulance-3" />
                </div>
                {/* Title */}
                <h5 className="h5-xs steelblue-color">Emergency Help</h5>
                {/* Text */}
                <p>
                  Porta semper lacus cursus, feugiat primis ultrice in ligula
                  risus auctor tempus feugiat dolor lacinia cubilia curae
                  integer congue leo metus
                </p>
              </SwiperSlide>
              <div className="owl-dots"></div>
            </Swiper>
          </div>
        </div>
        {/* END SERVICES CONTENT */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Services3;
