import Link from "next/link";
import React from "react";

const AllInfo7 = () => {
    return (
        <section id="info-7" className="bg-lightgrey info-section division">
            {/* TEXT BLOCK */}
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6">
                        <div
                            className="txt-block pc-30 wow fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            {/* Section ID */}
                            <span className="section-id blue-color">
                                Professional Care
                            </span>
                            {/* Title */}
                            <h3 className="h3-md">
                                Complete Medical Solutions in One Place
                            </h3>
                            {/* CONTENT BOX #1 */}
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
                            {/* CONTENT BOX #2 */}
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
                            {/* CONTENT BOX #3 */}
                            <div className="box-list">
                                <div className="box-list-icon">
                                    <i className="fas fa-genderless" />
                                </div>
                                <p>
                                    Nemo ipsam egestas volute turpis dolores ut
                                    aliquam quaerat sodales sapien undo pretium
                                    purus feugiat dolor impedit magna purus
                                    pretium gravida donec ligula massa in
                                    faucibus
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
                </div>
                {/* End row */}
            </div>
            {/* END TEXT BLOCK */}
            {/* INFO-7 IMAGE */}
            <div className="info-7-img text-center" />
        </section>
    );
};

export default AllInfo7;
