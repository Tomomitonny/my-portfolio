import React from "react";
import Background from "./Background";

const About = () => {

  const images = ["./img/bg-item.png", "./img/bg-item-sm.png", "./img/bg-item-lg.png"];

  return (
    <div id="about" className="text-gray-600 body-font">
      <Background
        images={images} 
        numItems={10} 
        className={"absolute"} 
      />
      <h2 class="relative z-10 flex justify-center pt-36 mb-8">
        <div class="en absolute z-0 -bottom-6 right-0 text-8xl font-bold w-auto h-32 text-[#fffff9] tracking-wider text-shadow">
          About me
        </div>
        <div class="bitter-font relative text-3xl font-midium w-auto h-8">
            Who is Tomomi Sasaki?
        </div>
      </h2>      
      <div className="container px-5 py-4 mx-auto xl:max-w-5xl md:max-w-4xl flex flex-wrap ">
        <div className="flex flex-wrap w-full z-30">
          <div className="lg:w-3/5 md:w-1/2 md:pl-20 md:pr-10 md:py-6">
            <div className="flex relative pb-12 ">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                {/* <div className="h-full w-1 bg-gray-200 pointer-events-none"></div> */}
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#B5A4EE] inline-flex items-center justify-center text-white relative z-10">
                <img src="./img/Vector 6.svg"/>
              </div>
              <div className="flex-grow text-left ml-4">
                <h2 className="font-thin title-font text-lg mb-1 tracking-wider">生い立ち</h2>
                <p className="leading-relaxed">
                  青森県出身。
                  大学卒業まで弘前市で過ごす。<br/>
                  身体を動かすことが好きでソフトボール、バスケットボールなどを経験。
                  高校からストリートダンスをはじめ、インストラクターとして指導を行う。<br/>
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                {/* <div className="h-full w-1 bg-gray-200 pointer-events-none"></div> */}
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#B5A4EE] inline-flex items-center justify-center text-white relative z-10">
                <img src="./img/Vector 7.svg"/>
              </div>
              <div className="flex-grow text-left ml-4">
                <h2 className="font-medium title-font text-lg mb-1 tracking-wider">就職</h2>
                <p className="leading-relaxed">
                  就職を機に上京。看護師として働く。<br/>
                  小児専門病院や訪問看護ステーションなどに勤務。
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                {/* <div className="h-full w-1 bg-gray-200 pointer-events-none"></div> */}
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#B5A4EE] inline-flex items-center justify-center text-white relative z-10">
                <img src="./img/Group 8709.svg"/>
              </div>
              <div className="flex-grow text-left ml-4">
                <h2 className="font-thin title-font text-lg mb-1 tracking-wider">趣味</h2>
                <p className="leading-relaxed">
                  編み物、ビーズ、パン作りなどとにかく物作りが好き。<br/>
                  ダンスも続けていて<br/>
                  友人の影響でWebサイト制作に興味を持つ。<br/>

                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                {/* <div className="h-full w-1 bg-gray-200 pointer-events-none"></div> */}
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#B5A4EE] inline-flex items-center justify-center text-white relative z-10">
                <img src="./img/Group 8780.svg"/>

              </div>
              <div className="flex-grow text-left ml-4">
                <h2 className="font-thin title-font text-lg mb-1 tracking-wider">転職</h2>
                <p className="leading-relaxed">
                  物作りを通じて知り合った友人の影響でWeb制作に興味を持ち、職業訓練でWebサイト制作に関して学ぶ。<br/>
                  WordPressについて学び、HTML、CSSなど
                  その他の言語をより深く学びたいと思い、自己学習も始める。
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                {/* <div className="h-full w-1 bg-gray-200 pointer-events-none"></div> */}
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#B5A4EE] inline-flex items-center justify-center text-white relative z-10">
                <img src="./img/icon_code.svg"/>

              </div>
              <div className="flex-grow text-left ml-4">
                <h2 className="font-thin title-font text-lg mb-1 tracking-wider">現在</h2>
                <p className="leading-relaxed">
                  幅広い視点で、目的に合ったデザインを叶えられる<br/>
                  ウェブ開発者になれるよう学習を続けています。</p>
              </div>
            </div>
            
          </div>
          <img className="lg:w-2/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="./img/about_img1.png" alt="about image"/>
        </div>
      </div>
    </div>
  );
}

export default About;