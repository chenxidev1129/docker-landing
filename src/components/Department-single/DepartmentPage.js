import Link from "next/link";
import React from "react";

const DepartmentPage = () => {
    return (
        <div
            id="department-page"
            className="wide-60 department-page-section division"
        >
            <div className="container">
                <div className="row">
                    {/* DEPARTMENT DETAILS */}
                    <div className="col-lg-8">
                        <div className="txt-block pr-30">
                            {/* CONTENT BLOCK */}
                            <div className="content-block mb-40">
                                {/* Text */}
                                <p className="p-md">
                                    Nemo ipsam egestas volute turpis quaerat
                                    sodales sapien vitae mollis ligula ipsum
                                    gestas. Felis orci lacinia risus, vitae
                                    auctor magna morbi pretium neque sapien undo
                                    sodales primis cubilia laoreet augue vitae
                                </p>
                                {/* Text */}
                                <p>
                                    Ligula risus auctor tempus dolor feugiat,
                                    felis lacinia risus interdum auctor id
                                    viverra dolor iaculis luctus bibendum luctus
                                    neque rhoncus ipsum tempor varius iaculis at
                                    luctus neque rhoncus ipsum tempor varius
                                    cubilia laoreet augue vitae laoreet augue
                                    undo cubilia feugiat suscipit emper lacus
                                    cursus, feugiat primis ultrice in ligula
                                    risus auctor tempus at feugiat dolor impedit
                                    magna
                                </p>
                                {/* Small Title */}
                                <h5 className="h5-md steelblue-color">
                                    Feugiat primis ultrice
                                </h5>
                                {/* CONTENT BOX #1 */}
                                <div className="box-list">
                                    <div className="box-list-icon">
                                        <i className="fas fa-genderless" />
                                    </div>
                                    <p>
                                        Nemo ipsam egestas volute turpis dolores
                                        ut aliquam quaerat sodales sapien undo
                                        pretium purus feugiat dolor impedit
                                        quaerat sodales sapien vitae mollis
                                        ligula ipsum gestas
                                    </p>
                                </div>
                                {/* CONTENT BOX #2 */}
                                <div className="box-list">
                                    <div className="box-list-icon">
                                        <i className="fas fa-genderless" />
                                    </div>
                                    <p>
                                        Maecenas gravida porttitor nunc, quis
                                        vehicula magna luctus tempor. Quisque
                                        vel laoreet turpis urna augue, viverra a
                                        augue eget, dictum tempor diam pulvinar
                                        massa purus nulla sodales primis cubilia
                                        laoreet augue vitae laoreet augue in
                                        cubilia feugiat magna
                                    </p>
                                </div>
                                {/* CONTENT BOX #3 */}
                                <div className="box-list">
                                    <div className="box-list-icon">
                                        <i className="fas fa-genderless" />
                                    </div>
                                    <p>
                                        Nemo ipsam egestas volute turpis quaerat
                                        sodales sapien vitae mollis ligula ipsum
                                        gestas. Felis orci lacinia risus, vitae
                                        auctor eros erat nec magna morbi pretium
                                        neque sapien
                                    </p>
                                </div>
                                {/* Image */}
                                <div className="content-block-img">
                                    <img
                                        className="img-fluid"
                                        src="images/cardiology_1000x500.jpg"
                                        alt="content-image"
                                    />
                                </div>
                                {/* Small Title */}
                                <h5 className="h5-md steelblue-color">
                                    Bibendum luctus neque rhoncus
                                </h5>
                                {/* Text */}
                                <p className="mb-30">
                                    Ligula risus auctor tempus dolor feugiat,
                                    felis lacinia risus interdum auctor id
                                    viverra dolor iaculis luctus bibendum luctus
                                    neque rhoncus ipsum tempor varius iaculis
                                    luctus at neque rhoncus ipsum tempor varius
                                    cubilia laoreet augue vitae laoreet augue
                                    and cubilia feugiat suscipit
                                </p>
                                {/* Options List */}
                                <div className="options-list">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            {/* Option #1 */}
                                            <div className="box-list m-top-15">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    Nemo ipsam egestas volute
                                                    and turpis dolores quaerat
                                                    vitae auctor integer congue
                                                </p>
                                            </div>
                                            {/* Option #2 */}
                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p className="p-sm">
                                                    Magna luctus tempor and
                                                    curae integer
                                                </p>
                                            </div>
                                            {/* Option #3 */}
                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    An enim nullam tempor undo
                                                    pretium blandit purus
                                                    pretium ligula rutrum and
                                                    laoreet
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
                                                    Magna luctus tempor blandit
                                                    a nullam tempor sapien
                                                    feugiat at vitae suscipit
                                                    mollis
                                                </p>
                                            </div>
                                            {/* Option #5 */}
                                            <div className="box-list m-top-15">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    Nemo ipsam egestas tempus
                                                    feugiat at dolor impedit
                                                    magna purus at pretium donec
                                                </p>
                                            </div>
                                            {/* Option #6 */}
                                            <div className="box-list">
                                                <div className="box-list-icon blue-color">
                                                    <i className="fas fa-angle-double-right" />
                                                </div>
                                                <p>
                                                    An enim nullam at tempor
                                                    primis
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End row */}
                                </div>
                                {/* End Options List */}
                            </div>
                            {/* END CONTENT BLOCK */}
                            {/* PRICING */}
                            <div
                                id="pricing-2"
                                className="pricing-section division"
                            >
                                <div className="row pricing-row">
                                    {/* PRICING TABLE #1 */}
                                    <div className="col-md-12">
                                        {/* Plan Title  */}
                                        <h5 className="h5-md steelblue-color">
                                            Treatments
                                        </h5>
                                        <div className="pricing-table mb-40">
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">
                                                            Service
                                                        </th>
                                                        <th scope="col">
                                                            Price
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>X-Ray</td>
                                                        <td>
                                                            From
                                                            <span>$325.00</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>
                                                            Magnetic Resonance
                                                            Imaging
                                                        </td>
                                                        <td>
                                                            From
                                                            <span>$435.00</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>
                                                            Computer Tomography
                                                        </td>
                                                        <td>
                                                            From
                                                            <span>$315.00</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">4</th>
                                                        <td>
                                                            Laboratory Tests
                                                        </td>
                                                        <td>
                                                            From
                                                            <span>$90.00</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">5</th>
                                                        <td>
                                                            Ultrasound Imaging
                                                        </td>
                                                        <td>
                                                            From
                                                            <span>$285.00</span>
                                                        </td>
                                                    </tr>
                                                    <tr className="last-tr">
                                                        <th scope="row">6</th>
                                                        <td>
                                                            Pregnancy Care
                                                            Service
                                                        </td>
                                                        <td>
                                                            From
                                                            <span>$530.00</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {/* END PRICING TABLE #1 */}
                                    {/* PRICING TABLE #2 */}
                                    <div className="col-md-12">
                                        {/* Plan Title  */}
                                        <h5 className="h5-md steelblue-color">
                                            Investigations
                                        </h5>
                                        <div className="pricing-table mb-40">
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">
                                                            Service
                                                        </th>
                                                        <th scope="col">
                                                            Price
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Bronchoscopy</td>
                                                        <td>
                                                            From
                                                            <span>$340.00</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>
                                                            Parathyroid Scan
                                                        </td>
                                                        <td>
                                                            From
                                                            <span>$65.00</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>
                                                            Echocardiography
                                                        </td>
                                                        <td>
                                                            From
                                                            <span>$175.00</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">4</th>
                                                        <td>
                                                            Full Blood Picture
                                                        </td>
                                                        <td>
                                                            From
                                                            <span>$250.00</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">5</th>
                                                        <td>
                                                            CT &amp; Ultrasound
                                                            Diagnostic
                                                        </td>
                                                        <td>
                                                            From
                                                            <span>$285.00</span>
                                                        </td>
                                                    </tr>
                                                    <tr className="last-tr">
                                                        <th scope="row">6</th>
                                                        <td>MRI &amp; X-Ray</td>
                                                        <td>
                                                            From
                                                            <span>$450.00</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {/* END PRICING TABLE #2 */}
                                </div>
                                {/* End row */}
                            </div>
                            {/* END PRICING */}
                        </div>
                    </div>
                    {/* END DEPARTMENT DETAILS */}
                    {/* SIDEBAR  */}
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
                        {/* IMAGE WIDGET */}
                        <div id="image-widget" className="sidebar-div">
                            <a href="#">
                                <img
                                    className="img-fluid"
                                    src="images/blog/image-widget.jpg"
                                    alt="image-widget"
                                />
                            </a>
                        </div>
                    </aside>
                    {/* END SIDEBAR */}
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </div>
    );
};

export default DepartmentPage;
