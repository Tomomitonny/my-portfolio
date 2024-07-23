import React from "react";

const Hero = () => {
  return (
    <div className="relative text-gray-600 body-font max-w-3xl mx-auto">
      <div className="absolute inset-0">
        <img
          className="hidden md:block w-full h-full object-scale-down opacity-30 object-left pr-32"
          src="./img/heroImage1.png"
          alt="hero"
        />
        {/* <div className="absolute inset-0 bg-black opacity-20"></div> */}
      </div>
      <div className="md:ml-40 flex px-5 py-24 md:flex-row flex-col items-right">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:justify-end md:text-right mb-8 md:mb-0 items-center text-center z-10">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 whitespace-nowrap">
            This is Tomomi Sasaki's <br /> Portfolio Website.
          </h1>
          <p className="mb-8 leading-relaxed whitespace-nowrap">
            I'm a growing web developer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
