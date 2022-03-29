import React from 'react'
import Navbar from './header/Navbar'
import Hero from './hero/Hero'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="font-roboto">
      <Navbar />
      <Hero />
      <div className="px-5 py-3">{children}</div>
    </div>
  )
}

export default Layout
