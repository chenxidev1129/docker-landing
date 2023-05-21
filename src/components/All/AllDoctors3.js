import Link from "next/link";
import React from "react";

const AllDoctors3 = () => {
    return (
        <section
            id="doctors-3"
            className="bg-lightgrey wide-60 doctors-section division"
        >
            <div className="container">
                {/* SECTION TITLE */}
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 section-title">
                        {/* Title 	*/}
                        <h3 className="h3-md steelblue-color-color">
                            Meet Our Professionals
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
                        <div className="doctor-2">
                            {/* Doctor Photo */}
                            <div className="hover-overlay">
                                <img
                                    className="img-fluid"
                                    src="images/doctor-1.jpg"
                                    alt="doctor-foto"
                                />
                            </div>
                            {/* Doctor Meta */}
                            <div className="doctor-meta">
                                <h5 className="h5-xs blue-color">
                                    Jonathan Barnes D.M.
                                </h5>
                                <span>Chief Medical Officer</span>
                                {/* Button */}
                                <Link href="/doctor-details">
                                    <a
                                        className="btn btn-sm btn-blue blue-hover mt-15"
                                        title
                                    >
                                        View More Info
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* END DOCTOR #1 */}
                    {/* DOCTOR #2 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="doctor-2">
                            {/* Doctor Photo */}
                            <div className="hover-overlay">
                                <img
                                    className="img-fluid"
                                    src="images/doctor-2.jpg"
                                    alt="doctor-foto"
                                />
                            </div>
                            {/* Doctor Meta */}
                            <div className="doctor-meta">
                                <h5 className="h5-xs blue-color">
                                    Hannah Harper D.M.
                                </h5>
                                <span>Anesthesiologist</span>
                                {/* Button */}
                                <Link href="/doctor-details">
                                    <a
                                        className="btn btn-sm btn-blue blue-hover mt-15"
                                        title
                                    >
                                        View More Info
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* END DOCTOR #2 */}
                    {/* DOCTOR #3 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="doctor-2">
                            {/* Doctor Photo */}
                            <div className="hover-overlay">
                                <img
                                    className="img-fluid"
                                    src="images/doctor-3.jpg"
                                    alt="doctor-foto"
                                />
                            </div>
                            {/* Doctor Meta */}
                            <div className="doctor-meta">
                                <h5 className="h5-xs blue-color">
                                    Matthew Anderson D.M.
                                </h5>
                                <span>Cardiology</span>
                                {/* Button */}
                                <Link href="/doctor-details">
                                    <a
                                        className="btn btn-sm btn-blue blue-hover mt-15"
                                        title
                                    >
                                        View More Info
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* END DOCTOR #3 */}
                    {/* DOCTOR #4 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="doctor-2">
                            {/* Doctor Photo */}
                            <div className="hover-overlay">
                                <img
                                    className="img-fluid"
                                    src="images/doctor-4.jpg"
                                    alt="doctor-foto"
                                />
                            </div>
                            {/* Doctor Meta */}
                            <div className="doctor-meta">
                                <h5 className="h5-xs blue-color">
                                    Megan Coleman D.M.
                                </h5>
                                <span>Neurosurgeon</span>
                                {/* Button */}
                                <Link href="/doctor-details">
                                    <a
                                        className="btn btn-sm btn-blue blue-hover mt-15"
                                        title
                                    >
                                        View More Info
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* END DOCTOR #4 */}
                    {/* DOCTOR #5 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="doctor-2">
                            {/* Doctor Photo */}
                            <div className="hover-overlay">
                                <img
                                    className="img-fluid"
                                    src="images/doctor-5.jpg"
                                    alt="doctor-foto"
                                />
                            </div>
                            {/* Doctor Meta */}
                            <div className="doctor-meta">
                                <h5 className="h5-xs blue-color">
                                    Robert Peterson D.M.
                                </h5>
                                <span>Allergist</span>
                                {/* Button */}
                                <Link href="/doctor-details">
                                    <a
                                        className="btn btn-sm btn-blue blue-hover mt-15"
                                        title
                                    >
                                        View More Info
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* END DOCTOR #5 */}
                    {/* DOCTOR #6 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="doctor-2">
                            {/* Doctor Photo */}
                            <div className="hover-overlay">
                                <img
                                    className="img-fluid"
                                    src="images/doctor-6.jpg"
                                    alt="doctor-foto"
                                />
                            </div>
                            {/* Doctor Meta */}
                            <div className="doctor-meta">
                                <h5 className="h5-xs blue-color">
                                    Joshua Elledge D.M.
                                </h5>
                                <span>Orthopaedics</span>
                                {/* Button */}
                                <Link href="/doctor-details">
                                    <a
                                        className="btn btn-sm btn-blue blue-hover mt-15"
                                        title
                                    >
                                        View More Info
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* END DOCTOR #6 */}
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default AllDoctors3;
