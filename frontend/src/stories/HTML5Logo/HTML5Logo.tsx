import React from 'react';
import './HTML5Logo.css';

import { useTheme } from '../../context/ThemeContext';

interface HTML5LogoProps {}

export const HTML5Logo = ({ ...props }: HTML5LogoProps) => {
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
            d="M13.8672 89.8438L5.85938 0H93.9453L85.9375 89.8438L49.8047 100"
            fill={activeTheme === 'light' ? '#2F2F3A' : '#ffffff'}
          />
          <path
            d="M50 92.1875L79.1016 84.1797L85.9375 7.22656H50"
            fill={activeTheme === 'light' ? '#2F2F3A' : '#ffffff'}
          />
          <path
            d="M50 40.625H35.3516L34.375 29.2969H50V18.3594H22.2656L25.1953 51.7578H50V40.625ZM49.8047 69.3359L37.5 66.0156L36.7188 57.2266H25.7812L27.1484 74.6094L49.8047 80.8594V69.3359Z"
            fill={activeTheme === 'light' ? '#EDF2FA' : '#2F2F3A'}
          />
          <path
            d="M49.8047 40.625V51.7578H63.4766L62.1094 66.0156L49.8047 69.3359V80.8594L72.4609 74.6094L75.5859 40.625H49.8047ZM49.8047 18.3594V29.2969H76.5625L77.5391 18.3594H49.8047Z"
            fill={activeTheme === 'light' ? '#EDF2FA' : '#2F2F3A'}
          />
        </svg>
        <p style={{ color: activeTheme === 'light' ? '#2F2F3A' : '#ffffff' }}>
          HTML5
        </p>
      </div>
    </>
  );
};

export default HTML5Logo;
