import React from 'react';
import './AboutProfileText.css';

interface AboutProfileTextProps {}

export const AboutProfileText = ({ ...props }: AboutProfileTextProps) => {
  return (
    <>
      <article className="about-profile-text">
        <p>
          I’m a Full-Stack Engineer who builds and ships production-ready web
          applications with React, Next.js, TypeScript, Node.js/NestJS, and
          Python. AI isn’t a side tool for me, it’s core to how I work. I code
          every day inside Cursor, and use Claude, ChatGPT, and Gemini for
          architecture decisions, code generation, debugging, and rapid
          iteration. I use Warp Terminal with AI autocomplete and custom LLM
          agents to deliver projects 3 – 4× faster while keeping code clean,
          scalable, and maintainable. Over the last 7+ years, I’ve delivered:
        </p>

        <ul>
          <li>
            Multiple client-facing Next.js platforms that directly increased
            conversion rates
          </li>
          <li>
            A React + Python full-stack system that replaced legacy Excel
            processes for a government client
          </li>
          <li>
            Responsive landing pages and digital campaigns for major brands
            (Sky, Ocado)
          </li>
          <li>
            A 288-page enterprise React technical guide used by developers
            worldwide
          </li>
        </ul>

        <p>
          I also serve on Packt’s Tech Advisory Board, helping shape upcoming
          courses on modern full-stack and AI engineering. While I share
          practical, hands-on knowledge through technical writing, my primary
          focus is building real systems, not just talking about them. Whether
          it’s a high-traffic client product or an AI-agent automation project,
          I deliver measurable business impact with clean architecture and
          modern tooling.
        </p>

        <p>
          Currently open to: - Full-time Senior/Lead Full-Stack or AI-Augmented
          Engineer roles (London or remote) - Contract/freelance development
          projects - Technical advisory or mentoring opportunities
        </p>

        <p>
          If you’re looking for a developer who can design, code, ship, and
          iterate fast using the latest AI-powered workflows, let’s talk.
        </p>
      </article>
    </>
  );
};

export default AboutProfileText;
