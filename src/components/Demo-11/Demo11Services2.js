import Link from "next/link";
import React from "react";

const Demo11Services2 = () => {
    return (
        <section id="services-2" className="wide-70 services-section division">
            <div className="container">
                {/* SECTION TITLE */}
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 section-title">
                        {/* Title 	*/}
                        <h3 className="h3-md steelblue-color">
                            Choose Department
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
                    <div className="col-sm-6 col-lg-3">
                        <div
                            className="sbox-2 wow fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            <Link href="/department-single">
                                <a>
                                    {/* Icon  */}
                                    <div className="sbox-2-icon icon-xl">
                                        <span className="flaticon-083-stethoscope" />
                                    </div>
                                    {/* Title */}
                                    <h5 className="h5-sm sbox-2-title steelblue-color">
                                        Pediatrics
                                    </h5>
                                </a>
                            </Link>
                        </div>
                    </div>
                    {/* SERVICE BOX #2 */}
                    <div className="col-sm-6 col-lg-3">
                        <div
                            className="sbox-2 wow fadeInUp"
                            data-wow-delay="0.6s"
                        >
                            <Link href="/department-single">
                                <a>
                                    {/* Icon  */}
                                    <div className="sbox-2-icon icon-xl">
                                        <span className="flaticon-047-head" />
                                    </div>
                                    {/* Title */}
                                    <h5 className="h5-sm sbox-2-title steelblue-color">
                                        Neurology
                                    </h5>
                                </a>
                            </Link>
                        </div>
                    </div>
                    {/* SERVICE BOX #3 */}
                    <div className="col-sm-6 col-lg-3">
                        <div
                            className="sbox-2 wow fadeInUp"
                            data-wow-delay="0.8s"
                        >
                            <Link href="/department-single">
                                <a>
                                    {/* Icon  */}
                                    <div className="sbox-2-icon icon-xl">
                                        <span className="flaticon-015-blood-donation-1" />
                                    </div>
                                    {/* Title */}
                                    <h5 className="h5-sm sbox-2-title steelblue-color">
                                        Haematology
                                    </h5>
                                </a>
                            </Link>
                        </div>
                    </div>
                    {/* SERVICE BOX #4 */}
                    <div className="col-sm-6 col-lg-3">
                        <div
                            className="sbox-2 wow fadeInUp"
                            data-wow-delay="1s"
                        >
                            <Link href="/department-single">
                                <a>
                                    {/* Icon  */}
                                    <div className="sbox-2-icon icon-xl">
                                        <span className="flaticon-048-lungs" />
                                    </div>
                                    {/* Title */}
                                    <h5 className="h5-sm sbox-2-title steelblue-color">
                                        X-Ray Diagnostic
                                    </h5>
                                </a>
                            </Link>
                        </div>
                    </div>
                    {/* SERVICE BOX #5 */}
                    <div className="col-sm-6 col-lg-3">
                        <div
                            className="sbox-2 wow fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            <Link href="/department-single">
                                <a>
                                    {/* Icon  */}
                                    <div className="sbox-2-icon icon-xl">
                                        <span className="flaticon-060-cardiogram-4" />
                                    </div>
                                    {/* Title */}
                                    <h5 className="h5-sm sbox-2-title steelblue-color">
                                        Cardiology
                                    </h5>
                                </a>
                            </Link>
                        </div>
                    </div>
                    {/* SERVICE BOX #6 */}
                    <div className="col-sm-6 col-lg-3">
                        <div
                            className="sbox-2 wow fadeInUp"
                            data-wow-delay="0.6s"
                        >
                            <Link href="/department-single">
                                <a>
                                    {/* Icon  */}
                                    <div className="sbox-2-icon icon-xl">
                                        <span className="flaticon-031-scanner" />
                                    </div>
                                    {/* Title */}
                                    <h5 className="h5-sm sbox-2-title steelblue-color">
                                        MRI
                                    </h5>
                                </a>
                            </Link>
                        </div>
                    </div>
                    {/* SERVICE BOX #7 */}
                    <div className="col-sm-6 col-lg-3">
                        <div
                            className="sbox-2 wow fadeInUp"
                            data-wow-delay="0.8s"
                        >
                            <Link href="/department-single">
                                <a>
                                    {/* Icon  */}
                                    <div className="sbox-2-icon icon-xl">
                                        <span className="flaticon-076-microscope" />
                                    </div>
                                    {/* Title */}
                                    <h5 className="h5-sm sbox-2-title steelblue-color">
                                        Laboratory Services
                                    </h5>
                                </a>
                            </Link>
                        </div>
                    </div>
                    {/* SERVICE BOX #8 */}
                    <div className="col-sm-6 col-lg-3">
                        <div
                            className="sbox-2 wow fadeInUp"
                            data-wow-delay="1s"
                        >
                            <Link href="/department-single">
                                <a>
                                    {/* Icon  */}
                                    <div className="sbox-2-icon icon-xl">
                                        <span className="flaticon-068-ambulance-3" />
                                    </div>
                                    {/* Title */}
                                    <h5 className="h5-sm sbox-2-title steelblue-color">
                                        Emergency Help
                                    </h5>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default Demo11Services2;
