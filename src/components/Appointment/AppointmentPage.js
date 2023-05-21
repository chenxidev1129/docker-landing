import Link from "next/link";
import React from "react";

const AppointmentPage = () => {
  return (
    <div
      id="appointment-page"
      className="wide-60 appointment-page-section division"
    >
      <div className="container">
        <div className="row">
          {/* SERVICE DETAILS */}
          <div className="col-lg-8">
            <div className="txt-block pr-30">
              {/* Title */}
              <h3 className="h3-md steelblue-color">Book an Appointment</h3>
              {/* Text */}
              <p>
                Porta semper lacus cursus, feugiat primis ultrice in ligula
                risus auctor tempus feugiat dolor lacinia cubilia curae integer
                congue leo metus, primis in orci integer metus mollis faucibus
                enim. Nemo ipsam egestas volute turpis dolores ut aliquam
                quaerat sodales sapien undo pretium purus feugiat dolor impedit
                magna purus pretium gravida donec ligula massa gravida donec
                pretium
              </p>
              {/* APPOINTMENT FORM */}
              <div id="appointment-form-holder" className="text-center">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  name="appointmentform"
                  className="row appointment-form"
                >
                  {/* Form Select */}
                  <div
                    id="input-department"
                    className="col-md-12 input-department"
                  >
                    <select
                      id="inlineFormCustomSelect1"
                      name="department"
                      className="custom-select department"
                      required
                    >
                      <option>Select Department</option>
                      <option>Pediatrics Department</option>
                      <option>Neurology Department</option>
                      <option>Haematology Department</option>
                      <option>X-Ray Diagnostic Department</option>
                      <option>Cardiology Department</option>
                      <option>MRI Department</option>
                      <option>Laboratory Services</option>
                      <option>Other</option>
                    </select>
                  </div>
                  {/* Form Select */}
                  <div id="input-doctor" className="col-md-12 input-doctor">
                    <select
                      id="inlineFormCustomSelect2"
                      name="doctor"
                      className="custom-select doctor"
                      required
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
                  {/* Form Select */}
                  <div id="input-patient" className="col-md-12 input-patient">
                    <select
                      id="inlineFormCustomSelect3"
                      name="patient"
                      className="custom-select patient"
                      required
                    >
                      <option>Have You Visited Us Before?*</option>
                      <option>New Patient</option>
                      <option>Returning Patient</option>
                      <option>Other</option>
                    </select>
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
                  <div id="input-message" className="col-lg-12 input-message">
                    <textarea
                      className="form-control message"
                      name="message"
                      rows={6}
                      placeholder="Your Message ..."
                      defaultValue=""
                    />
                  </div>
                  {/* Contact Form Button */}
                  <div className="col-lg-12 form-btn">
                    <button
                      type="submit"
                      className="btn btn-blue blue-hover submit"
                    >
                      Request an Appointment
                    </button>
                  </div>
                  {/* Contact Form Message */}
                  <div className="col-lg-12 appointment-form-msg text-center">
                    <div className="sending-msg">
                      <span className="loading" />
                    </div>
                  </div>
                </form>
              </div>
              {/* END APPOINTMENT FORM */}
              {/* Text */}
              <p className="p-sm grey-color mb-30">
                * Porta semper lacus cursus, feugiat primis ultrice in ligula
                risus auctor tempus feugiat dolor lacinia cubilia curae integer
                congue leo metus, primis in orci integer metus mollis faucibus
                enim. Nemo ipsam egestas volute turpis dolores ut aliquam
                quaerat sodales sapien undo pretium purus
              </p>
            </div>
          </div>
          {/* END SERVICE DETAILS */}
          {/* SIDEBAR */}
          <aside id="sidebar" className="col-lg-4">
            {/* TEXT WIDGET */}
            <div id="txt-widget" className="sidebar-div mb-50">
              {/* Title */}
              <h5 className="h5-sm steelblue-color">The Heart Of Clinic</h5>
              {/* Head of Clinic */}
              <div className="txt-widget-unit mb-15 clearfix d-flex align-items-center">
                {/* Avatar */}
                <div className="txt-widget-avatar">
                  <img
                    src="images/head-of-clinic.jpg"
                    alt="testimonial-avatar"
                  />
                </div>
                {/* Data */}
                <div className="txt-widget-data">
                  <h5 className="h5-md steelblue-color">Dr. Jonathan Barnes</h5>
                  <span>Chief Medical Officer, Founder</span>
                  <p className="blue-color">1-800-1234-567</p>
                </div>
              </div>
              {/* End Head of Clinic */}
              {/* Text */}
              <p className="p-sm">
                An enim nullam tempor sapien at gravida donec pretium ipsum
                porta justo integer at odiovelna vitae auctor integer congue
                magna purus
              </p>
              {/* Button */}
              <Link href="/about">
                <a className="btn btn-blue blue-hover">Learn More</a>
              </Link>
            </div>
            {/* END TEXT WIDGET */}
            {/* SIDEBAR TABLE */}
            <div className="sidebar-table blue-table sidebar-div mb-50">
              {/* Title */}
              <h5 className="h5-md">Working Time</h5>
              {/* Text */}
              <p className="p-sm">
                Porta semper lacus cursus, feugiat primis ultrice ligula risus
                auctor at tempus feugiat dolor lacinia cursus nulla vitae massa
              </p>
              {/* Table */}
              <table className="table">
                <tbody>
                  <tr>
                    <td>Mon – Wed</td>
                    <td> - </td>
                    <td className="text-right">9:00 AM - 7:00 PM</td>
                  </tr>
                  <tr>
                    <td>Thursday</td>
                    <td> - </td>
                    <td className="text-right">9:00 AM - 6:30 PM</td>
                  </tr>
                  <tr>
                    <td>Friday</td>
                    <td> - </td>
                    <td className="text-right">9:00 AM - 6:00 PM</td>
                  </tr>
                  <tr className="last-tr">
                    <td>Sun - Sun</td>
                    <td>-</td>
                    <td className="text-right">CLOSED</td>
                  </tr>
                </tbody>
              </table>
              {/* Title */}
              <h5 className="h5-xs">Need a personal health plan?</h5>
              {/* Text */}
              <p className="p-sm">
                Porta semper lacus cursus, and feugiat primis ultrice ligula at
                risus auctor
              </p>
            </div>
            {/* END SIDEBAR TABLE */}
          </aside>
          {/* END SIDEBAR */}
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </div>
  );
};

export default AppointmentPage;
