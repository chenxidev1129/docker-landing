import React, { useState } from "react";
import Popup from "../Popup";

const Demo2Gallery1 = () => {
  const [image, setImage] = useState(false);
  const [src, setSrc] = useState(false);
  const onClick = (src) => {
    setImage(true);
    setSrc(src);
  };
  return (
    <div id="gallery-1" className="gallery-section division">
      {image && <Popup content={{ src, name: "image" }} close={setImage} />}
      {/* SECTION TITLE */}
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 section-title">
            {/* Title 	*/}
            <h3 className="h3-md steelblue-color">
              Total Health Care Solutions
            </h3>
            {/* Text */}
            <p>
              Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
              primis libero at tempus, blandit posuere ligula varius congue
              cursus porta feugiat
            </p>
          </div>
        </div>
      </div>
      {/* GALLERY IMAGES */}
      <div className="row gallery-items-list">
        {/* IMAGE #1 */}
        <div className="col-md-6 col-lg-3 gallery-item">
          <div className="hover-overlay">
            {/* Gallery Image */}
            <img
              className="img-fluid"
              src="images/gallery/image-1.jpg"
              alt="gallery-image"
            />
            <div className="item-overlay" />
            {/* Image Zoom */}
            <div className="image-zoom">
              <a
                className="image-link"
                href="#"
                onClick={() => onClick("images/gallery/image-1.jpg")}
              >
                <i className="fas fa-search-plus" />
              </a>
            </div>
          </div>
        </div>
        {/* IMAGE #2 */}
        <div className="col-md-6 col-lg-3 gallery-item">
          <div className="hover-overlay">
            {/* Gallery Image */}
            <img
              className="img-fluid"
              src="images/gallery/image-2.jpg"
              alt="gallery-image"
            />
            <div className="item-overlay" />
            {/* Image Zoom */}
            <div className="image-zoom">
              <a
                className="image-link"
                href="#"
                onClick={() => onClick("images/gallery/image-2.jpg")}
              >
                <i className="fas fa-search-plus" />
              </a>
            </div>
          </div>
        </div>
        {/* IMAGE #3 */}
        <div className="col-md-6 col-lg-3 gallery-item">
          <div className="hover-overlay">
            {/* Gallery Image */}
            <img
              className="img-fluid"
              src="images/gallery/image-3.jpg"
              alt="gallery-image"
            />
            <div className="item-overlay" />
            {/* Image Zoom */}
            <div className="image-zoom">
              <a
                className="image-link"
                href="#"
                onClick={() => onClick("images/gallery/image-3.jpg")}
              >
                <i className="fas fa-search-plus" />
              </a>
            </div>
          </div>
        </div>
        {/* IMAGE #4 */}
        <div className="col-md-6 col-lg-3 gallery-item">
          <div className="hover-overlay">
            {/* Gallery Image */}
            <img
              className="img-fluid"
              src="images/gallery/image-4.jpg"
              alt="gallery-image"
            />
            <div className="item-overlay" />
            {/* Image Zoom */}
            <div className="image-zoom">
              <a
                className="image-link"
                href="#"
                onClick={() => onClick("images/gallery/image-4.jpg")}
              >
                <i className="fas fa-search-plus" />
              </a>
            </div>
          </div>
        </div>
        {/* IMAGE #5 */}
        <div className="col-md-6 col-lg-3 gallery-item">
          <div className="hover-overlay">
            {/* Gallery Image */}
            <img
              className="img-fluid"
              src="images/gallery/image-5.jpg"
              alt="gallery-image"
            />
            <div className="item-overlay" />
            {/* Image Zoom */}
            <div className="image-zoom">
              <a
                className="image-link"
                href="#"
                onClick={() => onClick("images/gallery/image-5.jpg")}
              >
                <i className="fas fa-search-plus" />
              </a>
            </div>
          </div>
        </div>
        {/* IMAGE #6 */}
        <div className="col-md-6 col-lg-3 gallery-item">
          <div className="hover-overlay">
            {/* Gallery Image */}
            <img
              className="img-fluid"
              src="images/gallery/image-6.jpg"
              alt="gallery-image"
            />
            <div className="item-overlay" />
            {/* Image Zoom */}
            <div className="image-zoom">
              <a
                className="image-link"
                href="#"
                onClick={() => onClick("images/gallery/image-6.jpg")}
              >
                <i className="fas fa-search-plus" />
              </a>
            </div>
          </div>
        </div>
        {/* IMAGE #7 */}
        <div className="col-md-6 col-lg-3 gallery-item">
          <div className="hover-overlay">
            {/* Gallery Image */}
            <img
              className="img-fluid"
              src="images/gallery/image-7.jpg"
              alt="gallery-image"
            />
            <div className="item-overlay" />
            {/* Image Zoom */}
            <div className="image-zoom">
              <a
                className="image-link"
                href="#"
                onClick={() => onClick("images/gallery/image-7.jpg")}
              >
                <i className="fas fa-search-plus" />
              </a>
            </div>
          </div>
        </div>
        {/* IMAGE #8 */}
        <div className="col-md-6 col-lg-3 gallery-item">
          <div className="hover-overlay">
            {/* Gallery Image */}
            <img
              className="img-fluid"
              src="images/gallery/image-8.jpg"
              alt="gallery-image"
            />
            <div className="item-overlay" />
            {/* Image Zoom */}
            <div className="image-zoom">
              <a
                className="image-link"
                href="#"
                onClick={() => onClick("images/gallery/image-8.jpg")}
              >
                <i className="fas fa-search-plus" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* END GALLERY IMAGES */}
    </div>
  );
};

export default Demo2Gallery1;
