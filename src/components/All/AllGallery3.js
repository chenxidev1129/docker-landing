import Link from "next/link";
import React from "react";

const AllGallery3 = () => {
  return (
    <section id="gallery-3" className="gallery-section division">
      <div className="container">
        {/* GALLERY FILTERING BUTTONS */}
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="gallery-filter mb-60">
              <button data-filter="*" className="is-checked">
                All
              </button>
              <button data-filter=".dental">Dental Care</button>
              <button data-filter=".pediatric">Pediatric</button>
              <button data-filter=".cardiology">Cardiology</button>
            </div>
          </div>
        </div>
        {/* GALLERY IMAGES HOLDER */}
        <div className="row">
          <div className="col-md-12 gallery-items-list">
            <div className="masonry-wrap grid-loaded">
              {/* IMAGE #1 */}
              <div className="gallery-item dental">
                <div className="hover-overlay">
                  {/* Gallery Image */}
                  <img
                    className="img-fluid"
                    src="images/gallery/image-9.jpg"
                    alt="galley-image"
                  />
                  <div className="item-overlay" />
                  {/* Image Zoom */}
                  <div className="image-zoom">
                    <Link href="#">
                      <a
                        className="image-link"
                        href="images/gallery/image-9.jpg"
                        title
                      >
                        <i className="fas fa-search-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* END IMAGE #1 */}
              {/* IMAGE #2 */}
              <div className="gallery-item pediatric">
                <div className="hover-overlay">
                  {/* Gallery Image */}
                  <img
                    className="img-fluid"
                    src="images/gallery/image-10.jpg"
                    alt="galley-image"
                  />
                  <div className="item-overlay" />
                  {/* Image Zoom */}
                  <div className="image-zoom">
                    <Link href="#">
                      <a
                        className="image-link"
                        href="images/gallery/image-10.jpg"
                        title
                      >
                        <i className="fas fa-search-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* END IMAGE #2 */}
              {/* IMAGE #3 */}
              <div className="gallery-item cardiology">
                <div className="hover-overlay">
                  {/* Gallery Image */}
                  <img
                    className="img-fluid"
                    src="images/gallery/image-11.jpg"
                    alt="galley-image"
                  />
                  <div className="item-overlay" />
                  {/* Image Zoom */}
                  <div className="image-zoom">
                    <Link href="#">
                      <a
                        className="image-link"
                        href="images/gallery/image-11.jpg"
                        title
                      >
                        <i className="fas fa-search-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* END IMAGE #3 */}
              {/* IMAGE #4 */}
              <div className="gallery-item pediatric">
                <div className="hover-overlay">
                  {/* Gallery Image */}
                  <img
                    className="img-fluid"
                    src="images/gallery/image-12.jpg"
                    alt="galley-image"
                  />
                  <div className="item-overlay" />
                  {/* Image Zoom */}
                  <div className="image-zoom">
                    <Link href="#">
                      <a
                        className="image-link"
                        href="images/gallery/image-12.jpg"
                        title
                      >
                        <i className="fas fa-search-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* END IMAGE #4 */}
              {/* IMAGE #5 */}
              <div className="gallery-item dental">
                <div className="hover-overlay">
                  {/* Gallery Image */}
                  <img
                    className="img-fluid"
                    src="images/gallery/image-13.jpg"
                    alt="galley-image"
                  />
                  <div className="item-overlay" />
                  {/* Image Zoom */}
                  <div className="image-zoom">
                    <Link href="#">
                      <a
                        className="image-link"
                        href="images/gallery/image-13.jpg"
                        title
                      >
                        <i className="fas fa-search-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* END IMAGE #5 */}
              {/* IMAGE #6 */}
              <div className="gallery-item cardiology">
                <div className="hover-overlay">
                  {/* Gallery Image */}
                  <img
                    className="img-fluid"
                    src="images/gallery/image-14.jpg"
                    alt="galley-image"
                  />
                  <div className="item-overlay" />
                  {/* Image Zoom */}
                  <div className="image-zoom">
                    <Link href="#">
                      <a
                        className="image-link"
                        href="images/gallery/image-14.jpg"
                        title
                      >
                        <i className="fas fa-search-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* END IMAGE #6 */}
              {/* IMAGE #7 */}
              <div className="gallery-item pediatric">
                <div className="hover-overlay">
                  {/* Gallery Image */}
                  <img
                    className="img-fluid"
                    src="images/gallery/image-15.jpg"
                    alt="galley-image"
                  />
                  <div className="item-overlay" />
                  {/* Image Zoom */}
                  <div className="image-zoom">
                    <Link href="#">
                      <a
                        className="image-link"
                        href="images/gallery/image-15.jpg"
                        title
                      >
                        <i className="fas fa-search-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* END IMAGE #7 */}
              {/* IMAGE #8 */}
              <div className="gallery-item cardiology">
                <div className="hover-overlay">
                  {/* Gallery Image */}
                  <img
                    className="img-fluid"
                    src="images/gallery/image-16.jpg"
                    alt="galley-image"
                  />
                  <div className="item-overlay" />
                  {/* Image Zoom */}
                  <div className="image-zoom">
                    <Link href="#">
                      <a
                        className="image-link"
                        href="images/gallery/image-16.jpg"
                        title
                      >
                        <i className="fas fa-search-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* END IMAGE #8 */}
              {/* IMAGE #9 */}
              <div className="gallery-item dental">
                <div className="hover-overlay">
                  {/* Gallery Image */}
                  <img
                    className="img-fluid"
                    src="images/gallery/image-17.jpg"
                    alt="galley-image"
                  />
                  <div className="item-overlay" />
                  {/* Image Zoom */}
                  <div className="image-zoom">
                    <Link href="#">
                      <a
                        className="image-link"
                        href="images/gallery/image-17.jpg"
                        title
                      >
                        <i className="fas fa-search-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* END IMAGE #9 */}
              {/* IMAGE #10 */}
              <div className="gallery-item pediatric">
                <div className="hover-overlay">
                  {/* Gallery Image */}
                  <img
                    className="img-fluid"
                    src="images/gallery/image-18.jpg"
                    alt="galley-image"
                  />
                  <div className="item-overlay" />
                  {/* Image Zoom */}
                  <div className="image-zoom">
                    <Link href="#">
                      <a
                        className="image-link"
                        href="images/gallery/image-18.jpg"
                        title
                      >
                        <i className="fas fa-search-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* END IMAGE #10 */}
              {/* IMAGE #11 */}
              <div className="gallery-item cardiology">
                <div className="hover-overlay">
                  {/* Gallery Image */}
                  <img
                    className="img-fluid"
                    src="images/gallery/image-19.jpg"
                    alt="galley-image"
                  />
                  <div className="item-overlay" />
                  {/* Image Zoom */}
                  <div className="image-zoom">
                    <Link href="#">
                      <a
                        className="image-link"
                        href="images/gallery/image-19.jpg"
                        title
                      >
                        <i className="fas fa-search-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* END IMAGE #11 */}
              {/* IMAGE #12 */}
              <div className="gallery-item dental">
                <div className="hover-overlay">
                  {/* Gallery Image */}
                  <img
                    className="img-fluid"
                    src="images/gallery/image-20.jpg"
                    alt="galley-image"
                  />
                  <div className="item-overlay" />
                  {/* Image Zoom */}
                  <div className="image-zoom">
                    <Link href="#">
                      <a
                        className="image-link"
                        href="images/gallery/image-20.jpg"
                        title
                      >
                        <i className="fas fa-search-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* END IMAGE #12 */}
            </div>
          </div>
        </div>
        {/* END GALLERY IMAGES HOLDER */}
      </div>
      {/* End container */}
    </section>
  );
};

export default AllGallery3;
