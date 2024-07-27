import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
 return (
  
  <header 
    className="text-gray-600 body-font mx-auto z-50">
    <div 
      className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link
        to="/"
        className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img 
          className="w-14 h-14"
          alt=""
          src="./img/logo.png" />
      </Link>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a href="#works" className="mr-8 hover:text-gray-900">Works</a>
        <a href="#about" className="mr-8 hover:text-gray-900">About</a>
        <Link to="/contact" className="inline-flex items-center mr-5 hover:text-gray-900">Contact
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
        </Link>
      </nav>
    </div>
  </header>
 );
  
}

export default Header;