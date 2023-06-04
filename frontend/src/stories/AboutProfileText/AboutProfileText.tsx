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
          I work across the entire stack as a software developer. There are now
          2 main technical stacks I use. I'm utilising JavaScript, React, and
          Node in addition to Python, and Django. Content creation and technical
          writing are two of my strongest soft skills because they provide a
          platform for learning for myself and other seasoned and aspiring
          engineers. I enjoy interacting with the developer community, and I
          have a large following and am extremely active on social media.
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
