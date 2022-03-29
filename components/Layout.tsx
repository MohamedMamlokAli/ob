import React from 'react'
import Navbar from './header/Navbar'
import Hero from './home/hero/Hero'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="font-roboto">
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
