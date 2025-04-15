import Typewriter from 'typewriter-effect';
import profilePictureHero from '../../img/profile-picture.png';
import './HeroProfile.css';

import { useTheme } from '../../context/ThemeContext';

interface HeroProfileprops {}

export const HeroProfile = ({ ...props }: HeroProfileprops) => {
  const { activeTheme } = useTheme();
  return (
    <>
      <div className="hero-profile-container">
        <div className="hero-profile">
          <img src={profilePictureHero} alt="Andrew Baisden Profile" />
          <p>Hey there I'm,</p>
          <h1>Andrew Baisden</h1>
          <Typewriter
            options={{
              strings: [
                'Software Developer',
                'Technical Writer',
                'Content Creator',
                'Gamer',
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <p className="hero-profile-tagline">
            What I excel at is creating software, websites, apps, and writing.
          </p>
          <a
            href="https://limey.io/andrewbaisden"
            target="_blank"
            rel="noopener noreferrer"
            className={
              activeTheme === 'light'
                ? 'hero-profile-button-light-theme'
                : 'hero-profile-button-dark-theme'
            }
          >
            Find me on social media
          </a>
        </div>
      </div>
    </>
  );
};

export default HeroProfile;
