import React from 'react'
import './infoStatus.css'

export default function InfoStatus({ block_state }) {
  return (
    <section className='section info-status'>
      <div className="container">
        <div className="info-status__wrapper">
          <div className="info-status__img">
            <img src="/img/info-status/img.png" alt="img" />
          </div>
          <div className="info-status__title h2 fw-600">
            Сервис временно недоступен
          </div>
          <div className="info-status__desc text-30">
            Техническая команда уже&nbsp;работает над&nbsp;решением. <br /> Приносим извинения за&nbsp;неудобства
          </div>
        </div>
      </div>
    </section>
  )
}
