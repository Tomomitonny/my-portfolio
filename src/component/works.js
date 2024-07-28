import React from "react";
import '../index.css';
import Background from "./Background";

const Works = ({ worksData }) => {
  if (!Array.isArray(worksData)) {
    return <p>Invalid data</p>;
  }

  const images = ["./img/bg-item.png", "./img/bg-item-sm.png", "./img/bg-item-lg.png"];

  return (
    <div id="works" className="text-gray-600 body-font relative z-50">
      <Background
        images={images} 
        numItems={6} 
        containerClassName={"h-full"}
        className={""} 
      />
      <h2 className="relative z-10 flex justify-center pt-36 mb-8">
        <div className="en absolute z-0 -bottom-6 right-0 text-8xl font-bold w-auto h-32 text-[#fffff9] tracking-wider text-shadow">
          Works
        </div>
        <div className="bitter-font relative text-3xl font-midium w-auto h-8">
          A Selection Of Stuff I've Built
        </div>
      </h2>

      <div className="works container px-5 py-4 mx-auto xl:max-w-6xl md:max-w-4xl">
        <ul className="works_ul list-none flex flex-wrap">
          {worksData.map((work, index) => (
            <li key={index} className="works_li relative xl:w-1/3 md:w-1/2 p-6">
              <a href={work.link} target="_blank" rel="noopener noreferrer" className="block border border-gray-100 relative overflow-hidden no-underline group shadow-md">
                <div className="works_img relative z-10">
                  <img
                    src={work.imgSrc}
                    alt={work.alt}
                    className="h-60 w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-50"></div>
                </div>
                <div className="bg-white text-gray-700 w-full text-left pl-3 relative z-20">
                  <h3 className="text-lg font-bold py-2">
                    {work.title}
                  </h3>
                  <p className="">
                    {work.description}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Works;
