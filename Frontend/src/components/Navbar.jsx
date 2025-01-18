import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/Untitled design 1.svg";
import HamburgerIcon from './HamburgerIcon';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-filter backdrop-blur-lg bg-opacity-30 bg-[#0b0314] h-[100px] mt-4 text-white z-50 border border-none rounded-3xl">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img src={logo || "/placeholder.svg"} alt="logo" className="w-20"/>
          <span className="text-2xl font-bold">TEAM TECHIES</span>
        </div>
        
        <div className="hidden lg:block">
          <div className="border-2 border-white px-4 py-2 rounded-full">
            <ul className="flex gap-8 cursor-pointer"> 
              <li><Link to="/">Home</Link></li>
              <li><Link to="/team">Our Team</Link></li>   
              <li><Link to="/about">About Us</Link></li>            
              <li><Link to="/contact">Need AI Solution?</Link></li>
            </ul>
          </div>
        </div>

        <div className="hidden lg:flex gap-4 mr-6">
          <button className="bg-red-500 text-white border-2 px-4 py-1 rounded-2xl p-[2px] m-1">
            <Link to="/subscribe">Subscribe</Link>
          </button>
        </div>

        <HamburgerIcon isOpen={isMenuOpen} toggle={toggleMenu} />
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-y-0 right-0 w-64 bg-[#0b0314] bg-opacity-95 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50 flex flex-col justify-start pt-20`}>
        <button 
          className="absolute top-4 right-4 text-white"
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex flex-col items-center">
          <ul className="text-center space-y-8 mb-8">
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/team" onClick={toggleMenu}>Our Team</Link></li>
            <li><Link to="/blog" onClick={toggleMenu}>About Us</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Need AI Solution?</Link></li>
          </ul>
          <button className="bg-red-500 text-white border-2 px-4 py-1 rounded-2xl">
            <Link to="/subscribe" onClick={toggleMenu}>Subscribe</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

