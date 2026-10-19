import React, { useEffect, useRef } from 'react'
import './numberAuthors.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function NumberAuthors({ block_state }) {
  const wrapper = useRef()

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper.current,
        start: 'top 50%',
        end: 'bottom top',
        scrub: false,
        markers: false,
        pin: false,
      }
    })

    const number = gsap.utils.selector(wrapper)('.number-authors__number')
    tl.to(number, {
      textContent: block_state.number,
      duration: 1.5,
      ease: 'power1.in',
      snap: { textContent: 0.1 },
      onUpdate: function () {
        this.targets()[0].textContent = (+this.targets()[0].textContent).toFixed(1)
      },
    }, 0)
  }, [])

  return (
    <section className='section number-authors' ref={wrapper}>
      <div className="container">
        <div className="number-authors__title title h2" dangerouslySetInnerHTML={{ __html: block_state.title }} />

        <div className="number-authors__wrapper">
          <div className="number-authors__body">
            <div className="number-authors__number">0.1</div>
            <div className="number-authors__number-text" dangerouslySetInnerHTML={{ __html: block_state.number_text }}></div>
          </div>
          <div className="number-authors__authors">
            {block_state.img_list.map((img, i) => (
              <div key={i} className="number-authors__img">
                <img src={img.img} alt="img" />
              </div>
            ))}
          </div>
        </div>

        <div className="number-authors__label text-24 fw-500" dangerouslySetInnerHTML={{ __html: block_state.label }} />
      </div>
    </section>
  )
}