import React, { useEffect, useRef } from 'react'
import './backpackLink.css'

export default function BackpackLink({ block_state }) {
  const block = useRef()
  const backpack = useRef()
  const panel = useRef()


  useEffect(() => {
    let timeout = setTimeout(() => {
      block.current.classList.add('backpack-link_hide')
      block.current.classList.remove('backpack-link_static')
    }, 2000);

    if (window.innerWidth > 768) {
      backpack.current.addEventListener('mouseenter', (e) => {
        clearTimeout(timeout)
        block.current.classList.remove('backpack-link_hide')
      })

      block.current.addEventListener('mouseleave', (e) => {
        timeout = setTimeout(() => {
          block.current.classList.add('backpack-link_hide')
        }, 500);
      })
    } else {
      backpack.current.addEventListener('click', (e) => {
        clearTimeout(timeout)
        block.current.classList.remove('backpack-link_hide')
        timeout = setTimeout(() => {
          block.current.classList.add('backpack-link_hide')
        }, 2000);
      })
    }

  }, [])

  return (
    <div className='backpack-link backpack-link_static' ref={block}>
      <div className="container">
        <div className="backpack-link__wrapper" >
          <div className="backpack-link__img" ref={backpack}>
            <img src="/img/backpack-link/img.png" alt="img" />
          </div>
          <a href={block_state.link} className="backpack-link__panel" target='_blank' ref={panel}>
            <div className="backpack-link__panel-bg">
              <img src="/img/backpack-link/bg.svg" alt="img" />
            </div>
            <div className="backpack-link__title" dangerouslySetInnerHTML={{ __html: block_state.title }}></div>
          </a>
        </div>
      </div>
    </div>
  )
}
