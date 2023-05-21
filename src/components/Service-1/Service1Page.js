import Link from "next/link";
import React from "react";

const Service1Page = () => {
    return (
        <div
            id="service-page"
            className="wide-60 service-page-section division"
        >
            <div className="container">
                {/* TEXT */}
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <div className="s1-page content-block text-center">
                            {/* Title */}
                            <h3 className="h3-xl blue-color">
                                Magnetic Resonance Imaging
                            </h3>
                            <h4 className="h4-md blue-color">
                                Maecenas gravida porttitor nunc, magna luctus
                                tempor viverra
                            </h4>
                            {/* Text */}
                            <p className="p-lg">
                                Neque rhoncus ipsum tempor varius iaculis at
                                luctus, neque rhoncus tempor varius cubilia
                            </p>
                            {/* Text */}
                            <p className="p-lg">
                                Ligula risus auctor tempus dolor feugiat, felis
                                lacinia risus interdum auctor id viverra dolor
                                iaculis luctus bibendum luctus neque rhoncus
                                ipsum tempor varius iaculis at luctus neque
                                rhoncus ipsum tempor varius cubilia laoreet
                                augue vitae laoreet augue undo cubilia feugiat
                                suscipit emper lacus
                            </p>
                        </div>
                    </div>
                </div>
                {/* End row */}
                {/* IMAGE */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="content-block-img text-center">
                            <img
                                className="img-fluid"
                                src="images/mri_1000x500.jpg"
                                alt="content-image"
                            />
                        </div>
                    </div>
                </div>
                {/* TEXT */}
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <div className="s1-page content-block text-center mb-40">
                            {/* Text */}
                            <p className="p-lg">
                                Ligula risus auctor tempus dolor feugiat, felis
                                lacinia risus interdum auctor id viverra dolor
                                iaculis luctus bibendum luctus neque rhoncus
                                ipsum tempor varius iaculis at luctus neque
                                rhoncus ipsum tempor varius cubilia laoreet
                                augue vitae laoreet augue undo cubilia feugiat
                                suscipit emper lacus cursus
                            </p>
                            {/* Text */}
                            <p className="p-lg">
                                An enim nullam tempor sapien gravida donec enim
                                ipsum blandit porta justo integer odio velna
                                vitae auctor integer congue magna at pretium
                                purus pretium ligula rutrum vitae laoreet augue
                                posuere and curae integer congue leo metus
                                mollis primis and mauris iaculis luctus bibendum
                                neque
                            </p>
                            {/* Button */}
                            <Link href="/appointment">
                                <a className="btn btn-md btn-blue blue-hover">
                                    Book an Appointment
                                </a>
                            </Link>
                            {/* Text */}
                            <h4 className="h4-lg">
                                Service Cost:
                                <span className="blue-color">$145.00</span>
                            </h4>
                            <h5 className="h5-md">Duration: 0h 23m</h5>
                        </div>
                    </div>
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </div>
    );
};

export default Service1Page;
