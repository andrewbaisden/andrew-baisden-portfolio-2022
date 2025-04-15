import React from 'react';
import './AboutProfileText.css';

interface AboutProfileTextProps {}

export const AboutProfileText = ({ ...props }: AboutProfileTextProps) => {
  return (
    <>
      <article className="about-profile-text">
        <p>Hey there you super awesome person!</p>
        <p>
          My name is Andrew, and I am a Software Developer from London, England.
        </p>
        <p>
          I work as a Software Developer using the JavaScript and Python
          technical stacks. I excel at building full-stack apps, and I spend
          most of my programming time working on backends and frontend UI with
          React. Content creation and technical writing are two of my strongest
          soft skills. I enjoy contributing back to the developer community, and
          I have a large following and am quite active on social media.
        </p>
        <p>
          My programming skills are quite good as are my design skills. In fact
          I designed this website using the design tool Figma. I am also well
          known for my technical writing abilities too especially in the DEV,
          Hashnode and Medium communities. Check out the rest of my portfolio
          and see what I am up to on social media.
        </p>
        <p>Peace out ✌🏿 </p>
      </article>
    </>
  );
};

export default AboutProfileText;
