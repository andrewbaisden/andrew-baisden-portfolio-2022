import React from 'react';

import { useTheme } from '../../context/ThemeContext';

interface FigmaLogoProps {}

export const FigmaLogo = ({ ...props }: FigmaLogoProps) => {
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
            d="M33.3334 100C42.5334 100 50 92.5334 50 83.3334V66.6667H33.3334C24.1334 66.6667 16.6667 74.1334 16.6667 83.3334C16.6667 92.5334 24.1334 100 33.3334 100Z"
            fill={activeTheme === 'light' ? '#2F2F3A' : '#ffffff'}
          />
          <path
            d="M16.6667 49.9999C16.6667 40.7999 24.1334 33.3333 33.3334 33.3333H50V66.6666H33.3334C24.1334 66.6666 16.6667 59.1999 16.6667 49.9999Z"
            fill={activeTheme === 'light' ? '#2F2F3A' : '#ffffff'}
          />
          <path
            d="M16.6667 16.6667C16.6667 7.46667 24.1334 0 33.3334 0H50V33.3333H33.3334C24.1334 33.3333 16.6667 25.8667 16.6667 16.6667Z"
            fill={activeTheme === 'light' ? '#2F2F3A' : '#ffffff'}
          />
          <path
            d="M50 0H66.6667C75.8667 0 83.3333 7.46667 83.3333 16.6667C83.3333 25.8667 75.8667 33.3333 66.6667 33.3333H50V0Z"
            fill={activeTheme === 'light' ? '#2F2F3A' : '#ffffff'}
          />
          <path
            d="M83.3333 49.9999C83.3333 59.1999 75.8667 66.6666 66.6667 66.6666C57.4667 66.6666 50 59.1999 50 49.9999C50 40.7999 57.4667 33.3333 66.6667 33.3333C75.8667 33.3333 83.3333 40.7999 83.3333 49.9999Z"
            fill={activeTheme === 'light' ? '#2F2F3A' : '#ffffff'}
          />
        </svg>

        <p style={{ color: activeTheme === 'light' ? '#2F2F3A' : '#ffffff' }}>
          Figma
        </p>
      </div>
    </>
  );
};

export default FigmaLogo;
