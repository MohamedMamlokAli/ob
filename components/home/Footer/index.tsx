import React from 'react'

const Footer = () => {
  return (
    <footer className="container mx-auto space-y-4 pt-8">
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:px-3">
        <h1 className="font-moc text-4xl">Organic Bomb</h1>
        <ul className="space-y-4 text-center">
          <li>Home</li>
          <li>Blogs</li>
          <li>Recipes</li>
        </ul>
        <div className="flex gap-2">
          <div className="h-8 w-8 rounded-full bg-gray-900"></div>
          <div className="h-8 w-8 rounded-full bg-gray-900"></div>
          <div className="h-8 w-8 rounded-full bg-gray-900"></div>
          <div className="h-8 w-8 rounded-full bg-gray-900"></div>
          <div className="h-8 w-8 rounded-full bg-gray-900"></div>
        </div>
      </div>

      <p className="text-center text-gray-400">All rights reserved</p>
    </footer>
  )
}

export default Footer
