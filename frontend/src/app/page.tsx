"use client";

import { useRef } from 'react';
import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';
import HeroProfile from './components/HeroProfile/HeroProfile';
import AboutProfileText from './components/AboutProfileText/AboutProfileText';
import AboutProfileImage from './components/AboutProfileImage/AboutProfileImage';
import SocialMediaCarousel from './components/SocialMediaCarousel/SocialMediaCarousel';
import SkillGroupIcons from './components/SkillGroupIcons/SkillGroupIcons';
import ContactText from './components/ContactText/ContactText';
import FooterText from './components/FooterText/FooterText';

import { useTheme } from './context/ThemeContext';

const Home = () => {
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
              <section>
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
              <section>
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
              <section className="skills-section">
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
              <section className="contact-section">
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

export default Home;
