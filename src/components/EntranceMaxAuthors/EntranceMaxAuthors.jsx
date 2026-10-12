import React, { useEffect, useState } from 'react'
import './entranceMaxAuthors.css'
import { handleTracking } from 'utils/tracking'

export default function EntranceMaxAuthors({ block_state }) {
  // const [windowWidth, setWindowWidth] = useState(
  //   typeof window !== 'undefined' ? window.innerWidth : 1024
  // )

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth)
  //   }

  //   window.addEventListener('resize', handleResize)

  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //   }
  // }, [])

  return (
    <section className='entrance-max-authors section'>
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

          <div className="entrance-max-authors__video">
            <video src={block_state.video} poster={block_state.video_poster} autoPlay muted playsInline />
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