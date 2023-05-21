import Link from "next/link";
import React from "react";

const AllAbout2 = () => {
    return (
        <section id="about-2" className="about-section division">
            <div className="container">
                <div className="abox-2-holder">
                    <div className="row">
                        {/* ABOUT BOX #1 */}
                        <div className="col-md-12 col-lg-4">
                            <div className="abox-2">
                                {/* Title */}
                                <h5 className="h5-md steelblue-color">
                                    Opening Hours
                                </h5>
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
                                        <tr>
                                            <td>Sunday</td>
                                            <td>-</td>
                                            <td className="text-right">
                                                10:00 AM - 4:00 PM
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* ABOUT BOX #2 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="abox-2">
                                <h5 className="h5-md steelblue-color">
                                    Doctors Timetable
                                </h5>
                                {/* Text */}
                                <p>
                                    An magnis nulla dolor at sapien augue erat
                                    iaculis purus tempor magna ipsum vitae a
                                    purus primis ipsum magna ipsum tempus
                                    feugiat dolor impedit felis magna
                                </p>
                                {/* Button */}
                                <Link href="/timetable">
                                    <a className="btn btn-sm btn-blue blue-hover mt-25">
                                        View Timetable
                                    </a>
                                </Link>
                            </div>
                        </div>
                        {/* ABOUT BOX #3 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="abox-2">
                                {/* Title */}
                                <h5 className="h5-md steelblue-color">
                                    Emergency Cases
                                </h5>
                                {/* Text */}
                                <h4 className="h4-sm emergency-call blue-color">
                                    <i className="fas fa-phone" />
                                    1-800-123-4560
                                </h4>
                                <p className="mt-20">
                                    An magnis nulla dolor at sapien augue erat
                                    iaculis purus tempor magna ipsum vitae a
                                    purus primis ipsum magna ipsum tempus
                                    feugiat dolor impedit felis magna
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* End row */}
                </div>
            </div>
            {/* End container */}
        </section>
    );
};

export default AllAbout2;
