import Hamburger from "common/Hamburger"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Logo from "common/icons/Logo"
import Phone from "common/icons/phone"
import Moon from "common/icons/moon"
import { useContext } from 'react'
import { DarkModeContext } from "lib/context/darkModeContext"
import SideBar from "./side-bar"

const Nav = () => {
  const { isDark,toggleThemeChange } = useContext(DarkModeContext)

  const { pathname } = useRouter()
  const [isHome, setIsHome] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)


  //useEffect that detects if window is scrolled > 5px on the Y axis
  useEffect(() => {
    if (isHome) {
      const detectScrollY = () => {
        if (window.scrollY > 5) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }

      window.addEventListener("scroll", detectScrollY)

      return () => {
        window.removeEventListener("scroll", detectScrollY)
      }
    }
  }, [isHome])

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false)
    
  }, [pathname])



  return (
    <>
      <div
        className={clsx("sticky top-0 inset-x-0 z-50 group", {
          "!fixed": isHome,
        })}
      >
        <header
          className={clsx(
            "relative h-16 px-8 mx-auto transition-colors border-b border-transparent duration-200",
     
            {
              "!bg-[#161616] opacity-90 shadow-lg": isScrolled,
            },
            {
              "!bg-[#161616] opacity-100 shadow-lg": !isHome,
            }
          )}
        >
          <nav
            className={clsx(
              "text-gray-900 flex items-center justify-between w-full h-full text-small-regular transition-colors duration-200"
            )}
          >
            <div className="flex-1 justify-between md:justify-start basis-0 h-full flex items-center">
              <div className="block small:hidden">
                <Hamburger setIsOpen={setIsOpen} isOpen={isOpen} isDark={isDark} isScrolled={isScrolled}/>
              </div>

              <Link href="/">
              <a>
              <div className="md:flex hidden items-center h-full">
                    <Logo color='white' size={100} />
              </div>
              </a>
              </Link>
              <Link href='/sale'>
              <div className={clsx("hidden pl-[3rem] text-white transition-all duration-300 small:flex items-center h-full",
                {
                  "!text-gray-300": !isHome || isScrolled,
                  "!text-white": isDark && isScrolled,
                })}>
                For Sale
              </div>
</Link>

<Link href='/rental'>
              <div className={clsx("hidden pl-[3rem] text-white transition-all duration-300 small:flex items-center h-full",
                {
                  "!text-gray-300": !isHome || isScrolled,
                  "!text-white": isDark && isScrolled,
                })}>
                For Rent
              </div>
</Link>

<Link href='/contact'>
              <div className={clsx("hidden pl-[3rem] text-white transition-all duration-300 small:flex items-center h-full",
                {
                  "!text-gray-300": !isHome || isScrolled,
                  "!text-white": isDark && isScrolled,
                })}>
                Contact
              </div>
</Link>
            </div>

 
                <Link href='/'>
            <div className="flex md:hidden items-center h-full">
      <Logo  isDark={isDark}  isScrolled={isScrolled} size={90} />
            </div>
            </Link>




            <div className="flex items-center futuraMedium uppercase md:gap-x-6 h-full flex-1 basis-0 justify-end">

            <div className="flex items-center futuraMedium uppercase md:gap-x-6 h-full flex-1 basis-0 justify-end">
                <Moon isHome={isHome} isDark={isDark} isScrolled={isScrolled} toggleThemeChange={toggleThemeChange}/>
            </div>
              <div className={clsx("hidden text-white border-current py-[0.5rem] transition-all duration-300 hover:border-b hover:pl-[2rem] hover:pr-1 small:flex items-center gap-x-6 h-full",
                {
                  "!text-gray-300": !isHome || isScrolled,
                  "!text-white": isDark && isScrolled,
                }
              )}>

                {
               <Phone color='white' size={20} /> 
                }
                <a href="tel:+90 531 344 30 90">???+90 531 344 30 90</a>

              </div>


            </div>

          </nav>
          <SideBar isOpen={isOpen}/>
        </header>
      </div>
    </>

  )
}

export default Nav