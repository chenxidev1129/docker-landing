import Link from "next/link";
import React from "react";

const Demo12Banner2 = () => {
    return (
        <section id="banner-2" className="pt-80 banner-section division">
            <div className="bg-scroll bg-inner bg-image division">
                <div className="container white-color">
                    <div className="row d-flex align-items-center">
                        {/* CALL TO ACTION IMAGE */}
                        <div className="col-lg-5">
                            <div className="banner-2-img">
                                <img
                                    className="img-fluid"
                                    src="images/image-05.png"
                                    alt="banner-image"
                                />
                            </div>
                        </div>
                        {/* BANNER TEXT */}
                        <div className="col-lg-6 offset-lg-1">
                            <div
                                className="banner-txt pc-30 wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                {/* Section ID */}
                                <span className="section-id id-color">
                                    Modern Medicine
                                </span>
                                {/* Title  */}
                                <h3 className="h3-lg">
                                    Better Technologies for Better Healthcare
                                </h3>
                                {/* Text */}
                                <p>
                                    Egestas magna egestas magna ipsum vitae
                                    purus ipsum primis in cubilia laoreet augue
                                    egestas suscipit lectus mauris lectus
                                    laoreet gestas neque undo luctus feugiat.
                                    Aliquam a augue suscipit
                                </p>
                                {/* Button */}
                                <Link href="/all-doctors">
                                    <a className="btn btn-tra-white blue-hover">
                                        View Our Doctors
                                    </a>
                                </Link>
                            </div>
                        </div>
                        {/* END BANNER TEXT */}
                    </div>
                    {/* End row */}
                </div>
                {/* End container */}
            </div>
            {/* End Inner Background */}
        </section>
    );
};

export default Demo12Banner2;
