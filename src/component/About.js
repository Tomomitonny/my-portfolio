import React from "react";

const About = () => {
  return (
    <div className="text-gray-600 body-font">
      
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-3/5 md:w-1/2 md:pr-10 md:py-6">
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-400 inline-flex items-center justify-center text-white relative z-10">
                <img src="./img/Vector 6.svg"/>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"></h2>
                <p className="leading-relaxed">
                  青森県出身<br/>
                  大学卒業まで弘前市で過ごす。<br/>
                  高校からストリートダンスをはじめ、<br/>
                  インストラクターとして指導を行う。
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-400 inline-flex items-center justify-center text-white relative z-10">
                <img src="./img/Vector 7.svg"/>

              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">就職</h2>
                <p className="leading-relaxed">
                  就職を機に上京。<br/>
                  看護師として働く。<br/>
                  小児専門病院や訪問看護ステーションなどに勤務。
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-400 inline-flex items-center justify-center text-white relative z-10">
                <img src="./img/Group 8709.svg"/>

              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"></h2>
                <p className="leading-relaxed">友人の影響でWebサイト制作に興味を持つ。<br/>
                  もともと物作りが好きで、プログラミングにハマり始める。</p>
              </div>
            </div>
            <div className="flex relative pb-12">
              {/* <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div> */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-400 inline-flex items-center justify-center text-white relative z-10">
                <img src="./img/Group 8713.svg"/>

              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">転職活動</h2>
                <p className="leading-relaxed">
                  就職訓練でWebサイト制作に関して学ぶ。<br/>
                  WordPressについて学び、
                  HTML、CSSなど<br/>
                  その他の言語をより深く学びたいと思い、<br/>
                  学習を始める。
                  就職活動を実施し今に至る。
                </p>
              </div>
            </div>
            
          </div>
          <img className="lg:w-2/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="https://dummyimage.com/1200x500" alt="step"/>
        </div>
      </div>
    </div>
  );
}

export default About;