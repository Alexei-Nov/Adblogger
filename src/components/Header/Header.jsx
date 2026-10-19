import React from 'react'
import { useSelector } from 'react-redux'
import './header.css'
import { handleTracking } from 'utils/tracking'
import { usePageContext } from 'vike-react/usePageContext'

export default function Header() {
  const btnState = useSelector(state => state.toolkit.registrationBtn)
  const pageContext = usePageContext()
  const isRoundedBtn = pageContext.urlPathname === '/shops'

  function toggleMenuClass() {
    document.body.classList.toggle('show-menu')
  }

  function removeMenuClass() {
    document.body.classList.remove('show-menu')
  }

  const pathname = pageContext.urlPathname

  return (
    <header className='header'>
      <div className="container">
        <div className="header__wrapper">

          <a href="/"
            className="header__logo"
            onClick={removeMenuClass}
          >
            <picture>
              <img src='/img/logo.svg' alt="logo" />
            </picture>
          </a>

          <nav className="header__nav nav fw-500 text-18">
            <ul className='nav__list'>

              <li className='nav__item'>
                <a
                  href="/for-authors"
                  className={'nav__link' + (pathname === '/for-authors' ? ' nav__link_active' : '')}
                  onClick={removeMenuClass}
                >
                  Авторам
                </a>
              </li>

              <li className='nav__item'>
                <a
                  href="/for-advertisers"
                  className={'nav__link' + (pathname === '/for-advertisers' ? ' nav__link_active' : '')}
                  onClick={removeMenuClass}
                >
                  Рекламодателям
                </a>
              </li>

              <li className='nav__item'>
                <a
                  href="/top-cases"
                  className={'nav__link' + (pathname === '/top-cases' ? ' nav__link_active' : '')}
                  onClick={removeMenuClass}
                >
                  Топ-кейсы
                </a>
              </li>

              <li className='nav__item'>
                <a
                  href="/shops"
                  className={'nav__link nav__link_with-img fw-400' + (pathname === '/shops' ? ' nav__link_active' : '')}
                  onClick={removeMenuClass}
                >
                  Шопсы

                  <div className="nav__link-img">
                    <svg width="95" height="48" viewBox="0 0 95 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M70.0004 12.9999C15.885 -2.66109 -26.9983 20.4999 25.0008 41.0001C51.6415 51.5029 108 46.4997 89.5006 20.4999C76.1322 1.71131 35.1016 -1.02065 12.0005 3.49985" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                </a>
              </li>

              <li className='nav__item'>
                <a
                  href="/shops-chart"
                  className={'nav__link' + (pathname === '/shops-chart' ? ' nav__link_active' : '')}
                  onClick={removeMenuClass}
                >
                  Шопс-чарт
                </a>
              </li>

              <a
                href={btnState.link}
                className="header__nav-btn btn text-18 fw-500"
                onClick={() => {
                  handleTracking('registration_header')
                  handleTracking('registration_all')
                }}
              >
                {btnState.text}
              </a>

            </ul>
          </nav>

          <a
            href={btnState.link}
            className={
              "header__btn btn btn_small text-18 fw-500 " +
              (isRoundedBtn ? 'btn_rounded btn_border' : '')
            }
            onClick={() => {
              handleTracking('registration_header')
              handleTracking('registration_all')
            }}
          >
            {btnState.text}
          </a>

          <div className="header__menu-btn" onClick={toggleMenuClass}>
            <span></span>
          </div>

        </div>
      </div>
    </header>
  )
}