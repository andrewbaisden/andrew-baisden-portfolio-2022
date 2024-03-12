import { useRef } from 'react';
import './App.css';
import Hero from './stories/Hero/Hero';
import Header from './stories/Header/Header';
import HeroProfile from './stories/HeroProfile/HeroProfile';
import AboutProfileText from './stories/AboutProfileText/AboutProfileText';
import AboutProfileImage from './stories/AboutProfileImage/AboutProfileImage';
import SocialMediaCarousel from './stories/SocialMediaCarousel/SocialMediaCarousel';
import SkillGroupIcons from './stories/SkillGroupIcons/SkillGroupIcons';
import ContactText from './stories/ContactText/ContactText';
import FooterText from './stories/FooterText/FooterText';

import { useTheme } from '../src/context/ThemeContext';

const App = () => {
  const { activeTheme } = useTheme();

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const scoialMediaRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <div className="container">
        <div>
          <div className="hero-container" ref={homeRef}>
            <Hero />
            <div className="hero-header-container">
              <Header
                homeRef={homeRef}
                aboutRef={aboutRef}
                scoialMediaRef={scoialMediaRef}
                skillsRef={skillsRef}
                contactRef={contactRef}
              />
            </div>
            <div className="hero-bio-container">
              <HeroProfile />
            </div>
          </div>
          <main>
            <div ref={aboutRef}>
              <section className="header-section">
                <a
                  href="/#about"
                  rel="noopener noreferrer"
                  className={
                    activeTheme === 'light'
                      ? 'header-title-light'
                      : 'header-title-dark'
                  }
                >
                  About
                </a>
              </section>
              <section
                className={`about-section ${
                  activeTheme === 'light'
                    ? 'section-border-light-theme'
                    : 'section-border-dark-theme'
                }`}
              >
                <div>
                  <AboutProfileText />
                </div>
                <div>
                  <AboutProfileImage />
                </div>
              </section>
            </div>
            <div ref={scoialMediaRef}>
              <section className="header-section">
                <a
                  href="/#socialmedia"
                  rel="noopener noreferrer"
                  className={
                    activeTheme === 'light'
                      ? 'header-title-light'
                      : 'header-title-dark'
                  }
                >
                  Social Media
                </a>
              </section>
              <section
                className={`socialmedia-section ${
                  activeTheme === 'light'
                    ? 'section-border-light-theme'
                    : 'section-border-dark-theme'
                }`}
              >
                <SocialMediaCarousel />
              </section>
            </div>
            <div ref={skillsRef}>
              <section className="header-section">
                <a
                  href="/#skills"
                  rel="noopener noreferrer"
                  className={
                    activeTheme === 'light'
                      ? 'header-title-light'
                      : 'header-title-dark'
                  }
                >
                  Skills
                </a>
              </section>
              <section
                className={`skills-section ${
                  activeTheme === 'light'
                    ? 'section-border-light-theme'
                    : 'section-border-dark-theme'
                }`}
              >
                <SkillGroupIcons />
              </section>
            </div>
            <div ref={contactRef}>
              <section className="header-section">
                <a
                  href="/#contact"
                  rel="noopener noreferrer"
                  className={
                    activeTheme === 'light'
                      ? 'header-title-light'
                      : 'header-title-dark'
                  }
                >
                  Contact
                </a>
              </section>
              <section
                className={`contact-section ${
                  activeTheme === 'light'
                    ? 'section-border-light-theme'
                    : 'section-border-dark-theme'
                }`}
              >
                <ContactText />
              </section>
            </div>
          </main>
          {/* <footer className={activeTheme === 'light' ? 'footer-light-theme' : 'footer-dark-theme'}> */}
          <footer
            className={
              activeTheme === 'light'
                ? 'footer-light-theme'
                : 'footer-light-theme'
            }
          >
            <FooterText />
          </footer>
        </div>
      </div>
    </>
  );
};

export default App;
