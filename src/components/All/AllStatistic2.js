import React from "react";

const AllStatistic2 = () => {
    return (
        <div
            id="statistic-2"
            className="bg-lightgrey statistic-section division"
        >
            <div className="container">
                <div className="row">
                    {/* STATISTIC BLOCK #1 */}
                    <div className="col-md-6 col-lg-3">
                        <div
                            className="statistic-block icon-sm wow fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            {/* Icon  */}
                            <span className="flaticon-062-cardiogram-3 blue-color" />
                            {/* Text */}
                            <h5 className="statistic-number">
                                9,<span className="count-element">632</span>
                            </h5>
                            <p className="txt-400">Happy Patients</p>
                        </div>
                    </div>
                    {/* STATISTIC BLOCK #2 */}
                    <div className="col-md-6 col-lg-3">
                        <div
                            className="statistic-block icon-sm wow fadeInUp"
                            data-wow-delay="0.6s"
                        >
                            {/* Icon  */}
                            <span className="flaticon-137-doctor blue-color" />
                            {/* Text */}
                            <h5 className="statistic-number">
                                <span className="count-element">178</span>
                            </h5>
                            <p className="txt-400">Qualified Doctors</p>
                        </div>
                    </div>
                    {/* STATISTIC BLOCK #3 */}
                    <div className="col-md-6 col-lg-3">
                        <div
                            className="statistic-block icon-sm wow fadeInUp"
                            data-wow-delay="0.8s"
                        >
                            {/* Icon  */}
                            <span className="flaticon-065-hospital-bed blue-color" />
                            {/* Text */}
                            <h5 className="statistic-number">
                                <span className="count-element">864</span>
                            </h5>
                            <p className="txt-400">Clinic Rooms</p>
                        </div>
                    </div>
                    {/* STATISTIC BLOCK #4 */}
                    <div className="col-md-6 col-lg-3">
                        <div
                            className="statistic-block icon-sm wow fadeInUp"
                            data-wow-delay="1s"
                        >
                            {/* Icon  */}
                            <span className="flaticon-040-placeholder blue-color" />
                            {/* Text */}
                            <h5 className="statistic-number">
                                <span className="count-element">473</span>
                            </h5>
                            <p className="txt-400">Local Partners</p>
                        </div>
                    </div>
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </div>
    );
};

export default AllStatistic2;
