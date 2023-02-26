import React, { useState } from 'react';
import './SkillGroupIcons.css';
import HTML5Logo from '../HTML5Logo/HTML5Logo';
import CSS3Logo from '../CSS3Logo/CSS3Logo';
import JavaScriptLogo from '../JavaScriptLogo/JavaScriptLogo';
import TypeScriptLogo from '../TypeScriptLogo/TypeScriptLogo';
import ReactLogo from '../ReactLogo/ReactLogo';
import ReduxLogo from '../ReduxLogo/ReduxLogo';
import CSharpLogo from '../CSharpLogo/CSharpLogo';
import PythonLogo from '../PythonLogo/PythonLogo';
import NodeJSLogo from '../NodeJSLogo/NodeJSLogo';
import MongoDBLogo from '../MongoDBLogo/MongoDBLogo';
import PostgreSQLLogo from '../PostgreSQLLogo/PostgreSQLLogo';
import PhotoshopLogo from '../PhotoshopLogo/PhotoshopLogo';
import FigmaLogo from '../FigmaLogo/FigmaLogo';
// import AdobeXDLogo from '../AdobeXDLogo/AdobeXDLogo';

interface SkillGroupIconsProps {}

export const SkillGroupIcons = ({ ...props }: SkillGroupIconsProps) => {
  const [technicalStack] = useState<{ image: object }[]>([
    {
      image: <HTML5Logo />,
    },
    {
      image: <CSS3Logo />,
    },
    {
      image: <JavaScriptLogo />,
    },
    {
      image: <TypeScriptLogo />,
    },
    {
      image: <ReactLogo />,
    },
    {
      image: <ReduxLogo />,
    },
    {
      image: <CSharpLogo />,
    },
    {
      image: <PythonLogo />,
    },
    {
      image: <NodeJSLogo />,
    },
    {
      image: <MongoDBLogo />,
    },
    {
      image: <PostgreSQLLogo />,
    },
    {
      image: <PhotoshopLogo />,
    },
    {
      image: <FigmaLogo />,
    },
    // {
    // 	image: <AdobeXDLogo />,
    // },
  ]);

  return (
    <>
      <div className="tech-stack-container">
        {technicalStack.map((skill) => (
          <div className="tech-stack">{skill.image}</div>
        ))}
      </div>
    </>
  );
};

export default SkillGroupIcons;
