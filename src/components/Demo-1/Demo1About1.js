import Link from "next/link";
import React from "react";

const Demo1About1 = () => {
  return (
    <section id="about-1" className="about-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* ABOUT BOX #1 */}
          <div id="abox-1" className="col-md-6 col-lg-3">
            <div className="abox-1 white-color">
              {/* Title */}
              <h5 className="h5-md">Working Time</h5>
              {/* Table */}
              <table className="table white-color">
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
            </div>
          </div>
          {/* ABOUT BOX #2 */}
          <div id="abox-2" className="col-md-6 col-lg-3">
            <div className="abox-1 white-color">
              <h5 className="h5-md">Doctors Timetable</h5>
              {/* Text */}
              <p>
                An magnis nulla dolor at sapien augue erat iaculis purus tempor
                magna ipsum and vitae a purus primis ipsum magna ipsum
              </p>
              {/* Button */}
              <Link href="/timetable">
                <a className="btn btn-sm btn-tra-white mt-25">View Timetable</a>
              </Link>
            </div>
          </div>
          {/* ABOUT BOX #3 */}
          <div id="abox-3" className="col-md-6 col-lg-3">
            <div className="abox-1 white-color">
              {/* Title */}
              <h5 className="h5-md">Appointments</h5>
              {/* Text */}
              <p>
                An magnis nulla dolor at sapien augue erat iaculis purus tempor
                magna ipsum and vitae a purus primis ipsum magna ipsum
              </p>
              {/* Button */}
              <Link href="#">
                <a className="btn btn-sm btn-tra-white mt-25">
                  Make an Apointment
                </a>
              </Link>
            </div>
          </div>
          {/* ABOUT BOX #4 */}
          <div id="abox-4" className="col-md-6 col-lg-3">
            <div className="abox-1 white-color">
              {/* Title */}
              <h5 className="h5-md">Emergency Cases</h5>
              {/* Text */}
              <h5 className="h5-lg emergency-call">
                <i className="fas fa-phone" />
                1-800-123-4560
              </h5>
              <p className="mt-20">
                An magnis nulla dolor sapien augue erat iaculis purus tempor
                magna ipsum and vitae a purus primis ipsum magna ipsum
              </p>
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo1About1;
