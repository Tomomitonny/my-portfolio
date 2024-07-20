import React, { useEffect } from 'react';
import '../App.css';

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('cursor');

    const updateCursorPosition = (x, y) => {
      cursor.style.opacity = 1;
      cursor.style.top = `${y + window.scrollY}px`;
      cursor.style.left = `${x}px`;
    };

    const onMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      updateCursorPosition(x, y);
    };

    const onScroll = () => {
      const x = cursor.style.left.replace('px', '');
      const y = cursor.style.top.replace('px', '') - window.scrollY;
      updateCursorPosition(x, y);
    };

    const onMouseEnter = () => {
      cursor.classList.add('active');
    };

    const onMouseLeave = () => {
      cursor.classList.remove('active');
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('scroll', onScroll);
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('mouseenter', onMouseEnter);
      link.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('scroll', onScroll);
      links.forEach(link => {
        link.removeEventListener('mouseenter', onMouseEnter);
        link.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return <div id="cursor"></div>;
};

export default Cursor;