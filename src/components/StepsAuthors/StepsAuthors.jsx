import React, { useState } from 'react'
import './stepsAuthors.css'
import { handleTracking } from 'utils/tracking'

export default function StepsAuthors({ block_state }) {

  const [readMoreStatus, setReadMoreStatus] = useState(false)

  return (
    <>
      <section className="section shops-steps">
        <div className="container">
          <div className="shops-steps__title title h2" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
          <div className="shops-steps__wrapper">
            <div className="shops-steps__cards-list">
              {block_state.cards_list.map((card, index) => {
                return (
                  <div className="shops-steps__card" key={index}>
                    <div className="shops-steps__card-num text-28 fw-500">{index + 1}</div>
                    <picture className="shops-steps__card-img">
                      {card.img_mob &&
                        <source media="(max-width: 1024px)" srcSet={card.img_mob} />
                      }
                      <img src={card.img} alt="img" />
                    </picture>
                    <div className="shops-steps__card-body">
                      <div className="shops-steps__card-name text-24 fw-500" dangerouslySetInnerHTML={{ __html: card.name }}></div>
                      <div className="shops-steps__card-desc text-18" dangerouslySetInnerHTML={{ __html: card.desc }}></div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className={"shops-steps__body" + (readMoreStatus ? '' : ' shops-steps__body_hide')}>
              <div className="shops-steps__subtitle text-30 fw-500" >
                <div className="shops-steps__subtitle-text" dangerouslySetInnerHTML={{ __html: block_state.subtitle }}></div>
                <div className="shops-steps__arrow" onClick={(e) => { setReadMoreStatus(!readMoreStatus) }}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="27" height="27" rx="13.5" transform="matrix(-4.37114e-08 1 1 4.37114e-08 1.20206e-06 2.18557e-08)" stroke="url(#paint0_linear_11241_38259)" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.68828 12.0243C9.00623 11.6865 9.53785 11.6703 9.87567 11.9883L14.4 16.2465L18.9243 11.9883C19.2621 11.6703 19.7937 11.6865 20.1117 12.0243C20.4296 12.3621 20.4135 12.8937 20.0757 13.2117L14.9757 18.0117C14.6522 18.3161 14.1477 18.3161 13.8243 18.0117L8.72426 13.2117C8.38643 12.8937 8.37032 12.3621 8.68828 12.0243Z" fill="url(#paint1_linear_11241_38259)" />
                    <defs>
                      <linearGradient id="paint0_linear_11241_38259" x1="19.712" y1="-1.81996" x2="44.2306" y2="28.4382" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#CDFBFF" />
                        <stop offset="1" stopColor="#27CDFF" />
                      </linearGradient>
                      <linearGradient id="paint1_linear_11241_38259" x1="7.68778" y1="13.6781" x2="14.3196" y2="3.82603" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#CDFBFF" />
                        <stop offset="1" stopColor="#27CDFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="shops-steps__body-panel">
                <div className="shops-steps__list-title text-20 fw-500" dangerouslySetInnerHTML={{ __html: block_state.list_title }}></div>
                <div className="shops-steps__list text-18">
                  {block_state.items_list.map((item, index) => {
                    return (
                      <div className="shops-steps__list-item" key={index} >
                        <div className="shops-steps__list-item-icon">
                          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.8577 14.4513C22.3398 13.9692 22.3398 13.1876 21.8577 12.7056C21.3756 12.2235 20.5941 12.2235 20.112 12.7056L14.8128 18.0047L12.8054 15.9973C12.3233 15.5152 11.5417 15.5152 11.0597 15.9973C10.5776 16.4794 10.5776 17.2609 11.0597 17.743L13.94 20.6233C14.422 21.1054 15.2036 21.1054 15.6857 20.6233L21.8577 14.4513Z" fill="#00D3E6" />
                            <path d="M21.8577 14.4513C22.3398 13.9692 22.3398 13.1876 21.8577 12.7056C21.3756 12.2235 20.5941 12.2235 20.112 12.7056L14.8128 18.0047L12.8054 15.9973C12.3233 15.5152 11.5417 15.5152 11.0597 15.9973C10.5776 16.4794 10.5776 17.2609 11.0597 17.743L13.94 20.6233C14.422 21.1054 15.2036 21.1054 15.6857 20.6233L21.8577 14.4513Z" fill="url(#paint0_linear_11239_36477)" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M30.4486 16.4587C30.4486 24.1851 24.1851 30.4486 16.4587 30.4486C8.73226 30.4486 2.46875 24.1851 2.46875 16.4587C2.46875 8.73226 8.73226 2.46875 16.4587 2.46875C24.1851 2.46875 30.4486 8.73226 30.4486 16.4587ZM27.9798 16.4587C27.9798 22.8216 22.8216 27.9798 16.4587 27.9798C10.0957 27.9798 4.93756 22.8216 4.93756 16.4587C4.93756 10.0957 10.0957 4.93756 16.4587 4.93756C22.8216 4.93756 27.9798 10.0957 27.9798 16.4587Z" fill="#00D3E6" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M30.4486 16.4587C30.4486 24.1851 24.1851 30.4486 16.4587 30.4486C8.73226 30.4486 2.46875 24.1851 2.46875 16.4587C2.46875 8.73226 8.73226 2.46875 16.4587 2.46875C24.1851 2.46875 30.4486 8.73226 30.4486 16.4587ZM27.9798 16.4587C27.9798 22.8216 22.8216 27.9798 16.4587 27.9798C10.0957 27.9798 4.93756 22.8216 4.93756 16.4587C4.93756 10.0957 10.0957 4.93756 16.4587 4.93756C22.8216 4.93756 27.9798 10.0957 27.9798 16.4587Z" fill="url(#paint1_linear_11239_36477)" />
                            <defs>
                              <linearGradient id="paint0_linear_11239_36477" x1="6.02004" y1="4.00423" x2="36.2336" y2="17.0172" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#CDFBFF" />
                                <stop offset="1" stopColor="#27CDFF" />
                              </linearGradient>
                              <linearGradient id="paint1_linear_11239_36477" x1="6.02004" y1="4.00423" x2="36.2336" y2="17.0172" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#CDFBFF" />
                                <stop offset="1" stopColor="#27CDFF" />
                              </linearGradient>
                            </defs>
                          </svg>

                        </div>
                        <div className="shops-steps__list-item-text" dangerouslySetInnerHTML={{ __html: item.text }}></div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

          </div>
          <a href={block_state.btn_link}
            className="shops-steps__btn btn btn_big btn_rounded btn_border text-24 fw-500"
            onClick={() => handleTracking('registration_all')}
          >{block_state.btn_text}</a>
        </div>
      </section>
    </>
  )
}
