import { Provider } from 'react-redux'
import { store } from '../toolkitRedux'

import '../style/fonts.css';
import '../style/reset.css';
import '../style/style.css';

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default function Layout({ children }) {
  return (
    <Provider store={store}>
      <div className="body-wrapper">
        <Header />
        <main className="main">
          {children}
        </main>
        <Footer />
      </div>
    </Provider>
  )
}