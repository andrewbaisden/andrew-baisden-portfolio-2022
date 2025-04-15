import React from 'react';
import Logo from '../../img/logo.svg';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Header.css';

interface Headerprops {
  homeRef: any;
  aboutRef: any;
  scoialMediaRef: any;
  skillsRef: any;
  contactRef: any;
}

export const Header = ({
  aboutRef,
  scoialMediaRef,
  skillsRef,
  contactRef,
  homeRef,
  ...props
}: Headerprops) => {
  const handleScroll = (ref: any): void => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
    console.log('change page');
  };

  return (
    <>
      <div className="header-desktop">
        <section>
          <div>
            <a
              href="#home"
              rel="noopener noreferrer"
              onClick={() => {
                handleScroll(homeRef.current);
              }}
            >
              <img src={Logo} alt="Andrew Baisden Logo" />
            </a>
          </div>
          <div className="navigation">
            <nav>
              <a
                href="#home"
                rel="noopener noreferrer"
                onClick={() => {
                  handleScroll(homeRef.current);
                }}
              >
                Home
              </a>
              <a
                href="#about"
                rel="noopener noreferrer"
                onClick={() => {
                  handleScroll(aboutRef.current);
                }}
              >
                About
              </a>
              <a
                href="#socialmedia"
                rel="noopener noreferrer"
                onClick={() => {
                  handleScroll(scoialMediaRef.current);
                }}
              >
                Social Media
              </a>
              <a
                href="#skills"
                rel="noopener noreferrer"
                onClick={() => {
                  handleScroll(skillsRef.current);
                }}
              >
                Skills
              </a>
              <a
                href="#contact"
                rel="noopener noreferrer"
                onClick={() => {
                  handleScroll(contactRef.current);
                }}
              >
                Contact
              </a>
            </nav>
            <div>
              <ThemeToggle />
            </div>
          </div>
        </section>
      </div>
      <div className="header-mobile-no-menu">
        <div className="logo-theme-toggle">
          <a
            href="#home"
            rel="noopener noreferrer"
            onClick={() => {
              handleScroll(homeRef.current);
            }}
          >
            <img src={Logo} alt="Andrew Baisden Logo" />
          </a>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
      {/* <div className="header-mobile">
        <header>
          <input id="burger" type="checkbox" />

          <label htmlFor="burger">
            <span></span>
            <span></span>
            <span></span>
          </label>

          <nav>
            <div className="logo-theme-toggle">
              <a
                href="#home"
                rel="noopener noreferrer"
                onClick={() => {
                  handleScroll(homeRef.current);
                }}
              >
                <img src={Logo} alt="Andrew Baisden Logo" />
              </a>
            </div>
            <ul>
              <li>
                <div>
                  <ThemeToggle />
                </div>
              </li>
              <li>
                <a
                  href="#home"
                  rel="noopener noreferrer"
                  onClick={() => {
                    handleScroll(homeRef.current);
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  rel="noopener noreferrer"
                  onClick={() => {
                    handleScroll(aboutRef.current);
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#socialmedia"
                  rel="noopener noreferrer"
                  onClick={() => {
                    handleScroll(scoialMediaRef.current);
                  }}
                >
                  Social Media
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  rel="noopener noreferrer"
                  onClick={() => {
                    handleScroll(skillsRef.current);
                  }}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  rel="noopener noreferrer"
                  onClick={() => {
                    handleScroll(contactRef.current);
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div> */}
    </>
  );
};

export default Header;
