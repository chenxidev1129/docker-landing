import React from "react";

const Demo11Banner7 = () => {
    return (
        <section id="banner-7" className="bg-fixed banner-section division">
            <div className="container white-color">
                <div className="row d-flex align-items-center">
                    {/* BANNER TEXT */}
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div
                            className="banner-txt wow fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            {/* Title  */}
                            <h2 className="h2-xs">
                                Highest Quality Medical Treatment
                            </h2>
                            {/* Text */}
                            <p>
                                Egestas magna egestas magna ipsum vitae purus
                                ipsum primis in cubilia laoreet augue egestas
                                suscipit lectus mauris a lectus laoreet gestas
                                neque undo luctus feugiat augue suscipit
                            </p>
                            {/* Button */}
                            <a
                                href="#"
                                className="btn btn-blue tra-white-hover mt-20"
                            >
                                Free Consultation
                            </a>
                        </div>
                    </div>
                    {/* END BANNER TEXT */}
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default Demo11Banner7;
