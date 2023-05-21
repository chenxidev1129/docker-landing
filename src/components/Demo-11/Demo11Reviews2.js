import React from "react";
import ReviewSlider from "../ReviewSlider";

const Demo11Reviews2 = () => {
  return (
    <section
      id="reviews-2"
      className="bg-lightgrey wide-100 reviews-section division"
    >
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row">
          <div className="col-lg-10 offset-lg-1 section-title">
            {/* Title 	*/}
            <h3 className="h3-md steelblue-color">What Our Patients Say</h3>
            {/* Text */}
            <p>
              Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
              primis libero at tempus, blandit posuere ligula varius congue
              cursus porta feugiat
            </p>
          </div>
        </div>
        {/* END SECTION TITLE */}
        {/* TESTIMONIALS CONTENT */}
        <ReviewSlider />
        {/* END TESTIMONIALS CONTENT */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo11Reviews2;
