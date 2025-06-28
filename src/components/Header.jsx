import React, { useState, useEffect } from 'react'
import Hamburger from './Hamburger'
import { Link, NavLink } from 'react-router'



function Header() {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [dropdownMenu, setDropdownMenu] = useState(false)
  const [height, setHeight] = useState('')
  const [opened, setOpened] = useState(false);
  const [sticky, setSticky] = useState(false)
  const toggleMenu = () => {
    setMobileMenu((prev) => !prev)
    setOpened((prev) => !prev)
  }

  const toggleDropdown = () => {
    setDropdownMenu((prev) => !prev)
  }

  useEffect(() => {
    setHeight(dropdownMenu ? 'h-fit' : 'h-0');
  }, [dropdownMenu]);

  useEffect(() => {
    if (mobileMenu) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Clean up on unmount (optional but safe)
    return () => document.body.classList.remove('overflow-hidden');
  }, [mobileMenu]);

  const menuAnimate = "relative cursor-pointer overflow-hidden before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-red-400 hover:before:w-full before:transition-all before:duration-500 before:z-[-1] px-[2px] py-1 z-0 before:rounded-full"
  useEffect(() => {
    const sticyHeader = () => {
      setSticky(window.scrollY > 200)
    }
    
    window.addEventListener("scroll", sticyHeader)
    return () => window.removeEventListener("scroll", sticyHeader)
  }, [])

  return (
    <>  
      <header className={` ${sticky && 'fixed h-18 bg-linear-to-r to-cyan-500 from-blue-500 shadow-md ' } z-[9999] absolute top-0 w-full justify-center lg:left-1/2 lg:-translate-x-1/2 `}>
        <div className='max-w-7xl text-white font-semibold text-sm w-[95%] mx-auto flex justify-between items-center py-1'>
          <span>
            <Link to={'/'}>
              <img src="/assets/NNF-Logo.png" className='h-16'/>
            </Link>
          </span>
          <ul className='hidden lg:flex justify-center gap-x-5'>
            <NavLink to='/' className={({isActive}) => ` ${isActive? 'text-red-400': 'text-white'} `}>
              <li className={`${menuAnimate}`}>Home</li>
            </NavLink>
            <li className={`group py-1 hover:cursor-pointer`}>
              <span className=''>
                <span className='pe-1'>About Us</span> 
                <i className={`fas fa-chevron-down text-white text-sm group-hover:rotate-180 duration-300 ease-in-out`}></i>
              </span>
              <ul style={{interpolateSize:"allow-keywords"}} 
              className='text-black absolute mt-1 bg-gray-100 shadow-lg rounded-md w-52 overflow-hidden opacity-0 max-h-0 group-hover:max-h-96 group-hover:opacity-100 transition-all duration-300 ease-in-out z-20'>
                <NavLink to={'/about-nnf'} className={({isActive}) => ` ${isActive? 'text-red-400': 'text-black'} `}>
                  <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>About NNF</li>
                </NavLink>
                <NavLink to={'/about-Venue'} className={({isActive}) => ` ${isActive? 'text-red-400': 'text-black'} `}>
                  <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>About Venue</li>
                </NavLink>
                <NavLink to={'/host-city'} className={({isActive}) => ` ${isActive? 'text-red-400': 'text-black'} `}>
                  <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Host City Vizag</li>
                </NavLink>
                <NavLink to={'/travel-vizag'}>
                  <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Places to Visit</li>
                </NavLink>
              </ul>
            </li>
            <NavLink to='/accomodation' className={({isActive}) => ` ${isActive? 'text-red-400': 'text-white'} `}>
              <li className={`${menuAnimate}`}>Accomodation</li>
            </NavLink>
            <NavLink to='/trade' className={({isActive}) => ` ${isActive? 'text-red-400': 'text-white'} `}>
              <li className={`${menuAnimate}`}>Trade</li>
            </NavLink>
            <NavLink to='/research' className={({isActive}) => ` ${isActive? 'text-red-400': 'text-white'} `}>
              <li className={`${menuAnimate}`}>Scientific</li>
            </NavLink>
            <NavLink to='/download' className={({isActive}) => ` ${isActive? 'text-red-400': 'text-white'} `}>
              <li className={`${menuAnimate}`}>Committee</li>
            </NavLink>
            <NavLink to='/contact' className={({isActive}) => ` ${isActive? 'text-red-400': 'text-white'} `}>
            <li className={`${menuAnimate}`}>Contact Us</li>
            </NavLink>
          </ul>
          <Link to={`/login`}  className='hidden lg:flex bg-blue-600 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-blue-700 transition-colors duration-200'>
            Register Now
          </Link>
          <div className='flex lg:hidden z-[100000]' onClick={toggleMenu}>
            <Hamburger onClick={toggleMenu} opened={opened}/>
          </div>
        </div>

        {/* Mobile Menu  */}
        <div className={`${mobileMenu ? 'left-0' : 'left-[-100%]'} fixed top-0 bottom-0 w-[100%] bg-red-400 z-50 transition-all duration-300 ease-in-out p-4 lg:hidden overflow-auto`}>
          <div className='fixed top-0 pt-5 pb-3 bg-red-400 w-[95%] overflow-hidden h-fit '>
          <span className='inline-flex gap-1 '>
            <img src="/assets/NNF-Logo.png" className='h-12 border-e-2 pe-1 border-gray-600'/>
            <img src="/assets/NEOCON-Logo.png" className='h-12'/>
          </span>
          </div>
          <ul className='justify-center text-2xl mt-20 mb-4 overflow-hidden'>
            <NavLink to='/' onClick={toggleMenu}>
              <li className={`text-white hover:translate-x-1 hover:shadow ease-in-out duration-300 hover:bg-red-300 py-1 px-3 hover:cursor-pointer `}>Home</li>
            </NavLink>
            
            <li className={`group text-white hover:translate-x-1 hover:shadow ease-in-out duration-300 hover:bg-red-300 py-1 px-3 hover:cursor-pointer `} onClick={toggleDropdown}>
              <span className='pe-2'>About Us</span> 
              <i className={`fas fa-chevron-down text-white text-xl ${dropdownMenu ? 'rotate-180': 'rotate-0'} duration-300 z-0`}></i>
            </li>

            <ul style={{interpolateSize:"allow-keywords"}} 
              className={`${height} mt-1 shadow-lg rounded-bl-md rounded-br-md w-full bg-red-300 overflow-hidden transition-all duration-300 ease-in-out `}
            >
              <NavLink to='/about-nnf' onClick={toggleMenu}>
              <li className='px-4 py-2 text-white hover:bg-red-200 hover:translate-x-1 duration-300 cursor-pointer'>About NNF</li>
              </NavLink>
              <NavLink to='/about-venue' onClick={toggleMenu}>
              <li className='px-4 py-2 text-white hover:bg-red-200 hover:translate-x-1 duration-300 cursor-pointer'>About Venue</li>
              </NavLink>              
              <NavLink to='/host-city' onClick={toggleMenu}>
              <li className='px-4 py-2 text-white hover:bg-red-200 hover:translate-x-1 duration-300 cursor-pointer'>Host City Vizag</li>
              </NavLink>
              <NavLink to='/travel-vizag' onClick={toggleMenu}>
              <li className='px-4 py-2 text-white hover:bg-red-200 hover:translate-x-1 duration-300 cursor-pointer'>Places to Visit</li>
              </NavLink>

            </ul>
            <NavLink to='/accomodation' onClick={toggleMenu}>
            <li className={`text-white hover:translate-x-1 hover:shadow ease-in-out duration-300 hover:bg-red-300 py-1 px-3 hover:cursor-pointer `}>Accomodation</li>
            </NavLink>
            <NavLink to='/trade' onClick={toggleMenu}>
            <li className={`text-white hover:translate-x-1 hover:shadow ease-in-out duration-300 hover:bg-red-300 py-1 px-3 hover:cursor-pointer `}>Trade</li>
            </NavLink>
            <NavLink to='/research' onClick={toggleMenu}>
            <li className={`text-white hover:translate-x-1 hover:shadow ease-in-out duration-300 hover:bg-red-300 py-1 px-3 hover:cursor-pointer `}>Scientific</li>
            </NavLink>
            <NavLink to='/download' onClick={toggleMenu}>
            <li className={`text-white hover:translate-x-1 hover:shadow ease-in-out duration-300 hover:bg-red-300 py-1 px-3 hover:cursor-pointer `}>Committee</li>
            </NavLink>
            <NavLink to='/contact' onClick={toggleMenu}>
            <li className={`text-white hover:translate-x-1 hover:shadow ease-in-out duration-300 hover:bg-red-300 py-1 px-3 hover:cursor-pointer `}>Contact Us</li>
            </NavLink>

          </ul> 
          <Link to={`/login`} className='"text-xl bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition select-none'>
            Register Now
          </Link>
        </div>
      </header>
      
    </>
  )
}

export default Header
