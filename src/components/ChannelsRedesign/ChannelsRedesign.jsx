import React, { useEffect, useRef, useState } from 'react'
import 'swiper/css';
import "swiper/css/pagination";
import './channelsRedesign.css'
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ChannelsRedesign({ block_state }) {
  let swiper = useRef();
  useEffect(() => {
    if (window.innerWidth > 768) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: swiper.current,
          start: "bottom bottom",
          end: "bottom bottom",
          scrub: false,
          markers: false,
          pin: false,
        }
      });

      tl.fromTo(gsap.utils.selector(swiper)('.swiper-wrapper'), {
        xPercent: 50,
      }, {
        xPercent: 0,
        duration: 2.5,
        ease: "elastic.out(0.8,0.4)",
      });
    }
  }, [])

  const [chanellsTag, setChanellsTag] = useState(block_state.tags[0].name)

  function filterChannels(tag) {
    if (chanellsTag !== tag) {
      setChanellsTag(tag)
      swiper.current.swiper.update()
      // swiper.current.swiper.slideToLoop(0)
    }
  }

  let resultChannelsArr = block_state.channels.filter((channel) => channel.tags.includes(chanellsTag))

  if (!chanellsTag) {
    resultChannelsArr = block_state.channels
  }

  return (
    <>
      <section className='section channels-redesign'>
        <div className="container">
          {
            block_state.title &&
            <h2 className="channels-redesign__title title h2" dangerouslySetInnerHTML={{ __html: block_state.title }}></h2>
          }
          <div className="channels-redesign__wrapper">
            <div className="channels-redesign__tags">
              {block_state.tags.map((tag, i) => {
                return (
                  <div
                    key={i}
                    className={"channels-redesign__tag text-20 fw-500 btn btn_rounded btn_transparent" + (chanellsTag === tag.name ? ' channels__tag_active' : '')}
                    onClick={() => { filterChannels(tag.name) }}
                  >{tag.name}</div>
                )
              })}
            </div>
            <Swiper className='channels-redesign__slider'
              ref={swiper}
              modules={[Navigation, Pagination, Mousewheel]}
              spaceBetween={24}
              speed={800}
              mousewheel={{
                enabled: true,
                forceToAxis: true
              }}
              navigation={{
                prevEl: '.channels-redesign__prev',
                nextEl: '.channels-redesign__next',
              }}
              slidesPerView='auto'
              pagination={{
                el: '.channels-redesign__pagination',
                clickable: true,
                dynamicBullets: true,
              }}
              centeredSlides={true}
              loop={true}
              loopAdditionalSlides={10}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                570: {
                  slidesPerView: 'auto'
                },
              }}
            >

              {[...Array(3)].map((row, i) => resultChannelsArr.map((channel, i) => {
                return (
                  <SwiperSlide key={i} className='channels-redesign__slide'>
                    <div className="channels-redesign__card">
                      <div className="channels-redesign__img">
                        <img src={channel.photoPath} alt="img" />
                        <div className="channels-redesign__icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                            <path d="M4.33609 13.8392L5.07712 13.1677L4.33609 13.8392C4.41679 13.9282 4.4623 14.061 4.44491 14.2008L3.93836 18.2738C3.71257 20.0893 5.54097 21.6302 7.30487 20.7566L10.8611 18.9953C10.9502 18.9512 11.0498 18.9512 11.1389 18.9953L14.6951 20.7566C16.459 21.6303 18.2874 20.0893 18.0616 18.2738L17.5551 14.2008L16.5627 14.3242L17.5551 14.2008C17.5377 14.061 17.5832 13.9282 17.6639 13.8392L20.3683 10.8547C21.5954 9.50044 20.9532 7.19977 19.0817 6.83411L15.2125 6.07811C15.1203 6.06011 15.024 5.99623 14.964 5.88156L13.0792 2.27573C12.1901 0.574753 9.80986 0.57476 8.92075 2.27573L7.03596 5.88156C6.97602 5.99622 6.87967 6.06011 6.78755 6.07811L2.91826 6.83411C1.04676 7.19977 0.404559 9.50044 1.63167 10.8547L4.33609 13.8392ZM14.8298 9.76088L14.8296 9.76111L14.8298 9.76088Z"
                              fill="white" stroke="black" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                      <div className="channels-redesign__name h3" dangerouslySetInnerHTML={{ __html: channel.name }}></div>
                      <div className="channels-redesign__desc" dangerouslySetInnerHTML={{ __html: channel.desc }}></div>
                      <div className="channels-redesign__bottom">{channel.subscribers}</div>
                    </div>
                  </SwiperSlide>
                )
              }))}

              <div className="channels-redesign__pagination slider-pagination swiper-pagination"></div>
              <div className="channels-redesign__navigation slider-navigation">
                <div className="channels-redesign__prev slider-prev">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.7365 17.7364C15.088 17.3849 15.088 16.8151 14.7365 16.4636L10.2729 12L14.7365 7.53639C15.088 7.18492 15.088 6.61507 14.7365 6.2636C14.385 5.91213 13.8152 5.91213 13.4637 6.26361L8.3637 11.3636C8.01223 11.7151 8.01223 12.285 8.3637 12.6364L13.4637 17.7364C13.8152 18.0879 14.385 18.0879 14.7365 17.7364Z" fill="#7C8A9A" />
                  </svg>
                </div>
                <div className="channels-redesign__next slider-next">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.2635 6.26361C8.91203 6.61508 8.91203 7.18493 9.26351 7.5364L13.7271 12L9.2635 16.4636C8.91203 16.8151 8.91203 17.3849 9.26351 17.7364C9.61498 18.0879 10.1848 18.0879 10.5363 17.7364L15.6363 12.6364C15.9878 12.2849 15.9878 11.715 15.6363 11.3636L10.5363 6.2636C10.1848 5.91213 9.61498 5.91213 9.2635 6.26361Z" fill="#7C8A9A" />
                  </svg>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}
