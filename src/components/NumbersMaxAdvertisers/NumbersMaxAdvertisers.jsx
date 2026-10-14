import React from 'react'
import './numbersMaxAdvertisers.css'

export default function NumbersMaxAdvertisers({ block_state }) {
  return (
    <section className='section numbers-max-advertisers'>
      <div className="container">
        <div className="numbers-max-advertisers__wrapper">
          {block_state.list.map((item, index) => {
            return (
              <div className="numbers-max-advertisers__item" key={index}>
                <div className="numbers-max-advertisers__number" dangerouslySetInnerHTML={{ __html: item.number }}></div>
                <div className="numbers-max-advertisers__text text-30 fw-500" dangerouslySetInnerHTML={{ __html: item.text }}></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
