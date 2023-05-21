import Link from "next/link";
import React from "react";

const AllGallery1 = () => {
  return (
    <div id="gallery-1" className="pt-100 gallery-section division">
      {/* SECTION TITLE */}
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 section-title">
            {/* Title 	*/}
            <h3 className="h3-md">Total Health Care Solutions</h3>
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
              <Link href="#">
                <a
                  className="image-link"
                  href="images/gallery/image-1.jpg"
                  title
                >
                  <i className="fas fa-search-plus" />
                </a>
              </Link>
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
              <Link href="#">
                <a
                  className="image-link"
                  href="images/gallery/image-2.jpg"
                  title
                >
                  <i className="fas fa-search-plus" />
                </a>
              </Link>
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
              <Link href="#">
                <a
                  className="image-link"
                  href="images/gallery/image-3.jpg"
                  title
                >
                  <i className="fas fa-search-plus" />
                </a>
              </Link>
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
              <Link href="#">
                <a
                  className="image-link"
                  href="images/gallery/image-4.jpg"
                  title
                >
                  <i className="fas fa-search-plus" />
                </a>
              </Link>
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
              <Link href="#">
                <a
                  className="image-link"
                  href="images/gallery/image-5.jpg"
                  title
                >
                  <i className="fas fa-search-plus" />
                </a>
              </Link>
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
              <Link href="#">
                <a
                  className="image-link"
                  href="images/gallery/image-6.jpg"
                  title
                >
                  <i className="fas fa-search-plus" />
                </a>
              </Link>
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
              <Link href="#">
                <a
                  className="image-link"
                  href="images/gallery/image-7.jpg"
                  title
                >
                  <i className="fas fa-search-plus" />
                </a>
              </Link>
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
              <Link href="#">
                <a
                  className="image-link"
                  href="images/gallery/image-8.jpg"
                  title
                >
                  <i className="fas fa-search-plus" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* END GALLERY IMAGES */}
    </div>
  );
};

export default AllGallery1;
