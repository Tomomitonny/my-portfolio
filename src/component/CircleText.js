import React from 'react';
import '../App';

const CircleText = () => {
  const text = "Thank you so much for seeing my portfolio!! ";
  const characters = text.split("");

  return (
    <>

    <div className="relative flex ml-auto items-center justify-center w-36 h-36 -right-7 -bottom-10 rounded-full animate-rotate">
      {characters.map((char, index) => (
        <span
          key={index}
          className="absolute text-sm text-gray-800"
          style={{
            transform: `rotate(${(index / characters.length) * 360}deg) translate(60px)`,
            transformOrigin: 'center',
            writingMode: 'vertical-rl',
          }}
        >
          {char}
        </span>
      ))}
    </div>
    </>
  );
};



export default CircleText;