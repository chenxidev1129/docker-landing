import React from "react";

const AllBanner1 = () => {
    return (
        <div id="brands-1" className="bg-lightgrey brands-section division">
            <div className="container">
                {/* TEXT */}
                <div className="row">
                    <div className="col-md-12 text-center mb-10">
                        <p>
                            We partner with companies of all sizes, all around
                            the world
                        </p>
                    </div>
                </div>
                {/* BRANDS HOLDER */}
                <div className="row brands-holder">
                    {/* BRAND LOGO IMAGE */}
                    <div className="col-sm-4 col-lg-2">
                        <div className="brand-logo">
                            <img
                                className="img-fluid"
                                src="images/brand-1.png"
                                alt="brand-logo"
                            />
                        </div>
                    </div>
                    {/* BRAND LOGO IMAGE */}
                    <div className="col-sm-4 col-lg-2">
                        <div className="brand-logo">
                            <img
                                className="img-fluid"
                                src="images/brand-2.png"
                                alt="brand-logo"
                            />
                        </div>
                    </div>
                    {/* BRAND LOGO IMAGE */}
                    <div className="col-sm-4 col-lg-2">
                        <div className="brand-logo">
                            <img
                                className="img-fluid"
                                src="images/brand-3.png"
                                alt="brand-logo"
                            />
                        </div>
                    </div>
                    {/* BRAND LOGO IMAGE */}
                    <div className="col-sm-4 col-lg-2">
                        <div className="brand-logo">
                            <img
                                className="img-fluid"
                                src="images/brand-4.png"
                                alt="brand-logo"
                            />
                        </div>
                    </div>
                    {/* BRAND LOGO IMAGE */}
                    <div className="col-sm-4 col-lg-2">
                        <div className="brand-logo">
                            <img
                                className="img-fluid"
                                src="images/brand-5.png"
                                alt="brand-logo"
                            />
                        </div>
                    </div>
                    {/* BRAND LOGO IMAGE */}
                    <div className="col-sm-4 col-lg-2">
                        <div className="brand-logo">
                            <img
                                className="img-fluid"
                                src="images/brand-6.png"
                                alt="brand-logo"
                            />
                        </div>
                    </div>
                </div>
                {/* END BRANDS HOLDER */}
            </div>
            {/* End container */}
        </div>
    );
};

export default AllBanner1;
