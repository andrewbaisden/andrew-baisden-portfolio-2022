import React from 'react';
import './AboutProfileText.css';

interface AboutProfileTextProps {}

export const AboutProfileText = ({ ...props }: AboutProfileTextProps) => {
  return (
    <>
      <article className="about-profile-text">
        <p>Hey there! 👋</p>
        <p>
          I’m Andrew, a London-based Software Developer and content creator who
          lives and breathes building things (powered by coffee, tea, curiosity,
          and the occasional late-night code session).
        </p>
        <p>
          My core stack is JavaScript/TypeScript + React, but I’m equally
          comfortable thinking about performance, architecture, tooling, and the
          little UX details that separate "it works" from "it feels great."
        </p>
        <p>
          Outside of client work and coding sessions, I create content to help
          developers level up, from practical programming insights to breakdowns
          of modern stacks, workflows, and the tools I’m testing. Recently, that
          has meant delving deep into AI for developers: agentic tooling,
          AI-assisted coding workflows, and where all of this is heading.
        </p>
        <p>
          I write articles on DEV, Medium, and freeCodeCamp, and I also run a
          Substack newsletter, where I share deeper thoughts on software
          development, AI, productivity, and the evolving reality of being a
          modern developer.
        </p>
        <p>
          This website is my little corner of the internet, built with the same
          mindset I bring to engineering: clean design, thoughtful UX, and a
          focus on craft.
        </p>
        <p>
          If you’re into tech, AI, web dev, or just enjoy a good programming
          meme, come say hi 👇
        </p>
        <p>
          Let’s build cool stuff and make the internet a little more awesome 🚀
        </p>
      </article>
    </>
  );
};

export default AboutProfileText;
