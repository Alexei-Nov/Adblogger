import React from 'react'
import './imageMaxAuthors.css'

export default function ImageMaxAuthors({ block_state }) {
  return (
    <section className='section image-max-authors'>
      <div className="container">
        <div className="image-max-authors__title title h2" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
        <picture className="image-max-authors__img">
          <source media="(max-width: 768px)" srcset={block_state.img_mob} />
          <img src={block_state.img} alt="img" />
        </picture>

        <a href={block_state.btn_link} className="image-max-authors__btn btn btn_border btn_rounded text-26">
          {block_state.btn_text}
        </a>
      </div>
    </section>
  )
}
