import Link from "next/link";
import React from "react";

const Demo7Services4 = () => {
  return (
    <section id="services-4" className="wide-60 services-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row">
          <div className="col-lg-10 offset-lg-1 section-title">
            {/* Title 	*/}
            <h3 className="h3-md steelblue-color">
              Dentistry is Our Profession
            </h3>
            {/* Text */}
            <p>
              Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
              primis libero at tempus, blandit posuere ligula varius congue
              cursus porta feugiat
            </p>
          </div>
        </div>
        <div className="row">
          {/* SERVICE BOX #1 */}
          <div className="col-md-6 col-lg-3">
            <div className="sbox-4 wow fadeInUp" data-wow-delay="0.4s">
              {/* Image */}
              <img
                className="img-fluid"
                src="images/general_dentistry_800x600.jpg"
                alt="content-image"
              />
              {/* Text */}
              <div className="sbox-4-txt">
                <h5 className="h5-md steelblue-color">
                  <Link href="/single-service">
                    <a>General Dentistry</a>
                  </Link>
                </h5>
                <p>
                  Porta semper lacus cursus, feugiat primis ultrice in ligula
                  risus auctor at pretium feugiat dolor integer
                </p>
              </div>
            </div>
          </div>
          {/* SERVICE BOX #2 */}
          <div className="col-md-6 col-lg-3">
            <div className="sbox-4 wow fadeInUp" data-wow-delay="0.6s">
              {/* Image */}
              <img
                className="img-fluid"
                src="images/kids_dentistry_800x600.jpg"
                alt="content-image"
              />
              {/* Text */}
              <div className="sbox-4-txt">
                <h5 className="h5-md steelblue-color">
                  <Link href="/single-service">
                    <a>{`Children's Dentistry`}</a>
                  </Link>
                </h5>
                <p>
                  Porta semper lacus cursus, feugiat primis ultrice in ligula
                  risus auctor at pretium feugiat dolor integer
                </p>
              </div>
            </div>
          </div>
          {/* SERVICE BOX #3 */}
          <div className="col-md-6 col-lg-3">
            <div className="sbox-4 wow fadeInUp" data-wow-delay="0.8s">
              {/* Image */}
              <img
                className="img-fluid"
                src="images/cosmetic_dentistry_800x600.jpg"
                alt="content-image"
              />
              {/* Text */}
              <div className="sbox-4-txt">
                <h5 className="h5-md steelblue-color">
                  <Link href="/single-service">
                    <a>Cosmetic Services</a>
                  </Link>
                </h5>
                <p>
                  Porta semper lacus cursus, feugiat primis ultrice in ligula
                  risus auctor at pretium feugiat dolor integer
                </p>
              </div>
            </div>
          </div>
          {/* SERVICE BOX #4 */}
          <div className="col-md-6 col-lg-3">
            <div className="sbox-4 wow fadeInUp" data-wow-delay="1s">
              {/* Image */}
              <img
                className="img-fluid"
                src="images/dental_emergency_800x600.jpg"
                alt="content-image"
              />
              {/* Text */}
              <div className="sbox-4-txt">
                <h5 className="h5-md steelblue-color">
                  <Link href="/single-service">
                    <a>Dental Emergency</a>
                  </Link>
                </h5>
                <p>
                  Porta semper lacus cursus, feugiat primis ultrice in ligula
                  risus auctor at pretium feugiat dolor integer
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo7Services4;
