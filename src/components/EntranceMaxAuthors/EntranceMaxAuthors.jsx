import React, { useEffect, useRef } from 'react'
import './entranceMaxAuthors.css'
import { handleTracking } from 'utils/tracking'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function EntranceMaxAuthors({ block_state }) {

  const wrapper = useRef()

  useEffect(() => {
    const img = wrapper.current.querySelector('.entrance-max-authors__img img')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper.current,
        start: 'top 30%',
        end: 'bottom top',
        scrub: false,
        markers: false,
        pin: false,
      }
    })

    tl.fromTo(img, {
      scale: 0,
      opacity: 0,
    }, {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: 'power3.out',
    })

  }, [])

  return (
    <section className='entrance-max-authors section' ref={wrapper}>
      <div className="container">
        <div className="entrance-max-authors__wrapper">
          <div className="entrance-max-authors__body">
            <div className="entrance-max-authors__title" dangerouslySetInnerHTML={{ __html: block_state.title }} />
            <a
              href={block_state.btn_link}
              className="entrance-max-authors__btn btn btn_big btn_rounded btn_border text-26 fw-500"
              onClick={() => handleTracking('max-authors-btn')}
            >
              {block_state.btn_text}
            </a>
          </div>

          <div className="entrance-max-authors__media">
            <div className="entrance-max-authors__bg">
              <img src={block_state.img_bg} alt="img" />
            </div>
            <div className="entrance-max-authors__img">
              <img src={block_state.img} alt="img" />
            </div>
          </div>
        </div>

        <div className="entrance-max-authors__list">
          {block_state.list.map((item, index) => {
            return (
              <div className="entrance-max-authors__list-item" key={index}>
                <div className="entrance-max-authors__list-icon">
                  <img src={item.icon} alt="icon" />
                </div>
                <div className="entrance-max-authors__list-text text-24 fw-600" dangerouslySetInnerHTML={{ __html: item.text }}></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}