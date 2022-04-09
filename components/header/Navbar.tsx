import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const onScroll = () => setOffset(window.pageYOffset)
      window.addEventListener('scroll', onScroll)
      return () => window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 flex w-full items-center justify-between py-2 px-5 backdrop-blur-sm transition-colors ${
        offset > 0 && 'bg-white shadow-md'
      }`}
    >
      <h1 className="font-moc text-3xl">Organic Bomb</h1>
      <div className="space-y-1">
        <span className="ml-2 block h-0.5 w-8 bg-black "></span>
        <span className="mr-2 block h-0.5 w-8 bg-black"></span>
        <span className="ml-2 block h-0.5 w-8 bg-black "></span>
      </div>
    </header>
  )
}

export default Navbar
