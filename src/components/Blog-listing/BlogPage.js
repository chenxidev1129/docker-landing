import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getPagination, pagination } from "../../utils";
import Popup from "../Popup";

const BlogPage = () => {
  const [video, setVideo] = useState(false);
  let sort = 3;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination(".blog-post", sort, active);
    let list = document.querySelectorAll(".blog-post");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <div id="blog-page" className="wide-100 blog-page-section division">
      {video && <Popup close={setVideo} />}
      <div className="container">
        <div className="row">
          {/* BLOG POSTS HOLDER */}
          <div className="col-lg-8">
            <div className="posts-holder pr-30">
              {/* BLOG POST #1 */}
              <div className="blog-post">
                {/* BLOG POST IMAGE */}
                <div className="blog-post-img">
                  <img
                    className="img-fluid"
                    src="images/blog/post-4-img.jpg"
                    alt="blog-post-image"
                  />
                </div>
                {/* BLOG POST TITLE */}
                <div className="blog-post-txt">
                  {/* Post Title */}
                  <h5 className="h5-xl steelblue-color">
                    <Link href="/single-post">
                      <a>5 Benefits Of Integrative Medicine</a>
                    </Link>
                  </h5>
                  {/* Post Data */}
                  <span>
                    May 03, 2019 by
                    <span>Dr.Jeremy Smith</span>
                  </span>
                  {/* Post Text */}
                  <p>
                    Donec sodales, nibh vel tristique aliquet, nisi libero
                    suscipit diam, sed tempus ante nulla ut purus. Donec dolor
                    magna, suscipit in magna dignissim, porttitor hendrerit.
                    gravida ultrices felis ...
                  </p>
                </div>
              </div>
              {/* END BLOG POST #1 */}
              {/* BLOG POST #2 */}
              <div className="blog-post">
                {/* BLOG POST IMAGE */}
                <div className="blog-post-img">
                  <div className="video-preview text-center">
                    {/* Change the link HERE!!! */}
                    <Link href="#">
                      <a
                        className="video-popup1"
                        href="#"
                        onClick={() => setVideo(true)}
                      >
                        {/* Play Icon */}
                        <div className="video-btn play-icon-blue">
                          <div className="video-block-wrapper">
                            <i className="fas fa-play" />
                          </div>
                        </div>
                        {/* Preview Image */}
                        <img
                          className="img-fluid"
                          src="images/blog/post-5-img.jpg"
                          alt="blog-post-image"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
                {/* BLOG POST TEXT */}
                <div className="blog-post-txt">
                  {/* Post Title */}
                  <h5 className="h5-xl steelblue-color">
                    <Link href="/single-post">
                      <a>How Weather Impacts Your Health</a>
                    </Link>
                  </h5>
                  {/* Post Data */}
                  <span>
                    Apr 17, 2019 by
                    <span>Dr.Megan Coleman</span>
                  </span>
                  {/* Post Text */}
                  <p>
                    Donec dolor magna, suscipit in magna dignissim, porttitor
                    hendrerit diam. Nunc gravida ultrices felis eget faucibus.
                    Praesent aliquet lorem purus, quis mollis nisi laoreet
                    vitae. Mauris consequat tortor. Duis fermentum a massa in
                    convallis. Quisque eu ultrices enim, et interdum augue...
                  </p>
                </div>
              </div>
              {/* END BLOG POST #2 */}
              {/* BLOG POST #3 */}
              <div className="blog-post">
                {/* BLOG POST IMAGE */}
                <div className="blog-post-img">
                  <img
                    className="img-fluid"
                    src="images/blog/post-6-img.jpg"
                    alt="blog-post-image"
                  />
                </div>
                {/* BLOG POST TEXT */}
                <div className="blog-post-txt">
                  {/* Post Title */}
                  <h5 className="h5-xl steelblue-color">
                    <Link href="/single-post">
                      <a>Your Health Is In Your Hands</a>
                    </Link>
                  </h5>
                  {/* Post Data */}
                  <span>
                    Apr 28, 2019 by
                    <span>Dr.Jonathan Barnes</span>
                  </span>
                  {/* Post Text */}
                  <p>
                    Suscipit in magna dignissim, porttitor hendrerit diam. Nunc
                    gravida ultrices felis eget faucibus. Praesent aliquet lorem
                    purus, quis mollis nisi laoreet vitae. Mauris nec consequat
                    tortor. Duis and massa in convallis quisque eu interdum
                    augue faucibus orci luctus et ultrices posuere ...
                  </p>
                </div>
              </div>
              {/* END BLOG POST #3 */}
              {/* BLOG POST #4 */}
              <div className="blog-post">
                {/* BLOG YOUTUBE LINK */}
                <div className="blog-post-img">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      width={730}
                      height={450}
                      src="https://www.youtube.com/embed/7e90gBu4pas"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                {/* BLOG POST TEXT */}
                <div className="blog-post-txt">
                  {/* Post Title */}
                  <h5 className="h5-xl steelblue-color">
                    <Link href="/single-post">
                      <a>
                        {`20 Years of Caring. 15 Fact About MedService,
                        Melbourne's First Choice for Healthcare`}
                      </a>
                    </Link>
                  </h5>
                  {/* Post Data */}
                  <span>
                    Apr 17, 2019 by
                    <span>Dr.Jonathan Barnes</span>
                  </span>
                  {/* Post Text */}
                  <p>
                    Donec dolor magna, suscipit in magna dignissim, porttitor
                    hendrerit diam. Nunc gravida ultrices felis eget faucibus.
                    Praesent aliquet lorem purus, quis mollis nisi laoreet
                    vitae. Mauris consequat tortor. Duis fermentum a massa in
                    convallis. Quisque eu ultrices enim, et interdum augue...
                  </p>
                </div>
              </div>
              {/* END BLOG POST #4 */}
              {/* BLOG PAGE PAGINATION */}
              <div className="blog-page-pagination b-top">
                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-center primary-theme">
                    <li className="page-item disabled">
                      <a
                        className="page-link"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActive(active === 1 ? 1 : active - 1);
                        }}
                        tabIndex={-1}
                      >
                        <i className="fas fa-long-arrow-alt-left" />
                      </a>
                    </li>
                    {state &&
                      state.map((s, i) => (
                        <li
                          className={`page-item  ${
                            active == s ? "active" : ""
                          }`}
                          key={i}
                        >
                          <a
                            className="page-link"
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setActive(s);
                            }}
                          >
                            {s}
                          </a>
                        </li>
                      ))}

                    <li className="page-item next-page">
                      <a
                        className="page-link"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActive(
                            active === state.length ? state.length : active + 1
                          );
                        }}
                      >
                        <i className="fas fa-long-arrow-alt-right" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          {/* END BLOG POSTS HOLDER */}
          {/* SIDEBAR */}
          <aside id="sidebar" className="col-lg-4">
            {/* SEARCH FIELD */}
            <div id="search-field" className="sidebar-div mb-50">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-field"
                />
                <div className="input-group-append">
                  <button className="btn" type="button">
                    <i className="fa fa-search" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
            {/* TEXT WIDGET */}
            <div id="txt-widget" className="sidebar-div mb-50">
              {/* Title */}
              <h5 className="h5-sm steelblue-color">The Heart Of Clinic</h5>
              {/* Head of Clinic */}
              <div className="txt-widget-unit mb-15 clearfix d-flex align-items-center">
                {/* Avatar */}
                <div className="txt-widget-avatar">
                  <img
                    src="images/head-of-clinic.jpg"
                    alt="testimonial-avatar"
                  />
                </div>
                {/* Data */}
                <div className="txt-widget-data">
                  <h5 className="h5-md steelblue-color">Dr. Jonathan Barnes</h5>
                  <span>Chief Medical Officer, Founder</span>
                  <p className="blue-color">1-800-1234-567</p>
                </div>
              </div>
              {/* End Head of Clinic */}
              {/* Text */}
              <p className="p-sm">
                An enim nullam tempor sapien at gravida donec pretium ipsum
                porta justo integer at odiovelna vitae auctor integer congue
                magna purus
              </p>
              {/* Button */}
              <Link href="/about">
                <a className="btn btn-blue blue-hover">Learn More</a>
              </Link>
            </div>
            {/* END TEXT WIDGET */}
            {/* BLOG CATEGORIES */}
            <div className="blog-categories sidebar-div mb-50">
              {/* Title */}
              <h5 className="h5-sm steelblue-color">Categories</h5>
              <ul className="blog-category-list clearfix">
                <li>
                  <a href="#">
                    <i className="fas fa-angle-double-right blue-color" />
                    Elderly Care
                  </a>
                  <span>(5)</span>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-angle-double-right blue-color" />
                    Lifestyle
                  </a>
                  <span>(13)</span>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-angle-double-right blue-color" />
                    Medical
                  </a>
                  <span>(6)</span>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-angle-double-right blue-color" />
                    Treatment
                  </a>
                  <span>(8)</span>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-angle-double-right blue-color" />
                    Pharma
                  </a>
                  <span>(12)</span>
                </li>
              </ul>
            </div>
            {/* POPULAR POSTS */}
            <div className="popular-posts sidebar-div mb-50">
              {/* Title */}
              <h5 className="h5-sm steelblue-color">Popular Posts</h5>
              <ul className="popular-posts">
                {/* Popular post #1 */}
                <li className="clearfix d-flex align-items-center">
                  {/* Image */}
                  <img
                    className="img-fluid"
                    src="images/blog/latest-post-1.jpg"
                    alt="blog-post-preview"
                  />
                  {/* Text */}
                  <div className="post-summary">
                    <Link href="/single-post">
                      <a>Etiam sapien accumsan molestie ante empor ...</a>
                    </Link>
                    <p>43 Comments</p>
                  </div>
                </li>
                {/* Popular post #2 */}
                <li className="clearfix d-flex align-items-center">
                  {/* Image */}
                  <img
                    className="img-fluid"
                    src="images/blog/latest-post-2.jpg"
                    alt="blog-post-preview"
                  />
                  {/* Text */}
                  <div className="post-summary">
                    <Link href="/single-post">
                      <a>Blandit tempor sapien ipsum, porta justo ...</a>
                    </Link>
                    <p>38 Comments</p>
                  </div>
                </li>
                {/* Popular post #3 */}
                <li className="clearfix d-flex align-items-center">
                  {/* Image */}
                  <img
                    className="img-fluid"
                    src="images/blog/latest-post-3.jpg"
                    alt="blog-post-preview"
                  />
                  {/* Text */}
                  <div className="post-summary">
                    <Link href="/single-post">
                      <a>Cursus risus laoreet turpis auctor varius ...</a>
                    </Link>
                    <p>29 Comments</p>
                  </div>
                </li>
              </ul>
            </div>
            {/* TAGS CLOUD */}
            <div className="tags-cloud sidebar-div mb-50">
              {/* Title */}
              <h5 className="h5-sm steelblue-color">Tags Cloud</h5>
              <span className="badge">
                <a href="#">Effective Treatment</a>
              </span>
              <span className="badge">
                <a href="#">Molecular Biology</a>
              </span>
              <span className="badge">
                <a href="#">Diagnostic</a>
              </span>
              <span className="badge">
                <a href="#">Pediatrics</a>
              </span>
              <span className="badge">
                <a href="#">Lifestyle</a>
              </span>
              <span className="badge">
                <a href="#">Pharma</a>
              </span>
              <span className="badge">
                <a href="#">Medicine</a>
              </span>
              <span className="badge">
                <a href="#">Research</a>
              </span>
            </div>
            {/* SIDEBAR TIMETABLE */}
            <div className="sidebar-timetable sidebar-div mb-50">
              {/* Title */}
              <h5 className="h5-md mb-20 steelblue-color">Doctors Timetable</h5>
              {/* Text */}
              <p className="p-sm">
                Porta semper lacus cursus, feugiat primis ultrice ligula risus
                auctor at tempus feugiat dolor lacinia cursus nulla vitae massa
              </p>
              {/* Button */}
              <Link href="/about">
                <a className="btn btn-blue blue-hover mt-10">View Timetable</a>
              </Link>
            </div>
            {/* END SIDEBAR TIMETABLE */}
            {/* IMAGE WIDGET */}
            <div className="image-widget sidebar-div">
              <a href="#">
                <img
                  className="img-fluid"
                  src="images/blog/image-widget.jpg"
                  alt="image-widget"
                />
              </a>
            </div>
          </aside>
          {/* END SIDEBAR */}
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </div>
  );
};

export default BlogPage;
