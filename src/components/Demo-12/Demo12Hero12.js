import Link from "next/link";
import React from "react";

const Demo12Hero12 = () => {
    return (
        <section id="hero-12" className="bg-blue hero-section division">
            {/* HERO TEXT */}
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-lg-7">
                        <div className="hero-txt white-color">
                            {/* Title */}
                            <h5>Welcome to MedService</h5>
                            <h2>
                                We Will help you to
                                <span>become healthy</span>
                            </h2>
                            {/* CONTENT BOX #1 */}
                            <div className="box-list">
                                <div className="box-list-icon">
                                    <i className="fas fa-genderless" />
                                </div>
                                <p className="p-md">
                                    Fringilla risus nec, luctus mauris orci
                                    auctor purus euismod pretium purus undo
                                    ligula rutrum tempor sapien pretium
                                </p>
                            </div>
                            {/* CONTENT BOX #2 */}
                            <div className="box-list mb-15">
                                <div className="box-list-icon">
                                    <i className="fas fa-genderless" />
                                </div>
                                <p className="p-md">
                                    Nemo ipsam egestas volute turpis dolores ut
                                    aliquam quaerat sodales sapien undo pretium
                                    purus and feugiat
                                </p>
                            </div>
                            {/* Button */}
                            <Link href="/about-us">
                                <a className="btn btn-tra-white blue-hover">
                                    Discover More
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* End row */}
            </div>
            {/* END END HERO TEXT */}
            {/* HERO IMAGE */}
            <div className="hero-12-img" />
        </section>
    );
};

export default Demo12Hero12;
