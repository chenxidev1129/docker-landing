import React from "react";

const AllStatistic3 = () => {
    return (
        <div id="statistic-3" className="wide-60 statistic-section division">
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
                                Best Practices
                            </span>
                            {/* Title */}
                            <h3 className="h3-md steelblue-color">
                                Clinic with Innovative Approach to Treatment
                            </h3>
                            {/* Text */}
                            <p>
                                Porta semper lacus cursus, feugiat primis
                                ultrice in ligula risus auctor tempus feugia
                                dolor lacinia cubilia curae integer congue leo
                                metus, eu mollislorem primis in orci integer
                                metus mollis faucibus. An enim nullam tempor
                                sapien gravida donec pretium
                            </p>
                            {/* Statistic Holder */}
                            <div className="statistic-holder">
                                <div className="row">
                                    {/* STATISTIC BLOCK #1 */}
                                    <div className="col-sm-4">
                                        <div className="statistic-block icon-sm">
                                            {/* Icon  */}
                                            <span className="flaticon-062-cardiogram-3 blue-color" />
                                            {/* Text */}
                                            <h5 className="statistic-number">
                                                9,
                                                <span className="count-element">
                                                    632
                                                </span>
                                            </h5>
                                            <p>Happy Patients</p>
                                        </div>
                                    </div>
                                    {/* STATISTIC BLOCK #2 */}
                                    <div className="col-sm-4">
                                        <div className="statistic-block icon-sm">
                                            {/* Icon  */}
                                            <span className="flaticon-137-doctor blue-color" />
                                            {/* Text */}
                                            <h5 className="statistic-number">
                                                <span className="count-element">
                                                    178
                                                </span>
                                            </h5>
                                            <p>Qualified Doctors</p>
                                        </div>
                                    </div>
                                    {/* STATISTIC BLOCK #3 */}
                                    <div className="col-sm-4">
                                        <div className="statistic-block icon-sm">
                                            {/* Icon  */}
                                            <span className="flaticon-065-hospital-bed blue-color" />
                                            {/* Text */}
                                            <h5 className="statistic-number">
                                                <span className="count-element">
                                                    864
                                                </span>
                                            </h5>
                                            <p>Clinic Rooms</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Statistic Holder */}
                        </div>
                    </div>
                    {/* END TEXT BLOCK */}
                    {/* STATISTIC IMAGE */}
                    <div className="col-lg-6">
                        <div
                            className="statistic-img text-center mb-40 wow fadeInUp"
                            data-wow-delay="0.6s"
                        >
                            <img
                                className="img-fluid"
                                src="images/image-04.png"
                                alt="statistic-image"
                            />
                        </div>
                    </div>
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </div>
    );
};

export default AllStatistic3;
