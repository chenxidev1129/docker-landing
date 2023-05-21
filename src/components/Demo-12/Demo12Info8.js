import React from "react";

const Demo12Info8 = () => {
    return (
        <section id="info-8" className="info-section division">
            {/* TEXT BLOCK */}
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-7 col-lg-5">
                        <div
                            className="txt-block pc-30 white-color wow fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            {/* Title */}
                            <h4 className="h4-sm">Opening Hours:</h4>
                            {/* Text */}
                            <p>
                                Porta semper lacus cursus, feugiat primis
                                ultrice ligula risus auctor tempus feugiat dolor
                                lacinia cursus vitae massa
                            </p>
                            {/* Table */}
                            <table className="table white-color">
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
                            {/* Title */}
                            <h5 className="h5-md">
                                Need a personal health plan?
                            </h5>
                            {/* Text */}
                            <p>
                                Porta semper lacus cursus, feugiat primis
                                ultrice ligula risus auctor tempus feugiat dolor
                                lacinia undo cursus nulla massa suscipit, luctus
                                neque purus ipsum neque dolor primis
                            </p>
                        </div>
                    </div>
                </div>
                {/* End row */}
            </div>
            {/* END TEXT BLOCK */}
            {/* INFO-7 IMAGE */}
            <div className="info-8-img text-center" />
        </section>
    );
};

export default Demo12Info8;
