import React from 'react';
// import '../App';

const CircleText = () => {
  const text = "Thank you for seeing my portfolio!!  ";
  const characters = text.split("");

  return (
    <>

    <div className="relative flex ml-auto items-center justify-center w-36 h-36 rounded-full">
    <img
      className='absolute'
      src='./img/Arrow 1.svg'
    />
    <div className="animate-rotate">
      {characters.map((char, index) => (
        <span
          key={index}
          className="absolute text-sm text-gray-800"
          style={{
            transform: `rotate(${(index / characters.length) * 360}deg) translate(60px)`,
            transformOrigin: '0 0',
            writingMode: 'vertical-rl',
          }}
        >
          {char}
        </span>
      ))}
    </div>
    </div>
    </>
  );
};



export default CircleText;