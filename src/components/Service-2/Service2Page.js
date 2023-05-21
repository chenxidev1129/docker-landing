import Link from "next/link";
import React from "react";

const Service2Page = () => {
    return (
        <div
            id="service-page"
            className="wide-60 service-page-section division"
        >
            <div className="container">
                <div className="row">
                    {/* SERVICE CONTENT */}
                    <div className="col-lg-8">
                        <div className="s2-page pr-30 mb-40">
                            {/* Title */}
                            <h3 className="h3-md blue-color">
                                Magnetic Resonance Imaging
                            </h3>
                            <h4 className="h4-sm blue-color">
                                Maecenas gravida porttitor nunc, magna luctus
                                tempor viverra cubilia laoreet augue
                            </h4>
                            {/* Text */}
                            <p>
                                Primis cubilia laoreet augue vitae laoreet augue
                                in cubilia risus auctor tempus dolor feugiat,
                                felis lacinia risus auctor id viverra dolor
                                congue ipsum mauris iaculis luctus placerat
                                massa magna cursus amet quisque an aliquet.
                                Feugiat primis in ultrice ligula risus auctor
                            </p>
                            {/* Text */}
                            <p>
                                Ligula risus auctor tempus dolor feugiat, felis
                                lacinia risus interdum auctor id viverra dolor
                                iaculis luctus bibendum luctus neque rhoncus
                                ipsum tempor varius iaculis at luctus neque
                                rhoncus ipsum tempor varius cubilia laoreet
                                augue vitae laoreet augue undo cubilia feugiat
                                suscipit emper lacus
                            </p>
                            {/* Image */}
                            <div className="content-block-img text-center">
                                <img
                                    className="img-fluid"
                                    src="images/mri_1000x500.jpg"
                                    alt="content-image"
                                />
                            </div>
                            {/* Text */}
                            <p>
                                Ligula risus auctor tempus dolor feugiat, felis
                                lacinia risus interdum auctor id viverra dolor
                                iaculis luctus bibendum luctus neque rhoncus
                                ipsum tempor varius iaculis at luctus neque
                                rhoncus ipsum tempor varius cubilia laoreet
                                augue vitae laoreet augue undo cubilia feugiat
                                suscipit emper lacus
                            </p>
                            {/* Options List */}
                            <div className="row">
                                <div className="col-xl-6">
                                    {/* Option #1 */}
                                    <div className="box-list m-top-15">
                                        <div className="box-list-icon blue-color">
                                            <i className="fas fa-angle-double-right" />
                                        </div>
                                        <p>
                                            Nemo ipsam egestas volute turpis
                                            dolores quaerat massa suscipit,
                                            luctus neque
                                        </p>
                                    </div>
                                    {/* Option #2 */}
                                    <div className="box-list">
                                        <div className="box-list-icon blue-color">
                                            <i className="fas fa-angle-double-right" />
                                        </div>
                                        <p>
                                            Magna massa suscipit, luctus neque
                                            purus and ipsum neque dolor primis
                                        </p>
                                    </div>
                                    {/* Option #3 */}
                                    <div className="box-list">
                                        <div className="box-list-icon blue-color">
                                            <i className="fas fa-angle-double-right" />
                                        </div>
                                        <p>
                                            An enim nullam tempor at pretium
                                            blandit
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    {/* Option #4 */}
                                    <div className="box-list">
                                        <div className="box-list-icon blue-color">
                                            <i className="fas fa-angle-double-right" />
                                        </div>
                                        <p>
                                            Magna massa suscipit, luctus neque
                                            purus and ipsum neque dolor primis
                                            luctus
                                        </p>
                                    </div>
                                    {/* Option #5 */}
                                    <div className="box-list m-top-15">
                                        <div className="box-list-icon blue-color">
                                            <i className="fas fa-angle-double-right" />
                                        </div>
                                        <p>
                                            An enim nullam tempor at pretium
                                            blandit
                                        </p>
                                    </div>
                                    {/* Option #6 */}
                                    <div className="box-list">
                                        <div className="box-list-icon blue-color">
                                            <i className="fas fa-angle-double-right" />
                                        </div>
                                        <p>
                                            Magna massa suscipit, luctus neque
                                            purus and ipsum neque dolor at
                                            tempor
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* End Options List */}
                            {/* Small Title */}
                            <h5 className="h5-md blue-color">
                                Rhoncus ipsum tempor varius iaculis
                            </h5>
                            {/* CONTENT BOX #1 */}
                            <div className="box-list">
                                <div className="box-list-icon">
                                    <i className="fas fa-genderless" />
                                </div>
                                <p>
                                    Fringilla risus nec, luctus mauris orci
                                    auctor purus euismod pretium purus pretium
                                    ligula rutrum tempor sapien at pretium
                                    luctus ligula rutrum luctus risus ultrice
                                    lacinia risus auctor id viverra dolor congue
                                    ipsum mauris iaculis luctus placerat massa
                                    magna cursus amet
                                </p>
                            </div>
                            {/* CONTENT BOX #2 */}
                            <div className="box-list">
                                <div className="box-list-icon">
                                    <i className="fas fa-genderless" />
                                </div>
                                <p>
                                    Quaerat sodales sapien undo euismod purus a
                                    blandit pretium
                                </p>
                            </div>
                            {/* CONTENT BOX #3 */}
                            <div className="box-list">
                                <div className="box-list-icon">
                                    <i className="fas fa-genderless" />
                                </div>
                                <p>
                                    Nemo ipsam egestas volute turpis dolores ut
                                    aliquam quaerat sodales sapien undo pretium
                                    purus feugiat dolor impedit magna purus
                                    pretium gravida donec quisque an aliquet
                                </p>
                            </div>
                            {/* Picing Table */}
                            <div className="pricing-table">
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
                            {/* Text */}
                            <p>
                                Primis cubilia laoreet augue vitae laoreet augue
                                in cubilia risus auctor tempus dolor feugiat,
                                felis lacinia risus auctor id viverra dolor
                                congue ipsum mauris iaculis luctus placerat
                                massa magna cursus amet quisque an aliquet.
                                Feugiat primis in ultrice ligula risus auctor
                            </p>
                            {/* Text */}
                            <p>
                                Ligula risus auctor tempus dolor feugiat, felis
                                lacinia risus interdum auctor id viverra dolor
                                iaculis luctus bibendum luctus neque rhoncus
                                ipsum tempor varius iaculis at luctus neque
                                rhoncus ipsum tempor varius cubilia laoreet
                                augue vitae laoreet augue undo cubilia feugiat
                                suscipit
                            </p>
                            {/* Button */}
                            <Link href="/appointment">
                                <a className="btn btn-blue blue-hover">
                                    Book an Appointment
                                </a>
                            </Link>
                        </div>
                    </div>
                    {/* END SERVICE CONTENT */}
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
                        {/* SIDEBAR TIMETABLE */}
                        <div className="sidebar-timetable sidebar-div mb-50">
                            {/* Title */}
                            <h5 className="h5-md mb-20">Doctors Timetable</h5>
                            {/* Text */}
                            <p className="p-sm">
                                Porta semper lacus cursus, feugiat primis
                                ultrice ligula risus auctor at tempus feugiat
                                dolor lacinia cursus nulla vitae massa
                            </p>
                            {/* Button */}
                            <Link href="/about">
                                <a className="btn btn-blue blue-hover mt-10">
                                    View Timetable
                                </a>
                            </Link>
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

export default Service2Page;
