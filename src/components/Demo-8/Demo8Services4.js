import Link from "next/link";
import React from "react";

const Demo8Services4 = () => {
    return (
        <section
            id="services-4"
            className="bg-lightgrey wide-60 services-section division"
        >
            <div className="container">
                {/* SECTION TITLE */}
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 section-title">
                        {/* Section ID */}
                        <span className="section-id lime-color">
                            The Areas of Practice
                        </span>
                        {/* Title 	*/}
                        <h3 className="h3-md steelblue-color">
                            Cosmetic &amp; Reconstructive Procedures
                        </h3>
                        {/* Text */}
                        <p>
                            Aliquam a augue suscipit, luctus neque purus ipsum
                            neque dolor primis libero at tempus, blandit posuere
                            ligula varius congue cursus porta feugiat
                        </p>
                    </div>
                </div>
                <div className="row">
                    {/* SERVICE BOX #1 */}
                    <div className="col-md-6 col-lg-3">
                        <div
                            className="sbox-4 wow fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            {/* Image */}
                            <img
                                className="img-fluid"
                                src="images/breast_procedure_700x800.jpg"
                                alt="content-image"
                            />
                            {/* Text */}
                            <div className="sbox-4-txt">
                                <h5 className="h5-md lime-color">
                                    <Link href="/service-1">
                                        <a>Breast Procedures</a>
                                    </Link>
                                </h5>
                                <p>
                                    Porta semper lacus cursus, feugiat primis
                                    ultrice in ligula risus auctor at pretium
                                    feugiat dolor integer
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* SERVICE BOX #2 */}
                    <div className="col-md-6 col-lg-3">
                        <div
                            className="sbox-4 wow fadeInUp"
                            data-wow-delay="0.6s"
                        >
                            {/* Image */}
                            <img
                                className="img-fluid"
                                src="images/body_procedure_700x800.jpg"
                                alt="content-image"
                            />
                            {/* Text */}
                            <div className="sbox-4-txt">
                                <h5 className="h5-md lime-color">
                                    <Link href="/service-1">
                                        <a>Body Procedures</a>
                                    </Link>
                                </h5>
                                <p>
                                    Porta semper lacus cursus, feugiat primis
                                    ultrice in ligula risus auctor at pretium
                                    feugiat dolor integer
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* SERVICE BOX #3 */}
                    <div className="col-md-6 col-lg-3">
                        <div
                            className="sbox-4 wow fadeInUp"
                            data-wow-delay="0.8s"
                        >
                            {/* Image */}
                            <img
                                className="img-fluid"
                                src="images/face_procedure_700x800.jpg"
                                alt="content-image"
                            />
                            {/* Text */}
                            <div className="sbox-4-txt">
                                <h5 className="h5-md lime-color">
                                    <Link href="/service-1">
                                        <a>Face Procedures</a>
                                    </Link>
                                </h5>
                                <p>
                                    Porta semper lacus cursus, feugiat primis
                                    ultrice in ligula risus auctor at pretium
                                    feugiat dolor integer
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* SERVICE BOX #4 */}
                    <div className="col-md-6 col-lg-3">
                        <div
                            className="sbox-4 wow fadeInUp"
                            data-wow-delay="1s"
                        >
                            {/* Image */}
                            <img
                                className="img-fluid"
                                src="images/rec_procedure_700x800.jpg"
                                alt="content-image"
                            />
                            {/* Text */}
                            <div className="sbox-4-txt">
                                <h5 className="h5-md lime-color">
                                    <Link href="/service-1">
                                        <a>Reconstructive</a>
                                    </Link>
                                </h5>
                                <p>
                                    Porta semper lacus cursus, feugiat primis
                                    ultrice in ligula risus auctor at pretium
                                    feugiat dolor integer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default Demo8Services4;
