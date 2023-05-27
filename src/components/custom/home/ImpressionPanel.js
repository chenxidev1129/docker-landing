import Link from "next/link";
import React from "react";

const ImpressionPanel = () => {
    return (
        <section id="terms-page" className="wide-80 terms-section division">
            <div className="container">
                <div className="row">
                    {/* TERMS CONTENT */}
                    <div className="col-lg-12">
                        <div className="terms-holder pr-30">
                            <div className="terms-box">
                                <p className="p-notice steelblue-color">
                                    Impressum
                                </p>
                                <p>
                                    Physiotherapie Stützpunkt Berlin
                                </p>
                                <p>
                                    Kolonnenstraße 60, 10827 Berlin
                                </p>
                                <p>
                                    mail@xn--physio-sttzpunkt-rzb.de
                                </p>
                                <p>
                                    +49 30 60977359
                                </p>
                                <p>
                                    Sidar Arslan
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*END TERMS CONTENT */}
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default ImpressionPanel;
