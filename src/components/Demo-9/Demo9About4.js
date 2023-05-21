import React from "react";

const Demo9About4 = () => {
    return (
        <section id="about-4" className="wide-60 about-section division">
            <div className="container">
                <div className="row">
                    {/* ABOUT BOX #1 */}
                    <div className="col-lg-4">
                        <div
                            className="abox-4 mb-40 wow fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            {/* Image */}
                            <img
                                className="img-fluid"
                                src="images/quality_care_800x600.jpg"
                                alt="about-image"
                            />
                            {/* Text */}
                            <div className="abox-4-txt">
                                {/* Title */}
                                <h5 className="h5-xs steelblue-color">
                                    <a href="#">Highest Quality Care</a>
                                </h5>
                                {/* Text */}
                                <p>
                                    Porta semper lacus cursus, feugiat primis
                                    ultrice ligula risus auctor tempus feugiat
                                    dolor lacinia cursus nulla vitae massa
                                    placerat at neque purus ultrice
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* ABOUT BOX #2 */}
                    <div className="col-lg-4">
                        <div
                            className="abox-4 mb-40 wow fadeInUp"
                            data-wow-delay="0.6s"
                        >
                            {/* Image */}
                            <img
                                className="img-fluid"
                                src="images/emergency_help_800x600.jpg"
                                alt="about-image"
                            />
                            {/* Text */}
                            <div className="abox-4-txt">
                                {/* Title */}
                                <h5 className="h5-xs steelblue-color">
                                    <a href="#">Emergency Department</a>
                                </h5>
                                {/* Text */}
                                <p>
                                    Porta semper lacus cursus, feugiat primis
                                    ultrice ligula risus auctor tempus feugiat
                                    dolor lacinia cursus nulla vitae massa
                                    placerat at neque purus ultrice
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* ABOUT BOX #3 */}
                    <div className="col-lg-4">
                        <div
                            className="abox-4 abox-4-table blue-table mb-40 wow fadeInUp"
                            data-wow-delay="0.6s"
                        >
                            {/* Title */}
                            <h5 className="h5-sm">Working Time</h5>
                            {/* Text */}
                            <p>
                                Porta semper lacus cursus, feugiat primis
                                ultrice ligula risus auctor at tempus feugiat
                                dolor lacinia cursus nulla vitae massa
                            </p>
                            {/* Table */}
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Mon – Wed</td>
                                        <td> - </td>
                                        <td className="text-right">
                                            9:00 AM - 7:00 PM
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Thursday</td>
                                        <td> - </td>
                                        <td className="text-right">
                                            9:00 AM - 6:30 PM
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Friday</td>
                                        <td> - </td>
                                        <td className="text-right">
                                            9:00 AM - 6:00 PM
                                        </td>
                                    </tr>
                                    <tr className="last-tr">
                                        <td>Sun - Sun</td>
                                        <td>-</td>
                                        <td className="text-right">Closed</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default Demo9About4;
