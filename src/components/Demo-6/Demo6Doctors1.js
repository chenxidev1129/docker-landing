import Link from "next/link";
import React from "react";

const Demo6Doctors1 = () => {
    return (
        <section id="doctors-1" className="wide-40 doctors-section division">
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
                    <div className="col-md-6 col-lg-3">
                        <div className="doctor-1">
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
                                    <Link href="/doctor-1">
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
                                <h5 className="h5-sm steelblue-color">
                                    Jonathan Barnes D.M.
                                </h5>
                                <span className="blue-color">
                                    Chief Medical Officer
                                </span>
                                <p className="p-sm grey-color">
                                    Donec vel sapien augue integer turpis cursus
                                    porta, mauris sed augue luctus magna dolor
                                    luctus ipsum neque
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* END DOCTOR #1 */}
                    {/* DOCTOR #2 */}
                    <div className="col-md-6 col-lg-3">
                        <div className="doctor-1">
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
                                    <Link href="/doctor-2">
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
                                <h5 className="h5-sm steelblue-color">
                                    Hannah Harper D.M.
                                </h5>
                                <span className="blue-color">
                                    Anesthesiologist
                                </span>
                                <p className="p-sm grey-color">
                                    Donec vel sapien augue integer turpis cursus
                                    porta, mauris sed augue luctus magna dolor
                                    luctus ipsum neque
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* END DOCTOR #2 */}
                    {/* DOCTOR #3 */}
                    <div className="col-md-6 col-lg-3">
                        <div className="doctor-1">
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
                                    <Link href="/doctor-1">
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
                                <h5 className="h5-sm steelblue-color">
                                    Matthew Anderson D.M.
                                </h5>
                                <span className="blue-color">Cardiology</span>
                                <p className="p-sm grey-color">
                                    Donec vel sapien augue integer turpis cursus
                                    porta, mauris sed augue luctus magna dolor
                                    luctus ipsum neque
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* END DOCTOR #3 */}
                    {/* DOCTOR #4 */}
                    <div className="col-md-6 col-lg-3">
                        <div className="doctor-1">
                            {/* Doctor Photo */}
                            <div className="hover-overlay text-center">
                                {/* Photo */}
                                <img
                                    className="img-fluid"
                                    src="images/doctor-4.jpg"
                                    alt="doctor-foto"
                                />
                                <div className="item-overlay" />
                                {/* Profile Link */}
                                <div className="profile-link">
                                    <Link href="/doctor-2">
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
                                <h5 className="h5-sm steelblue-color">
                                    Megan Coleman D.M.
                                </h5>
                                <span className="blue-color">Neurosurgeon</span>
                                <p className="p-sm grey-color">
                                    Donec vel sapien augue integer turpis cursus
                                    porta, mauris sed augue luctus magna dolor
                                    luctus ipsum neque
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* END DOCTOR #4 */}
                </div>
                {/* End row */}
                {/* ALL DOCTORS BUTTON */}
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="all-doctors mb-40">
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

export default Demo6Doctors1;
