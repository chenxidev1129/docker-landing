import Link from "next/link";
import React from "react";

const Demo10Blog1 = () => {
    return (
        <section id="blog-1" className="wide-60 blog-section division">
            <div className="container">
                {/* SECTION TITLE */}
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 section-title">
                        {/* Title 	*/}
                        <h3 className="h3-md steelblue-color">
                            Our Stories, Tips &amp; Latest News
                        </h3>
                        {/* Text */}
                        <p>
                            Aliquam a augue suscipit, luctus neque purus ipsum
                            neque dolor primis libero at tempus, blandit posuere
                            ligula varius congue cursus porta feugiat
                        </p>
                    </div>
                </div>
                {/* BLOG POSTS HOLDER */}
                <div className="row">
                    {/* BLOG POST #1 */}
                    <div className="col-lg-4">
                        <div
                            className="blog-post wow fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            {/* BLOG POST IMAGE */}
                            <div className="blog-post-img">
                                <img
                                    className="img-fluid"
                                    src="images/blog/post-1-img.jpg"
                                    alt="blog-post-image"
                                />
                            </div>
                            {/* BLOG POST TITLE */}
                            <div className="blog-post-txt">
                                {/* Post Title */}
                                <h5 className="h5-sm steelblue-color">
                                    <Link href="/single-post">
                                        <a>
                                            5 Benefits Of Integrative Medicine
                                        </a>
                                    </Link>
                                </h5>
                                {/* Post Data */}
                                <span>
                                    May 03, 2019 by
                                    <span>Dr.Jeremy Smith</span>
                                </span>
                                {/* Post Text */}
                                <p>
                                    Quaerat neque purus ipsum neque dolor primis
                                    libero tempus impedit tempor blandit sapien
                                    at gravida donec ipsum, at porta justo...
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* END  BLOG POST #1 */}
                    {/* BLOG POST #2 */}
                    <div className="col-lg-4">
                        <div
                            className="blog-post wow fadeInUp"
                            data-wow-delay="0.6s"
                        >
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
                                    Apr 28, 2019 by
                                    <span>Dr.Jonathan Barnes</span>
                                </span>
                                {/* Post Text */}
                                <p>
                                    Quaerat neque purus ipsum neque dolor primis
                                    libero tempus impedit tempor blandit sapien
                                    at gravida donec ipsum, at porta justo...
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* END  BLOG POST #2 */}
                    {/* BLOG POST #3 */}
                    <div className="col-lg-4">
                        <div
                            className="blog-post wow fadeInUp"
                            data-wow-delay="0.8s"
                        >
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
                                    Apr 17, 2019 by
                                    <span>Dr.Megan Coleman</span>
                                </span>
                                {/* Post Text */}
                                <p>
                                    Quaerat neque purus ipsum neque dolor primis
                                    libero tempus impedit tempor blandit sapien
                                    at gravida donec ipsum, at porta justo...
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* END  BLOG POST #3 */}
                </div>
                {/* END BLOG POSTS HOLDER */}
            </div>
            {/* End container */}
        </section>
    );
};

export default Demo10Blog1;
