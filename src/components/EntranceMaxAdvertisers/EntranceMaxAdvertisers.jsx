import React, { useEffect, useState } from 'react'
import './entranceMaxAdvertisers.css'

export default function EntranceMaxAdvertisers({ block_state }) {

  const [stage, setStage] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setStage(stage => stage === 1 ? 2 : 1)
    }, 4000);

    return () => clearInterval(interval)
  }, [])

  return (
    <section className='section entrance-max-advertisers' data-stage={stage}>
      <div className="container">
        <div className="entrance-max-advertisers__wrapper">
          <div className="entrance-max-advertisers__body">
            <div className="entrance-max-advertisers__title">
              <div className="entrance-max-advertisers__title-static" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
              <div className="entrance-max-advertisers__title-anim">
                <span data-stage="1">в&nbsp;каналах MAX
                  <svg width="72" height="31" viewBox="0 0 72 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.773963" y="0.773963" width="69.6567" height="29.4106" rx="9.25071" stroke="#00D3E6" strokeWidth="1.54793" />
                    <path d="M14.6937 22.0459H11.8634V11.5442L16.1088 11.5442L22.7375 19.2157H23.3334V11.5442H26.1636V22.0459H21.9182L15.2895 14.3745H14.6937V22.0459ZM39.6462 22.0459H28.5487V11.5442H39.4377V13.8531H31.3789V15.6406H38.7078V17.875H31.3789V19.737H39.6462V22.0459ZM48.2544 22.0459H44.3516L40.434 11.5442H43.3834L46.1987 19.2157H46.7201L49.4013 11.5442H53.17L55.7768 19.2157H56.2982L59.2327 11.5442H62.1374L58.0857 22.0459H54.1383L51.5464 14.3745H50.9505L48.2544 22.0459Z" fill="#00D3E6" />
                  </svg>
                </span>

                <span data-stage="2">вконтакте</span>
              </div>
            </div>
            <a href={block_state.btn_link} class="entrance-max-advertisers__btn btn btn_rounded btn_border fw-500 text-26">
              {block_state.btn_text}
            </a>
          </div>
          <div className="entrance-max-advertisers__media">
            <div className="entrance-max-advertisers__coins">
              <div className="entrance-max-advertisers__coin">
                <img src="/img/entrance-max-advertisers/coin-1.png" alt="img" />
              </div>
              <div className="entrance-max-advertisers__coin">
                <img src="/img/entrance-max-advertisers/coin-2.png" alt="img" />
              </div>
              <div className="entrance-max-advertisers__coin">
                <img src="/img/entrance-max-advertisers/coin-3.png" alt="img" />
              </div>
            </div>
            <div className="entrance-max-advertisers__img">
              <picture data-stage="1" >
                <source media="(max-width: 768px)" srcset="/img/entrance-max-advertisers/img-1_mob.png" />
                <img src="/img/entrance-max-advertisers/img-1.png" alt="img" />
              </picture>
              <picture data-stage="2" >
                <source media="(max-width: 768px)" srcset="/img/entrance-max-advertisers/img-2_mob.png" />
                <img src="/img/entrance-max-advertisers/img-2.png" alt="img" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
