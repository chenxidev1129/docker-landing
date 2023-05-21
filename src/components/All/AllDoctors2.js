import Link from "next/link";
import React from "react";

const AllDoctors2 = () => {
    return (
        <section id="doctors-2" className="wide-40 doctors-section division">
            <div className="container">
                {/* SECTION TITLE */}
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 section-title">
                        {/* Title 	*/}
                        <h3 className="h3-md steelblue-color">
                            Our Medical Specialists
                        </h3>
                        {/* Text */}
                        <p>
                            Aliquam a augue suscipit, luctus neque purus ipsum
                            neque dolor primis libero at tempus, blandit posuere
                            ligula varius congue cursus porta feugiat
                        </p>
                    </div>
                </div>
                {/* END SECTION TITLE */}
                <div className="row">
                    {/* DOCTOR #1 */}
                    <div className="col-md-6 col-lg-4">
                        <div
                            className="doctor-1 wow fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            {/* Doctor Photo */}
                            <div className="hover-overlay text-center">
                                {/* Photo */}
                                <img
                                    className="img-fluid"
                                    src="images/doctor-1.jpg"
                                    alt="doctor-foto"
                                />
                                <div className="item-overlay" />
                                {/* Profile Link */}
                                <div className="profile-link">
                                    <Link href="/doctor-details">
                                        <a
                                            className="btn btn-sm btn-tra-white black-hover"
                                            title
                                        >
                                            View More Info
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            {/* Doctor Meta */}
                            <div className="doctor-meta">
                                <h5 className="h5-sm blue-color">
                                    Jonathan Barnes D.M.
                                </h5>
                                <span>Chief Medical Officer</span>
                                <p className="p-sm grey-color">
                                    Donec vel sapien augue integer turpis cursus
                                    porta, mauris sed augue luctus magna dolor
                                    luctus
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* END DOCTOR #1 */}
                    {/* DOCTOR #2 */}
                    <div className="col-md-6 col-lg-4">
                        <div
                            className="doctor-1 wow fadeInUp"
                            data-wow-delay="0.6s"
                        >
                            {/* Doctor Photo */}
                            <div className="hover-overlay text-center">
                                {/* Photo */}
                                <img
                                    className="img-fluid"
                                    src="images/doctor-2.jpg"
                                    alt="doctor-foto"
                                />
                                <div className="item-overlay" />
                                {/* Profile Link */}
                                <div className="profile-link">
                                    <Link href="/doctor-details">
                                        <a
                                            className="btn btn-sm btn-tra-white black-hover"
                                            title
                                        >
                                            View More Info
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            {/* Doctor Meta */}
                            <div className="doctor-meta">
                                <h5 className="h5-sm blue-color">
                                    Hannah Harper D.M.
                                </h5>
                                <span>Anesthesiologist</span>
                                <p className="p-sm grey-color">
                                    Donec vel sapien augue integer turpis cursus
                                    porta, mauris sed augue luctus magna dolor
                                    luctus
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* END DOCTOR #2 */}
                    {/* DOCTOR #3 */}
                    <div className="col-md-6 col-lg-4">
                        <div
                            className="doctor-1 wow fadeInUp"
                            data-wow-delay="0.8s"
                        >
                            {/* Doctor Photo */}
                            <div className="hover-overlay text-center">
                                {/* Photo */}
                                <img
                                    className="img-fluid"
                                    src="images/doctor-3.jpg"
                                    alt="doctor-foto"
                                />
                                <div className="item-overlay" />
                                {/* Profile Link */}
                                <div className="profile-link">
                                    <Link href="/doctor-details">
                                        <a
                                            className="btn btn-sm btn-tra-white black-hover"
                                            title
                                        >
                                            View More Info
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            {/* Doctor Meta */}
                            <div className="doctor-meta">
                                <h5 className="h5-sm blue-color">
                                    Matthew Anderson D.M.
                                </h5>
                                <span>Cardiology</span>
                                <p className="p-sm grey-color">
                                    Donec vel sapien augue integer turpis cursus
                                    porta, mauris sed augue luctus magna dolor
                                    luctus
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* END DOCTOR #3 */}
                </div>
                {/* End row */}
                {/* ALL DOCTORS BUTTON */}
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div
                            className="all-doctors mb-40  wow fadeInUp"
                            data-wow-delay="1s"
                        >
                            <Link href="/all-doctors">
                                <a className="btn btn-blue blue-hover">
                                    Meet All Doctors
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* End container */}
        </section>
    );
};

export default AllDoctors2;
