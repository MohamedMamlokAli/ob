import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Logo from '../common/Logo'
import { SearchIcon, UserIcon } from '@heroicons/react/outline'
const Navbar = () => {
  const [offset, setOffset] = useState(0)
  const [menu, setMenu] = useState(false)
  const router = useRouter()
  const toggleMenu = () => {
    setMenu(!menu)
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const onScroll = () => setOffset(window.pageYOffset)
      window.addEventListener('scroll', onScroll)
      return () => window.removeEventListener('scroll', onScroll)
    }
  }, [])
  return (
    <header
      className={`lg:px-15 fixed top-0 z-50 flex w-full items-center justify-between px-5 py-5 backdrop-blur-sm transition-colors lg:py-8 xl:px-20  xl:py-8 ${
        offset > 0 && 'bg-white shadow-md'
      }`}
    >
      <Logo />
      {/* Desktop nav links  */}
      {/* TODO: change to Link instead of this LI */}
      <nav className="hidden md:block  md:w-1/4 ">
        <ul className="flex uppercase md:justify-between  ">
          <li
            className={`${router.pathname === '/' && 'border-b border-black'}`}
          >
            <Link href={'/'}>Home</Link>
          </li>
          <li
            className={`${
              router.pathname === '/blog' && 'border-b border-black'
            }`}
          >
            <Link href={'/blog'}>Blog</Link>
          </li>
          <li
            className={`${
              router.pathname === '/recipes' && 'border-b border-black'
            }`}
          >
            <Link href={'/recipe'}>Recipes</Link>
          </li>
        </ul>
      </nav>
      {/* Searchbar and Login icon */}
      <div className="hidden items-center gap-2 md:flex">
        {/* Search bar */}
        <div className=" flex h-8 min-w-[165px] max-w-[300px] items-center gap-1 overflow-hidden rounded-full border border-gray-400 bg-[#EDF3E7] px-2 xl:h-12">
          <SearchIcon className="w-8" />
          <input type="text" className="w-full bg-inherit outline-none" />
        </div>
        {/* Login */}
        <div>
          <UserIcon className="w-8" />
        </div>
      </div>
      {/* Mobile nav toggle button */}
      <div className="z-50 space-y-1 md:hidden" onClick={toggleMenu}>
        <span className="ml-2 block h-0.5 w-8 bg-black "></span>
        <span className="mr-2 block h-0.5 w-8 bg-black"></span>
        <span className="ml-2 block h-0.5 w-8 bg-black "></span>
      </div>
      {/* Mobile nav when button is clicked */}
      <div
        id="mobile"
        className={`absolute inset-0 ${
          !menu ? 'left-full' : 'left-0'
        } flex h-screen w-full items-center justify-center bg-[#D0D0D0]  transition-all duration-500 ease-in`}
      >
        <nav className=" h-1/2 ">
          <ul className=" flex w-full  flex-col items-center space-y-4 uppercase">
            <li
              className={`${
                router.pathname === '/' && 'border-b border-black'
              }`}
            >
              Home
            </li>
            <li
              className={`${
                router.pathname === '/blogs' && 'border-b border-black'
              }`}
            >
              Blog
            </li>
            <li
              className={`${
                router.pathname === '/recipes' && 'border-b border-black'
              }`}
            >
              Recipes
            </li>
            <li>
              {/* Searchbar and Login icon */}
              <div className=" flex items-center gap-2">
                {/* Search bar */}
                <div className=" flex h-8 min-w-[165px] max-w-[300px] items-center gap-1 overflow-hidden rounded-full border border-gray-400 bg-[#EDF3E7] px-2 xl:h-12">
                  <SearchIcon className="w-8" />
                  <input
                    type="text"
                    className="w-full bg-inherit outline-none"
                  />
                </div>
                {/* Login */}
                <div>
                  <UserIcon className="w-8" />
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
