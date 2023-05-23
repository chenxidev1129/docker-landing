import Link from "next/link";
import React from "react";

const HeroPanel = () => {
    return (
        <section id="hero-1" className="bg-fixed hero-section division">
            <div className="container">
                <div className="row d-flex align-items-center">
                    {/* HERO TEXT */}
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <div className="hero-txt mb-40">
                            {/* Title */}
                            <h5 className="steelblue-color">
                                Welcome To Our Clinic
                            </h5>
                            <h2 className="steelblue-color">
                                Take Care of Your Health
                            </h2>
                            {/* Text */}
                            <p className="p-md">
                                Premium landing page template created to offer a
                                perfect solution for medical clinics, hospitals,
                                personal doctors and everyone else involved in
                                health services.
                            </p>
                            {/* Button */}
                            <Link href="https://www.doctolib.de/praxis/berlin/physiotherapie-stuetzpunkt-berlin">
                                <a className="btn btn-blue blue-hover">
                                    More About Clinic
                                </a>
                            </Link>
                        </div>
                    </div>
                    {/* END HERO TEXT */}
                    {/* HERO IMAGE */}
                    <div className="col-md-4 col-lg-5 col-xl-6">
                        <div className="hero-1-img text-center">
                            <img
                                className="img-fluid"
                                src="images/hero-1-img.png"
                                alt="hero-image"
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

export default HeroPanel;
