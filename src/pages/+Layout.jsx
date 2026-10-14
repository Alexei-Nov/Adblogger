import { Provider } from 'react-redux'
import { store } from '../toolkitRedux'

import '../style/fonts.css';
import '../style/reset.css';
import '../style/style.css';

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { useEffect } from 'react';
import { usePageContext } from 'vike-react/usePageContext';

export default function Layout({ children }) {
  const pageContext = usePageContext();

  useEffect(() => {
    if (pageContext.urlPathname !== '/downtime') {
      window.location.replace('/downtime');
    }
  }, [pageContext.urlPathname]);

  return (
    <Provider store={store}>
      <div className="body-wrapper">
        {/* <Header /> */}
        <main className="main">
          {children}
        </main>
        {/* <Footer /> */}
      </div>
    </Provider>
  )
}