import React, { useEffect, useRef, useState } from 'react'
import 'swiper/css';
import './caseRedesign.css'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePageContext } from 'vike-react/usePageContext';
gsap.registerPlugin(ScrollTrigger);

export default function CaseRedesign({ block_state }) {
  let wrapper = useRef();

  const { data } = usePageContext();
  const cases = data.cases || [];

  useEffect(() => {
    if (window.innerWidth > 1200) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper.current,
          start: "top bottom",
          end: "+=" + window.innerHeight,
          scrub: true,
          markers: false,
          pin: false,
        }
      });
    }
  }, [])

  return (
    <>
      <section className='section case-redesign ' ref={wrapper}>
        <div className="container">
          <h2 className="case-redesign__title title h2" dangerouslySetInnerHTML={{ __html: block_state.title }}></h2>

          <Swiper className='case-redesign__slider'
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            speed={800}
            // loop={true}
            loopAdditionalSlides={2}
            slidesPerView={'auto'}

            pagination={{
              el: '.case-redesign__pagination',
              clickable: true,
              dynamicBullets: true
            }}

            navigation={{
              prevEl: '.case-redesign__prev',
              nextEl: '.case-redesign__next',
            }}

            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              700: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1025: {
                slidesPerView: 'auto',
                spaceBetween: 24,
              },
            }}
          >
            {cases.map((caseItem, i) => {
              return (
                <SwiperSlide key={i} className='case-redesign__slide'>
                  <a href={'/top-cases/' + caseItem.slug} className='case-redesign__slide-wrapper'>
                    <div className="case-redesign__name text-32 fw-500" dangerouslySetInnerHTML={{ __html: caseItem.desc }}></div>
                    <div className="case-redesign__bottom">
                      <div className="case-redesign__icon">
                        {caseItem.logo &&
                          <img src={caseItem.logo} alt="img" />
                        }
                      </div>
                    </div>
                    <div className="case-redesign__img">
                      <img src={caseItem.preview_img_vertical} alt="img" />
                    </div>
                  </a>
                </SwiperSlide>
              )
            })}

            <div className="case-redesign__navigation slider-navigation">
              <div className="case-redesign__prev slider-prev">
                <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="48.2755" y="48.2755" width="48.2755" height="48.2755" rx="24.1377" transform="rotate(-180 48.2755 48.2755)" fill="url(#paint0_linear_11085_57665)" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M28.0613 33.6404C28.6437 33.0922 28.6715 32.1756 28.1233 31.5932L20.7817 23.7927L28.1233 15.9923C28.6715 15.4098 28.6437 14.4933 28.0613 13.9451C27.4788 13.3969 26.5622 13.4246 26.014 14.0071L17.7382 22.8001C17.2134 23.3578 17.2134 24.2277 17.7382 24.7853L26.014 33.5784C26.5622 34.1608 27.4788 34.1886 28.0613 33.6404Z" fill="black" />
                  <defs>
                    <linearGradient id="paint0_linear_11085_57665" x1="72.4133" y1="48.2755" x2="72.4133" y2="96.551" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#CDFBFF" />
                      <stop offset="1" stopColor="#00EAFF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="case-redesign__next slider-next">
                <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48.2755" height="48.2755" rx="24.1377" transform="matrix(1 0 0 -1 0 48.2755)" fill="url(#paint0_linear_11085_57662)" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M20.2143 33.6404C19.6318 33.0922 19.604 32.1756 20.1522 31.5932L27.4938 23.7927L20.1522 15.9923C19.604 15.4098 19.6318 14.4933 20.2143 13.9451C20.7967 13.3969 21.7133 13.4246 22.2615 14.0071L30.5373 22.8001C31.0621 23.3578 31.0621 24.2277 30.5373 24.7853L22.2615 33.5784C21.7133 34.1608 20.7967 34.1886 20.2143 33.6404Z" fill="black" />
                  <defs>
                    <linearGradient id="paint0_linear_11085_57662" x1="24.1377" y1="0" x2="24.1377" y2="48.2755" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#CDFBFF" />
                      <stop offset="1" stopColor="#00EAFF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </Swiper>

          <div className="case-redesign__pagination slider-pagination slider-pagination_gradient swiper-pagination"></div>
          <a href={block_state.btn_link} className="case-redesign__btn btn btn_rounded btn_border fw-500 text-26">
            {block_state.btn_text}
          </a>
        </div>
      </section>
    </>
  )
}
