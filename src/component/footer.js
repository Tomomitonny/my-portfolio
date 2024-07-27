import React from "react";
import CircleText from "./CircleText";

const Footer = () => {
  const year = new Date().getFullYear();

  const handleScrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer class="text-gray-600 body-font justify-between">
      <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        
        <div className='hidden sm:inline-block m-auto'>
          <a 
            href="#"
            onClick={handleScrollToTop}
          >
            <CircleText/>
          </a>
        </div>

        
      </div>

      <p className="copyright mb-2 ">
            &copy; 
            {year} SASAKI TOMOMI
          </p>

    
  </footer>

  );

}

export default Footer ;