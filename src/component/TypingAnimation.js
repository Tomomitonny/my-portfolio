import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ text, speed = 150 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (index < text.length) {
      timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[index]);
        setIndex(prev => prev + 1);
      }, speed);
    } else {
      timeout = setTimeout(() => {
        setDisplayText('');
        setIndex(0);
      }, 2000); 
    }
    return () => clearTimeout(timeout);
  }, [index, text, speed]);

  return <span>{displayText}</span>;
};

export default TypingAnimation;
