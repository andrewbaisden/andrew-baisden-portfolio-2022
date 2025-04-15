import React, { useState } from 'react';
import './FooterText.css';
import firstFormationsLogo from '../../img/1stFormations_Member_Logo_Dark Background.png';

import { useTheme } from '../../context/ThemeContext';

interface FooterTextProps {}

export const FooterText = ({ ...props }: FooterTextProps) => {
  const { activeTheme } = useTheme();

  const d = new Date();
  let year = d.getFullYear();

  const [currYear] = useState(year);

  return (
    <>
      <div className="footer-text">
        <div>
          <a href="https://www.1stformations.co.uk/" target="/">
            <img
              src={firstFormationsLogo}
              alt="First Formations Logo"
              width={150}
              style={{ marginBottom: '1rem' }}
            />
          </a>
        </div>
        <p>
          This website was designed in&nbsp;
          <a
            href="https://www.figma.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={
              activeTheme === 'light'
                ? 'footer-text-link-light-theme'
                : 'footer-text-link-light-theme'
            }
          >
            Figma
          </a>
          &nbsp;and built using&nbsp;
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={
              activeTheme === 'light'
                ? 'footer-text-link-light-theme'
                : 'footer-text-link-light-theme'
            }
          >
            React
          </a>
          &nbsp;by Andrew Baisden.
        </p>
        <p>
          All Rights Reserved &reg; Copyright &copy; {currYear} Andrew Baisden.
        </p>
      </div>
    </>
  );
};

export default FooterText;
