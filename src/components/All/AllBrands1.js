import React from "react";

const AllBrands1 = () => {
    return (
        <section id="banner-1" className="bg-fixed banner-section division">
            <div className="container">
                <div className="row ">
                    {/* BANNER TEXT */}
                    <div className="col-md-8 col-lg-6">
                        <div
                            className="banner-txt wow fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            {/* Title  */}
                            <h2 className="h2-md">Discover Yourself</h2>
                            <h2 className="h2-md">Through Diagnostic</h2>
                            {/* Text */}
                            <p>
                                Egestas magna egestas magna ipsum vitae purus
                                ipsum primis in cubilia laoreet augue egestas
                                suscipit at lectus mauris lectus laoreet gestas
                                neque undo luctus feugiat an augue suscipit
                                pretium
                            </p>
                            {/* Banner Details */}
                            <div className="banner-details">
                                <span>Service Cost From:</span>
                                <h5 className="h5-md blue-color">$39.99</h5>
                                <p className="p-md">* Duration From: 0h 25m</p>
                            </div>
                        </div>
                    </div>
                    {/* END BANNER TEXT */}
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default AllBrands1;
