import React from "react";

const Demo6Pricing1 = () => {
    return (
        <section id="pricing-1" className="wide-60 pricing-section division">
            <div className="container">
                {/* SECTION TITLE */}
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 section-title">
                        {/* Title 	*/}
                        <h3 className="h3-md steelblue-color">
                            Best Quality Medical Treatment
                        </h3>
                        {/* Text */}
                        <p>
                            Aliquam a augue suscipit, luctus neque purus ipsum
                            neque dolor primis libero at tempus, blandit posuere
                            ligula varius congue cursus porta feugiat
                        </p>
                    </div>
                </div>
                {/* PRICING TABLES */}
                <div className="row pricing-row">
                    {/* PRICING TABLE #1 */}
                    <div className="col-lg-4">
                        <div className="pricing-table icon-xl">
                            {/* Icon */}
                            <span className="flaticon-104-blood-sample blue-color" />
                            {/* Title */}
                            <h5 className="h5-lg">Blood Test</h5>
                            {/* Plan Price  */}
                            <div className="pricing-plan">
                                <sup className="steelblue-color">$</sup>
                                <span className="price steelblue-color">
                                    45
                                </span>
                                <p className="p-md">monthly</p>
                            </div>
                            {/* Pricing Plan Features  */}
                            <ul className="features">
                                <li>Medical Specialties</li>
                                <li>Medical Consultation</li>
                                <li>Investigations</li>
                                <li>Medical Treatments</li>
                            </ul>
                            {/* Pricing Table Button  */}
                            <a
                                href="#"
                                className="btn btn-md btn-tra-black blue-hover"
                            >
                                Select Plan
                            </a>
                        </div>
                    </div>
                    {/* END PRICING TABLE #1 */}
                    {/* PRICING TABLE #2 */}
                    <div className="col-lg-4">
                        <div className="pricing-table icon-xl">
                            {/* Icon */}
                            <span className="flaticon-072-hospital-5 blue-color" />
                            {/* Title */}
                            <h5 className="h5-lg">Medical Care</h5>
                            {/* Plan Price  */}
                            <div className="pricing-plan">
                                <sup className="steelblue-color">$</sup>
                                <span className="price steelblue-color">
                                    350
                                </span>
                                <p className="p-md">monthly</p>
                            </div>
                            {/* Pricing Plan Features  */}
                            <ul className="features">
                                <li>Medical Specialties</li>
                                <li>Medical Consultation</li>
                                <li>Investigations</li>
                                <li>Medical Treatments</li>
                            </ul>
                            {/* Pricing Table Button  */}
                            <a
                                href="#"
                                className="btn btn-md btn-blue blue-hover"
                            >
                                Select Plan
                            </a>
                        </div>
                    </div>
                    {/* END PRICING TABLE #1 */}
                    {/* PRICING TABLE #3 */}
                    <div className="col-lg-4">
                        <div className="pricing-table icon-xl">
                            {/* Icon */}
                            <span className="flaticon-008-ambulance-6 blue-color" />
                            {/* Title */}
                            <h5 className="h5-lg">Emergency Care</h5>
                            {/* Plan Price  */}
                            <div className="pricing-plan">
                                <sup className="steelblue-color">$</sup>
                                <span className="price steelblue-color">
                                    175
                                </span>
                                <p className="p-md">monthly</p>
                            </div>
                            {/* Pricing Plan Features  */}
                            <ul className="features">
                                <li>Medical Specialties</li>
                                <li>Medical Consultation</li>
                                <li>Investigations</li>
                                <li>Medical Treatments</li>
                            </ul>
                            {/* Pricing Table Button  */}
                            <a
                                href="#"
                                className="btn btn-md btn-tra-black blue-hover"
                            >
                                Select Plan
                            </a>
                        </div>
                    </div>
                    {/* END PRICING TABLE #3 */}
                </div>
                {/* END PRICING TABLES */}
                {/* ALL PRICING TABLES BUTTON */}
                <div className="row">
                    <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2 text-center">
                        <div className="all-pricing-btn mb-40">
                            {/* Price Notice */}
                            <p>
                                <span>Note!</span> Feugiat eros, ac tincidunt
                                ligula massa in faucibus orci luctus et ultrices
                                posuere cubilia and curae integer congue leo
                                metus mollis primis and mauris lectus laoreet
                                tempor
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* End container */}
        </section>
    );
};

export default Demo6Pricing1;
