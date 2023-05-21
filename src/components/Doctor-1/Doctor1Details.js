import Link from "next/link";
import React from "react";

const Doctor1Details = () => {
  return (
    <section id="doctor-1-details" className="doctor-details-section division">
      <div className="container">
        <div className="row">
          {/* DOCTOR PHOTO */}
          <div className="col-md-5">
            <div className="doctor-photo mb-40">
              {/* Photo */}
              <img
                className="img-fluid"
                src="images/doctor-3.jpg"
                alt="doctor-foto"
              />
              {/* Doctor Info */}
              <div className="doctor-info">
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td>Degrees</td>
                      <td>M.D. of Medicine</td>
                    </tr>
                    <tr>
                      <td>Areas of Expertise</td>
                      <td>
                        <span>
                          <i className="fas fa-angle-double-right" />
                          Neurology
                        </span>
                        <span>
                          <i className="fas fa-angle-double-right" />
                          Immunology
                        </span>
                        <span>
                          <i className="fas fa-angle-double-right" />
                          Internal Medicine
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Language(s)</td>
                      <td>English / Spanish / German</td>
                    </tr>
                    <tr className="last-tr">
                      <td>Work Days</td>
                      <td>Tuesday - Thursday</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* End Doctor Info */}
              {/* Doctor Contacts */}
              <div className="doctor-contacts text-center">
                <h4 className="h4-xs">
                  <i className="fas fa-mobile-alt" />
                  1-(800)-569-7890
                </h4>
                <h4 className="h4-xs blue-color">
                  <i className="fas fa-envelope-open-text" />
                  <Link href="#">
                    <a href="mailto:yourdomain@mail.com" className="blue-color">
                      hello@yourdomain.com
                    </a>
                  </Link>
                </h4>
              </div>
              {/* Buttons */}
              <div className="doctor-photo-btn text-center">
                <Link href="/appointment">
                  <a className="btn btn-md btn-blue blue-hover">
                    Book an Appointment
                  </a>
                </Link>
                <Link href="/timetable">
                  <a className="btn btn-md btn-tra-grey grey-hover">
                    View Timetable
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/* END DOCTOR PHOTO */}
          {/* DOCTOR'S BIO */}
          <div className="col-md-7">
            <div className="doctor-bio">
              {/* Text */}
              <p>
                Etiam sapien sem magna at vitae pulvinar congue augue egestas
                pretium neque id viverra suscipit egestas magna porta ratione,
                mollis risus lectus porta rutrum arcu aenean primis in augue
                luctus neque purus ipsum neque dolor primis suscipit in magna
                dignissim, porttitor hendrerit diam
              </p>
              {/* Text */}
              <p>
                In at mauris vel nisl convallis porta at vitae dui. Nam lacus
                ligula, vulputate molestie bibendum quis, aliquet elementum
                massa. Vestibulum ut sagittis odio. Ac massa lorem. Fusce eu
                cursus est. Fusce non nulla vitae massa placerat vulputate vel a
                purus. Aliqum mullam blandit tempor sapien
              </p>
              {/* Title */}
              <h5 className="h5-md blue-color">Education + Trainings</h5>
              {/* Text */}
              <p>
                Aliqum mullam blandit tempor sapien gravida donec ipsum, at
                porta justo. Velna vitae auctor congue magna nihil impedit
                ligula risus. Mauris donec ociis et magnis sapien etiam sapien
                sem sagittis congue tempor gravida
              </p>
              {/* Option #1 */}
              <div className="box-list m-top-15">
                <div className="box-list-icon blue-color">
                  <i className="fas fa-angle-double-right" />
                </div>
                <p className="p-sm">
                  Nemo ipsam egestas volute and turpis dolores quaerat
                </p>
              </div>
              {/* Option #2 */}
              <div className="box-list">
                <div className="box-list-icon blue-color">
                  <i className="fas fa-angle-double-right" />
                </div>
                <p className="p-sm">
                  Magna luctus tempor augue vitae laoreet augue in cubilia risus
                  auctor tempus dolor felis lacinia risus auctor id viverra
                  dolor
                </p>
              </div>
              {/* Option #3 */}
              <div className="box-list">
                <div className="box-list-icon blue-color">
                  <i className="fas fa-angle-double-right" />
                </div>
                <p className="p-sm">
                  Ligula risus auctor tempus dolor feugiat, felis lacinia risus
                  interdum auctor id viverra dolor iaculis luctus
                </p>
              </div>
              {/* Option #3 */}
              <div className="box-list">
                <div className="box-list-icon blue-color">
                  <i className="fas fa-angle-double-right" />
                </div>
                <p className="p-sm">
                  An enim nullam tempor at pretium purus blandit
                </p>
              </div>
              {/* CERTIFICATES */}
              <div className="certificates">
                {/* Title */}
                <h5 className="h5-md blue-color">Diplomas and Certificates</h5>
                {/* Certificate Preview */}
                <div className="row">
                  {/* Certificate Image */}
                  <div className="col-sm-6 col-lg-4">
                    <div className="certificate-image">
                      <Link href="#">
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className="image-link"
                          href="images/certificate-1.png"
                          title
                        >
                          <img
                            className="img-fluid"
                            src="images/certificate-1.png"
                            alt="certificate-image"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                  {/* Certificate Image */}
                  <div className="col-sm-6 col-lg-4">
                    <div className="certificate-image">
                      <Link href="#">
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className="image-link"
                          href="images/certificate-2.png"
                          title
                        >
                          <img
                            className="img-fluid"
                            src="images/certificate-2.png"
                            alt="certificate-image"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                  {/* Certificate Image */}
                  <div className="col-sm-6 col-lg-4">
                    <div className="certificate-image">
                      <Link href="#">
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className="image-link"
                          href="images/certificate-3.png"
                          title
                        >
                          <img
                            className="img-fluid"
                            src="images/certificate-3.png"
                            alt="certificate-image"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                  {/* Certificate Image */}
                  <div className="col-sm-6 col-lg-4">
                    <div className="certificate-image">
                      <Link href="#">
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className="image-link"
                          href="images/certificate-4.png"
                          title
                        >
                          <img
                            className="img-fluid"
                            src="images/certificate-4.png"
                            alt="certificate-image"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                  {/* Certificate Image */}
                  <div className="col-sm-6 col-lg-4">
                    <div className="certificate-image">
                      <Link href="#">
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className="image-link"
                          href="images/certificate-5.png"
                          title
                        >
                          <img
                            className="img-fluid"
                            src="images/certificate-5.png"
                            alt="certificate-image"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* END CERTIFICATES */}
            </div>
          </div>
          {/* END DOCTOR BIO */}
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Doctor1Details;
