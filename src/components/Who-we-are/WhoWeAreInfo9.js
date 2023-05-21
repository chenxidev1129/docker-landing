import React from "react";

const WhoWeAreInfo9 = () => {
    return (
        <section id="info-9" className="bg-blue info-section division">
            {/* TEXT BLOCK */}
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6">
                        <div
                            className="info-9-table white-color wow fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            {/* Title */}
                            <h4 className="h4-xs">Opening Hours:</h4>
                            {/* Text */}
                            <p>
                                Porta semper lacus cursus and feugiat primis
                                ultrice ligula risus auctor tempus feugiat and
                                dolor lacinia cursus turpis dolores ut aliquam a
                                quaerat sodales sapien pretium
                            </p>
                            {/* Table */}
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Mon – Fri</td>
                                        <td> - </td>
                                        <td className="text-right">
                                            8:00 AM - 8:00 PM
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Saturday</td>
                                        <td>-</td>
                                        <td className="text-right">
                                            10:00 AM - 6:00 PM
                                        </td>
                                    </tr>
                                    <tr className="last-tr">
                                        <td>Sunday</td>
                                        <td>-</td>
                                        <td className="text-right">
                                            10:00 AM - 4:00 PM
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* Title */}
                            <h5 className="h5-sm">
                                Need a personal health plan?
                            </h5>
                            {/* Text */}
                            <p>
                                Porta semper lacus cursus, and feugiat primis
                                ultrice ligula at risus auctor vehicula magna
                                luctus tempor quisque undo laoreet turpis urna
                                augue, viverra a augue eget
                            </p>
                        </div>
                    </div>
                </div>
                {/* End row */}
            </div>
            {/* END TEXT BLOCK */}
            {/* INFO-9 IMAGE */}
            <div className="info-9-img bg-fixed text-center" />
        </section>
    );
};

export default WhoWeAreInfo9;
