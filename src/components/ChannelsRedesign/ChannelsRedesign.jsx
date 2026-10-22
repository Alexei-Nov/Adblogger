import React, { useEffect, useRef, useState } from 'react'
import 'swiper/css';
import "swiper/css/pagination";
import './channelsRedesign.css'
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function ChannelsRedesign({ block_state }) {
  const swiper = useRef();
  const swiperTags = useRef();
  const [chanellsTag, setChanellsTag] = useState(0);

  function filterChannels(index) {
    const count = block_state.tags.length;
    const nextIndex = (index + count) % count;

    setChanellsTag(nextIndex);
    swiper.current.swiper.slideToLoop(2);
  }

  const resultChannelsArr = block_state.channels.filter((channel) =>
    channel.tags.includes(block_state.tags[chanellsTag].name)
  );

  useEffect(() => {
    swiper.current.swiper.slideToLoop(2)
  }, [])

  return (
    <>
      <section className='section channels-redesign'>
        <div className="container">
          {
            block_state.title &&
            <h2 className="channels-redesign__title title h2" dangerouslySetInnerHTML={{ __html: block_state.title }}></h2>
          }
          <div className="channels-redesign__wrapper">
            <div className="channels-redesign__tags text-20 fw-500">
              <Swiper className='channels-redesign__slider-tags'
                ref={swiperTags}
                modules={[Navigation]}
                spaceBetween={0}
                speed={800}
                navigation={{
                  prevEl: '.channels-redesign__prev-tags',
                  nextEl: '.channels-redesign__next-tags',
                }}
                loop={true}
                slidesPerView='auto'
                centeredSlides={true}
                allowTouchMove={false}
              >
                {block_state.tags.map((tag, index) => {
                  return (
                    <SwiperSlide key={index} className={'channels-redesign__slide-tag ' + index}>
                      <div
                        className={"channels-redesign__tag btn btn_rounded btn_transparent" + (chanellsTag === index ? ' channels-redesign__tag_active' : '')}
                        onClick={() => { filterChannels(index) }}
                      >{tag.name}</div>
                    </SwiperSlide>
                  )
                })}

                <div className="channels-redesign__navigation slider-navigation">
                  <div
                    className="channels-redesign__prev-tags channels-redesign__navigation-btn slider-prev"
                    onClick={() => { filterChannels(chanellsTag - 1) }}
                  >
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
                  <div
                    className="channels-redesign__next-tags channels-redesign__navigation-btn slider-next"
                    onClick={() => { filterChannels(chanellsTag + 1) }}
                  >
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
            </div>

            <div className="channels-redesign__panel">
              {block_state.tags.map((tag, i) => {
                return (
                  <div key={i} className={"channels-redesign__panel-item" + (chanellsTag === i ? ' channels-redesign__panel-item_active' : '')}>
                    <div className="channels-redesign__panel-money fw-600 h2" dangerouslySetInnerHTML={{ __html: tag.money }}></div>
                    <div className="channels-redesign__panel-text text-24 fw-500" dangerouslySetInnerHTML={{ __html: block_state.label }}></div>
                    <picture className="channels-redesign__panel-img">
                      <source media="(max-width: 1024px)" srcSet={tag.img_bg_mob} />
                      <img src={tag.img_bg} alt="img" />
                    </picture>
                  </div>
                )
              })}

            </div>
            <Swiper className='channels-redesign__slider'
              ref={swiper}
              modules={[Navigation, Pagination, Mousewheel]}
              spaceBetween={5}
              speed={800}
              mousewheel={{
                enabled: true,
                forceToAxis: true
              }}
              navigation={{
                prevEl: '.channels-redesign__prev',
                nextEl: '.channels-redesign__next',
              }}
              slidesPerView='1'
              pagination={{
                el: '.channels-redesign__pagination',
                clickable: true,
                dynamicBullets: true,
              }}
              loop={true}
              loopAdditionalSlides={10}
            >

              {[...Array(3)].map((row, i) => resultChannelsArr.map((channel, i) => {
                return (
                  <SwiperSlide key={i} className='channels-redesign__slide'>
                    <div className="channels-redesign__card">
                      <div className="channels-redesign__card-top">
                        <div className="channels-redesign__card-col">
                          <div className="channels-redesign__subscribers">
                            <div className="channels-redesign__subscribers-logo">
                              <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 13.8705C0 7.33188 0 4.06257 2.03129 2.03129C4.06257 0 7.33188 0 13.8705 0H15.0264C21.565 0 24.8343 0 26.8656 2.03129C28.8968 4.06257 28.8968 7.33188 28.8968 13.8705V15.0264C28.8968 21.565 28.8968 24.8343 26.8656 26.8656C24.8343 28.8968 21.565 28.8968 15.0264 28.8968H13.8705C7.33188 28.8968 4.06257 28.8968 2.03129 26.8656C0 24.8343 0 21.565 0 15.0264V13.8705Z" fill="#0077FF" />
                                <path d="M15.3755 20.8171C8.78942 20.8171 5.03287 16.302 4.87634 8.78882H8.17539C8.28375 14.3033 10.7159 16.6391 12.6423 17.1207V8.78882H15.7488V13.5447C17.6512 13.34 19.6497 11.1728 20.3239 8.78882H23.4304C22.9127 11.7267 20.7454 13.8939 19.2042 14.7849C20.7454 15.5073 23.2138 17.3977 24.153 20.8171H20.7334C19.9989 18.5295 18.1689 16.7595 15.7488 16.5187V20.8171H15.3755Z" fill="white" />
                              </svg>
                            </div>
                            <div className="channels-redesign__subscribers-text text-20" dangerouslySetInnerHTML={{ __html: channel.subscribers }}></div>
                          </div>
                          <div className="channels-redesign__name text-32 fw-500" dangerouslySetInnerHTML={{ __html: channel.name }}></div>
                        </div>
                        <div className="channels-redesign__img">
                          <img src={channel.photoPath} alt="img" />
                        </div>
                      </div>
                      <div className="channels-redesign__desc text-28" dangerouslySetInnerHTML={{ __html: channel.desc }}></div>
                    </div>
                  </SwiperSlide>
                )
              }))}

              <div className="channels-redesign__navigation slider-navigation">
                <div className="channels-redesign__prev channels-redesign__navigation-btn slider-prev">
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
                <div className="channels-redesign__next channels-redesign__navigation-btn slider-next">
                  <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="48.2755" height="48.2755" rx="24.1377" transform="matrix(1 0 0 -1 0 48.2755)" fill="url(#paint0_linear_11683_3490)" />
                    <path d="M20.2143 33.6405C19.6318 33.0923 19.604 32.1758 20.1522 31.5933L27.4938 23.7929L20.1522 15.9924C19.604 15.41 19.6318 14.4934 20.2143 13.9452C20.7967 13.397 21.7133 13.4248 22.2615 14.0073L30.5373 22.8003C31.0621 23.3579 31.0621 24.2278 30.5373 24.7855L22.2615 33.5785C21.7133 34.161 20.7967 34.1887 20.2143 33.6405Z" fillRule="evenodd" clipRule="evenodd" fill="black" />
                    <defs>
                      <linearGradient id="paint0_linear_11683_3490" x1="24.1377" y1="0" x2="24.1377" y2="48.2755" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#CDFBFF" />
                        <stop offset="1" stopColor="#00EAFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </Swiper>
          </div>
          <div className="channels-redesign__bottom">
            <div className="channels-redesign__bottom-text text-18 fw-500">
              *в категории на платформе VK AdBlogger
            </div>
            <div className="channels-redesign__pagination slider-pagination slider-pagination_gradient swiper-pagination"></div>
          </div>

        </div>
      </section>
    </>
  )
}
