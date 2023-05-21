import React from "react";

const Demo12Info4 = () => {
    return (
        <section id="info-4" className="wide-60 info-section division">
            <div className="container">
                <div className="row d-flex align-items-center">
                    {/* INFO IMAGE */}
                    <div className="col-lg-6">
                        <div
                            className="info-4-img mb-40 text-center wow fadeInUp"
                            data-wow-delay="0.6s"
                        >
                            <img
                                className="img-fluid"
                                src="images/chief_doctor_700x800.jpg"
                                alt="info-image"
                            />
                        </div>
                    </div>
                    {/* INFO TEXT */}
                    <div className="col-lg-6">
                        <div
                            className="txt-block mb-40 pc-30 wow fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            {/* Section ID */}
                            <span className="section-id blue-color">
                                Welcome to MedService
                            </span>
                            {/* Title */}
                            <h3 className="h3-md steelblue-color">
                                Clinic with Innovative Approach to Treatment
                            </h3>
                            {/* Text */}
                            <p>
                                An enim nullam tempor sapien gravida donec
                                pretium ipsum porta justo integer at odio velna
                                vitae auctor integer congue magna purus pretium
                                ligula rutrum luctus ultrice aliquam a augue
                                suscipit
                            </p>
                            {/* Text */}
                            <p>
                                Porta semper lacus cursus, feugiat primis
                                ultrice in ligula risus auctor tempus feugiat
                                dolor lacinia cubilia curae integer congue leo
                                metus, eu mollislorem primis in orci integer
                                metus mollis faucibus. An enim nullam tempor
                                sapien gravida donec pretium and ipsum porta
                                justo integer at velna vitae auctor integer
                                congue
                            </p>
                            {/* Singnature */}
                            <div className="singnature mt-35">
                                {/* Text */}
                                <p className="p-small mb-15">
                                    Randon Pexon, Head of Clinic
                                </p>
                                {/* Singnature Image */}
                                {/* Recommended sizes for Retina Ready displays is 400x68px; */}
                                <img
                                    className="img-fluid"
                                    src="images/signature.png"
                                    width={200}
                                    height={34}
                                    alt="signature-image"
                                />
                            </div>
                        </div>
                    </div>
                    {/* END TEXT BLOCK */}
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default Demo12Info4;
