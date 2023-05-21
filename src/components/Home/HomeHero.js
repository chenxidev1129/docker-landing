import React from "react";

const HomeHero = () => {
    return (
        <section id="hero" className="bg-scroll hero-section division">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="hero-txt text-center">
                            <img
                                className="img-fluid title-img"
                                src="images/hero-logo.png"
                                alt="title-image"
                            />
                            <h3>
                                Complete Medical &amp; Medical Health Landing
                                Page
                            </h3>
                            <p>
                                Premium landing page template created to offer a
                                perfect solution for medical clinics, hospitals,
                                personal doctors and everyone else involved in
                                health services.
                            </p>
                        </div>
                    </div>
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default HomeHero;
