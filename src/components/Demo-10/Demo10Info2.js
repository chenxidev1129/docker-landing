import React from "react";

const Demo10Info2 = () => {
    return (
        <section
            id="info-2"
            className="bg-lightgrey wide-60 info-section division"
        >
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
                            <p className="mb-30">
                                An enim nullam tempor sapien gravida donec enim
                                ipsum blandit porta justo integer odio velna
                                vitae auctor integer congue magna at pretium
                                purus pretium ligula rutrum itae laoreet augue
                                posuere and curae integer congue leo metus
                                mollis primis and mauris
                            </p>
                            {/* Options List */}
                            <div className="row">
                                <div className="col-xl-6">
                                    {/* Option #1 */}
                                    <div className="box-list m-top-15">
                                        <div className="box-list-icon blue-color">
                                            <i className="fas fa-angle-double-right" />
                                        </div>
                                        <p className="p-sm">
                                            Nemo ipsam egestas volute and turpis
                                            dolores quaerat
                                        </p>
                                    </div>
                                    {/* Option #2 */}
                                    <div className="box-list">
                                        <div className="box-list-icon blue-color">
                                            <i className="fas fa-angle-double-right" />
                                        </div>
                                        <p className="p-sm">
                                            Magna luctus tempor
                                        </p>
                                    </div>
                                    {/* Option #3 */}
                                    <div className="box-list">
                                        <div className="box-list-icon blue-color">
                                            <i className="fas fa-angle-double-right" />
                                        </div>
                                        <p className="p-sm">
                                            An enim nullam tempor at pretium
                                            purus blandit
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    {/* Option #4 */}
                                    <div className="box-list">
                                        <div className="box-list-icon blue-color">
                                            <i className="fas fa-angle-double-right" />
                                        </div>
                                        <p className="p-sm">
                                            Magna luctus tempor blandit a vitae
                                            suscipit mollis
                                        </p>
                                    </div>
                                    {/* Option #5 */}
                                    <div className="box-list m-top-15">
                                        <div className="box-list-icon blue-color">
                                            <i className="fas fa-angle-double-right" />
                                        </div>
                                        <p className="p-sm">
                                            Nemo ipsam egestas volute turpis
                                            dolores quaerat
                                        </p>
                                    </div>
                                    {/* Option #6 */}
                                    <div className="box-list">
                                        <div className="box-list-icon blue-color">
                                            <i className="fas fa-angle-double-right" />
                                        </div>
                                        <p className="p-sm">
                                            An enim nullam tempor
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* End Options List */}
                        </div>
                    </div>
                    {/* END TEXT BLOCK */}
                    {/* IMAGE BLOCK */}
                    <div className="col-lg-6">
                        <div
                            className="info-2-img wow fadeInUp"
                            data-wow-delay="0.6s"
                        >
                            <img
                                className="img-fluid"
                                src="images/image-13.png"
                                alt="info-image"
                            />
                        </div>
                    </div>
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default Demo10Info2;
