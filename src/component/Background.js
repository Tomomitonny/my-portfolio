import React from 'react';
import ItemRotate from './ItemRotate';

const getRandomPosition = () => {
  const top = Math.random() * 100; 
  const left = Math.random() * 100;
  return { top: `${top}%`, left: `${left}%` };
};

const Background = ({ images, numItems, className }) => {
  const items = Array.from({ length: numItems }, (_, index) => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const position = getRandomPosition();
    return (
      <ItemRotate
        key={index}
        src={randomImage}
        className={`absolute ${className}`}
        style={{ top: position.top, left: position.left }}
      />
    );
  });

  return (
    <div className={`mt-40 absolute inset-0 overflow-hidden z-0 ${className}`}>
      {items}
    </div>
  );
};

export default Background;
