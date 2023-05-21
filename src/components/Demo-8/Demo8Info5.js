import Link from "next/link";
import React from "react";

const Demo8Info5 = () => {
    return (
        <section
            id="info-5"
            className="bg-scroll wide-100 info-section division"
        >
            <div className="container">
                <div className="row d-flex align-items-center">
                    {/* TEXT BLOCK */}
                    <div className="col-md-8 col-lg-7 col-xl-6 offset-md-4 offset-lg-5 offset-xl-6">
                        <div className="txt-block pc-30 white-color">
                            {/* Section ID */}
                            <span className="section-id id-color">
                                Highest Quality Care
                            </span>
                            {/* Title */}
                            <h3 className="h3-md">
                                Solutions to Complex Medical Problems
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
                                <a className="btn btn-tra-white blue-hover mt-25">
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

export default Demo8Info5;
