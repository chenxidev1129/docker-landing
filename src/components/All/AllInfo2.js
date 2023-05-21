import Link from "next/link";
import React from "react";

const AllInfo2 = () => {
    return (
        <section
            id="info-2"
            className="bg-lightgrey wide-60 info-section division"
        >
            <div className="container">
                <div className="row d-flex align-items-center">
                    {/* TEXT BLOCK */}
                    <div className="col-lg-6">
                        <div
                            className="txt-block pc-30 mb-40 wow fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            {/* Section ID */}
                            <span className="section-id blue-color">
                                Our Clinic Provides
                            </span>
                            {/* Title */}
                            <h3 className="h3-md steelblue-color">
                                Complete Medical Solutions in One Place
                            </h3>
                            {/* Text */}
                            <p>
                                Porta semper lacus cursus, feugiat primis
                                ultrice in ligula risus auctor tempus feugiat
                                dolor lacinia cubilia curae integer congue leo
                                metus, eu mollislorem primis in orci integer
                                metus mollis faucibus. An enim nullam tempor
                                sapien gravida donec pretium and ipsum porta
                                justo integer at velna vitae auctor integer
                                congue a magna ipsum purus pretium ligula rutrum
                                luctus ultrice
                            </p>
                            {/* Button */}
                            <Link href="/all-doctors">
                                <a className="btn btn-blue blue-hover mt-25">
                                    Meet The Doctors
                                </a>
                            </Link>
                        </div>
                    </div>
                    {/* END TEXT BLOCK */}
                    {/* IMAGE BLOCK */}
                    <div className="col-lg-6">
                        <div
                            className="info-2-img wow fadeInUp"
                            data-wow-delay="0.6s"
                        >
                            <img
                                className="img-fluid"
                                src="images/image-04.png"
                                alt="info-image"
                            />
                        </div>
                    </div>
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default AllInfo2;
