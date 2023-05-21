import Link from "next/link";
import React from "react";

const AllInfo1 = () => {
    return (
        <section id="info-1" className="wide-60 info-section division">
            <div className="container">
                <div className="row d-flex align-items-center">
                    {/* IMAGE BLOCK */}
                    <div className="col-lg-6">
                        <div
                            className="info-1-img text-center mb-40 wow fadeInUp"
                            data-wow-delay="0.6s"
                        >
                            <img
                                className="img-fluid"
                                src="images/image-11.png"
                                alt="info-image"
                            />
                        </div>
                    </div>
                    {/* TEXT BLOCK */}
                    <div className="col-lg-6">
                        <div
                            className="txt-block pc-30 mb-40 wow fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            {/* Section ID */}
                            <span className="section-id blue-color">
                                Welcome to MedService
                            </span>
                            {/* Title */}
                            <h3 className="h3-md steelblue-color">
                                Clinic with Innovative Approach to Treatment
                            </h3>
                            {/* CONTENT BOX #1 */}
                            <div className="box-list">
                                <div className="box-list-icon">
                                    <i className="fas fa-genderless" />
                                </div>
                                <p>
                                    Nemo ipsam egestas volute turpis dolores ut
                                    aliquam quaerat sodales sapien undo pretium
                                    purus feugiat dolor impedit
                                </p>
                            </div>
                            {/* CONTENT BOX #2 */}
                            <div className="box-list">
                                <div className="box-list-icon">
                                    <i className="fas fa-genderless" />
                                </div>
                                <p>
                                    Maecenas gravida porttitor nunc, quis
                                    vehicula magna luctus tempor. Quisque vel
                                    laoreet turpis urna augue, viverra a augue
                                    eget, dictum tempor diam pulvinar massa
                                    purus nulla
                                </p>
                            </div>
                            {/* Button */}
                            <Link href="/all-doctors">
                                <a className="btn btn-blue blue-hover mt-25">
                                    Meet The Doctors
                                </a>
                            </Link>
                        </div>
                    </div>
                    {/* END TEXT BLOCK */}
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default AllInfo1;
