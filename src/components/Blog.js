import React from 'react'

const Blog = () => {
  return (
    <>

<section id="testimonials" className="position-relative">
      <div className="container">
        <div className="row">
          <div className="review-content position-relative">
            <div className="swiper-icon swiper-arrow swiper-arrow-prev position-absolute d-flex align-items-center">
              <svg className="chevron-left">
                <use xlinkHref="#chevron-left" />
              </svg>
            </div>
            <div className="swiper testimonial-swiper">
              <div className="quotation text-center">
                <svg className="quote">
                  <use xlinkHref="#quote" />
                </svg>
              </div>
              <div className="swiper-wrapper">
                <div className="swiper-slide text-center d-flex justify-content-center">
                  <div className="review-item col-md-10">
                    <i className="icon icon-review"></i>
                    <blockquote>“Tempus oncu enim pellen tesque este pretium in neque,
                         elit morbi sagittis lorem habi mattis Pellen tesque pretium feugiat vel morbi suspen dise sagittis lorem habi tasse morbi.”</blockquote>
                    <div className="rating">
                      <svg className="star star-fill">
                        <use xlinkHref="#star-fill"></use>
                      </svg>
                      <svg className="star star-fill">
                        <use xlinkHref="#star-fill"></use>
                      </svg>
                      <svg className="star star-fill">
                        <use xlinkHref="#star-fill"></use>
                      </svg>
                      <svg className="star star-half">
                        <use xlinkHref="#star-half"></use>
                      </svg>
                      <svg className="star star-empty">
                        <use xlinkHref="#star-empty"></use>
                      </svg>
                    </div>
                    <div className="author-detail">
                      <div className="name text-dark text-uppercase pt-2">Emma Chamberlin</div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide text-center d-flex justify-content-center">
                  <div className="review-item col-md-10">
                    <i className="icon icon-review"></i>
                    <blockquote>“A blog is a digital publication that can complement a website or exist independently.
                         A blog may include articles, short posts, listicles, infographics, videos, and other digital content.”</blockquote>
                    <div className="rating">
                      <svg className="star star-fill">
                        <use xlinkHref="#star-fill"></use>
                      </svg>
                      <svg className="star star-fill">
                        <use xlinkHref="#star-fill"></use>
                      </svg>
                      <svg className="star star-fill">
                        <use xlinkHref="#star-fill"></use>
                      </svg>
                      <svg className="star star-half">
                        <use xlinkHref="#star-half"></use>
                      </svg>
                      <svg className="star star-empty">
                        <use xlinkHref="#star-empty"></use>
                      </svg>
                    </div>
                    <div className="author-detail">
                      <div className="name text-dark text-uppercase pt-2">Jennie Rose</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-icon swiper-arrow swiper-arrow-next position-absolute d-flex align-items-center">
              <svg className="chevron-right">
                <use xlinkHref="#chevron-right" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </section>
    </>
  )
}

export default Blog