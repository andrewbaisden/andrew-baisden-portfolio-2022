import React from 'react';

import { useTheme } from '../../context/ThemeContext';

interface JavaScriptLogoProps {}

export const JavaScriptLogo = ({ ...props }: JavaScriptLogoProps) => {
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
            d="M0 0H100V100H0V0Z"
            fill={activeTheme === 'light' ? '#2F2F3A' : '#ffffff'}
          />
          <path
            d="M26.2936 83.5673L33.9463 78.936C35.4227 81.5536 36.7657 83.7684 39.9871 83.7684C43.0751 83.7684 45.0219 82.5605 45.0219 77.8621V45.9097H54.4194V77.9949C54.4194 87.7282 48.714 92.1586 40.39 92.1586C32.8724 92.1586 28.5086 88.2651 26.2935 83.5665"
            fill={activeTheme === 'light' ? '#EDF2FA' : '#2F2F3A'}
          />
          <path
            d="M59.5238 82.5604L67.1755 78.1301C69.1898 81.4196 71.8078 83.8359 76.4392 83.8359C80.333 83.8359 82.816 81.8891 82.816 79.204C82.816 75.982 80.2654 74.8407 75.9692 72.9618L73.6205 71.9542C66.8403 69.0683 62.3427 65.4435 62.3427 57.791C62.3427 50.7428 67.7127 45.3724 76.1038 45.3724C82.0781 45.3724 86.3741 47.4535 89.4616 52.8908L82.1448 57.5894C80.5336 54.7032 78.7889 53.5623 76.104 53.5623C73.3517 53.5623 71.6063 55.3075 71.6063 57.5894C71.6063 60.4088 73.3517 61.5502 77.3789 63.2956L79.7281 64.3024C87.7162 67.7261 92.2138 71.2162 92.2138 79.0697C92.2138 87.5281 85.5684 92.1594 76.6408 92.1594C67.9144 92.1594 62.2757 87.9978 59.524 82.5604"
            fill={activeTheme === 'light' ? '#EDF2FA' : '#2F2F3A'}
          />
        </svg>
        <p style={{ color: activeTheme === 'light' ? '#2F2F3A' : '#ffffff' }}>
          JavaScript
        </p>
      </div>
    </>
  );
};

export default JavaScriptLogo;
