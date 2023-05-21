import Link from "next/link";
import React from "react";

const SinglePostBlogPage = () => {
  return (
    <div id="single-blog-page" className="wide-100 blog-page-section division">
      <div className="container">
        <div className="row">
          {/* SINGLE POST */}
          <div className="col-lg-8">
            <div className="single-blog-post pr-30">
              {/* BLOG POST IMAGE */}
              <div className="blog-post-img mb-40">
                <img
                  className="img-fluid"
                  src="images/blog/post-4-img.jpg"
                  alt="blog-post-image"
                />
              </div>
              {/* BLOG POST TEXT */}
              <div className="sblog-post-txt">
                {/* Post Title */}
                <h4 className="h4-lg steelblue-color">
                  5 Benefits Of Integrative Medicine
                </h4>
                {/* Post Data */}
                <span>
                  Posted May 03, 2019 by
                  <span>Dr.Jeremy Smith</span>
                </span>
                {/* Post Text */}
                <p className="mt-30">
                  Aliqum mullam blandit tempor sapien gravida donec ipsum, at
                  porta justo. Velna vitae auctor congue magna nihil impedit
                  ligula risus. Mauris donec ociis et magnis sapien etiam sapien
                  sem sagittis congue tempor gravida donec enim ipsum porta
                  justo integer at odio velna
                </p>
                {/* Text */}
                <p>
                  Sagittis congue augue egestas volutpat egestas magna suscipit
                  egestas magna ipsum vitae purus efficitur ipsum primis in
                  cubilia laoreet augue egestas luctus donec diam.
                </p>
                {/* Text */}
                <p>
                  Maecenas gravida porttitor nunc, quis vehicula magna luctus
                  tempor. Quisque vel laoreet turpis urna augue, viverra a augue
                  eget, dictum tempor diam. Sed pulvinar consectetur nibh, vel
                  imperdiet dui varius viverra. Pellentesque ac massa lorem.
                  Fusce eu cursus non nulla vitae massa placerat purus
                </p>
                {/* Small Title */}
                <h5 className="h5-md steelblue-color">
                  Vitae massa placerat vulputate
                </h5>
                {/* Text */}
                <p>
                  Nullam non scelerisque lectus. In at mauris vel nisl convallis
                  porta at vitae dui. Nam lacus ligula, vulputate molestie
                  bibendum quis, aliquet elementum massa. Vestibulum ut sagittis
                  odio
                </p>
                {/* Post Text */}
                <p>
                  In at mauris vel nisl convallis porta at vitae dui. Nam lacus
                  ligula, vulputate molestie bibendum quis, aliquet elementum
                  massa. Vestibulum ut sagittis odio. Ac massa lorem. Fusce eu
                  cursus est. Fusce non nulla vitae massa placerat vulputate vel
                  a purus. Aliqum mullam blandit tempor sapien
                </p>
                {/* INNER IMAGE */}
                <div className="post-inner-img">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      width={950}
                      height={450}
                      src="https://www.youtube.com/embed/7e90gBu4pas"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                {/* Small Title */}
                <h5 className="h5-md steelblue-color">
                  Semper lacus cursus porta, feugiat primis
                </h5>
                {/* Text */}
                <p>
                  Curabitur ac dapibus libero. Quisque eu tristique neque.
                  Phasellus blandit tristique justo ut aliquam. Aliquam vitae
                  molestie nunc. Quisque sapien justo, aliquet non molestie sed,
                  venenatis nec purus. Aliquam eget lacinia elit. Vestibulum
                  tincidunt tincidunt massa, et porttitor justo.
                </p>
                {/* Option #1 */}
                <div className="box-list">
                  <div className="box-list-icon blue-color">
                    <i className="fas fa-angle-double-right" />
                  </div>
                  <p className="p-sm">
                    Nemo ipsam egestas volute and turpis dolores quaerat
                  </p>
                </div>
                {/* Option #2 */}
                <div className="box-list">
                  <div className="box-list-icon blue-color">
                    <i className="fas fa-angle-double-right" />
                  </div>
                  <p className="p-sm">
                    Magna luctus tempor augue vitae laoreet augue in cubilia
                    risus auctor tempus dolor felis lacinia risus auctor id
                    viverra dolor
                  </p>
                </div>
                {/* Option #3 */}
                <div className="box-list">
                  <div className="box-list-icon blue-color">
                    <i className="fas fa-angle-double-right" />
                  </div>
                  <p className="p-sm">
                    Ligula risus auctor tempus dolor feugiat, felis lacinia
                    risus interdum auctor id viverra dolor iaculis luctus
                  </p>
                </div>
                {/* Option #3 */}
                <div className="box-list">
                  <div className="box-list-icon blue-color">
                    <i className="fas fa-angle-double-right" />
                  </div>
                  <p className="p-sm">
                    An enim nullam tempor at pretium purus blandit
                  </p>
                </div>
                {/* Small Title */}
                <h5 className="h5-md steelblue-color">
                  Cubilia laoreet augue egestas luctus
                </h5>
                {/* Post Text */}
                <p>
                  Curabitur ac dapibus libero. Quisque eu tristique neque.
                  Phasellus blandit tristique justo ut aliquam. Aliquam vitae
                  molestie nunc. Quisque sapien justo, aliquet non molestie sed,
                  venenatis nec purus. Aliquam eget lacinia tincidunt tincidunt
                  massa, et porttitor justo. Quisque vel laoreet turpis. Urna
                  augue, viverra a augue eget, dictum tempor diam. Sed pulvinar
                  consectetur nibh, vel imperdiet dui varius viverra.
                  Pellentesque ac massa lorem. Fusce eu cursus est. Fusce non
                  nulla vitae massa placerat bulum tincidunt tincidunt massa, et
                  porttitor justo
                </p>
                {/* Post Text */}
                <p>
                  Sagittis congue augue egestas volutpat egestas magna suscipit
                  egestas magna ipsum vitae purus efficitur ipsum primis in
                  cubilia laoreet augue egestas luctus donec diam. Curabitur ac
                  dapibus libero. Quisque eu tristique neque. Phasellus blandit
                  tristique justo ut aliquam. Aliquam vitae
                  <a href="#">molestie nunc sapien justo</a>, aliquet non
                  molestie sed, venenatis nec purus. Aliquam eget lacinia elit.
                  Vestibulum tincidunt tincidunt massa, et porttitor justo.
                </p>
                {/* BLOG POST SHARE LINKS */}
                <div className="post-share-links">
                  {/* POST TAGS */}
                  <div className="post-tags-list">
                    <span>
                      <a href="#">Effective Treatment</a>
                    </span>
                    <span>
                      <a href="#">Research</a>
                    </span>
                    <span>
                      <a href="#">Diagnostic</a>
                    </span>
                  </div>
                  {/* POST SHARE ICONS */}
                  <div className="post-share-list">
                    <ul className="share-social-icons clearfix">
                      <li>
                        <a href="#" className="share-ico ico-like">
                          <i className="far fa-thumbs-up" />
                          Like
                        </a>
                      </li>
                      <li>
                        <a href="#" className="share-ico ico-facebook">
                          <i className="fab fa-facebook-f" />
                          Share
                        </a>
                      </li>
                      <li>
                        <a href="#" className="share-ico ico-twitter">
                          <i className="fab fa-twitter" />
                          Tweet
                        </a>
                      </li>
                      <li>
                        <a href="#" className="share-ico ico-google-plus">
                          <i className="fab fa-pinterest-p" />
                          Pin It
                        </a>
                      </li>
                      <li>
                        <a href="#" className="share-ico ico-google-plus">
                          <i className="fab fa-google-plus-g" />
                          Share
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* END BLOG POST SHARE */}
              </div>
              {/* END BLOG POST TEXT */}
              {/* ABOUT POST AUTHOR */}
              <div className="author-senoff">
                {/* Avatar */}
                <img src="images/review-author-4.jpg" alt="author-avatar" />
                {/* Text */}
                <div className="author-senoff-txt">
                  {/* Title */}
                  <h5 className="h5-sm steelblue-color">
                    Published by Dr.Jeremy Smith
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur elit eiusmod tempor
                    sapien incidide ut labore dolore. incididunt ut labore et
                    dolore. Neque turpis vitae eros praesent varius. Egestas a
                    congue augue egestas volutpat egestas magna suscipit egestas
                    magna ipsum vitae urna
                  </p>
                </div>
              </div>
              {/* END ABOUT POST AUTHOR */}
              {/* RELATED POSTS */}
              <div className="related-posts">
                {/* Title */}
                <h5 className="h5-md steelblue-color">Related Posts</h5>
                <div className="row">
                  {/* BLOG POST #1 */}
                  <div className="col-md-6">
                    <div className="blog-post">
                      {/* BLOG POST IMAGE */}
                      <div className="blog-post-img">
                        <img
                          className="img-fluid"
                          src="images/blog/post-2-img.jpg"
                          alt="blog-post-image"
                        />
                      </div>
                      {/* BLOG POST TEXT */}
                      <div className="blog-post-txt">
                        {/* Post Title */}
                        <h5 className="h5-sm steelblue-color">
                          <Link href="/single-post">
                            <a>Your Health Is In Your Hands</a>
                          </Link>
                        </h5>
                        {/* Post Data */}
                        <span>
                          Apr 28, 2019 by{" "}
                          <span className="blue-color">Dr.Jonathan Barnes</span>
                        </span>
                        {/* Post Text */}
                        <p>
                          Quaerat neque purus ipsum neque dolor primis libero
                          tempus impedit tempor blandit sapien at gravida donec
                          ipsum, at porta justo...
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* END  BLOG POST #1 */}
                  {/* BLOG POST #2 */}
                  <div className="col-md-6">
                    <div className="blog-post">
                      {/* BLOG POST IMAGE */}
                      <div className="blog-post-img">
                        <img
                          className="img-fluid"
                          src="images/blog/post-3-img.jpg"
                          alt="blog-post-image"
                        />
                      </div>
                      {/* BLOG POST TEXT */}
                      <div className="blog-post-txt">
                        {/* Post Title */}
                        <h5 className="h5-sm steelblue-color">
                          <Link href="/single-post">
                            <a>How Weather Impacts Your Health</a>
                          </Link>
                        </h5>
                        {/* Post Data */}
                        <span>
                          Apr 17, 2019 by{" "}
                          <span className="blue-color">Dr.Megan Coleman</span>
                        </span>
                        {/* Post Text */}
                        <p>
                          Quaerat neque purus ipsum neque dolor primis libero
                          tempus impedit tempor blandit sapien at gravida donec
                          ipsum, at porta justo...
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* END  BLOG POST #2 */}
                </div>
                {/* End row */}
              </div>
              {/* END RELATED POSTS */}
              {/* POST COMMENTS */}
              <div className="single-post-comments">
                {/* Title */}
                <h5 className="h5-md steelblue-color">4 Comments</h5>
                {/* COMMENT #1 */}
                <div className="media mt-50">
                  {/* Comment-1 Avatar */}
                  <img
                    className="mr-3"
                    src="images/post-author-1.jpg"
                    alt="comment-avatar"
                  />
                  <div className="media-body">
                    {/* Comment-1 Meta */}
                    <div className="comment-meta">
                      <h5 className="h5-xs mt-0 steelblue-color">Jeffrey</h5>
                      <span className="comment-date">
                        April 20, 2019 at 7:14 PM -
                      </span>
                      <span className="btn-reply">
                        <Link href="#">
                          <a href="#leave-comment" className="internal-link">
                            <i className="fas fa-reply" />
                            Reply
                          </a>
                        </Link>
                      </span>
                    </div>
                    {/* Comment-1 Text */}
                    <p>
                      Etiam sapien sem magna at vitae pulvinar congue augue
                      egestas pretium neque id viverra suscipit egestas magna
                      porta ratione, mollis risus lectus porta rutrum arcu
                      aenean primis in augue luctus neque purus ipsum neque
                      dolor primis suscipit in magna dignissim, porttitor
                      hendrerit diam. Nunc gravida ultrices felis
                    </p>
                    <hr />
                    {/* COMMENT #2 */}
                    <div className="media mt-3">
                      {/* Comment-2 Avatar */}
                      <a href="#" className="pr-3">
                        <img
                          src="images/post-author-2.jpg"
                          alt="comment-avatar"
                        />
                      </a>
                      <div className="media-body">
                        {/* Comment-2 Meta */}
                        <div className="comment-meta">
                          <h5 className="h5-xs mt-0 steelblue-color">Jeremy</h5>
                          <span className="comment-date">
                            April 20, 2019 at 11:35 PM -
                          </span>
                          <span className="btn-reply">
                            <Link href="#">
                              <a
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                href="#leave-comment"
                                className="internal-link"
                              >
                                <i className="fas fa-reply" />
                                Reply
                              </a>
                            </Link>
                          </span>
                        </div>
                        {/* Comment-2 Text */}
                        <p>
                          Etiam sapien sem magna at vitae pulvinar congue augue
                          egestas pretium neque id viverra suscipit porta
                          ratione, mollis risus lectus porta aliquet lorem
                          purus, quis mollis nisi laoreet vitae
                        </p>
                      </div>
                    </div>
                    {/* END COMMENT #2 */}
                  </div>
                </div>
                {/* END COMMENT #1 */}
                <hr />
                {/* COMMENT #3 */}
                <div className="media mt-40">
                  {/* Comment-4 Avatar */}
                  <img
                    className="mr-3"
                    src="images/post-author-3.jpg"
                    alt="comment-avatar"
                  />
                  <div className="media-body">
                    {/* Comment-4 Meta */}
                    <div className="comment-meta">
                      <h5 className="h5-xs mt-0 steelblue-color">Samantha</h5>
                      <span className="comment-date">
                        April 29, 2018 at 5:41 PM -
                      </span>
                      <span className="btn-reply">
                        <Link href="#">
                          <a href="#leave-comment" className="internal-link">
                            <i className="fas fa-reply" />
                            Reply
                          </a>
                        </Link>
                      </span>
                    </div>
                    {/* Comment-4 Text */}
                    <p>
                      Porta ratione, mollis risus lectus porta rutrum arcu
                      aenean primis in augue luctus neque purus ipsum neque
                      dolor primis libero tempus, tempor posuere ligula varius
                      impedit enim tempor vitae pulvinar congue augue egestas.
                      Praesent aliquet lorem purus, quis mollis nisi laoreet
                      vitae. Mauris nec consequat tortor. Duis fermentum a massa
                      in convallis. Quisque eu ultrices enim, et interdum augue
                    </p>
                  </div>
                </div>
                {/* END COMMENT #3 */}
                <hr />
                {/* COMMENT #4 */}
                <div className="media mt-40">
                  {/* Comment-4 Avatar */}
                  <img
                    className="mr-3"
                    src="images/post-author-4.jpg"
                    alt="comment-avatar"
                  />
                  <div className="media-body">
                    {/* Comment-4 Meta */}
                    <div className="comment-meta">
                      <h5 className="h5-xs mt-0 steelblue-color">
                        Robert Peterson
                      </h5>
                      <span className="comment-date">
                        June 11, 2018 at 11:19 AM -
                      </span>
                      <span className="btn-reply">
                        <Link href="#">
                          <a href="#leave-comment" className="internal-link">
                            <i className="fas fa-reply" />
                            Reply
                          </a>
                        </Link>
                      </span>
                    </div>
                    {/* Comment-4 Text */}
                    <p>
                      Etiam sapien sem magna at vitae pulvinar congue augue
                      egestas pretium neque id viverra suscipit egestas magna
                      porta ratione, mollis risus lectus porta rutrum arcu
                      aenean primis in augue auctor integer congue
                    </p>
                  </div>
                </div>
                {/* END COMMENT #4 */}
                <hr />
              </div>
              {/*END POST COMMENTS */}
              {/* COMMENT FORM */}
              <div id="leave-comment">
                {/* Title */}
                <h5 className="h5-md steelblue-color">Leave a Comment</h5>
                {/* Text */}
                <p className="grey-color">
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <form
                  name="commentForm"
                  onSubmit={(e) => e.preventDefault()}
                  className="row comment-form"
                >
                  <div id="input-message" className="col-md-12 input-message">
                    <p>Add Comment *</p>
                    <textarea
                      className="form-control message"
                      name="message"
                      rows={6}
                      placeholder="Enter Your Comment Here* ..."
                      required
                      defaultValue=""
                    />
                  </div>
                  <div id="input-name" className="col-md-12">
                    <p>Name*</p>
                    <input
                      type="text"
                      name="name"
                      className="form-control name"
                      placeholder="Enter Your Name*"
                      required
                    />
                  </div>
                  <div id="input-email" className="col-md-12">
                    <p>Email*</p>
                    <input
                      type="text"
                      name="email"
                      className="form-control email"
                      placeholder="Enter Your Email*"
                      required
                    />
                  </div>
                  {/* Contact Form Button */}
                  <div className="col-lg-12 mt-15 form-btn">
                    <button
                      type="submit"
                      className="btn btn-blue blue-hover submit"
                    >
                      Post Comment
                    </button>
                  </div>
                  {/* Contact Form Message */}
                  <div className="col-md-12 comment-form-msg text-center">
                    <div className="sending-msg">
                      <span className="loading" />
                    </div>
                  </div>
                </form>
              </div>
              {/* END COMMENT FORM */}
            </div>
          </div>
          {/* END SINGLE POST */}
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

export default SinglePostBlogPage;
