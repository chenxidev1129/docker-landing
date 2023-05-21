import Link from "next/link";
import React from "react";

const Demo5Contacts1 = () => {
  return (
    <section
      id="contacts-1"
      className="bg-lightgrey wide-60 contacts-section division"
    >
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row">
          <div className="col-lg-10 offset-lg-1 section-title">
            {/* Title 	*/}
            <h3 className="h3-md steelblue-color">
              Have a Question? Get In Touch
            </h3>
            {/* Text */}
            <p>
              Have a question? Want to book an appointment for yourself or your
              children? Give us a call or send an email to contact the
              MedService.
            </p>
          </div>
        </div>
        <div className="row">
          {/* CONTACTS INFO */}
          <div className="col-md-5 col-lg-4">
            {/* General Information */}
            <div className="contact-box mb-40">
              <h5 className="h5-sm steelblue-color">General Information</h5>
              <p>121 King Street, Melbourne,</p>
              <p>Victoria 3000 Australia</p>
              <p>Phone: +12 9 8765 4321</p>
              <p>
                Email:
                <Link href="#">
                  <a href="mailto:yourdomain@mail.com" className="blue-color">
                    hello@yourdomain.com
                  </a>
                </Link>
              </p>
            </div>
            {/* Patient Experience */}
            <div className="contact-box mb-40">
              <h5 className="h5-sm steelblue-color">Patient Experience</h5>
              <p>Hannah Harper - Patient Experience Coordinator</p>
              <p>Phone: +12 9 8765 4321</p>
              <p>
                Email:
                <Link href="#">
                  <a href="mailto:yourdomain@mail.com" className="blue-color">
                    hello@yourdomain.com
                  </a>
                </Link>
              </p>
            </div>
            {/* Working Hours */}
            <div className="contact-box mb-40">
              <h5 className="h5-sm steelblue-color">Working Hours</h5>
              <p>Monday – Friday : 8:00 AM - 8:00 PM</p>
              <p>Saturday : 10:00 AM - 6:00 PM</p>
              <p>Sunday : 10:00 AM - 4:00 PM</p>
            </div>
          </div>
          {/* END CONTACTS INFO */}
          {/* CONTACT FORM */}
          <div className="col-md-7 col-lg-8">
            <div className="form-holder mb-40">
              <form
                onSubmit={(e) => e.preventDefault()}
                name="contactForm"
                id="contact-form"
                className="row contact-form"
                method="post"
              >
                {/* Name */}
                <div className="col-md-12 col-lg-6">
                  <div className="form-group">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      className="form-control name"
                      placeholder="Your Name*"
                      required="required"
                      data-error="Enter no more than (2) characters."
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                {/* Email */}
                <div className="col-md-12 col-lg-6">
                  <div className="form-group">
                    <input
                      id="form_email"
                      className="form-control email"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required="required"
                      data-error="Email is required"
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                {/* Phone */}
                <div className="col-md-12 col-lg-6">
                  <div className="form-group">
                    <input
                      id="form_phone"
                      className="form-control phone"
                      type="tel"
                      name="phone"
                      placeholder="Your Phone Number"
                      required="required"
                      data-error="Please enter only digits."
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                {/* Select Input */}
                <div className="col-md-12 col-lg-6">
                  <div className="form-group">
                    <select
                      id="inlineFormCustomSelect1"
                      name="patient"
                      className="custom-select patient"
                    >
                      <option>Have You Visited Us Before?*</option>
                      <option>New Patient</option>
                      <option>Returning Patient</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                {/* Subject */}
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      id="form_subject"
                      className="form-control subject"
                      type="text"
                      name="subject"
                      placeholder="Subject*"
                      required="required"
                      data-error="Subject is required"
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                {/* Message */}
                <div className="col-md-12 input-message">
                  <div className="form-group">
                    <textarea
                      id="form-message"
                      className="form-control message"
                      name="message"
                      rows={6}
                      placeholder="Your Message ..."
                      required="required"
                      data-error="Enter no more than (10) characters."
                      defaultValue=""
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                {/* Contact Form Message */}
                <div className="messages" />
                {/* Button */}
                <div className="col-md-12 mt-15 form-btn">
                  <button
                    type="submit"
                    className="btn btn-md btn-blue blue-hover submit"
                  >
                    Send Your Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* END CONTACT FORM */}
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo5Contacts1;
