import React from 'react';

import { useTheme } from '../../context/ThemeContext';

interface CSS3LogoProps {}

export const CSS3Logo = ({ ...props }: CSS3LogoProps) => {
  const { activeTheme } = useTheme();
  return (
    <>
      <div className="logo-container">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.0625 89.8438L5.85938 0H93.9453L85.9375 89.8438L50 100"
            fill={activeTheme === 'light' ? '#2F2F3A' : '#ffffff'}
          />
          <path
            d="M50 7.22656V92.1875L79.1016 84.1797L85.9375 7.22656"
            fill={activeTheme === 'light' ? '#2F2F3A' : '#ffffff'}
          />
          <path
            d="M22.2656 18.3594H50V29.2969H23.2422L22.2656 18.3594ZM24.2188 40.625H50V51.7578H25.1953L24.2188 40.625ZM25.7812 57.2266H36.7188L37.5 66.0156L50 69.3359V80.8594L27.1484 74.6094"
            fill={activeTheme === 'light' ? '#EDF2FA' : '#2F2F3A'}
          />
          <path
            d="M50 40.625V51.7578H63.4766L62.1094 66.0156L50 69.3359V80.8594L72.4609 74.6094L77.5391 18.3594H50V29.2969H65.625L64.5508 40.625H50Z"
            fill={activeTheme === 'light' ? '#EDF2FA' : '#2F2F3A'}
          />
        </svg>
        <p style={{ color: activeTheme === 'light' ? '#2F2F3A' : '#ffffff' }}>
          CSS3
        </p>
      </div>
    </>
  );
};

export default CSS3Logo;
