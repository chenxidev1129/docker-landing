import Link from "next/link";
import React from "react";

const Demo2Info3 = () => {
    return (
        <section id="info-3" className="bg-blue info-section division">
            <div className="container">
                <div className="row d-flex align-items-center">
                    {/* INFO IMAGE */}
                    <div className="col-lg-6">
                        <div className="info-3-img text-center">
                            <img
                                className="img-fluid"
                                src="images/medical_complex_700x700.jpg"
                                alt="info-image"
                            />
                        </div>
                    </div>
                    {/* INFO TEXT */}
                    <div className="col-lg-6">
                        <div
                            className="txt-block pc-30 white-color wow fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            {/* Section ID */}
                            <span className="section-id id-color">
                                Highest Quality Care
                            </span>
                            {/* Title */}
                            <h3 className="h3-md">
                                Solutions to Complex Medical Problems
                            </h3>
                            {/* Text */}
                            <p>
                                An enim nullam tempor sapien gravida donec
                                pretium ipsum porta justo integer at odio velna
                                vitae auctor integer congue magna purus pretium
                                ligula rutrum luctus ultrice aliquam a augue
                                suscipit. Augue egestas volutpat egestas augue
                                in cubilia laoreet magna
                            </p>
                            {/* Button */}
                            <Link href="/all-services">
                                <a className="btn btn-tra-white white-hover mt-20">
                                    Find Out More
                                </a>
                            </Link>
                        </div>
                    </div>
                    {/* END CONTENT TEXT */}
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default Demo2Info3;
