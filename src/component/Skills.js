import React from "react";
import Background from "./Background";

const Skills = () => {

  const images = ["./img/bg-item.png", "./img/bg-item-sm.png", "./img/bg-item-lg.png"];

  return (
    <div className="text-gray-600 body-font mb-18 sm:mb-40">
      <Background
        images={images} 
        numItems={6} 
        className={"absolute"} 
      />
      <h2 className="relative z-10 flex justify-center pt-36 mb-8">
        <div className="en absolute z-0 -bottom-6 right-0 text-8xl font-bold w-auto h-32 text-[#fffff9] tracking-wider text-shadow">
          Skills & Tools
        </div>
        <div className="bitter-font relative text-3xl font-midium w-auto h-8">
          My Toolbox & Things I Can Do
        </div>
      </h2>
      <div className="container px-5 py-4 mx-auto xl:max-w-6xl md:max-w-4xl relative z-50">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-5">
          <div className="flex justify-center items-center">
            <img src="./img/icon_html.svg" alt="アイコン1" className="h-28 w-28"/>
          </div>
          <div className="flex justify-center items-center">
            <img src="./img/icon_css.svg" alt="アイコン2" className="h-28 w-28"/>
          </div>
          <div className="flex justify-center items-center">
            <img src="./img/icon_js.svg" alt="アイコン3" className="h-28 w-28"/>
          </div>
          <div className="flex justify-center items-center">
            <img src="./img/icon_ts.svg" alt="アイコン4" className="h-28 w-28"/>
          </div>
          <div className="flex justify-center items-center">
            <img src="./img/icon_twcss.svg" alt="アイコン5" className="h-28 w-28"/>
          </div>
          <div className="flex justify-center items-center">
            <img src="./img/icon_react.svg" alt="アイコン6" className="h-28 w-28"/>
          </div>
          <div className="flex justify-center items-center">
            <img src="./img/icon_next.svg" alt="アイコン7" className="h-28 w-28"/>
          </div>
          <div className="flex justify-center items-center">
            <img src="./img/icon_figma.svg" alt="アイコン8" className="h-28 w-28"/>
          </div>
          <div className="flex justify-center items-center">
            <img src="./img/icon_xd.svg" alt="アイコン9" className="h-28 w-28"/>
          </div>
          <div className="flex justify-center items-center">
            <img src="./img/icon_ai.svg" alt="アイコン10" className="h-28 w-28"/>
          </div>
          <div className="flex justify-center items-center">
            <img src="./img/icon_github.svg" alt="アイコン11" className="h-28 w-28"/>
          </div>
          <div className="flex justify-center items-center">
            <img src="./img/icon_vs.svg" alt="アイコン12" className="h-28 w-28"/>
          </div>
          <div className="flex justify-center items-center">
            <img src="./img/icon_wp.svg" alt="アイコン13" className="h-28 w-28"/>
          </div>
          <div className="flex justify-center items-center">
            <img src="./img/icon_sql.svg" alt="アイコン14" className="h-28 w-28"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
