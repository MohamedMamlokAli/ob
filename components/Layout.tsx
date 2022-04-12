import React from 'react'
import Navbar from './header/Navbar'
import Hero from './home/hero/Hero'
import { Provider } from 'react-redux'
import store from '../store/store'
const Layout: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <div className="font-roboto">
        <Navbar />
        {children}
      </div>
    </Provider>
  )
}

export default Layout
