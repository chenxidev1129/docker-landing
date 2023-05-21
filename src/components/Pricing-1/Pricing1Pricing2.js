import React from "react";

const Pricing1Pricing2 = () => {
    return (
        <section id="pricing-2" className="pb-60 pricing-section division">
            <div className="container">
                <div className="row pricing-row">
                    {/* PRICING TABLE #1 */}
                    <div className="col-lg-6">
                        {/* Plan Title  */}
                        <h5 className="h5-md steelblue-color">Treatments</h5>
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
                                            From <span>$325.00</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Magnetic Resonance Imaging</td>
                                        <td>
                                            From <span>$435.00</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Computer Tomography</td>
                                        <td>
                                            From <span>$315.00</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Laboratory Tests</td>
                                        <td>
                                            From <span>$90.00</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Ultrasound Imaging</td>
                                        <td>
                                            From <span>$285.00</span>
                                        </td>
                                    </tr>
                                    <tr className="last-tr">
                                        <th scope="row">6</th>
                                        <td>Pregnancy Care Service</td>
                                        <td>
                                            From <span>$530.00</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* END PRICING TABLE #1 */}
                    {/* PRICING TABLE #2 */}
                    <div className="col-lg-6">
                        {/* Plan Title  */}
                        <h5 className="h5-md steelblue-color">
                            Investigations
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
                                            From <span>$340.00</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Parathyroid Scan</td>
                                        <td>
                                            From <span>$65.00</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Echocardiography</td>
                                        <td>
                                            From <span>$175.00</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Full Blood Picture</td>
                                        <td>
                                            From <span>$250.00</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>CT &amp; Ultrasound Diagnostic</td>
                                        <td>
                                            From <span>$285.00</span>
                                        </td>
                                    </tr>
                                    <tr className="last-tr">
                                        <th scope="row">6</th>
                                        <td>MRI &amp; X-Ray</td>
                                        <td>
                                            From <span>$450.00</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* END PRICING TABLE #2 */}
                </div>
                {/* End row */}
                {/* ALL PRICING TABLES BUTTON */}
                <div className="row">
                    <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2 text-center">
                        <div className="all-pricing-btn mb-40">
                            {/* Price Notice */}
                            <p>
                                <span>Note!</span> Feugiat eros, ac tincidunt
                                ligula massa in faucibus orci luctus et ultrices
                                posuere cubilia and curae integer congue leo
                                metus mollis primis and mauris lectus laoreet
                                tempor
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* End container */}
        </section>
    );
};

export default Pricing1Pricing2;
