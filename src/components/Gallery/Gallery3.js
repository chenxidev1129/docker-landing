import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Popup from "../Popup";

const Gallery3 = () => {
  const [image, setImage] = useState(false);
  const [src, setSrc] = useState(false);
  const onClick = (src) => {
    setImage(true);
    setSrc(src);
  };
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  const [activeClass, setActiveClass] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".masonry-wrap", {
        itemSelector: ".gallery-item",
        percentPosition: true,
        transitionDuration: "0.7s",
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: ".gallery-item",
        },
      });
    }, 300);
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
    setActiveClass(key);
  };
  return (
    <div id="gallery-3" className="gallery-section division">
      {image && (
        <Popup
          content={{ src: `images/gallery/image-${src}.jpg`, name: "image" }}
          close={setImage}
        />
      )}
      <div className="container">
        {/* GALLERY FILTERING BUTTONS */}
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="gallery-filter mb-60">
              <button
                onClick={handleFilterKeyChange("*")}
                className={activeClass == "*" ? "is-checked" : ""}
              >
                All
              </button>
              <button
                onClick={handleFilterKeyChange("dental")}
                className={activeClass == "dental" ? "is-checked" : ""}
              >
                Dental Care
              </button>
              <button
                onClick={handleFilterKeyChange("pediatric")}
                className={activeClass == "pediatric" ? "is-checked" : ""}
              >
                Pediatric
              </button>
              <button
                onClick={handleFilterKeyChange("cardiology")}
                className={activeClass == "cardiology" ? "is-checked" : ""}
              >
                Cardiology
              </button>
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
                        href="#"
                        onClick={() => onClick("9")}
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
                        href="#"
                        onClick={() => onClick("10")}
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
                        href="#"
                        onClick={() => onClick("11")}
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
                        href="#"
                        onClick={() => onClick("12")}
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
                        href="#"
                        onClick={() => onClick("13")}
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
                        href="#"
                        onClick={() => onClick("14")}
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
                        href="#"
                        onClick={() => onClick("15")}
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
                        href="#"
                        onClick={() => onClick("16")}
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
                        href="#"
                        onClick={() => onClick("17")}
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
                        href="#"
                        onClick={() => onClick("18")}
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
                        href="#"
                        onClick={() => onClick("19")}
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
                        href="#"
                        onClick={() => onClick("20")}
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
    </div>
  );
};

export default Gallery3;
