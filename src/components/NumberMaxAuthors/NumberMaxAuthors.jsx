import React, { useEffect, useRef } from 'react'
import './numberMaxAuthors.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function NumberMaxAuthors({ block_state }) {
  const wrapper = useRef()

  useEffect(() => {
    const heading = wrapper.current.querySelector('.number-max-authors__body')
    const authors = wrapper.current.querySelector('.number-max-authors__authors-wrapper')

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

    tl.fromTo(heading, {
      scale: 0,
      opacity: 0,
    }, {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: 'power3.out',
    }, 0)
    tl.fromTo(authors, {
      scale: 0,
      opacity: 0,
    }, {
      delay: 0.2,
      scale: 1,
      opacity: 1,
      duration: 2,
      ease: 'power3.out',
    }, 0)

  }, [])


  return (
    <section className='section number-max-authors' ref={wrapper}>
      <div className="container">
        <div className="number-max-authors__wrapper">
          <div className="number-max-authors__body">
            <div className="number-max-authors__number">{block_state.title}</div>
            <div className="number-max-authors__desc text-35" dangerouslySetInnerHTML={{ __html: block_state.desc }}></div>
          </div>

          <div className="number-max-authors__authors">
            <div className="number-max-authors__authors-wrapper">
              {block_state.authors.map((author, i) => (
                <div key={i} className="number-max-authors__img">
                  <img src={author.img} alt="img" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}