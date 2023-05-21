import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { service3Props } from "../../sliderProps";

const Demo6Services5 = () => {
  return (
    <section
      id="services-5"
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
              <SwiperSlide className="sbox-5">
                {/* Image */}
                <img
                  className="img-fluid"
                  src="images/pediatrics_700x700.jpg"
                  alt="content-image"
                />
                {/* Text */}
                <div className="sbox-5-txt">
                  {/* Title */}
                  <h5 className="h5-sm blue-color">Pediatrics</h5>
                  {/* Text */}
                  <p>
                    Porta semper lacus cursus, feugiat primis ultrice in ligula
                    risus auctor tempus feugiat dolor lacinia cubilia curae
                    integer congue leo metus
                  </p>
                </div>
              </SwiperSlide>
              {/* SERVICE BOX #2 */}
              <SwiperSlide className="sbox-5">
                {/* Image */}
                <img
                  className="img-fluid"
                  src="images/neurology_700x700.jpg"
                  alt="content-image"
                />
                {/* Text */}
                <div className="sbox-5-txt">
                  {/* Title */}
                  <h5 className="h5-sm blue-color">Neurology</h5>
                  {/* Text */}
                  <p>
                    Porta semper lacus cursus, feugiat primis ultrice in ligula
                    risus auctor tempus feugiat dolor lacinia cubilia curae
                    integer congue leo metus
                  </p>
                </div>
              </SwiperSlide>
              {/* SERVICE BOX #3 */}
              <SwiperSlide className="sbox-5">
                {/* Image */}
                <img
                  className="img-fluid"
                  src="images/hematology_700x700.jpg"
                  alt="content-image"
                />
                {/* Text */}
                <div className="sbox-5-txt">
                  {/* Title */}
                  <h5 className="h5-sm blue-color">Haematology</h5>
                  {/* Text */}
                  <p>
                    Porta semper lacus cursus, feugiat primis ultrice in ligula
                    risus auctor tempus feugiat dolor lacinia cubilia curae
                    integer congue leo metus
                  </p>
                </div>
              </SwiperSlide>
              {/* SERVICE BOX #4 */}
              <SwiperSlide className="sbox-5">
                {/* Image */}
                <img
                  className="img-fluid"
                  src="images/x-ray_700x700.jpg"
                  alt="content-image"
                />
                {/* Text */}
                <div className="sbox-5-txt">
                  {/* Title */}
                  <h5 className="h5-sm blue-color">X-Ray Diagnostic</h5>
                  {/* Text */}
                  <p>
                    Porta semper lacus cursus, feugiat primis ultrice in ligula
                    risus auctor tempus feugiat dolor lacinia cubilia curae
                    integer congue leo metus
                  </p>
                </div>
              </SwiperSlide>
              {/* SERVICE BOX #5 */}
              <SwiperSlide className="sbox-5">
                {/* Image */}
                <img
                  className="img-fluid"
                  src="images/cardiology_700x700.jpg"
                  alt="content-image"
                />
                {/* Text */}
                <div className="sbox-5-txt">
                  {/* Title */}
                  <h5 className="h5-sm blue-color">Cardiology</h5>
                  {/* Text */}
                  <p>
                    Porta semper lacus cursus, feugiat primis ultrice in ligula
                    risus auctor tempus feugiat dolor lacinia cubilia curae
                    integer congue leo metus
                  </p>
                </div>
              </SwiperSlide>
              {/* SERVICE BOX #6 */}
              <SwiperSlide className="sbox-5">
                {/* Image */}
                <img
                  className="img-fluid"
                  src="images/mri_700x700.jpg"
                  alt="content-image"
                />
                {/* Text */}
                <div className="sbox-5-txt">
                  {/* Title */}
                  <h5 className="h5-sm blue-color">MRI Diagnostics</h5>
                  {/* Text */}
                  <p>
                    Porta semper lacus cursus, feugiat primis ultrice in ligula
                    risus auctor tempus feugiat dolor lacinia cubilia curae
                    integer congue leo metus
                  </p>
                </div>
              </SwiperSlide>
              {/* SERVICE BOX #7 */}
              <SwiperSlide className="sbox-5">
                {/* Image */}
                <img
                  className="img-fluid"
                  src="images/laboratory_700x700.jpg"
                  alt="content-image"
                />
                {/* Text */}
                <div className="sbox-5-txt">
                  {/* Title */}
                  <h5 className="h5-sm blue-color">Laboratory Services</h5>
                  {/* Text */}
                  <p>
                    Porta semper lacus cursus, feugiat primis ultrice in ligula
                    risus auctor tempus feugiat dolor lacinia cubilia curae
                    integer congue leo metus
                  </p>
                </div>
              </SwiperSlide>
              {/* SERVICE BOX #8 */}
              <SwiperSlide className="sbox-5">
                {/* Image */}
                <img
                  className="img-fluid"
                  src="images/emergency_help_700x700.jpg"
                  alt="content-image"
                />
                {/* Text */}
                <div className="sbox-5-txt">
                  {/* Title */}
                  <h5 className="h5-sm blue-color">Emergency Help</h5>
                  {/* Text */}
                  <p>
                    Porta semper lacus cursus, feugiat primis ultrice in ligula
                    risus auctor tempus feugiat dolor lacinia cubilia curae
                    integer congue leo metus
                  </p>
                </div>
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

export default Demo6Services5;
