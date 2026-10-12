import { Fragment } from 'react'
import './footer.css'
import { handleTracking } from 'utils/tracking'
import { NavItem } from './NavItem'
import { useData } from 'vike-react/useData'
import { usePageContext } from 'vike-react/usePageContext'

export default function Footer() {
  const { footer, registrationBtn } = useData()
  const pageContext = usePageContext()
  const isRoundedBtn = pageContext.urlPathname === '/shops'

  if (pageContext.urlPathname === '/shops-chart' || !footer) {
    return null
  }


  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer__top">
          <div className="footer__logo">
            <img src="/img/logo.svg" alt="img" />
          </div>

          <a
            href={registrationBtn.link}
            className={
              "footer__btn btn btn_small btn_border " +
              (isRoundedBtn ? 'btn_rounded' : '')
            }
            onClick={() => {
              handleTracking('registration_footer')
              handleTracking('registration_all')
            }}
          >
            {registrationBtn.text}
          </a>
        </div>

        <div className="footer__wrapper">
          <div className="footer__body">
            <div className="footer__title text-20">
              О компании
            </div>
            <div className="footer__desc text-16">
              VK AdBlogger — платформа для&nbsp;сотрудничества авторов и&nbsp;рекламодателей, на&nbsp;которой можно продавать рекламу в&nbsp;сообществах ВКонтакте
            </div>
          </div>

          <nav className="footer__nav nav">
            <ul className="nav__list">
              {footer.map((navItem, index) => (
                <Fragment key={index}>
                  {navItem.submenu?.length > 0 &&
                    <NavItem
                      title={navItem.title}
                      submenu={navItem.submenu}
                    />
                  }

                  {navItem.link &&
                    <a
                      href={navItem.link}
                      className="nav__link nav__link_lvl1 text-20"
                    >
                      {navItem.title}
                    </a>
                  }
                </Fragment>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer__bottom text-16">
          <div className="footer__bottom-row">
            <div className="footer__bottom-links">
              <span>
                125167, г. Москва, Ленинградский проспект, д. 39, стр. 79
              </span>

              <a
                href="https://adblogger.vk.ru/documents/privacy"
                target="_blank"
                rel="noreferrer"
              >
                Политика конфиденциальности
              </a>
            </div>

            <a
              href="https://vk.cc/cAHxhA"
              className="footer__bottom-item"
              target="_blank"
              rel="noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.54648 1.54648C0 3.09295 0 5.58197 0 10.56V11.44C0 16.418 0 18.907 1.54648 20.4535C3.09295 22 5.58197 22 10.56 22H11.44C16.418 22 18.907 22 20.4535 20.4535C22 18.907 22 16.418 22 11.44V10.56C22 5.58197 22 3.09295 20.4535 1.54648C18.907 0 16.418 0 11.44 0H10.56C5.58197 0 3.09295 0 1.54648 1.54648ZM3.71245 6.69082C3.83161 12.4108 6.69159 15.8483 11.7058 15.8483H11.99V12.5758C13.8325 12.7591 15.2257 14.1066 15.7849 15.8483H18.3883C17.6733 13.245 15.794 11.8058 14.6207 11.2558C15.794 10.5775 17.444 8.92748 17.8382 6.69082H15.4731C14.9598 8.50582 13.4383 10.1558 11.99 10.3116V6.69082H9.6249V13.0341C8.15824 12.6675 6.3066 10.8891 6.2241 6.69082H3.71245Z" fill="white" />
              </svg>

              Сообщество для авторов ВКонтакте
            </a>
          </div>

          <div className="footer__bottom-row">
            <div className="footer__bottom-links">
              <span>
                © VK, 2026. Все права защищены.
              </span>
            </div>

            <a
              href="https://max.ru/adblogger"
              className="footer__bottom-item"
              target="_blank"
              rel="noreferrer"
            >
              <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.1793 0C17.2441 0 22 4.71397 22 10.5284C22 16.3429 17.0931 20.9423 11.2376 20.9423C9.15933 20.9423 8.15246 20.6619 6.53046 19.5614C6.41876 19.486 6.26616 19.5056 6.17177 19.6021C4.9242 20.8774 1.72898 21.7729 1.58267 20.0317C1.58267 16.9956 0 15.0238 0 10.4711C0 4.49387 5.11456 0 11.1793 0ZM11.3493 5.18129C8.47182 5.03657 6.22526 6.95111 5.72969 9.94501C5.31908 12.4249 6.04591 15.4474 6.66891 15.5997C6.93321 15.6645 7.56722 15.1987 8.02975 14.7811C8.11628 14.7027 8.24843 14.6891 8.34911 14.7494C9.06965 15.1715 9.88458 15.4881 10.7829 15.5333C13.7374 15.6811 16.3553 13.465 16.511 10.6339C16.6652 7.80285 14.3038 5.32752 11.3493 5.17979V5.18129Z" fill="white" />
              </svg>

              Канал для бизнеса в MAX
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}