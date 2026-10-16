import React, { useEffect, useRef } from 'react'

import 'swiper/css';
import "swiper/css/pagination";
import './formatsAuthors.css'

import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function FormatsAuthors({ block_state }) {
  let swiper = useRef();

  useEffect(() => {
    swiper.current.swiper.slideTo(1)
  }, [])

  return (
    <section className='section formats-authors'>
      <div className="container">
        <div className="formats-authors__title title h2" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>

        <Swiper className='formats-authors__slider'
          ref={swiper}
          modules={[Navigation, Pagination, Mousewheel]}
          spaceBetween={-25}
          speed={800}
          mousewheel={{
            enabled: true,
            forceToAxis: true
          }}
          navigation={{
            prevEl: '.formats-authors__prev',
            nextEl: '.formats-authors__next',
          }}
          slidesPerView='auto'
          pagination={{
            el: '.formats-authors__pagination',
            clickable: true,
          }}
          centeredSlides={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            570: {
              slidesPerView: 'auto'
            },
          }}
        >

          {block_state.list.map((card, i) => {
            return (
              <SwiperSlide key={i} className='formats-authors__slide'>
                <FormatsAuthorsCard card={card} />
              </SwiperSlide>
            )
          })}
          <div className="formats-authors__controls">
            <div className="formats-authors__prev slider-prev">
              <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="48.2755" y="48.2755" width="48.2755" height="48.2755" rx="24.1377" transform="rotate(-180 48.2755 48.2755)" fill="url(#paint0_linear_11239_36004)" />
                <path fillRule="evenodd" clipRule="evenodd" d="M28.0612 33.6405C28.6437 33.0923 28.6715 32.1758 28.1233 31.5933L20.7817 23.7929L28.1233 15.9924C28.6715 15.41 28.6437 14.4934 28.0612 13.9452C27.4788 13.397 26.5622 13.4248 26.014 14.0073L17.7382 22.8003C17.2134 23.3579 17.2134 24.2278 17.7382 24.7855L26.014 33.5785C26.5622 34.161 27.4788 34.1887 28.0612 33.6405Z" fill="black" />
                <defs>
                  <linearGradient id="paint0_linear_11239_36004" x1="72.4132" y1="48.2755" x2="72.4132" y2="96.551" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#CDFBFF" />
                    <stop offset="1" stopColor="#00EAFF" />
                  </linearGradient>
                </defs>
              </svg>

            </div>
            <div className="formats-authors__pagination slider-pagination slider-pagination_gradient swiper-pagination"></div>
            <div className="formats-authors__next slider-next">
              <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48.2755" height="48.2755" rx="24.1377" transform="matrix(1 0 0 -1 0 48.2755)" fill="url(#paint0_linear_11239_36007)" />
                <path fillRule="evenodd" clipRule="evenodd" d="M20.2143 33.6405C19.6318 33.0923 19.604 32.1758 20.1522 31.5933L27.4938 23.7929L20.1522 15.9924C19.604 15.41 19.6318 14.4934 20.2143 13.9452C20.7967 13.397 21.7133 13.4248 22.2615 14.0073L30.5373 22.8003C31.0621 23.3579 31.0621 24.2278 30.5373 24.7855L22.2615 33.5785C21.7133 34.161 20.7967 34.1887 20.2143 33.6405Z" fill="black" />
                <defs>
                  <linearGradient id="paint0_linear_11239_36007" x1="24.1377" y1="0" x2="24.1377" y2="48.2755" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#CDFBFF" />
                    <stop offset="1" stopColor="#00EAFF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </Swiper>

        <a href={block_state.btn_link} class="formats-authors__btn btn btn_rounded btn_border fw-500 text-26">
          {block_state.btn_text}
        </a>
      </div>
    </section>
  )
}

function FormatsAuthorsCard({ card }) {
  return (
    <div className="formats-authors-card">
      <div className="formats-authors-card__body">
        <div className="formats-authors-card__title text-35 fw-500" dangerouslySetInnerHTML={{ __html: card.name }}></div>
        <div className="formats-authors-card__desc text-24" dangerouslySetInnerHTML={{ __html: card.desc }}></div>
        <div className="formats-authors-card__label text-22" dangerouslySetInnerHTML={{ __html: card.label }}></div>
        <div className="formats-authors-card__socials">
          {card.socials.map((social, j) => {
            return (
              <a href={social.link} target='_blank' className="formats-authors-card__social" key={j}>
                <img src={social.icon} alt="icon" />
              </a>
            )
          })}
        </div>
      </div>
      <div className="formats-authors-card__img">
        <img src={card.img} alt="img" />
      </div>
    </div>
  )
}
