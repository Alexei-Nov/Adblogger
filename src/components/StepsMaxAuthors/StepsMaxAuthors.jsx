import React from 'react'
import './stepsMaxAuthors.css'

export default function StepsMaxAuthors({ block_state }) {
  return (
    <section className='section steps-max-authors'>
      <div className="container">
        <div className="steps-max-authors__title title h2" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
        <div className="steps-max-authors__list">
          {block_state.list.map((item, index) => {
            return (
              <div className="steps-max-authors__list-item" key={index}>
                <div className="steps-max-authors__list-img">
                  <img src={item.img} alt="img" />
                </div>
                <div className="steps-max-authors__list-body">
                  <div className="steps-max-authors__list-num text-30 fw-500">{index + 1}</div>
                  <div className="steps-max-authors__list-text text-24 fw-600" dangerouslySetInnerHTML={{ __html: item.name }}></div>
                </div>
              </div>
            )
          })}
        </div>
        <a href={block_state.btn_link} className="steps-max-authors__btn btn btn_border btn_rounded text-26">
          {block_state.btn_text}
        </a>
      </div>
    </section>
  )
}
