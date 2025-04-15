import React from 'react';
import './AboutProfileText.css';

interface AboutProfileTextProps {}

export const AboutProfileText = ({ ...props }: AboutProfileTextProps) => {
  return (
    <>
      <article className="about-profile-text">
        <p>Hey there!</p>
        <p>
        I’m Andrew, a London-based Software Developer who lives and breathes code (and probably drinks way too much coffee ☕).
        </p>
        <p>
        By day, I play with JavaScript, working on different codebases and apps. React UIs? Backends? APIs? You name it, I’m in. In my downtime (and sometimes during coffee breaks), I share insights, write tutorials, and create content to help devs level up their skills.
        </p>
        <p>
        I’m also the brains behind this site, and I designed it from scratch using Figma. I enjoy mixing clean code with clean design, and I’m always exploring new ways to blend creativity with tech.
        </p>
        <p>I write regularly on DEV, Hashnode, and Medium, and I’m pretty active (and kinda fun) on socials, too. Come say hi, catch some tech tips, and maybe even a meme or two.</p>
        <p>
        Let’s build cool stuff and make the internet a little more awesome 🚀
        </p>
      </article>
    </>
  );
};

export default AboutProfileText;
