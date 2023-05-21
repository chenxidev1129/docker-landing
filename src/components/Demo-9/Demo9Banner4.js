import Link from "next/link";
import React from "react";

const Demo9Banner4 = () => {
  return (
    <section id="banner-4" className="bg-lightgrey banner-section division">
      {/* BANNER TEXT */}
      <div className="container">
        <div className="row ">
          <div className="col-lg-6 offset-lg-6">
            <div className="banner-txt">
              {/* Title  */}
              <h2 className="h2-xs">Need an Emergency Help? Call Us!</h2>
              <h3 className="h3-xl blue-color">+1-800-123-4560</h3>
              {/* Text */}
              <p>
                Egestas magna egestas magna ipsum vitae purus ipsum primis in
                cubilia laoreet augue egestas suscipit lectus mauris lectus
                laoreet gestas neque undo luctus feugiat a augue suscipit luctus
              </p>
              {/* Button */}
              <Link href="#">
                <a className="btn btn-blue blue-hover mt-20">
                  Make An Apointment
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* END CONTENT TEXT */}
      {/* BANNER-4 IMAGE */}
      <div className="banner-4-img" />
    </section>
  );
};

export default Demo9Banner4;
