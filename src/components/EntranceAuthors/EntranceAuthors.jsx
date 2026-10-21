import React, { useEffect, useState } from 'react'
import './entranceAuthors.css'
import { useSelector } from 'react-redux'

export default function EntranceAuthors({ block_state }) {
  const btnState = useSelector(state => state.toolkit.registrationBtn)
  const [activeTag, setActiveTag] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTag(prev => (prev + 1) % block_state.slider.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [block_state.slider.length])

  return (
    <>
      <section className='section entrance-authors'>
        <div className="container">
          <div className="entrance-authors__wrapper">
            <div className="entrance-authors__body">
              <div className="entrance-authors__tags text-20 fw-500">
                {block_state.slider.map((slide, index) => {
                  return (
                    <div className={"entrance-authors__tag" + (activeTag === index ? ' entrance-authors__tag_active' : '')} key={index} >
                      <div className="entrance-authors__tag-back" dangerouslySetInnerHTML={{ __html: slide.tag }}></div>
                      <div className="entrance-authors__tag-front" >
                        <div className="entrance-authors__tag-front-text" dangerouslySetInnerHTML={{ __html: slide.tag }}></div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <h1 className="entrance-authors__title" dangerouslySetInnerHTML={{ __html: block_state.title }}></h1>
              <a href={block_state.btn_link} className="entrance-authors__btn btn btn_border btn_rounded fw-500 text-26" >
                {block_state.btn_text}
              </a>
            </div>
            <div className="entrance-authors__media">
              {block_state.slider.map((slide, index) => {
                return (
                  <div className={"entrance-authors__img" + (activeTag === index ? ' entrance-authors__img_active' : '')} key={index}>
                    <img src={slide.img} alt="img" />
                  </div>
                )
              })}

            </div>
          </div>
          <div className="entrance-authors__list">
            {block_state.list.map((item, index) => {
              return (
                <div className="entrance-authors__list-item" key={index}>
                  <div className="entrance-authors__list-icon">
                    <img src={item.icon} alt="icon" />
                  </div>
                  <div className="entrance-authors__list-text text-24 fw-600" dangerouslySetInnerHTML={{ __html: item.text }}></div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
