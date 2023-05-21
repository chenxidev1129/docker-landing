import Link from "next/link";
import React from "react";

const AllHero1 = () => {
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
                                Feugiat primis ligula risus auctor egestas augue
                                mauri viverra tortor in iaculis placerat eugiat
                                mauris ipsum in viverra tortor and gravida purus
                                pretium lorem primis in orci integer mollis
                            </p>
                            {/* Button */}
                            <Link href="/about-us">
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

export default AllHero1;
