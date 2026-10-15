import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { usePageContext } from 'vike-react/usePageContext'
import { handleTracking } from 'utils/tracking'

import './money.css'

export default function Money({ block_state }) {
  const btnState = useSelector(state => state.toolkit.registrationBtn)
  const pageContext = usePageContext()
  const imgWrapper = useRef()

  const isRoundedBtn = pageContext.urlPathname === '/shops' || '/max-authors'

  return (
    <section className={'section money ' + (block_state.has_border == 'false' ? 'money_without-border' : '')}>
      <div className="container">
        <div className="money__wrapper">
          <h2
            className="money__title title h2"
            dangerouslySetInnerHTML={{ __html: block_state.title }}
          />

          <a
            href={block_state.btn_link}
            className={
              "money__btn btn btn_border " +
              (isRoundedBtn ? 'btn_rounded text-24' : '')
            }
            onClick={() => {
              handleTracking('registration_other')
              handleTracking('registration_all')
            }}
          >
            {block_state.btn_text}
          </a>

          <div className="money__img" ref={imgWrapper}>
            {block_state.has_border == 'true' &&
              <picture>
                <source
                  media="(max-width: 570px)"
                  srcSet="/img/money/img-static_mob.png"
                  sizes="img"
                />
                <img src="/img/money/img-static.png" alt="img" />
              </picture>
            }

            {block_state.has_border == 'false' &&
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="/img/money/img_v3_mob.png"
                  sizes="img"
                />
                <img src="/img/money/img_v3.png" alt="img" />
              </picture>
            }
          </div>
        </div>
      </div>
    </section>
  )
}