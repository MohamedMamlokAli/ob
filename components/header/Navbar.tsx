import React from 'react'

const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between py-2 px-5 backdrop-blur-sm">
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
