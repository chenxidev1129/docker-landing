import Link from "next/link";
import React from "react";

const Pricing2Page = () => {
    return (
        <div id="pricing-2-page" className="wide-60 blog-page-section division">
            <div className="container">
                <div className="row">
                    {/* PRICING-2 HOLDER */}
                    <div className="col-lg-8">
                        <div className="txt-block pr-30">
                            {/* Title */}
                            <h3 className="h3-md steelblue-color">
                                Patient Pricing Information
                            </h3>
                            {/* Text */}
                            <p className="mb-50">
                                Porta semper lacus cursus, feugiat primis
                                ultrice in ligula risus auctor tempus feugiat
                                dolor lacinia cubilia curae integer congue leo
                                metus, primis in orci integer metus mollis
                                faucibus enim. Nemo ipsam egestas volute turpis
                                dolores ut aliquam quaerat sodales sapien undo
                                pretium purus feugiat dolor impedit magna purus
                                pretium gravida donec ligula massa gravida donec
                                pretium
                            </p>
                            {/* Plan Title  */}
                            <h5 className="h5-md steelblue-color">
                                Regular Diagnostic and Health Care Services
                            </h5>
                            <div className="pricing-table mb-40">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Service</th>
                                            <th scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>X-Ray</td>
                                            <td>
                                                From <span>$1325.00</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Magnetic Resonance Imaging</td>
                                            <td>
                                                From <span>$1435.00</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Computer Tomography</td>
                                            <td>
                                                From <span>$1315.00</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Laboratory Tests</td>
                                            <td>
                                                From <span>$890.00</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>Ultrasound Imaging</td>
                                            <td>
                                                From <span>$985.00</span>
                                            </td>
                                        </tr>
                                        <tr className="last-tr">
                                            <th scope="row">6</th>
                                            <td>Pregnancy Care Service</td>
                                            <td>
                                                From <span>$1130.00</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* Plan Title  */}
                            <h5 className="h5-md steelblue-color">
                                Emergency Department Charges
                            </h5>
                            <div className="pricing-table mb-40">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Service</th>
                                            <th scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Bronchoscopy</td>
                                            <td>
                                                From <span>$1340.00</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Parathyroid Scan</td>
                                            <td>
                                                From <span>$765.00</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Echocardiography</td>
                                            <td>
                                                From <span>$1075.00</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Full Blood Picture</td>
                                            <td>
                                                From <span>$950.00</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>
                                                CT &amp; Ultrasound Diagnostic
                                            </td>
                                            <td>
                                                From <span>$885.00</span>
                                            </td>
                                        </tr>
                                        <tr className="last-tr">
                                            <th scope="row">6</th>
                                            <td>MRI &amp; X-Ray</td>
                                            <td>
                                                From <span>$1050.00</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* END PRICING-2 HOLDER */}
                    {/* SIDEBAR */}
                    <aside id="sidebar" className="col-lg-4">
                        {/* TEXT WIDGET */}
                        <div id="txt-widget" className="sidebar-div mb-50">
                            {/* Title */}
                            <h5 className="h5-sm steelblue-color">
                                The Heart Of Clinic
                            </h5>
                            {/* Head of Clinic */}
                            <div className="txt-widget-unit mb-15 clearfix d-flex align-items-center">
                                {/* Avatar */}
                                <div className="txt-widget-avatar">
                                    <img
                                        src="images/head-of-clinic.jpg"
                                        alt="testimonial-avatar"
                                    />
                                </div>
                                {/* Data */}
                                <div className="txt-widget-data">
                                    <h5 className="h5-md steelblue-color">
                                        Dr. Jonathan Barnes
                                    </h5>
                                    <span>Chief Medical Officer, Founder</span>
                                    <p className="blue-color">1-800-1234-567</p>
                                </div>
                            </div>
                            {/* End Head of Clinic */}
                            {/* Text */}
                            <p className="p-sm">
                                An enim nullam tempor sapien at gravida donec
                                pretium ipsum porta justo integer at odiovelna
                                vitae auctor integer congue magna purus
                            </p>
                            {/* Button */}
                            <Link href="/about">
                                <a className="btn btn-blue blue-hover">
                                    Learn More
                                </a>
                            </Link>
                        </div>
                        {/* END TEXT WIDGET */}
                        {/* SIDEBAR TABLE */}
                        <div className="sidebar-table blue-table sidebar-div mb-50">
                            {/* Title */}
                            <h5 className="h5-md">Working Time</h5>
                            {/* Text */}
                            <p className="p-sm">
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
                                        <td className="text-right">CLOSED</td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* Title */}
                            <h5 className="h5-xs">
                                Need a personal health plan?
                            </h5>
                            {/* Text */}
                            <p className="p-sm">
                                Porta semper lacus cursus, and feugiat primis
                                ultrice ligula at risus auctor
                            </p>
                        </div>
                        {/* END SIDEBAR TABLE */}
                    </aside>
                    {/* END SIDEBAR */}
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </div>
    );
};

export default Pricing2Page;
