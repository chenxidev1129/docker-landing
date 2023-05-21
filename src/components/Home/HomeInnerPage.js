import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { demoInnerPageProps } from "../../sliderProps";

const HomeInnerPage = () => {
  return (
    <section id="i-pages" className="bg-fixed inner-pages division">
      <div className="container-fluid">
        <div className="st-content">
          {/* SECTION TITLE */}
          <div className="row">
            <div className="col-lg-10 offset-lg-1 section-title text-center">
              <span className="section-id id-color">We even give you more</span>
              <h2>21 Additional Inner Pages</h2>
              <p>
                All inner pages was carefully crafted to suit your needs.
                Showcase your Medical Clinics, Hospitals etc. with flexible and
                pre-made concepts
              </p>
            </div>
          </div>
          {/* INNER PAGES */}
          <div className="row">
            <div className="col-md-12">
              <Swiper
                {...demoInnerPageProps}
                className="owl-carousel owl-theme ipages-holder"
              >
                {/* ABOUT */}
                <SwiperSlide className="select_link ip-box">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="images/about.jpg"
                      alt="about-preview"
                    />
                    <div className="item-overlay">
                      <div className="overlay-content">
                        <Link href="/about-us">
                          <a className="btn" target="_blank">
                            Launch Demo
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <h4>About Us Page</h4>
                </SwiperSlide>
                {/* WHO WE ARE */}
                <SwiperSlide className="select_link ip-box">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="images/who-we-are.jpg"
                      alt="who-we-are-preview"
                    />
                    <div className="item-overlay">
                      <div className="overlay-content">
                        <Link href="/who-we-are">
                          <a className="btn" target="_blank">
                            Launch Demo
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <h4>Who We Are</h4>
                </SwiperSlide>
                {/* ALL SERVICES */}
                <SwiperSlide className="select_link ip-box">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="images/services.jpg"
                      alt="services-preview"
                    />
                    <div className="item-overlay">
                      <div className="overlay-content">
                        <Link href="/all-services">
                          <a className="btn" target="_blank">
                            Launch Demo
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <h4>All Services Page</h4>
                </SwiperSlide>
                {/* SERVICE #1 */}
                <SwiperSlide className="select_link ip-box">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="images/service-1.jpg"
                      alt="service-preview"
                    />
                    <div className="item-overlay">
                      <div className="overlay-content">
                        <Link href="/service-1">
                          <a className="btn" target="_blank">
                            Launch Demo
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <h4>
                    Service Single <span>#1</span>
                  </h4>
                </SwiperSlide>
                {/* SERVICE #2 */}
                <SwiperSlide className="select_link ip-box">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="images/service-2.jpg"
                      alt="service-preview"
                    />
                    <div className="item-overlay">
                      <div className="overlay-content">
                        <Link href="/service-2">
                          <a className="btn" target="_blank">
                            Launch Demo
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <h4>
                    Service Single <span>#2</span>
                  </h4>
                </SwiperSlide>
                {/* ALL DEPARTMENTS */}
                <SwiperSlide className="select_link ip-box">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="images/departments.jpg"
                      alt="departments-preview"
                    />
                    <div className="item-overlay">
                      <div className="overlay-content">
                        <Link href="/all-departments">
                          <a className="btn" target="_blank">
                            Launch Demo
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <h4>All Departments Page</h4>
                </SwiperSlide>
                {/* DEPARTMENT SINGLE */}
                <SwiperSlide className="select_link ip-box">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="images/department-single.jpg"
                      alt="department-single-preview"
                    />
                    <div className="item-overlay">
                      <div className="overlay-content">
                        <Link href="/department-single">
                          <a className="btn" target="_blank">
                            Launch Demo
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <h4>Department Single</h4>
                </SwiperSlide>
                {/* ALL DOCTORS */}
                <SwiperSlide className="select_link ip-box">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="images/doctors.jpg"
                      alt="doctors-preview"
                    />
                    <div className="item-overlay">
                      <div className="overlay-content">
                        <Link href="/all-doctors">
                          <a className="btn" target="_blank">
                            Launch Demo
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <h4>All Doctors Page</h4>
                </SwiperSlide>
                {/* DOCTOR #1 */}
                <SwiperSlide className="select_link ip-box">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="images/doctor-1.jpg"
                      alt="doctor-preview"
                    />
                    <div className="item-overlay">
                      <div className="overlay-content">
                        <Link href="/doctor-1">
                          <a className="btn" target="_blank">
                            Launch Demo
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <h4>
                    Doctor Details <span>#1</span>
                  </h4>
                </SwiperSlide>
                {/* DOCTOR #2 */}
                <SwiperSlide className="select_link ip-box">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="images/doctor-2.jpg"
                      alt="doctor-preview"
                    />
                    <div className="item-overlay">
                      <div className="overlay-content">
                        <Link href="/doctor-2">
                          <a className="btn" target="_blank">
                            Launch Demo
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <h4>
                    Doctor Details <span>#2</span>
                  </h4>
                </SwiperSlide>
                {/* PRICING #1 */}
                <SwiperSlide className="select_link ip-box">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="images/pricing-1.jpg"
                      alt="pricing-preview"
                    />
                    <div className="item-overlay">
                      <div className="overlay-content">
                        <Link href="/pricing-1">
                          <a className="btn" target="_blank">
                            Launch Demo
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <h4>
                    Pricing Page <span>#1</span>
                  </h4>
                </SwiperSlide>
                {/* PRICING #2 */}
                <SwiperSlide className="select_link ip-box">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="images/pricing-2.jpg"
                      alt="pricing-preview"
                    />
                    <div className="item-overlay">
                      <div className="overlay-content">
                        <Link href="/pricing-2">
                          <a className="btn" target="_blank">
                            Launch Demo
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <h4>
                    Pricing Page <span>#2</span>
                  </h4>
                </SwiperSlide>
                {/* TIMETABLE */}
                <SwiperSlide className="select_link ip-box">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="images/timetable.jpg"
                      alt="timetable-preview"
                    />
                    <div className="item-overlay">
                      <div className="overlay-content">
                        <Link href="/timetable">
                          <a className="btn" target="_blank">
                            Launch Demo
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <h4>Timetable Page</h4>
                </SwiperSlide>
                {/* APPOINTMENT */}
                <SwiperSlide className="select_link ip-box">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="images/appointment.jpg"
                      alt="about-preview"
                    />
                    <div className="item-overlay">
                      <div className="overlay-content">
                        <Link href="/appointment">
                          <a className="btn" target="_blank">
                            Launch Demo
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <h4>Make an Appointment</h4>
                </SwiperSlide>
                {/* BLOG LISTING */}
                <SwiperSlide className="select_link ip-box">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="images/blog-listing.jpg"
                      alt="blog-listing-preview"
                    />
                    <div className="item-overlay">
                      <div className="overlay-content">
                        <Link href="/blog-listing">
                          <a className="btn" target="_blank">
                            Launch Demo
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <h4>Blog Listing Page</h4>
                </SwiperSlide>
                {/* SINGLE POST */}
                <SwiperSlide className="select_link ip-box">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="images/single-post.jpg"
                      alt="single-post-preview"
                    />
                    <div className="item-overlay">
                      <div className="overlay-content">
                        <Link href="/single-post">
                          <a className="btn" target="_blank">
                            Launch Demo
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <h4>Single Post Page</h4>
                </SwiperSlide>
                {/* GALLERY */}
                <SwiperSlide className="select_link ip-box">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="images/gallery.jpg"
                      alt="gallery-preview"
                    />
                    <div className="item-overlay">
                      <div className="overlay-content">
                        <Link href="/gallery">
                          <a className="btn" target="_blank">
                            Launch Demo
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <h4>Gallery Page</h4>
                </SwiperSlide>
                {/* FAQs */}
                <SwiperSlide className="select_link ip-box">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="images/faqs.jpg"
                      alt="faqs-preview"
                    />
                    <div className="item-overlay">
                      <div className="overlay-content">
                        <Link href="/faqs">
                          <a className="btn" target="_blank">
                            Launch Demo
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <h4>FAQs Page</h4>
                </SwiperSlide>
                {/* TERMS & PRIVACY */}
                <SwiperSlide className="select_link ip-box">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="images/terms.jpg"
                      alt="terms-preview"
                    />
                    <div className="item-overlay">
                      <div className="overlay-content">
                        <Link href="/terms">
                          <a className="btn" target="_blank">
                            Launch Demo
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <h4>Terms Page</h4>
                </SwiperSlide>
                {/* CONTACTS #1 */}
                <SwiperSlide className="select_link ip-box">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="images/contacts-1.jpg"
                      alt="contacts-preview"
                    />
                    <div className="item-overlay">
                      <div className="overlay-content">
                        <Link href="/contacts-1">
                          <a className="btn" target="_blank">
                            Launch Demo
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <h4>
                    Contacts Page <span>#1</span>
                  </h4>
                </SwiperSlide>
                {/* CONTACTS #2 */}
                <SwiperSlide className="select_link ip-box">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="images/contacts-2.jpg"
                      alt="contacts-preview"
                    />
                    <div className="item-overlay">
                      <div className="overlay-content">
                        <Link href="/contacts-2">
                          <a className="btn" target="_blank">
                            Launch Demo
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <h4>
                    Contacts Page <span>#2</span>
                  </h4>
                </SwiperSlide>
                <div className="owl-dots"></div>
              </Swiper>
            </div>
          </div>
          {/* END INNER PAGES */}
        </div>
      </div>
    </section>
  );
};

export default HomeInnerPage;
