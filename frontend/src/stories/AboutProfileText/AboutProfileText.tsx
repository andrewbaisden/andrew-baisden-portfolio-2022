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
          Programming, content creation and technical writing are 3 of my best
          traits. I really enjoy getting my hands dirty and playing around with
          code bases. I find it fascinating because the only limit is your
          imagination. I have a computer science background but the majority of
          my most recent skills have been self taught. I currently have 3 main
          technical stacks which I work with. This includes React with
          TypeScript and Node. Python and Django/Flask. And also ASP.NET Core
          combined with C#.
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
