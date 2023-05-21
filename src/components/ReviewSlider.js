import { Swiper, SwiperSlide } from "swiper/react";
import { testimonial2Props } from "../sliderProps";

const ReviewSlider = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <Swiper
          {...testimonial2Props}
          className="owl-carousel owl-theme reviews-holder"
        >
          {/* TESTIMONIAL #1 */}
          <SwiperSlide className="review-2">
            <div className="review-txt text-center">
              {/* Quote */}
              <div className="quote">
                <img src="images/quote.png" alt="quote-img" />
              </div>
              {/* Author Avatar */}
              <div className="testimonial-avatar">
                <img
                  src="images/review-author-1.jpg"
                  alt="testimonial-avatar"
                />
              </div>
              {/* Testimonial Text */}
              <p>
                Etiam sapien sem at sagittis congue an augue massa varius
                egestas a suscipit magna undo tempus aliquet porta vitae
              </p>
              {/* Testimonial Author */}
              <div className="review-author">
                <h5 className="h5-sm">Scott Boxer</h5>
                <span>Programmer</span>
              </div>
            </div>
          </SwiperSlide>
          {/*END  TESTIMONIAL #1 */}
          {/* TESTIMONIAL #2 */}
          <SwiperSlide className="review-2">
            <div className="review-txt text-center">
              {/* Quote */}
              <div className="quote">
                <img src="images/quote.png" alt="quote-img" />
              </div>
              {/* Author Avatar */}
              <div className="testimonial-avatar">
                <img
                  src="images/review-author-2.jpg"
                  alt="testimonial-avatar"
                />
              </div>
              {/* Testimonial Text */}
              <p>
                Mauris donec ociis magnisa a sapien etiam sapien congue augue
                egestas et ultrice vitae purus diam integer congue magna ligula
                egestas
              </p>
              {/* Testimonial Author */}
              <div className="review-author">
                <h5 className="h5-sm">Penelopa Peterson</h5>
                <span>Project Manager</span>
              </div>
            </div>
          </SwiperSlide>
          {/* END TESTIMONIAL #2 */}
          {/* TESTIMONIAL #3 */}
          <SwiperSlide className="review-2">
            <div className="review-txt text-center">
              {/* Quote */}
              <div className="quote">
                <img src="images/quote.png" alt="quote-img" />
              </div>
              {/* Author Avatar */}
              <div className="testimonial-avatar">
                <img
                  src="images/review-author-3.jpg"
                  alt="testimonial-avatar"
                />
              </div>
              {/* Testimonial Text */}
              <p>
                At sagittis congue augue an egestas magna ipsum vitae purus
                ipsum primis undo cubilia laoreet augue
              </p>
              {/* Testimonial Author */}
              <div className="review-author">
                <h5 className="h5-sm">M.Scanlon</h5>
                <span>Photographer</span>
              </div>
            </div>
          </SwiperSlide>
          {/* END TESTIMONIAL #3 */}
          {/* TESTIMONIAL #4 */}
          <SwiperSlide className="review-2">
            <div className="review-txt text-center">
              {/* Quote */}
              <div className="quote">
                <img src="images/quote.png" alt="quote-img" />
              </div>
              {/* Author Avatar */}
              <div className="testimonial-avatar">
                <img
                  src="images/review-author-4.jpg"
                  alt="testimonial-avatar"
                />
              </div>
              {/* Testimonial Text */}
              <p>
                Mauris donec ociis magnis sapien etiam sapien congue augue
                pretium ligula a lectus aenean magna mauris
              </p>
              {/* Testimonial Author */}
              <div className="review-author">
                <h5 className="h5-sm">Jeremy Kruse</h5>
                <span>Graphic Designer</span>
              </div>
            </div>
          </SwiperSlide>
          {/* END TESTIMONIAL #4 */}
          {/* TESTIMONIAL #5 */}
          <SwiperSlide className="review-2">
            <div className="review-txt text-center">
              {/* Quote */}
              <div className="quote">
                <img src="images/quote.png" alt="quote-img" />
              </div>
              {/* Author Avatar */}
              <div className="testimonial-avatar">
                <img
                  src="images/review-author-5.jpg"
                  alt="testimonial-avatar"
                />
              </div>
              {/* Testimonial Text */}
              <p>
                An augue in cubilia laoreet magna suscipit egestas magna ipsum
                at purus ipsum primis in augue ulta ligula egestas
              </p>
              {/* Testimonial Author */}
              <div className="review-author">
                <h5 className="h5-sm">Evelyn Martinez</h5>
                <span>Senior UX/UI Designer</span>
              </div>
            </div>
          </SwiperSlide>
          {/* END TESTIMONIAL #5 */}
          {/* TESTIMONIAL #6 */}
          <SwiperSlide className="review-2">
            <div className="review-txt text-center">
              {/* Quote */}
              <div className="quote">
                <img src="images/quote.png" alt="quote-img" />
              </div>
              {/* Author Avatar */}
              <div className="testimonial-avatar">
                <img
                  src="images/review-author-6.jpg"
                  alt="testimonial-avatar"
                />
              </div>
              {/* Testimonial Text */}
              <p>
                An augue cubilia laoreet undo magna at risus suscipit egestas
                magna an ipsum ligula vitae and purus ipsum primis
              </p>
              {/* Testimonial Author */}
              <div className="review-author">
                <h5 className="h5-sm">Dan Hodges</h5>
                <span>Internet Surfer</span>
              </div>
            </div>
          </SwiperSlide>
          {/* END TESTIMONIAL #6 */}
          {/* TESTIMONIAL #7 */}
          <SwiperSlide className="review-2">
            <div className="review-txt text-center">
              {/* Quote */}
              <div className="quote">
                <img src="images/quote.png" alt="quote-img" />
              </div>
              {/* Author Avatar */}
              <div className="testimonial-avatar">
                <img
                  src="images/review-author-7.jpg"
                  alt="testimonial-avatar"
                />
              </div>
              {/* Testimonial Text */}
              <p>
                Augue egestas volutpat egestas augue in cubilia laoreet magna
                suscipit luctus and dolor blandit vitae
              </p>
              {/* Testimonial Author */}
              <div className="review-author">
                <h5 className="h5-sm">Isabel M.</h5>
                <span>SEO Manager</span>
              </div>
            </div>
          </SwiperSlide>
          {/* END TESTIMONIAL #7 */}
          {/* TESTIMONIAL #8 */}
          <SwiperSlide className="review-2">
            <div className="review-txt text-center">
              {/* Quote */}
              <div className="quote">
                <img src="images/quote.png" alt="quote-img" />
              </div>
              {/* Author Avatar */}
              <div className="testimonial-avatar">
                <img
                  src="images/review-author-8.jpg"
                  alt="testimonial-avatar"
                />
              </div>
              {/* Testimonial Text */}
              <p>
                Augue egestas volutpat egestas augue in cubilia laoreet magna
                suscipit luctus and dolor blandit vitae
              </p>
              {/* Testimonial Author */}
              <div className="review-author">
                <h5 className="h5-sm">Alex Ross</h5>
                <span>Patient</span>
              </div>
            </div>
          </SwiperSlide>
          {/* END TESTIMONIAL #8 */}
          {/* TESTIMONIAL #9*/}
          <SwiperSlide className="review-2">
            <div className="review-txt text-center">
              {/* Quote */}
              <div className="quote">
                <img src="images/quote.png" alt="quote-img" />
              </div>
              {/* Author Avatar */}
              <div className="testimonial-avatar">
                <img
                  src="images/review-author-9.jpg"
                  alt="testimonial-avatar"
                />
              </div>
              {/* Testimonial Text */}
              <p>
                Augue egestas volutpat egestas augue in cubilia laoreet magna
                suscipit luctus magna dolor neque vitae
              </p>
              {/* Testimonial Author */}
              <div className="review-author">
                <h5 className="h5-sm">Alisa Milano</h5>
                <span>Housewife</span>
              </div>
            </div>
          </SwiperSlide>
          {/* END TESTIMONIAL #9 */}
          <div className="owl-dots"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSlider;
