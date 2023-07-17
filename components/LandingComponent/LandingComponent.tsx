import React, { useState } from 'react';
import { useSpring } from '@react-spring/web';

const colors = {
    main: '#795548',
    light: '#9C7268',
    dark: '#573F34',
    accent: '#C09382',
    text: '#331D1C',
  };

const LandingComponent = () => {
  const [size, setSize] = useState(100);
  const [color, setColor] = useState('red');

  const spring = useSpring(() => ({
    size,
    color,
  }));

  const handleClick = () => {
    setSize(200);
    setColor('blue');
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-md mx-auto">
        <h1
          style={{
            color: colors.text,
            backgroundColor: colors.main,
          }}
          onClick={handleClick}
        >
          My Landing Page
        </h1>
        <p style={{ color: colors.text }}>
          This is my landing page, created using Next.js and TailwindCSS.
        </p>
        <a
          href="#"
          style={{
            backgroundColor: colors.accent,
            color: colors.text,
          }}
          className="py-2 px-4 rounded-md"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default LandingComponent;