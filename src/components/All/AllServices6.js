import React from "react";

const AllServices6 = () => {
    return (
        <section
            id="services-6"
            className="bg-blue wide-60 services-section division"
        >
            <div className="container white-color">
                {/* SECTION TITLE */}
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 section-title">
                        {/* Title 	*/}
                        <h3 className="h3-md">Our Core Dental Services</h3>
                        {/* Text */}
                        <p>
                            Aliquam a augue suscipit, luctus neque purus ipsum
                            neque dolor primis libero at tempus, blandit posuere
                            ligula varius congue cursus porta feugiat
                        </p>
                    </div>
                </div>
                <div className="row d-flex align-items-center">
                    {/* LEFT SIDE CONTENT */}
                    <div className="col-md-6 col-lg-4">
                        {/* SERVICE BOX #1 */}
                        <div
                            className="sbox-6 pr-30 text-right wow fadeInRight"
                            data-wow-delay="0.4s"
                        >
                            {/* Text */}
                            <h5 className="h5-md">General Dentistry</h5>
                            <p>
                                Semper a augue suscipit, luctus neque purus
                                ipsum neque dolor primis libero tempus
                            </p>
                        </div>
                        {/* SERVICE BOX #2 */}
                        <div
                            className="sbox-6 pr-30 mr-30 text-right wow fadeInRight"
                            data-wow-delay="0.6s"
                        >
                            {/* Text */}
                            <h5 className="h5-sm">Dental Checkups</h5>
                            <p>
                                Semper a augue suscipit, luctus neque purus
                                ipsum a dolor primis tempus
                            </p>
                        </div>
                        {/* SERVICE BOX #2 */}
                        <div
                            className="sbox-6 pr-30 text-right wow fadeInRight"
                            data-wow-delay="0.8s"
                        >
                            {/* Text */}
                            <h5 className="h5-md">Cosmetic Dental Services</h5>
                            <p>
                                Semper a augue suscipit, luctus neque purus
                                ipsum neque dolor primis libero tempus
                            </p>
                        </div>
                    </div>
                    {/* SERVICE IMAGE */}
                    <div className="col-lg-4 s6-img">
                        <div
                            className="sbox-6-img mb-40 text-center wow fadeInUp"
                            data-wow-delay="0.8s"
                        >
                            <img
                                className="img-fluid"
                                src="images/tooth.png"
                                alt="services-image"
                            />
                        </div>
                    </div>
                    {/* RIGHT SIDE CONTENT */}
                    <div className="col-md-6 col-lg-4">
                        {/* SERVICE BOX #4 */}
                        <div
                            className="sbox-6 pl-30 wow fadeInLeft"
                            data-wow-delay="0.4s"
                        >
                            {/* Text */}
                            <h5 className="h5-md">Gum Therapy</h5>
                            <p>
                                Semper a augue suscipit, luctus neque purus
                                ipsum neque dolor primis libero tempus
                            </p>
                        </div>
                        {/* SERVICE BOX #5 */}
                        <div
                            className="sbox-6 pl-30 ml-30 wow fadeInLeft"
                            data-wow-delay="0.6s"
                        >
                            {/* Text */}
                            <h5 className="h5-md">Wisdom Teeth Removal</h5>
                            <p>
                                Semper a augue suscipit, luctus neque purus
                                ipsum a dolor primis tempus
                            </p>
                        </div>
                        {/* SERVICE BOX #6 */}
                        <div
                            className="sbox-6 pl-30 wow fadeInLeft"
                            data-wow-delay="0.8s"
                        >
                            {/* Text */}
                            <h5 className="h5-md">Dental Implants</h5>
                            <p>
                                Semper a augue suscipit, luctus neque purus
                                ipsum neque dolor primis libero tempus
                            </p>
                        </div>
                    </div>
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default AllServices6;
