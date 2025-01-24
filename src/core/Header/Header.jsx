import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import { MdExpandMore } from 'react-icons/md';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [menuOpen, setMenuOpen] = useState(false);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Reset dropdown and menu when route changes
  useEffect(() => {
    setIsDropdownOpen(false);
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* <section className=" bg-[#333333]  md:py-3 py-2 fixed top-0 w-full z-50 px-5">
        <div className='max-w-[95rem] mx-auto'>
          <div className='flex justify-between'>
            <div className='flex gap-5 justify-center items-center'>
              <a href='https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F' target='_blank'>
                <i className="fi fi-brands-facebook text-white md:text-2xl text-lg"></i>
              </a>
              <a href='https://x.com/?lang=en' target='_blank'>
                <i className="fi fi-brands-twitter-alt text-white md:text-2xl text-lg"></i>
              </a>
              <a href='https://www.linkedin.com/' target='_blank'>
                <i className="fi fi-brands-linkedin text-white md:text-2xl text-lg"></i>
              </a>
            </div>
            <div className='text-white flex gap-5'>
              <p className='md:text-base text-sm hover:underline  cursor-pointer'>Login</p>
              <p className='md:text-base text-sm hover:underline cursor-pointer'>Register</p>
            </div>
          </div>
        </div>
      </section> */}
      <header className="bg-[#F2F2F2] z-50  p-1  md:px-1 px-5  ">
        <div className="container mx-auto flex justify-between text-black  items-center">
          <Link to='/'>
            <div className="flex items-center text-[#1B356F]">
              {/* <p className="text-3xl ">AJARCSE</p> */}
              <img className="md:w-52 w-40" src="/images/Herosection/png.png" alt="" />
            </div>
          </Link>
          {/* Hamburger Menu for mobile */}
          <div className="block lg:hidden">
            <HamburgerMenu
              isOpen={menuOpen}
              menuClicked={handleMenuClick}
              width={28}
              height={20}
              strokeWidth={3}
              rotate={0}
              color="#1B356F"
              borderRadius={2}
              animationDuration={0.5}
            />
          </div>
          <nav className={`lg:flex lg:space-x-4 space-y-4 -mt-5  ${menuOpen
            ? 'block  animate-slideIn h-[100vh] lg:animate-none'
            : 'hidden lg:block animate-slideOut lg:animate-none'
            } flex-col lg:py-0 py-5 lg:flex-row bg-white lg:bg-transparent lg:text-left text-center  lg:text-white lg:border-none border text-[#388883] absolute lg:static top-[90px] md:top-20 left-0 w-full rounded-b-3xl   lg:w-auto z-50`}
          >
            <div className="absolute inset-0 -z-10 lg:hidden block">
              <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-blue-50 to-blue-100 opacity-50"></div>
            </div>
            <Link to="/" className={` py-2 px-4 block lg:inline-block ${isActive("/") ? "underline underline-offset-4 decoration-4 text-[#1B356F]" : "text-[#1B356F]"}`}  >
              Home
            </Link>

            {/* Dropdown for Journal Overview */}
            <div className="relative lg:text-[#1B356F] text-[#1B356F]" ref={dropdownRef}>
              <button onClick={toggleDropdown} className="  inline-flex py-2  px-4 gap-2 focus:outline-none lg:hover:text-[#1B356F] hover:text-[#1B356F]"   >
                Journal Overview
                <MdExpandMore className={`${isDropdownOpen ? 'rotate-180' : 'rotate-0'} text-2xl duration-300`}
                />

              </button>
              {isDropdownOpen && (
                <div className=" lg:absolute lg:left-0 md:left-96 left-28  flex flex-col lg:grid grid-cols-2 lg:flex-none lg:text-[#1B356F]  shadow-sm  p-2 lg:bg-white  text-[#1B356F]  mt-2   lg:w-[500px] ">
                  <Link
                    to="/aboutus"
                    className={`px-2 py-2   ${isActive("/aboutus") ? "underline underline-offset-4  decoration-4 lg:text-[#1B356F] " : ""}`}
                  >
                    About
                  </Link>
                  <Link
                    to="/editorial-board"
                    className={` px-2 py-2   ${isActive("/editorial-board") ? "underline underline-offset-4  decoration-4 lg:text-[#1B356F]  " : ""}`}
                  >
                    Editorial Board
                  </Link>
                  <Link
                    to="/peerreview"
                    className={`block px-2 py-2  ${isActive("/peerreview") ? "underline underline-offset-4  decoration-4 lg:text-[#1B356F]  " : ""}`}
                  >
                    Peer Review Process
                  </Link>
                  <Link
                    to="/publicationethic"
                    className={`block px-2 py-2  ${isActive("/publicationethic") ? "underline underline-offset-4  decoration-4 lg:text-[#1B356F]  " : ""}`}
                  >
                    Publication Ethics
                  </Link>
                  <Link
                    to="/abstracting"
                    className={`block px-2 py-2  ${isActive("/abstracting") ? "underline underline-offset-4  decoration-4 lg:text-[#1B356F]  " : ""}`}
                  >
                    Abstracting and Indexing
                  </Link>
                  <Link
                    to="/articleprocess"
                    className={`block px-2 py-2  ${isActive("/articleprocess") ? "underline underline-offset-4  decoration-4 lg:text-[#1B356F]  " : ""}`}
                  >
                    Article Processing Charges
                  </Link>
                  <Link
                    to="/aim-nd-scope"
                    className={` px-2 py-2    ${isActive("/aim-nd-scope") ? "underline underline-offset-4  decoration-4 lg:text-[#1B356F]  " : ""}`}
                  >
                    Aim and Scope
                  </Link>
                  <Link
                    to="/issues"
                    className={` px-2 py-2    ${isActive("/issues") ? "underline underline-offset-4  decoration-4 lg:text-[#1B356F]  " : ""}`}
                  >
                    Issues
                  </Link>
                  <Link to="/author-guidelines" className={` px-2 py-2     ${isActive("/author-guidelines") ? "underline underline-offset-4  decoration-4 lg:text-[#1B356F]  " : ""}`}
                  >
                    Author Guidelines
                  </Link>
                  <Link to="/copyrights-form" className={` px-2 py-2     ${isActive("/copyrights-form") ? "underline underline-offset-4  decoration-4 lg:text-[#1B356F]  " : ""}`}
                  >
                    Copyright Form
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contactus"
              className={`  py-2 px-4 block lg:text-[#1B356F] text-[#1B356F] lg:inline-block ${isActive("/contactus") ? "underline underline-offset-4  decoration-4 lg:text-[#1B356F] text-[#1B356F]  " : ""}`}
            >
              Contact
            </Link>
            {/* 
          <Link
            to="/submit"
            className="  rounded-tr-md rounded-bl-md hover:rounded-br-md hover:rounded-tl-md hover:rounded-tr-none hover:rounded-bl-none hover:border-[#E4B1F0]  py-2 px-4 block lg:inline-block border"
          >
            Submit New Manuscript
          </Link> */}
          </nav>
          <div className="bg-[#1B356F] md:p-3 p-2 w-fit rounded-bl-3xl lg:block hidden hover:bg-white hover:text-[#1B356F] duration-200 transform   hover:border-[#1B356F] text-white border-white border-2 md:text-sm text-xs cursor-pointer animate-glow">
            Submission Portal
          </div>
        </div>
      </header>

    </>
  );
};

export default Header;
