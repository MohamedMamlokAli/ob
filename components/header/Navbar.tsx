import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Logo from '../common/Logo'

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
  console.log(router)
  return (
    <header
      className={`lg:px-15 fixed top-0 z-50 flex w-full items-center justify-between px-10 py-5 backdrop-blur-sm transition-colors lg:py-8 xl:px-20 xl:py-8 ${
        offset > 0 && 'bg-white shadow-md'
      }`}
    >
      <Logo />
      <nav className="hidden w-1/3 md:block">
        <ul className="flex w-full justify-between  uppercase">
          <li
            className={`${router.pathname === '/' && 'border-b border-black'}`}
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
        </ul>
      </nav>
      <div className="z-50 space-y-1" onClick={toggleMenu}>
        <span className="ml-2 block h-0.5 w-8 bg-black "></span>
        <span className="mr-2 block h-0.5 w-8 bg-black"></span>
        <span className="ml-2 block h-0.5 w-8 bg-black "></span>
      </div>
      <div
        id="mobile"
        className={`absolute inset-0 ${
          !menu ? 'left-full' : 'left-0'
        } flex h-screen w-full items-center justify-center bg-red-200  transition-all duration-500 ease-in`}
      >
        <nav className=" h-1/2 ">
          <ul className=" w-full space-y-4  uppercase">
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
            <li>search</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
