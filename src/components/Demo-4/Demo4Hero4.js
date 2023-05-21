import React from "react";

const Demo4Hero4 = () => {
  return (
    <section id="hero-4" className="bg-fixed hero-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* HERO TEXT */}
          <div className="col-lg-7 col-xl-7">
            <div className="hero-txt mb-40">
              {/* Title */}
              <h5 className="blue-color">Welcome to MedService</h5>
              <h2 className="steelblue-color">
                World class medical treatment for your family
              </h2>
              {/* CONTENT BOX #1 */}
              <div className="box-list">
                <div className="box-list-icon">
                  <i className="fas fa-genderless" />
                </div>
                <p>
                  Fringilla risus nec, luctus mauris orci auctor purus euismod
                  pretium purus at pretium ligula rutrum tempor sapien at
                  pretium luctus ligula luctus risus
                </p>
              </div>
              {/* CONTENT BOX #2 */}
              <div className="box-list">
                <div className="box-list-icon">
                  <i className="fas fa-genderless" />
                </div>
                <p>
                  Quaerat sodales sapien undo euismod purus a blandit pretium
                  ultrice
                </p>
              </div>
              {/* CONTENT BOX #3 */}
              <div className="box-list">
                <div className="box-list-icon">
                  <i className="fas fa-genderless" />
                </div>
                <p>
                  Nemo ipsam egestas volute turpis dolores ut aliquam quaerat
                  sodales sapien undo pretium purus feugiat dolor impedit magna
                  purus pretium
                </p>
              </div>
            </div>
          </div>
          {/* END HERO TEXT */}
          {/* HERO APPOINTMENT FORM */}
          <div className="col-lg-5 col-xl-5">
            <div id="hero-section-form" className="text-center mb-40">
              <form
                onSubmit={(e) => e.preventDefault()}
                name="heroForm"
                className="row hero-form bg-blue"
              >
                {/* Form Text */}
                <div className="col-md-12 white-color">
                  <h4 className="h4-xs">Get an Appointment</h4>
                </div>
                {/* Contact Form Input */}
                <div id="input-name" className="col-lg-12">
                  <input
                    type="text"
                    name="name"
                    className="form-control name"
                    placeholder="Enter Your Name*"
                    required
                  />
                </div>
                <div id="input-email" className="col-lg-12">
                  <input
                    type="text"
                    name="email"
                    className="form-control email"
                    placeholder="Enter Your Email*"
                    required
                  />
                </div>
                <div id="input-phone" className="col-lg-12">
                  <input
                    type="tel"
                    name="phone"
                    className="form-control phone"
                    placeholder="Enter Your Phone Number*"
                    required
                  />
                </div>
                {/* Contact Form Input */}
                <div id="input-date" className="col-lg-12">
                  <input
                    id="datetimepicker"
                    type="text"
                    name="date"
                    className="form-control date"
                    placeholder="Appointment Date"
                    required
                  />
                </div>
                {/* Form Select */}
                <div id="input-doctor" className="col-md-12 input-doctor">
                  <select
                    id="inlineFormCustomSelect2"
                    name="doctor"
                    className="custom-select doctor"
                  >
                    <option>Select Doctor</option>
                    <option>Jonathan Barnes D.M.</option>
                    <option>Hannah Harper D.M.</option>
                    <option>Matthew Anderson D.M.</option>
                    <option>Megan Coleman D.M.</option>
                    <option>Joshua Elledge D.M.</option>
                    <option>Other</option>
                  </select>
                </div>
                {/* Contact Form Button */}
                <div className="col-lg-12 form-btn">
                  <button
                    type="submit"
                    className="btn btn-orange tra-white-hover submit"
                  >
                    Send Your Message
                  </button>
                </div>
                {/* Contact Form Message */}
                <div className="col-lg-12 hero-form-msg text-center">
                  <div className="sending-msg">
                    <span className="loading" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* END HERO APPOINTMENT FORM */}
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo4Hero4;
