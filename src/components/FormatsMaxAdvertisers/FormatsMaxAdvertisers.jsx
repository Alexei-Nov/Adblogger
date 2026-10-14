import React from 'react'
import './formatsMaxAdvertisers.css'

export default function FormatsMaxAdvertisers({ block_state }) {
  return (
    <section className='section formats-max-advertisers'>
      <div className="container">
        <div className="formats-max-advertisers__title title h2" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
        <div className="formats-max-advertisers__wrapper">
          {block_state.list.map((card, i) => {
            return (
              <div className="formats-max-advertisers-card" key={i}>
                <div className="formats-max-advertisers-card__body">
                  <div className="formats-max-advertisers-card__title text-35 fw-500" dangerouslySetInnerHTML={{ __html: card.name }}></div>
                  <div className="formats-max-advertisers-card__desc text-24" dangerouslySetInnerHTML={{ __html: card.desc }}></div>
                  <div className="formats-max-advertisers-card__label text-22" dangerouslySetInnerHTML={{ __html: card.label }}></div>
                  <div className="formats-max-advertisers-card__socials">
                    {card.socials.map((social, j) => {
                      return (
                        <a href={social.link} target='_blank' className="formats-max-advertisers-card__social" key={i + '-' + j}>
                          <img src={social.icon} alt="icon" />
                        </a>
                      )
                    })}
                  </div>
                </div>
                <div className="formats-max-advertisers-card__img">
                  <img src={card.img} alt="img" />
                </div>
              </div>
            )
          })}
        </div>
        <a href={block_state.btn_link} class="formats-max-advertisers__btn btn btn_rounded btn_border fw-500 text-26">
          {block_state.btn_text}
        </a>
      </div>
    </section>
  )
}
