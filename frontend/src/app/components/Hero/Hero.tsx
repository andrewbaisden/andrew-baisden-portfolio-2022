import React from 'react';
import './Hero.css';

import { useTheme } from '../../context/ThemeContext';

interface HeroProps {}

export const Hero = ({ ...props }: HeroProps) => {
  const { activeTheme } = useTheme();
  return (
    <>
      <svg
        viewBox="0 0 1512 882"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Hero">
          <rect
            id="BG"
            x="-2.95898"
            width="1679.5"
            height="802"
            className={
              activeTheme === 'light'
                ? 'hero-bg-light-theme'
                : 'hero-bg-dark-theme'
            }
          />
          <rect
            id="ground"
            x="-2.95898"
            y="780"
            width="1680"
            height="22"
            fill={activeTheme === 'light' ? '#2D3039' : '#EDF2FA'}
          />
          <g id="City Background">
            <g id="Foreground 4">
              <g id="building 1">
                <path
                  id="Rectangle 39"
                  d="M708.019 652.656H778.465L769.407 720.392L719.76 719.721L708.019 652.656Z"
                  fill="#1E91"
                />
                <rect
                  id="Rectangle 40"
                  x="719.76"
                  y="719.489"
                  width="49.6733"
                  height="60.5111"
                  fill="#1E91"
                />
                <path
                  id="Rectangle 41"
                  d="M732.191 645.431H754.292L766.724 652.656H719.76L732.191 645.431Z"
                  fill="#1E91"
                />
              </g>
              <g id="building 12">
                <path
                  id="Rectangle 39_2"
                  d="M1096.37 704.899H1137.92L1132.58 744.847L1103.3 744.451L1096.37 704.899Z"
                  fill="#1E91"
                />
                <rect
                  id="Rectangle 40_2"
                  x="1103.3"
                  y="744.314"
                  width="29.2945"
                  height="35.686"
                  fill="#1E91"
                />
                <path
                  id="Rectangle 41_2"
                  d="M1110.63 700.638H1123.66L1130.99 704.899H1103.3L1110.63 700.638Z"
                  fill="#1E91"
                />
              </g>
              <g id="building 13">
                <path
                  id="Rectangle 39_3"
                  d="M1371.83 726.008H1401.64L1397.81 754.665L1376.8 754.382L1371.83 726.008Z"
                  fill="#1E91"
                />
                <rect
                  id="Rectangle 40_3"
                  x="1376.8"
                  y="754.283"
                  width="21.0156"
                  height="25.6008"
                  fill="#1E91"
                />
                <path
                  id="Rectangle 41_3"
                  d="M1382.06 722.951H1391.41L1396.67 726.008H1376.8L1382.06 722.951Z"
                  fill="#1E91"
                />
              </g>
              <g id="building 2">
                <path
                  id="Rectangle 42"
                  d="M855.684 681.557H888.198L893.165 779.097H850.717L855.684 681.557Z"
                  fill="#1E91"
                />
                <path
                  id="Rectangle 43"
                  d="M855.684 679.816C855.684 674.293 860.161 669.816 865.684 669.816H878.198C883.72 669.816 888.198 674.293 888.198 679.816V681.557H855.684V679.816Z"
                  fill="#1E91"
                />
              </g>
              <g id="building 6">
                <path
                  id="Rectangle 42_2"
                  d="M982.894 577.79H1050L1060.25 779.097H972.642L982.894 577.79Z"
                  fill="#1E91"
                />
                <path
                  id="Rectangle 43_2"
                  d="M982.894 563.559C982.894 558.036 987.371 553.559 992.894 553.559H1040C1045.52 553.559 1050 558.036 1050 563.559V577.79H982.894V563.559Z"
                  fill="#1E91"
                />
              </g>
              <g id="building 10">
                <path
                  id="Rectangle 42_3"
                  d="M1313.25 652.536H1355.44L1361.88 779.097H1306.81L1313.25 652.536Z"
                  fill="#1E91"
                />
                <path
                  id="Rectangle 43_3"
                  d="M1313.25 647.302C1313.25 641.779 1317.73 637.302 1323.25 637.302H1345.44C1350.96 637.302 1355.44 641.779 1355.44 647.302V652.536H1313.25V647.302Z"
                  fill="#1E91"
                />
              </g>
              <g id="building 11">
                <path
                  id="Rectangle 42_4"
                  d="M1436.25 684.781H1467.68L1472.49 779.097H1431.44L1436.25 684.781Z"
                  fill="#1E91"
                />
                <path
                  id="Rectangle 43_4"
                  d="M1436.25 683.428C1436.25 677.905 1440.72 673.428 1446.25 673.428H1457.68C1463.21 673.428 1467.68 677.905 1467.68 683.428V684.781H1436.25V683.428Z"
                  fill="#1E91"
                />
              </g>
              <g id="building 3">
                <rect
                  id="Rectangle 44"
                  x="144.453"
                  y="745.68"
                  width="62.3174"
                  height="33.4166"
                  fill="#1E91"
                />
              </g>
              <g id="building 9">
                <rect
                  id="Rectangle 44_2"
                  x="212.189"
                  y="745.68"
                  width="62.3174"
                  height="33.4166"
                  fill="#1E91"
                />
              </g>
              <g id="building 4">
                <rect
                  id="Rectangle 45"
                  x="269.991"
                  y="676.138"
                  width="37.0292"
                  height="102.959"
                  fill="#1E91"
                />
                <path
                  id="Rectangle 46"
                  d="M307.02 676.138H321.019V772.775L307.02 779.097V676.138Z"
                  fill="#2D7CA0"
                />
              </g>
              <g id="building 14">
                <rect
                  id="Rectangle 45_2"
                  x="604.156"
                  y="676.138"
                  width="37.0292"
                  height="102.959"
                  fill="#1E91"
                />
                <path
                  id="Rectangle 46_2"
                  d="M641.186 676.138H655.185V772.775L641.186 779.097V676.138Z"
                  fill="#2D7CA0"
                />
              </g>
              <g id="building 7">
                <rect
                  id="Rectangle 45_3"
                  x="468.684"
                  y="620.558"
                  width="57.0184"
                  height="158.539"
                  fill="#1E91"
                />
                <path
                  id="Rectangle 46_3"
                  d="M525.702 620.558H547.258V769.362L525.702 779.097V620.558Z"
                  fill="#2D7CA0"
                />
              </g>
              <g id="building 5">
                <rect
                  id="base"
                  x="55.041"
                  y="755.615"
                  width="50.5764"
                  height="23.4819"
                  fill="#1E91"
                />
                <g id="Rectangle 48">
                  <rect
                    x="55.9442"
                    y="756.518"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="55.9442"
                    y="756.518"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 52">
                  <rect
                    x="55.9442"
                    y="761.034"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="55.9442"
                    y="761.034"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 56">
                  <rect
                    x="55.9442"
                    y="765.55"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="55.9442"
                    y="765.55"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 60">
                  <rect
                    x="55.9442"
                    y="770.065"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="55.9442"
                    y="770.065"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 64">
                  <rect
                    x="55.9442"
                    y="774.581"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="55.9442"
                    y="774.581"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 49">
                  <rect
                    x="68.5883"
                    y="756.518"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="68.5883"
                    y="756.518"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 53">
                  <rect
                    x="68.5883"
                    y="761.034"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="68.5883"
                    y="761.034"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 57">
                  <rect
                    x="68.5883"
                    y="765.55"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="68.5883"
                    y="765.55"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 61">
                  <rect
                    x="68.5883"
                    y="770.065"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="68.5883"
                    y="770.065"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 65">
                  <rect
                    x="68.5883"
                    y="774.581"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="68.5883"
                    y="774.581"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 50">
                  <rect
                    x="81.2324"
                    y="756.518"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="81.2324"
                    y="756.518"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 54">
                  <rect
                    x="81.2324"
                    y="761.034"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="81.2324"
                    y="761.034"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 58">
                  <rect
                    x="81.2324"
                    y="765.55"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="81.2324"
                    y="765.55"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 62">
                  <rect
                    x="81.2324"
                    y="770.065"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="81.2324"
                    y="770.065"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 66">
                  <rect
                    x="81.2324"
                    y="774.581"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="81.2324"
                    y="774.581"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 51">
                  <rect
                    x="93.8765"
                    y="756.518"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="93.8765"
                    y="756.518"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 55">
                  <rect
                    x="93.8765"
                    y="761.034"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="93.8765"
                    y="761.034"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 59">
                  <rect
                    x="93.8765"
                    y="765.55"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="93.8765"
                    y="765.55"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 63">
                  <rect
                    x="93.8765"
                    y="770.065"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="93.8765"
                    y="770.065"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 67">
                  <rect
                    x="93.8765"
                    y="774.581"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="93.8765"
                    y="774.581"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
              </g>
              <g id="building 8">
                <rect
                  id="base_2"
                  x="524.679"
                  y="755.615"
                  width="50.5764"
                  height="23.4819"
                  fill="#1E91"
                />
                <g id="Rectangle 48_2">
                  <rect
                    x="525.583"
                    y="756.518"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="525.583"
                    y="756.518"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 52_2">
                  <rect
                    x="525.583"
                    y="761.034"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="525.583"
                    y="761.034"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 56_2">
                  <rect
                    x="525.583"
                    y="765.55"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="525.583"
                    y="765.55"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 60_2">
                  <rect
                    x="525.583"
                    y="770.065"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="525.583"
                    y="770.065"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 64_2">
                  <rect
                    x="525.583"
                    y="774.581"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="525.583"
                    y="774.581"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 49_2">
                  <rect
                    x="538.227"
                    y="756.518"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="538.227"
                    y="756.518"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 53_2">
                  <rect
                    x="538.227"
                    y="761.034"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="538.227"
                    y="761.034"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 57_2">
                  <rect
                    x="538.227"
                    y="765.55"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="538.227"
                    y="765.55"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 61_2">
                  <rect
                    x="538.227"
                    y="770.065"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="538.227"
                    y="770.065"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 65_2">
                  <rect
                    x="538.227"
                    y="774.581"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="538.227"
                    y="774.581"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 50_2">
                  <rect
                    x="550.871"
                    y="756.518"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="550.871"
                    y="756.518"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 54_2">
                  <rect
                    x="550.871"
                    y="761.034"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="550.871"
                    y="761.034"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 58_2">
                  <rect
                    x="550.871"
                    y="765.55"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="550.871"
                    y="765.55"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 62_2">
                  <rect
                    x="550.871"
                    y="770.065"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="550.871"
                    y="770.065"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 66_2">
                  <rect
                    x="550.871"
                    y="774.581"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="550.871"
                    y="774.581"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 51_2">
                  <rect
                    x="563.515"
                    y="756.518"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="563.515"
                    y="756.518"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 55_2">
                  <rect
                    x="563.515"
                    y="761.034"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="563.515"
                    y="761.034"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 59_2">
                  <rect
                    x="563.515"
                    y="765.55"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="563.515"
                    y="765.55"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 63_2">
                  <rect
                    x="563.515"
                    y="770.065"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="563.515"
                    y="770.065"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
                <g id="Rectangle 67_2">
                  <rect
                    x="563.515"
                    y="774.581"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                  <rect
                    x="563.515"
                    y="774.581"
                    width="10.8378"
                    height="3.6126"
                    fill="#2D7CA0"
                  />
                </g>
              </g>
            </g>
            <g id="Foreground 3">
              <g id="building 1_2">
                <path
                  id="Rectangle 39_4"
                  d="M1164.41 620.848H1076.37L1087.69 705.504L1149.74 704.665L1164.41 620.848Z"
                  fill="#56A6CB"
                />
                <rect
                  id="Rectangle 40_4"
                  width="62.0804"
                  height="75.6252"
                  transform="matrix(-1 0 0 1 1149.74 704.375)"
                  fill="#56A6CB"
                />
                <path
                  id="Rectangle 41_4"
                  d="M1134.2 611.819H1106.58L1091.04 620.848H1149.74L1134.2 611.819Z"
                  fill="#56A6CB"
                />
              </g>
              <g id="building 12_2">
                <path
                  id="Rectangle 39_5"
                  d="M679.057 686.141H627.135L633.811 736.066L670.403 735.572L679.057 686.141Z"
                  fill="#56A6CB"
                />
                <rect
                  id="Rectangle 40_5"
                  width="36.6115"
                  height="44.5995"
                  transform="matrix(-1 0 0 1 670.403 735.401)"
                  fill="#56A6CB"
                />
                <path
                  id="Rectangle 41_5"
                  d="M661.241 680.816H644.952L635.789 686.141H670.403L661.241 680.816Z"
                  fill="#56A6CB"
                />
              </g>
              <g id="building 13_2">
                <path
                  id="Rectangle 39_6"
                  d="M334.793 712.522H297.545L302.334 748.338L328.585 747.983L334.793 712.522Z"
                  fill="#56A6CB"
                />
                <rect
                  id="Rectangle 40_6"
                  width="26.2648"
                  height="31.9953"
                  transform="matrix(-1 0 0 1 328.585 747.86)"
                  fill="#56A6CB"
                />
                <path
                  id="Rectangle 41_6"
                  d="M322.012 708.702H310.326L303.753 712.522H328.585L322.012 708.702Z"
                  fill="#56A6CB"
                />
              </g>
              <g id="building 2_2">
                <path
                  id="Rectangle 42_5"
                  d="M979.865 656.968H939.23L933.022 778.871H986.073L979.865 656.968Z"
                  fill="#56A6CB"
                />
                <path
                  id="Rectangle 43_5"
                  d="M979.865 652.294C979.865 646.772 975.388 642.294 969.865 642.294H949.23C943.707 642.294 939.23 646.772 939.23 652.294V656.968H979.865V652.294Z"
                  fill="#56A6CB"
                />
              </g>
              <g id="building 6_2">
                <path
                  id="Rectangle 42_6"
                  d="M820.881 527.284H737.019L724.206 778.871H833.694L820.881 527.284Z"
                  fill="#56A6CB"
                />
                <path
                  id="Rectangle 43_6"
                  d="M820.881 507C820.881 501.477 816.404 497 810.881 497H747.019C741.496 497 737.019 501.477 737.019 507V527.284H820.881V507Z"
                  fill="#56A6CB"
                />
              </g>
              <g id="building 10_2">
                <path
                  id="Rectangle 42_7"
                  d="M408.007 620.699H355.283L347.228 778.871H416.062L408.007 620.699Z"
                  fill="#56A6CB"
                />
                <path
                  id="Rectangle 43_7"
                  d="M408.007 611.66C408.007 606.137 403.53 601.66 398.007 601.66H365.283C359.76 601.66 355.283 606.137 355.283 611.66V620.699H408.007V611.66Z"
                  fill="#56A6CB"
                />
              </g>
              <g id="building 11_2">
                <path
                  id="Rectangle 42_8"
                  d="M254.294 660.998H215.003L209 778.871H260.297L254.294 660.998Z"
                  fill="#56A6CB"
                />
                <path
                  id="Rectangle 43_8"
                  d="M254.294 656.809C254.294 651.287 249.817 646.809 244.294 646.809H225.003C219.48 646.809 215.003 651.287 215.003 656.809V660.998H254.294V656.809Z"
                  fill="#56A6CB"
                />
              </g>
              <g id="building 14_2">
                <rect
                  id="Rectangle 45_4"
                  width="46.2781"
                  height="128.676"
                  transform="matrix(-1 0 0 1 1294.22 650.196)"
                  fill="#56A6CB"
                />
                <path
                  id="Rectangle 46_4"
                  d="M1247.94 650.196H1230.44V770.97L1247.94 778.871V650.196Z"
                  fill="#347E9F"
                />
              </g>
              <g id="building 7_2">
                <rect
                  id="Rectangle 45_5"
                  width="71.2601"
                  height="198.138"
                  transform="matrix(-1 0 0 1 1463.53 580.734)"
                  fill="#56A6CB"
                />
                <path
                  id="Rectangle 46_5"
                  d="M1392.27 580.734H1365.33V766.705L1392.27 778.871V580.734Z"
                  fill="#347E9F"
                />
              </g>
              <g id="building 8_2">
                <rect
                  id="base_3"
                  width="63.2091"
                  height="29.3471"
                  transform="matrix(-1 0 0 1 1393.55 749.524)"
                  fill="#56A6CB"
                />
                <g id="Rectangle 48_3">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1392.42 750.653)"
                    fill="#347E9F"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1392.42 750.653)"
                    fill="#347E9F"
                  />
                </g>
                <g id="Rectangle 52_3">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1392.42 756.297)"
                    fill="#347E9F"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1392.42 756.297)"
                    fill="#347E9F"
                  />
                </g>
                <g id="Rectangle 56_3">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1392.42 761.94)"
                    fill="#347E9F"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1392.42 761.94)"
                    fill="#347E9F"
                  />
                </g>
                <g id="Rectangle 60_3">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1392.42 767.584)"
                    fill="#347E9F"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1392.42 767.584)"
                    fill="#347E9F"
                  />
                </g>
                <g id="Rectangle 64_3">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1392.42 773.228)"
                    fill="#347E9F"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1392.42 773.228)"
                    fill="#347E9F"
                  />
                </g>
                <g id="Rectangle 49_3">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1376.61 750.653)"
                    fill="#347E9F"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1376.61 750.653)"
                    fill="#347E9F"
                  />
                </g>
                <g id="Rectangle 53_3">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1376.61 756.297)"
                    fill="#347E9F"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1376.61 756.297)"
                    fill="#347E9F"
                  />
                </g>
                <g id="Rectangle 57_3">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1376.61 761.94)"
                    fill="#347E9F"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1376.61 761.94)"
                    fill="#347E9F"
                  />
                </g>
                <g id="Rectangle 61_3">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1376.61 767.584)"
                    fill="#347E9F"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1376.61 767.584)"
                    fill="#347E9F"
                  />
                </g>
                <g id="Rectangle 65_3">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1376.61 773.228)"
                    fill="#347E9F"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1376.61 773.228)"
                    fill="#347E9F"
                  />
                </g>
                <g id="Rectangle 50_3">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1360.81 750.653)"
                    fill="#347E9F"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1360.81 750.653)"
                    fill="#347E9F"
                  />
                </g>
                <g id="Rectangle 54_3">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1360.81 756.297)"
                    fill="#347E9F"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1360.81 756.297)"
                    fill="#347E9F"
                  />
                </g>
                <g id="Rectangle 58_3">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1360.81 761.94)"
                    fill="#347E9F"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1360.81 761.94)"
                    fill="#347E9F"
                  />
                </g>
                <g id="Rectangle 62_3">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1360.81 767.584)"
                    fill="#347E9F"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1360.81 767.584)"
                    fill="#347E9F"
                  />
                </g>
                <g id="Rectangle 66_3">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1360.81 773.228)"
                    fill="#347E9F"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1360.81 773.228)"
                    fill="#347E9F"
                  />
                </g>
                <g id="Rectangle 51_3">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1345.01 750.653)"
                    fill="#347E9F"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1345.01 750.653)"
                    fill="#347E9F"
                  />
                </g>
                <g id="Rectangle 55_3">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1345.01 756.297)"
                    fill="#347E9F"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1345.01 756.297)"
                    fill="#347E9F"
                  />
                </g>
                <g id="Rectangle 59_3">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1345.01 761.94)"
                    fill="#347E9F"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1345.01 761.94)"
                    fill="#347E9F"
                  />
                </g>
                <g id="Rectangle 63_3">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1345.01 767.584)"
                    fill="#347E9F"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1345.01 767.584)"
                    fill="#347E9F"
                  />
                </g>
                <g id="Rectangle 67_3">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1345.01 773.228)"
                    fill="#347E9F"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1345.01 773.228)"
                    fill="#347E9F"
                  />
                </g>
              </g>
            </g>
            <g id="Foreground 2">
              <g id="building 1_3">
                <path
                  id="Rectangle 39_7"
                  d="M844.413 620.848H756.371L767.691 705.504L829.739 704.665L844.413 620.848Z"
                  fill="#2A647E"
                />
                <rect
                  id="Rectangle 40_7"
                  width="62.0804"
                  height="75.6252"
                  transform="matrix(-1 0 0 1 829.739 704.375)"
                  fill="#2A647E"
                />
                <path
                  id="Rectangle 41_7"
                  d="M814.202 611.819H786.582L771.045 620.848H829.739L814.202 611.819Z"
                  fill="#2A647E"
                />
              </g>
              <g id="building 12_3">
                <path
                  id="Rectangle 39_8"
                  d="M359.057 686.141H307.135L313.811 736.066L350.403 735.572L359.057 686.141Z"
                  fill="#2A647E"
                />
                <rect
                  id="Rectangle 40_8"
                  width="36.6115"
                  height="44.5995"
                  transform="matrix(-1 0 0 1 350.403 735.401)"
                  fill="#2A647E"
                />
                <path
                  id="Rectangle 41_8"
                  d="M341.241 680.816H324.952L315.789 686.141H350.403L341.241 680.816Z"
                  fill="#2A647E"
                />
              </g>
              <g id="building 13_3">
                <path
                  id="Rectangle 39_9"
                  d="M14.7932 712.522H-22.455L-17.666 748.338L8.58518 747.983L14.7932 712.522Z"
                  fill="#2A647E"
                />
                <rect
                  id="Rectangle 40_9"
                  width="26.2648"
                  height="31.9953"
                  transform="matrix(-1 0 0 1 8.58521 747.86)"
                  fill="#2A647E"
                />
                <path
                  id="Rectangle 41_9"
                  d="M2.01199 708.702H-9.67373L-16.2469 712.522H8.58521L2.01199 708.702Z"
                  fill="#2A647E"
                />
              </g>
              <g id="building 2_3">
                <path
                  id="Rectangle 42_9"
                  d="M659.865 656.968H619.23L613.022 778.871H666.073L659.865 656.968Z"
                  fill="#2A647E"
                />
                <path
                  id="Rectangle 43_9"
                  d="M659.865 652.294C659.865 646.772 655.388 642.294 649.865 642.294H629.23C623.707 642.294 619.23 646.772 619.23 652.294V656.968H659.865V652.294Z"
                  fill="#2A647E"
                />
              </g>
              <g id="building 6_3">
                <path
                  id="Rectangle 42_10"
                  d="M500.881 527.284H417.019L404.206 778.871H513.694L500.881 527.284Z"
                  fill="#2A647E"
                />
                <path
                  id="Rectangle 43_10"
                  d="M500.881 507C500.881 501.477 496.404 497 490.881 497H427.019C421.496 497 417.019 501.477 417.019 507V527.284H500.881V507Z"
                  fill="#2A647E"
                />
              </g>
              <g id="building 10_3">
                <path
                  id="Rectangle 42_11"
                  d="M88.007 620.699H35.2829L27.2279 778.871H96.062L88.007 620.699Z"
                  fill="#2A647E"
                />
                <path
                  id="Rectangle 43_11"
                  d="M88.007 611.66C88.007 606.137 83.5298 601.66 78.007 601.66H45.2829C39.7601 601.66 35.2829 606.137 35.2829 611.66V620.699H88.007V611.66Z"
                  fill="#2A647E"
                />
              </g>
              <g id="building 3_2">
                <rect
                  id="Rectangle 44_3"
                  width="77.8826"
                  height="41.7632"
                  transform="matrix(-1 0 0 1 1548.74 737.108)"
                  fill="#2A647E"
                />
              </g>
              <g id="building 9_2">
                <rect
                  id="Rectangle 44_4"
                  width="77.8826"
                  height="41.7632"
                  transform="matrix(-1 0 0 1 1464.09 737.108)"
                  fill="#2A647E"
                />
              </g>
              <g id="building 4_2">
                <rect
                  id="Rectangle 45_6"
                  width="46.2781"
                  height="128.676"
                  transform="matrix(-1 0 0 1 1391.85 650.196)"
                  fill="#2A647E"
                />
                <path
                  id="Rectangle 46_6"
                  d="M1345.57 650.196H1328.08V770.97L1345.57 778.871V650.196Z"
                  fill="#64BCE4"
                />
              </g>
              <g id="building 14_3">
                <rect
                  id="Rectangle 45_7"
                  width="46.2781"
                  height="128.676"
                  transform="matrix(-1 0 0 1 974.217 650.196)"
                  fill="#2A647E"
                />
                <path
                  id="Rectangle 46_7"
                  d="M927.939 650.196H910.444V770.97L927.939 778.871V650.196Z"
                  fill="#64BCE4"
                />
              </g>
              <g id="building 7_3">
                <rect
                  id="Rectangle 45_8"
                  width="71.2601"
                  height="198.138"
                  transform="matrix(-1 0 0 1 1143.53 580.734)"
                  fill="#2A647E"
                />
                <path
                  id="Rectangle 46_8"
                  d="M1072.27 580.734H1045.33V766.705L1072.27 778.871V580.734Z"
                  fill="#64BCE4"
                />
              </g>
              <g id="building 8_3">
                <rect
                  id="base_4"
                  width="63.2091"
                  height="29.3471"
                  transform="matrix(-1 0 0 1 1073.55 749.524)"
                  fill="#2A647E"
                />
                <g id="Rectangle 48_4">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1072.42 750.653)"
                    fill="#64BCE4"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1072.42 750.653)"
                    fill="#64BCE4"
                  />
                </g>
                <g id="Rectangle 52_4">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1072.42 756.297)"
                    fill="#64BCE4"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1072.42 756.297)"
                    fill="#64BCE4"
                  />
                </g>
                <g id="Rectangle 56_4">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1072.42 761.94)"
                    fill="#64BCE4"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1072.42 761.94)"
                    fill="#64BCE4"
                  />
                </g>
                <g id="Rectangle 60_4">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1072.42 767.584)"
                    fill="#64BCE4"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1072.42 767.584)"
                    fill="#64BCE4"
                  />
                </g>
                <g id="Rectangle 64_4">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1072.42 773.228)"
                    fill="#64BCE4"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1072.42 773.228)"
                    fill="#64BCE4"
                  />
                </g>
                <g id="Rectangle 49_4">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1056.61 750.653)"
                    fill="#64BCE4"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1056.61 750.653)"
                    fill="#64BCE4"
                  />
                </g>
                <g id="Rectangle 53_4">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1056.61 756.297)"
                    fill="#64BCE4"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1056.61 756.297)"
                    fill="#64BCE4"
                  />
                </g>
                <g id="Rectangle 57_4">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1056.61 761.94)"
                    fill="#64BCE4"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1056.61 761.94)"
                    fill="#64BCE4"
                  />
                </g>
                <g id="Rectangle 61_4">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1056.61 767.584)"
                    fill="#64BCE4"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1056.61 767.584)"
                    fill="#64BCE4"
                  />
                </g>
                <g id="Rectangle 65_4">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1056.61 773.228)"
                    fill="#64BCE4"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1056.61 773.228)"
                    fill="#64BCE4"
                  />
                </g>
                <g id="Rectangle 50_4">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1040.81 750.653)"
                    fill="#64BCE4"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1040.81 750.653)"
                    fill="#64BCE4"
                  />
                </g>
                <g id="Rectangle 54_4">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1040.81 756.297)"
                    fill="#64BCE4"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1040.81 756.297)"
                    fill="#64BCE4"
                  />
                </g>
                <g id="Rectangle 58_4">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1040.81 761.94)"
                    fill="#64BCE4"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1040.81 761.94)"
                    fill="#64BCE4"
                  />
                </g>
                <g id="Rectangle 62_4">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1040.81 767.584)"
                    fill="#64BCE4"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1040.81 767.584)"
                    fill="#64BCE4"
                  />
                </g>
                <g id="Rectangle 66_4">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1040.81 773.228)"
                    fill="#64BCE4"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1040.81 773.228)"
                    fill="#64BCE4"
                  />
                </g>
                <g id="Rectangle 51_4">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1025.01 750.653)"
                    fill="#64BCE4"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1025.01 750.653)"
                    fill="#64BCE4"
                  />
                </g>
                <g id="Rectangle 55_4">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1025.01 756.297)"
                    fill="#64BCE4"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1025.01 756.297)"
                    fill="#64BCE4"
                  />
                </g>
                <g id="Rectangle 59_4">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1025.01 761.94)"
                    fill="#64BCE4"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1025.01 761.94)"
                    fill="#64BCE4"
                  />
                </g>
                <g id="Rectangle 63_4">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1025.01 767.584)"
                    fill="#64BCE4"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1025.01 767.584)"
                    fill="#64BCE4"
                  />
                </g>
                <g id="Rectangle 67_4">
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1025.01 773.228)"
                    fill="#64BCE4"
                  />
                  <rect
                    width="13.5448"
                    height="4.51494"
                    transform="matrix(-1 0 0 1 1025.01 773.228)"
                    fill="#64BCE4"
                  />
                </g>
              </g>
            </g>
            <g id="Foreground 1">
              <g id="building 1_4">
                <path
                  id="Rectangle 39_10"
                  d="M804.041 639H882.041L872.012 714L817.041 713.257L804.041 639Z"
                  fill="#3881A3"
                />
                <rect
                  id="Rectangle 40_10"
                  x="817.041"
                  y="713"
                  width="55"
                  height="67"
                  fill="#3881A3"
                />
                <path
                  id="Rectangle 41_10"
                  d="M830.806 631H855.276L869.041 639H817.041L830.806 631Z"
                  fill="#3881A3"
                />
              </g>
              <g id="building 12_4">
                <path
                  id="Rectangle 39_11"
                  d="M1234.04 696.846H1280.04L1274.13 741.077L1241.71 740.639L1234.04 696.846Z"
                  fill="#3881A3"
                />
                <rect
                  id="Rectangle 40_11"
                  x="1241.71"
                  y="740.487"
                  width="32.4359"
                  height="39.5128"
                  fill="#3881A3"
                />
                <path
                  id="Rectangle 41_11"
                  d="M1249.83 692.128H1264.26L1272.37 696.846H1241.71L1249.83 692.128Z"
                  fill="#3881A3"
                />
              </g>
              <g id="building 2_4">
                <path
                  id="Rectangle 42_12"
                  d="M967.541 672H1003.54L1009.04 780H962.041L967.541 672Z"
                  fill="#3881A3"
                />
                <path
                  id="Rectangle 43_12"
                  d="M967.541 669C967.541 663.477 972.018 659 977.541 659H993.541C999.064 659 1003.54 663.477 1003.54 669V672H967.541V669Z"
                  fill="#3881A3"
                />
              </g>
              <g id="building 6_4">
                <path
                  id="Rectangle 42_13"
                  d="M1108.39 557.107H1182.69L1194.04 780H1097.04L1108.39 557.107Z"
                  fill="#3881A3"
                />
                <path
                  id="Rectangle 43_13"
                  d="M1108.39 540.277C1108.39 534.754 1112.87 530.277 1118.39 530.277H1172.69C1178.21 530.277 1182.69 534.754 1182.69 540.277V557.107H1108.39V540.277Z"
                  fill="#3881A3"
                />
              </g>
              <g id="building 10_4">
                <path
                  id="Rectangle 42_14"
                  d="M1474.18 639.868H1520.89L1528.02 780H1467.04L1474.18 639.868Z"
                  fill="#3881A3"
                />
                <path
                  id="Rectangle 43_14"
                  d="M1474.18 633C1474.18 627.477 1478.65 623 1484.18 623H1510.89C1516.41 623 1520.89 627.477 1520.89 633V639.868H1474.18V633Z"
                  fill="#3881A3"
                />
              </g>
              <g id="building 3_3">
                <rect
                  id="Rectangle 44_5"
                  x="180.041"
                  y="743"
                  width="69"
                  height="37"
                  fill="#3881A3"
                />
              </g>
              <g id="building 9_3">
                <rect
                  id="Rectangle 44_6"
                  x="255.041"
                  y="743"
                  width="69"
                  height="37"
                  fill="#3881A3"
                />
              </g>
              <g id="building 4_3">
                <rect
                  id="Rectangle 45_9"
                  x="319.041"
                  y="666"
                  width="41"
                  height="114"
                  fill="#3881A3"
                />
                <path
                  id="Rectangle 46_9"
                  d="M360.041 666H375.541V773L360.041 780V666Z"
                  fill="#113F54"
                />
              </g>
              <g id="building 14_4">
                <rect
                  id="Rectangle 45_10"
                  x="689.041"
                  y="666"
                  width="41"
                  height="114"
                  fill="#3881A3"
                />
                <path
                  id="Rectangle 46_10"
                  d="M730.041 666H745.541V773L730.041 780V666Z"
                  fill="#113F54"
                />
              </g>
              <g id="building 7_4">
                <rect
                  id="Rectangle 45_11"
                  x="539.041"
                  y="604.46"
                  width="63.1327"
                  height="175.54"
                  fill="#3881A3"
                />
                <path
                  id="Rectangle 46_11"
                  d="M602.174 604.46H626.041V769.221L602.174 780V604.46Z"
                  fill="#113F54"
                />
              </g>
              <g id="building 5_2">
                <rect
                  id="base_5"
                  x="81.041"
                  y="754"
                  width="56"
                  height="26"
                  fill="#3881A3"
                />
                <g id="Rectangle 48_5">
                  <rect
                    x="82.041"
                    y="755"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="82.041"
                    y="755"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 52_5">
                  <rect
                    x="82.041"
                    y="760"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="82.041"
                    y="760"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 56_5">
                  <rect
                    x="82.041"
                    y="765"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="82.041"
                    y="765"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 60_5">
                  <rect
                    x="82.041"
                    y="770"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="82.041"
                    y="770"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 64_5">
                  <rect
                    x="82.041"
                    y="775"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="82.041"
                    y="775"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 49_5">
                  <rect
                    x="96.041"
                    y="755"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="96.041"
                    y="755"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 53_5">
                  <rect
                    x="96.041"
                    y="760"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="96.041"
                    y="760"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 57_5">
                  <rect
                    x="96.041"
                    y="765"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="96.041"
                    y="765"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 61_5">
                  <rect
                    x="96.041"
                    y="770"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="96.041"
                    y="770"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 65_5">
                  <rect
                    x="96.041"
                    y="775"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="96.041"
                    y="775"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 50_5">
                  <rect
                    x="110.041"
                    y="755"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="110.041"
                    y="755"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 54_5">
                  <rect
                    x="110.041"
                    y="760"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="110.041"
                    y="760"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 58_5">
                  <rect
                    x="110.041"
                    y="765"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="110.041"
                    y="765"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 62_5">
                  <rect
                    x="110.041"
                    y="770"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="110.041"
                    y="770"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 66_5">
                  <rect
                    x="110.041"
                    y="775"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="110.041"
                    y="775"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 51_5">
                  <rect
                    x="124.041"
                    y="755"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="124.041"
                    y="755"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 55_5">
                  <rect
                    x="124.041"
                    y="760"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="124.041"
                    y="760"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 59_5">
                  <rect
                    x="124.041"
                    y="765"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="124.041"
                    y="765"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 63_5">
                  <rect
                    x="124.041"
                    y="770"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="124.041"
                    y="770"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 67_5">
                  <rect
                    x="124.041"
                    y="775"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="124.041"
                    y="775"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
              </g>
              <g id="building 8_4">
                <rect
                  id="base_6"
                  x="601.041"
                  y="754"
                  width="56"
                  height="26"
                  fill="#3881A3"
                />
                <g id="Rectangle 48_6">
                  <rect
                    x="602.041"
                    y="755"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="602.041"
                    y="755"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 52_6">
                  <rect
                    x="602.041"
                    y="760"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="602.041"
                    y="760"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 56_6">
                  <rect
                    x="602.041"
                    y="765"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="602.041"
                    y="765"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 60_6">
                  <rect
                    x="602.041"
                    y="770"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="602.041"
                    y="770"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 64_6">
                  <rect
                    x="602.041"
                    y="775"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="602.041"
                    y="775"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 49_6">
                  <rect
                    x="616.041"
                    y="755"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="616.041"
                    y="755"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 53_6">
                  <rect
                    x="616.041"
                    y="760"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="616.041"
                    y="760"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 57_6">
                  <rect
                    x="616.041"
                    y="765"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="616.041"
                    y="765"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 61_6">
                  <rect
                    x="616.041"
                    y="770"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="616.041"
                    y="770"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 65_6">
                  <rect
                    x="616.041"
                    y="775"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="616.041"
                    y="775"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 50_6">
                  <rect
                    x="630.041"
                    y="755"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="630.041"
                    y="755"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 54_6">
                  <rect
                    x="630.041"
                    y="760"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="630.041"
                    y="760"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 58_6">
                  <rect
                    x="630.041"
                    y="765"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="630.041"
                    y="765"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 62_6">
                  <rect
                    x="630.041"
                    y="770"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="630.041"
                    y="770"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 66_6">
                  <rect
                    x="630.041"
                    y="775"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="630.041"
                    y="775"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 51_6">
                  <rect
                    x="644.041"
                    y="755"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="644.041"
                    y="755"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 55_6">
                  <rect
                    x="644.041"
                    y="760"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="644.041"
                    y="760"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 59_6">
                  <rect
                    x="644.041"
                    y="765"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="644.041"
                    y="765"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 63_6">
                  <rect
                    x="644.041"
                    y="770"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="644.041"
                    y="770"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
                <g id="Rectangle 67_6">
                  <rect
                    x="644.041"
                    y="775"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                  <rect
                    x="644.041"
                    y="775"
                    width="12"
                    height="4"
                    fill="#113F54"
                  />
                </g>
              </g>
            </g>
          </g>
          <g id="Lampost">
            <circle
              id="Lampost Light"
              cx="457.041"
              cy="463"
              r="13"
              fill="white"
            />
            <g id="Lampost Frame">
              <path
                id="Rectangle 1"
                d="M445.89 435H469.162L473.041 443H441.041L445.89 435Z"
                fill="#2D3039"
              />
              <rect
                id="Rectangle 2"
                x="448.041"
                y="432"
                width="19"
                height="3"
                fill="#2D3039"
              />
              <rect
                id="Rectangle 3"
                x="454.041"
                y="429"
                width="7"
                height="3"
                fill="#2D3039"
              />
              <rect
                id="Rectangle 4"
                x="455.041"
                y="426"
                width="5"
                height="3"
                fill="#2D3039"
              />
              <rect
                id="Rectangle 5"
                x="457.696"
                y="419.467"
                width="4.86396"
                height="5.16824"
                transform="rotate(45 457.696 419.467)"
                fill="#2D3039"
              />
              <rect
                id="Rectangle 6"
                x="437.041"
                y="443"
                width="40"
                height="2"
                fill="#2D3039"
              />
              <rect
                id="Rectangle 7"
                x="440.182"
                y="443.957"
                width="40.3724"
                height="2"
                transform="rotate(75.7873 440.182 443.957)"
                fill="#2D3039"
              />
              <rect
                id="Rectangle 9"
                x="450.024"
                y="443"
                width="40.3724"
                height="2"
                transform="rotate(82.599 450.024 443)"
                fill="#2D3039"
              />
              <rect
                id="Rectangle 10"
                width="40.3724"
                height="2"
                transform="matrix(-0.128813 0.991669 0.991669 0.128813 464.241 443)"
                fill="#2D3039"
              />
              <rect
                id="Rectangle 8"
                width="40.3724"
                height="2"
                transform="matrix(-0.25568 0.966761 0.966761 0.25568 474.363 444)"
                fill="#2D3039"
              />
              <rect
                id="Rectangle 11"
                x="448.041"
                y="483"
                width="18"
                height="2"
                fill="#2D3039"
              />
              <path
                id="Rectangle 12"
                d="M448.041 485H466.041L461.041 488H453.041L448.041 485Z"
                fill="#2D3039"
              />
              <rect
                id="Rectangle 13"
                x="453.041"
                y="488"
                width="8"
                height="245"
                fill="#2D3039"
              />
              <ellipse
                id="Ellipse 1"
                cx="457.041"
                cy="532"
                rx="7"
                ry="3"
                fill="#2D3039"
              />
              <ellipse
                id="Ellipse 3"
                cx="457.041"
                cy="666"
                rx="7"
                ry="3"
                fill="#2D3039"
              />
              <ellipse
                id="Ellipse 2"
                cx="457.041"
                cy="540"
                rx="7"
                ry="3"
                fill="#2D3039"
              />
              <ellipse
                id="Ellipse 4"
                cx="457.041"
                cy="674"
                rx="7"
                ry="3"
                fill="#2D3039"
              />
              <path
                id="Rectangle 14"
                d="M453.041 733H461.041L467.041 746H447.041L453.041 733Z"
                fill="#2D3039"
              />
              <rect
                id="Rectangle 15"
                x="448.041"
                y="746"
                width="18"
                height="34"
                fill="#2D3039"
              />
            </g>
            <path
              id="light source"
              d="M457.5 469L636.334 778.75H278.666L457.5 469Z"
              fill={activeTheme === 'light' ? '' : 'rgba(225,225,225,64%)'}
            />
          </g>
          <g id="Lampost_2">
            <circle
              id="Lampost Light_2"
              cx="1217.04"
              cy="463"
              r="13"
              fill="white"
            />
            <g id="Lampost Frame_2">
              <path
                id="Rectangle 1_2"
                d="M1205.89 435H1229.16L1233.04 443H1201.04L1205.89 435Z"
                fill="#2D3039"
              />
              <rect
                id="Rectangle 2_2"
                x="1208.04"
                y="432"
                width="19"
                height="3"
                fill="#2D3039"
              />
              <rect
                id="Rectangle 3_2"
                x="1214.04"
                y="429"
                width="7"
                height="3"
                fill="#2D3039"
              />
              <rect
                id="Rectangle 4_2"
                x="1215.04"
                y="426"
                width="5"
                height="3"
                fill="#2D3039"
              />
              <rect
                id="Rectangle 5_2"
                x="1217.7"
                y="419.467"
                width="4.86396"
                height="5.16824"
                transform="rotate(45 1217.7 419.467)"
                fill="#2D3039"
              />
              <rect
                id="Rectangle 6_2"
                x="1197.04"
                y="443"
                width="40"
                height="2"
                fill="#2D3039"
              />
              <rect
                id="Rectangle 7_2"
                x="1200.18"
                y="443.957"
                width="40.3724"
                height="2"
                transform="rotate(75.7873 1200.18 443.957)"
                fill="#2D3039"
              />
              <rect
                id="Rectangle 9_2"
                x="1210.02"
                y="443"
                width="40.3724"
                height="2"
                transform="rotate(82.599 1210.02 443)"
                fill="#2D3039"
              />
              <rect
                id="Rectangle 10_2"
                width="40.3724"
                height="2"
                transform="matrix(-0.128813 0.991669 0.991669 0.128813 1224.24 443)"
                fill="#2D3039"
              />
              <rect
                id="Rectangle 8_2"
                width="40.3724"
                height="2"
                transform="matrix(-0.25568 0.966761 0.966761 0.25568 1234.36 444)"
                fill="#2D3039"
              />
              <rect
                id="Rectangle 11_2"
                x="1208.04"
                y="483"
                width="18"
                height="2"
                fill="#2D3039"
              />
              <path
                id="Rectangle 12_2"
                d="M1208.04 485H1226.04L1221.04 488H1213.04L1208.04 485Z"
                fill="#2D3039"
              />
              <rect
                id="Rectangle 13_2"
                x="1213.04"
                y="488"
                width="8"
                height="245"
                fill="#2D3039"
              />
              <ellipse
                id="Ellipse 1_2"
                cx="1217.04"
                cy="532"
                rx="7"
                ry="3"
                fill="#2D3039"
              />
              <ellipse
                id="Ellipse 3_2"
                cx="1217.04"
                cy="666"
                rx="7"
                ry="3"
                fill="#2D3039"
              />
              <ellipse
                id="Ellipse 2_2"
                cx="1217.04"
                cy="540"
                rx="7"
                ry="3"
                fill="#2D3039"
              />
              <ellipse
                id="Ellipse 4_2"
                cx="1217.04"
                cy="674"
                rx="7"
                ry="3"
                fill="#2D3039"
              />
              <path
                id="Rectangle 14_2"
                d="M1213.04 733H1221.04L1227.04 746H1207.04L1213.04 733Z"
                fill="#2D3039"
              />
              <rect
                id="Rectangle 15_2"
                x="1208.04"
                y="746"
                width="18"
                height="34"
                fill="#2D3039"
              />
            </g>
            <path
              id="light source_2"
              d="M1216.5 469L1395.33 778.75H1037.67L1216.5 469Z"
              fill={activeTheme === 'light' ? '' : 'rgba(225,225,225,64%)'}
            />
          </g>
          <g id="Vending Machine">
            <g id="Vending Machine frame">
              <rect
                id="vending machine"
                x="56.041"
                y="626"
                width="91"
                height="154"
                fill="#EDF4FC"
              />
              <rect
                id="vending machine_2"
                x="147.041"
                y="631"
                width="2"
                height="149"
                fill="#EDF4FC"
              />
            </g>
            <g id="Food">
              <rect
                id="food bg"
                x="60.041"
                y="632"
                width="70"
                height="77"
                fill="#2D3039"
              />
              <g id="bottom shelf">
                <rect
                  id="shelf"
                  x="61.041"
                  y="706"
                  width="68"
                  height="2"
                  fill="#303030"
                />
                <path
                  id="Rectangle 22"
                  d="M62.041 703.5L127.612 704L129.041 706H61.041L62.041 703.5Z"
                  fill="#5D5D5D"
                />
                <g id="Food Row">
                  <g id="Food_2">
                    <path
                      id="food"
                      d="M71.041 692C71.041 690.895 71.9364 690 73.041 690H74.041C75.6979 690 77.041 691.343 77.041 693V704H71.041V692Z"
                      fill="#EDEDED"
                    />
                    <path
                      id="Ellipse 5"
                      d="M76.041 698C76.041 699.657 75.041 702.5 74.041 701C72.9364 701 74.041 699.5 72.041 698C72.041 696.343 72.4364 694 73.541 694C77.041 689.5 76.041 696.343 76.041 698Z"
                      fill="#2D3039"
                    />
                  </g>
                  <g id="Food_3">
                    <path
                      id="food_2"
                      d="M92.041 692C92.041 690.895 92.9364 690 94.041 690H95.041C96.6979 690 98.041 691.343 98.041 693V704H92.041V692Z"
                      fill="#EDEDED"
                    />
                    <path
                      id="Ellipse 5_2"
                      d="M97.041 698C97.041 699.657 96.041 702.5 95.041 701C93.9364 701 95.041 699.5 93.041 698C93.041 696.343 93.4364 694 94.541 694C98.041 689.5 97.041 696.343 97.041 698Z"
                      fill="#2D3039"
                    />
                  </g>
                  <g id="Food_4">
                    <path
                      id="food_3"
                      d="M113.041 692C113.041 690.895 113.936 690 115.041 690H116.041C117.698 690 119.041 691.343 119.041 693V704H113.041V692Z"
                      fill="#EDEDED"
                    />
                    <path
                      id="Ellipse 5_3"
                      d="M118.041 698C118.041 699.657 117.041 702.5 116.041 701C114.936 701 116.041 699.5 114.041 698C114.041 696.343 114.436 694 115.541 694C119.041 689.5 118.041 696.343 118.041 698Z"
                      fill="#2D3039"
                    />
                  </g>
                  <g id="Food_5">
                    <path
                      id="food_4"
                      d="M78.041 692C78.041 690.895 78.9364 690 80.041 690H81.041C82.6979 690 84.041 691.343 84.041 693V704H78.041V692Z"
                      fill="#EDEDED"
                    />
                    <path
                      id="Ellipse 5_4"
                      d="M83.041 698C83.041 699.657 82.041 702.5 81.041 701C79.9364 701 81.041 699.5 79.041 698C79.041 696.343 79.4364 694 80.541 694C84.041 689.5 83.041 696.343 83.041 698Z"
                      fill="#2D3039"
                    />
                  </g>
                  <g id="Food_6">
                    <path
                      id="food_5"
                      d="M99.041 692C99.041 690.895 99.9364 690 101.041 690H102.041C103.698 690 105.041 691.343 105.041 693V704H99.041V692Z"
                      fill="#EDEDED"
                    />
                    <path
                      id="Ellipse 5_5"
                      d="M104.041 698C104.041 699.657 103.041 702.5 102.041 701C100.936 701 102.041 699.5 100.041 698C100.041 696.343 100.436 694 101.541 694C105.041 689.5 104.041 696.343 104.041 698Z"
                      fill="#2D3039"
                    />
                  </g>
                  <g id="Food_7">
                    <path
                      id="food_6"
                      d="M120.041 692C120.041 690.895 120.936 690 122.041 690H123.041C124.698 690 126.041 691.343 126.041 693V704H120.041V692Z"
                      fill="#EDEDED"
                    />
                    <path
                      id="Ellipse 5_6"
                      d="M125.041 698C125.041 699.657 124.041 702.5 123.041 701C121.936 701 123.041 699.5 121.041 698C121.041 696.343 121.436 694 122.541 694C126.041 689.5 125.041 696.343 125.041 698Z"
                      fill="#2D3039"
                    />
                  </g>
                  <g id="Food_8">
                    <path
                      id="food_7"
                      d="M64.041 692C64.041 690.895 64.9364 690 66.041 690H67.041C68.6979 690 70.041 691.343 70.041 693V704H64.041V692Z"
                      fill="#EDEDED"
                    />
                    <path
                      id="Ellipse 5_7"
                      d="M69.041 698C69.041 699.657 68.041 702.5 67.041 701C65.9364 701 67.041 699.5 65.041 698C65.041 696.343 65.4364 694 66.541 694C70.041 689.5 69.041 696.343 69.041 698Z"
                      fill="#2D3039"
                    />
                  </g>
                  <g id="Food_9">
                    <path
                      id="food_8"
                      d="M85.041 692C85.041 690.895 85.9364 690 87.041 690H88.041C89.6979 690 91.041 691.343 91.041 693V704H85.041V692Z"
                      fill="#EDEDED"
                    />
                    <path
                      id="Ellipse 5_8"
                      d="M90.041 698C90.041 699.657 89.041 702.5 88.041 701C86.9364 701 88.041 699.5 86.041 698C86.041 696.343 86.4364 694 87.541 694C91.041 689.5 90.041 696.343 90.041 698Z"
                      fill="#2D3039"
                    />
                  </g>
                  <g id="Food_10">
                    <path
                      id="food_9"
                      d="M106.041 692C106.041 690.895 106.936 690 108.041 690H109.041C110.698 690 112.041 691.343 112.041 693V704H106.041V692Z"
                      fill="#EDEDED"
                    />
                    <path
                      id="Ellipse 5_9"
                      d="M111.041 698C111.041 699.657 110.041 702.5 109.041 701C107.936 701 109.041 699.5 107.041 698C107.041 696.343 107.436 694 108.541 694C112.041 689.5 111.041 696.343 111.041 698Z"
                      fill="#2D3039"
                    />
                  </g>
                </g>
              </g>
              <g id="Middle shelf">
                <rect
                  id="shelf_2"
                  x="60.041"
                  y="684"
                  width="70"
                  height="2"
                  fill="#303030"
                />
                <path
                  id="Rectangle 22_2"
                  d="M64.041 681H127.541L130.041 684H60.041L64.041 681Z"
                  fill="#5D5D5D"
                />
                <g id="Food Row_2">
                  <g id="Food_11">
                    <path
                      id="food_10"
                      d="M71.041 671C71.041 669.895 71.9364 669 73.041 669H74.041C75.6979 669 77.041 670.343 77.041 672V683H71.041V671Z"
                      fill="#EDEDED"
                    />
                    <path
                      id="Ellipse 5_10"
                      d="M76.041 677C76.041 678.657 75.041 681.5 74.041 680C72.9364 680 74.041 678.5 72.041 677C72.041 675.343 72.4364 673 73.541 673C77.041 668.5 76.041 675.343 76.041 677Z"
                      fill="#EF2F4C"
                    />
                  </g>
                  <g id="Food_12">
                    <path
                      id="food_11"
                      d="M92.041 671C92.041 669.895 92.9364 669 94.041 669H95.041C96.6979 669 98.041 670.343 98.041 672V683H92.041V671Z"
                      fill="#EDEDED"
                    />
                    <path
                      id="Ellipse 5_11"
                      d="M97.041 677C97.041 678.657 96.041 681.5 95.041 680C93.9364 680 95.041 678.5 93.041 677C93.041 675.343 93.4364 673 94.541 673C98.041 668.5 97.041 675.343 97.041 677Z"
                      fill="#EF2F4C"
                    />
                  </g>
                  <g id="Food_13">
                    <path
                      id="food_12"
                      d="M113.041 671C113.041 669.895 113.936 669 115.041 669H116.041C117.698 669 119.041 670.343 119.041 672V683H113.041V671Z"
                      fill="#EDEDED"
                    />
                    <path
                      id="Ellipse 5_12"
                      d="M118.041 677C118.041 678.657 117.041 681.5 116.041 680C114.936 680 116.041 678.5 114.041 677C114.041 675.343 114.436 673 115.541 673C119.041 668.5 118.041 675.343 118.041 677Z"
                      fill="#EF2F4C"
                    />
                  </g>
                  <g id="Food_14">
                    <path
                      id="food_13"
                      d="M78.041 671C78.041 669.895 78.9364 669 80.041 669H81.041C82.6979 669 84.041 670.343 84.041 672V683H78.041V671Z"
                      fill="#EDEDED"
                    />
                    <path
                      id="Ellipse 5_13"
                      d="M83.041 677C83.041 678.657 82.041 681.5 81.041 680C79.9364 680 81.041 678.5 79.041 677C79.041 675.343 79.4364 673 80.541 673C84.041 668.5 83.041 675.343 83.041 677Z"
                      fill="#EF2F4C"
                    />
                  </g>
                  <g id="Food_15">
                    <path
                      id="food_14"
                      d="M99.041 671C99.041 669.895 99.9364 669 101.041 669H102.041C103.698 669 105.041 670.343 105.041 672V683H99.041V671Z"
                      fill="#EDEDED"
                    />
                    <path
                      id="Ellipse 5_14"
                      d="M104.041 677C104.041 678.657 103.041 681.5 102.041 680C100.936 680 102.041 678.5 100.041 677C100.041 675.343 100.436 673 101.541 673C105.041 668.5 104.041 675.343 104.041 677Z"
                      fill="#EF2F4C"
                    />
                  </g>
                  <g id="Food_16">
                    <path
                      id="food_15"
                      d="M120.041 671C120.041 669.895 120.936 669 122.041 669H123.041C124.698 669 126.041 670.343 126.041 672V683H120.041V671Z"
                      fill="#EDEDED"
                    />
                    <path
                      id="Ellipse 5_15"
                      d="M125.041 677C125.041 678.657 124.041 681.5 123.041 680C121.936 680 123.041 678.5 121.041 677C121.041 675.343 121.436 673 122.541 673C126.041 668.5 125.041 675.343 125.041 677Z"
                      fill="#EF2F4C"
                    />
                  </g>
                  <g id="Food_17">
                    <path
                      id="food_16"
                      d="M64.041 671C64.041 669.895 64.9364 669 66.041 669H67.041C68.6979 669 70.041 670.343 70.041 672V683H64.041V671Z"
                      fill="#EDEDED"
                    />
                    <path
                      id="Ellipse 5_16"
                      d="M69.041 677C69.041 678.657 68.041 681.5 67.041 680C65.9364 680 67.041 678.5 65.041 677C65.041 675.343 65.4364 673 66.541 673C70.041 668.5 69.041 675.343 69.041 677Z"
                      fill="#EF2F4C"
                    />
                  </g>
                  <g id="Food_18">
                    <path
                      id="food_17"
                      d="M85.041 671C85.041 669.895 85.9364 669 87.041 669H88.041C89.6979 669 91.041 670.343 91.041 672V683H85.041V671Z"
                      fill="#EDEDED"
                    />
                    <path
                      id="Ellipse 5_17"
                      d="M90.041 677C90.041 678.657 89.041 681.5 88.041 680C86.9364 680 88.041 678.5 86.041 677C86.041 675.343 86.4364 673 87.541 673C91.041 668.5 90.041 675.343 90.041 677Z"
                      fill="#EF2F4C"
                    />
                  </g>
                  <g id="Food_19">
                    <path
                      id="food_18"
                      d="M106.041 671C106.041 669.895 106.936 669 108.041 669H109.041C110.698 669 112.041 670.343 112.041 672V683H106.041V671Z"
                      fill="#EDEDED"
                    />
                    <path
                      id="Ellipse 5_18"
                      d="M111.041 677C111.041 678.657 110.041 681.5 109.041 680C107.936 680 109.041 678.5 107.041 677C107.041 675.343 107.436 673 108.541 673C112.041 668.5 111.041 675.343 111.041 677Z"
                      fill="#EF2F4C"
                    />
                  </g>
                </g>
              </g>
              <rect
                id="top shelf"
                x="60.041"
                y="658"
                width="70"
                height="2"
                fill="#303030"
              />
              <g id="Food Row_3">
                <g id="Food_20">
                  <path
                    id="food_19"
                    d="M71.041 646C71.041 644.895 71.9364 644 73.041 644H74.041C75.6979 644 77.041 645.343 77.041 647V658H71.041V646Z"
                    fill="#EDEDED"
                  />
                  <path
                    id="Ellipse 5_19"
                    d="M76.041 652C76.041 653.657 75.041 656.5 74.041 655C72.9364 655 74.041 653.5 72.041 652C72.041 650.343 72.4364 648 73.541 648C77.041 643.5 76.041 650.343 76.041 652Z"
                    fill="#7D7BD2"
                  />
                </g>
                <g id="Food_21">
                  <path
                    id="food_20"
                    d="M92.041 646C92.041 644.895 92.9364 644 94.041 644H95.041C96.6979 644 98.041 645.343 98.041 647V658H92.041V646Z"
                    fill="#EDEDED"
                  />
                  <path
                    id="Ellipse 5_20"
                    d="M97.041 652C97.041 653.657 96.041 656.5 95.041 655C93.9364 655 95.041 653.5 93.041 652C93.041 650.343 93.4364 648 94.541 648C98.041 643.5 97.041 650.343 97.041 652Z"
                    fill="#7D7BD2"
                  />
                </g>
                <g id="Food_22">
                  <path
                    id="food_21"
                    d="M113.041 646C113.041 644.895 113.936 644 115.041 644H116.041C117.698 644 119.041 645.343 119.041 647V658H113.041V646Z"
                    fill="#EDEDED"
                  />
                  <path
                    id="Ellipse 5_21"
                    d="M118.041 652C118.041 653.657 117.041 656.5 116.041 655C114.936 655 116.041 653.5 114.041 652C114.041 650.343 114.436 648 115.541 648C119.041 643.5 118.041 650.343 118.041 652Z"
                    fill="#7D7BD2"
                  />
                </g>
                <g id="Food_23">
                  <path
                    id="food_22"
                    d="M78.041 646C78.041 644.895 78.9364 644 80.041 644H81.041C82.6979 644 84.041 645.343 84.041 647V658H78.041V646Z"
                    fill="#EDEDED"
                  />
                  <path
                    id="Ellipse 5_22"
                    d="M83.041 652C83.041 653.657 82.041 656.5 81.041 655C79.9364 655 81.041 653.5 79.041 652C79.041 650.343 79.4364 648 80.541 648C84.041 643.5 83.041 650.343 83.041 652Z"
                    fill="#7D7BD2"
                  />
                </g>
                <g id="Food_24">
                  <path
                    id="food_23"
                    d="M99.041 646C99.041 644.895 99.9364 644 101.041 644H102.041C103.698 644 105.041 645.343 105.041 647V658H99.041V646Z"
                    fill="#EDEDED"
                  />
                  <path
                    id="Ellipse 5_23"
                    d="M104.041 652C104.041 653.657 103.041 656.5 102.041 655C100.936 655 102.041 653.5 100.041 652C100.041 650.343 100.436 648 101.541 648C105.041 643.5 104.041 650.343 104.041 652Z"
                    fill="#7D7BD2"
                  />
                </g>
                <g id="Food_25">
                  <path
                    id="food_24"
                    d="M120.041 646C120.041 644.895 120.936 644 122.041 644H123.041C124.698 644 126.041 645.343 126.041 647V658H120.041V646Z"
                    fill="#EDEDED"
                  />
                  <path
                    id="Ellipse 5_24"
                    d="M125.041 652C125.041 653.657 124.041 656.5 123.041 655C121.936 655 123.041 653.5 121.041 652C121.041 650.343 121.436 648 122.541 648C126.041 643.5 125.041 650.343 125.041 652Z"
                    fill="#7D7BD2"
                  />
                </g>
                <g id="Food_26">
                  <path
                    id="food_25"
                    d="M64.041 646C64.041 644.895 64.9364 644 66.041 644H67.041C68.6979 644 70.041 645.343 70.041 647V658H64.041V646Z"
                    fill="#EDEDED"
                  />
                  <path
                    id="Ellipse 5_25"
                    d="M69.041 652C69.041 653.657 68.041 656.5 67.041 655C65.9364 655 67.041 653.5 65.041 652C65.041 650.343 65.4364 648 66.541 648C70.041 643.5 69.041 650.343 69.041 652Z"
                    fill="#7D7BD2"
                  />
                </g>
                <g id="Food_27">
                  <path
                    id="food_26"
                    d="M85.041 646C85.041 644.895 85.9364 644 87.041 644H88.041C89.6979 644 91.041 645.343 91.041 647V658H85.041V646Z"
                    fill="#EDEDED"
                  />
                  <path
                    id="Ellipse 5_26"
                    d="M90.041 652C90.041 653.657 89.041 656.5 88.041 655C86.9364 655 88.041 653.5 86.041 652C86.041 650.343 86.4364 648 87.541 648C91.041 643.5 90.041 650.343 90.041 652Z"
                    fill="#7D7BD2"
                  />
                </g>
                <g id="Food_28">
                  <path
                    id="food_27"
                    d="M106.041 646C106.041 644.895 106.936 644 108.041 644H109.041C110.698 644 112.041 645.343 112.041 647V658H106.041V646Z"
                    fill="#EDEDED"
                  />
                  <path
                    id="Ellipse 5_27"
                    d="M111.041 652C111.041 653.657 110.041 656.5 109.041 655C107.936 655 109.041 653.5 107.041 652C107.041 650.343 107.436 648 108.541 648C112.041 643.5 111.041 650.343 111.041 652Z"
                    fill="#7D7BD2"
                  />
                </g>
              </g>
            </g>
            <g id="Window">
              <rect
                id="window"
                x="60.041"
                y="632"
                width="70"
                height="77"
                fill="white"
                fillOpacity="0.7"
                stroke="#BABABA"
                strokeWidth="0.5"
              />
            </g>
            <g id="Buttons">
              <rect
                id="button"
                x="133.041"
                y="664"
                width="12"
                height="9"
                fill="#09D8FF"
              />
              <rect
                id="button_2"
                x="127.041"
                y="710"
                width="12"
                height="7"
                fill="#09D8FF"
              />
              <rect
                id="button_3"
                x="127.041"
                y="719"
                width="12"
                height="7"
                fill="#09D8FF"
              />
              <rect
                id="button_4"
                x="127.041"
                y="728"
                width="12"
                height="7"
                fill="#09D8FF"
              />
              <rect
                id="button_5"
                x="127.041"
                y="737"
                width="12"
                height="7"
                fill="#09D8FF"
              />
              <rect
                id="button_6"
                x="127.041"
                y="746"
                width="12"
                height="7"
                fill="#09D8FF"
              />
              <rect
                id="button_7"
                x="127.041"
                y="755"
                width="12"
                height="7"
                fill="#09D8FF"
              />
            </g>
            <rect
              id="compartment"
              x="75.041"
              y="739"
              width="44"
              height="15"
              fill="#113F54"
            />
            <rect
              id="logo"
              x="63.041"
              y="712"
              width="35"
              height="24"
              fill="#113F54"
            />
            <g id="Stickers">
              <rect
                id="Rectangle 16"
                x="74.041"
                y="755"
                width="20"
                height="5"
                fill="#FFCA04"
              />
              <rect
                id="Rectangle 17"
                x="63.041"
                y="768"
                width="6"
                height="3"
                fill="#FFCA04"
              />
              <rect
                id="Rectangle 18"
                x="111.041"
                y="755"
                width="8"
                height="3"
                fill="#FFCA04"
              />
              <rect
                id="Rectangle 19"
                x="116.041"
                y="711"
                width="8"
                height="3"
                fill="#FFCA04"
              />
              <rect
                id="Rectangle 20"
                x="116.041"
                y="718"
                width="8"
                height="3"
                fill="#FFCA04"
              />
              <rect
                id="Rectangle 21"
                x="103.041"
                y="710"
                width="8"
                height="3"
                fill="#FFCA04"
              />
            </g>
          </g>
          <g id="Bus Stop">
            <g id="Bus Stop Sign">
              <path
                id="Rectangle 23"
                d="M157.041 574L162.041 578V594L157.041 589V574Z"
                fill="#EDF4FC"
              />
              <rect
                id="Rectangle 24"
                x="162.041"
                y="578"
                width="6"
                height="202"
                fill="#C4C4C4"
              />
              <path
                id="Rectangle 26"
                d="M156.541 588.5L162.041 593.5L162.041 594.5L156.041 589L156.541 588.5Z"
                fill="#2D3039"
              />
              <path
                id="Rectangle 25"
                d="M156.041 574H157.041V589H156.041V574Z"
                fill="#2D3039"
              />
            </g>
            <g id="Bus Stop Shelter">
              <g id="Bench">
                <rect
                  id="Rectangle 27"
                  x="532.041"
                  y="757"
                  width="84"
                  height="5"
                  fill="#EF2F4C"
                />
                <path
                  id="Rectangle 28"
                  d="M532.041 757C532.041 755.895 532.936 755 534.041 755H614.041C615.146 755 616.041 755.895 616.041 757H532.041Z"
                  fill="#EF2F4C"
                />
                <rect
                  id="Rectangle 29"
                  x="616.041"
                  y="762"
                  width="7"
                  height="18"
                  fill="#EF2F4C"
                />
                <rect
                  id="Rectangle 31"
                  x="526.041"
                  y="762"
                  width="7"
                  height="18"
                  fill="#EF2F4C"
                />
                <path
                  id="Rectangle 30"
                  d="M614.041 755H618.041C620.802 755 623.041 757.239 623.041 760V762H614.041V755Z"
                  fill="#EF2F4C"
                />
                <path
                  id="Rectangle 32"
                  d="M526.041 760C526.041 757.239 528.28 755 531.041 755H535.041V762H526.041V760Z"
                  fill="#EF2F4C"
                />
              </g>
              <g id="Bench_2">
                <rect
                  id="Rectangle 27_2"
                  x="430.041"
                  y="757"
                  width="84"
                  height="5"
                  fill="#EF2F4C"
                />
                <path
                  id="Rectangle 28_2"
                  d="M430.041 757C430.041 755.895 430.936 755 432.041 755H512.041C513.146 755 514.041 755.895 514.041 757H430.041Z"
                  fill="#EF2F4C"
                />
                <rect
                  id="Rectangle 29_2"
                  x="514.041"
                  y="762"
                  width="7"
                  height="18"
                  fill="#EF2F4C"
                />
                <rect
                  id="Rectangle 31_2"
                  x="424.041"
                  y="762"
                  width="7"
                  height="18"
                  fill="#EF2F4C"
                />
                <path
                  id="Rectangle 30_2"
                  d="M512.041 755H516.041C518.802 755 521.041 757.239 521.041 760V762H512.041V755Z"
                  fill="#EF2F4C"
                />
                <path
                  id="Rectangle 32_2"
                  d="M424.041 760C424.041 757.239 426.28 755 429.041 755H433.041V762H424.041V760Z"
                  fill="#EF2F4C"
                />
              </g>
              <g id="Bench_3">
                <rect
                  id="Rectangle 27_3"
                  x="325.041"
                  y="757"
                  width="84"
                  height="5"
                  fill="#EF2F4C"
                />
                <path
                  id="Rectangle 28_3"
                  d="M325.041 757C325.041 755.895 325.936 755 327.041 755H407.041C408.146 755 409.041 755.895 409.041 757H325.041Z"
                  fill="#EF2F4C"
                />
                <rect
                  id="Rectangle 29_3"
                  x="409.041"
                  y="762"
                  width="7"
                  height="18"
                  fill="#EF2F4C"
                />
                <rect
                  id="Rectangle 31_3"
                  x="319.041"
                  y="762"
                  width="7"
                  height="18"
                  fill="#EF2F4C"
                />
                <path
                  id="Rectangle 30_3"
                  d="M407.041 755H411.041C413.802 755 416.041 757.239 416.041 760V762H407.041V755Z"
                  fill="#EF2F4C"
                />
                <path
                  id="Rectangle 32_3"
                  d="M319.041 760C319.041 757.239 321.28 755 324.041 755H328.041V762H319.041V760Z"
                  fill="#EF2F4C"
                />
              </g>
              <g id="Bench_4">
                <rect
                  id="Rectangle 27_4"
                  x="223.041"
                  y="757"
                  width="84"
                  height="5"
                  fill="#EF2F4C"
                />
                <path
                  id="Rectangle 28_4"
                  d="M223.041 757C223.041 755.895 223.936 755 225.041 755H305.041C306.146 755 307.041 755.895 307.041 757H223.041Z"
                  fill="#EF2F4C"
                />
                <rect
                  id="Rectangle 29_4"
                  x="307.041"
                  y="762"
                  width="7"
                  height="18"
                  fill="#EF2F4C"
                />
                <rect
                  id="Rectangle 31_4"
                  x="217.041"
                  y="762"
                  width="7"
                  height="18"
                  fill="#EF2F4C"
                />
                <path
                  id="Rectangle 30_4"
                  d="M305.041 755H309.041C311.802 755 314.041 757.239 314.041 760V762H305.041V755Z"
                  fill="#EF2F4C"
                />
                <path
                  id="Rectangle 32_4"
                  d="M217.041 760C217.041 757.239 219.28 755 222.041 755H226.041V762H217.041V760Z"
                  fill="#EF2F4C"
                />
              </g>
              <g id="Pillar">
                <rect
                  id="Rectangle 33"
                  x="312.041"
                  y="589"
                  width="8"
                  height="191"
                  fill="#C4C4C4"
                />
                <rect
                  id="Rectangle 34"
                  x="308.041"
                  y="623"
                  width="16"
                  height="3"
                  rx="1.5"
                  fill="#C4C4C4"
                />
                <rect
                  id="Rectangle 35"
                  x="308.041"
                  y="673"
                  width="16"
                  height="3"
                  rx="1.5"
                  fill="#C4C4C4"
                />
                <rect
                  id="Rectangle 36"
                  x="308.041"
                  y="724"
                  width="16"
                  height="3"
                  rx="1.5"
                  fill="#C4C4C4"
                />
              </g>
              <g id="Pillar_2">
                <rect
                  id="Rectangle 33_2"
                  x="519.041"
                  y="589"
                  width="8"
                  height="191"
                  fill="#C4C4C4"
                />
                <rect
                  id="Rectangle 34_2"
                  x="515.041"
                  y="623"
                  width="16"
                  height="3"
                  rx="1.5"
                  fill="#C4C4C4"
                />
                <rect
                  id="Rectangle 35_2"
                  x="515.041"
                  y="673"
                  width="16"
                  height="3"
                  rx="1.5"
                  fill="#C4C4C4"
                />
                <rect
                  id="Rectangle 36_2"
                  x="515.041"
                  y="724"
                  width="16"
                  height="3"
                  rx="1.5"
                  fill="#C4C4C4"
                />
              </g>
              <g id="Pillar_3">
                <rect
                  id="Rectangle 33_3"
                  x="215.041"
                  y="589"
                  width="8"
                  height="191"
                  fill="#C4C4C4"
                />
                <rect
                  id="Rectangle 34_3"
                  x="215.041"
                  y="623"
                  width="12"
                  height="3"
                  rx="1.5"
                  fill="#C4C4C4"
                />
                <rect
                  id="Rectangle 35_3"
                  x="215.041"
                  y="673"
                  width="12"
                  height="3"
                  rx="1.5"
                  fill="#C4C4C4"
                />
                <rect
                  id="Rectangle 36_3"
                  x="215.041"
                  y="724"
                  width="12"
                  height="3"
                  rx="1.5"
                  fill="#C4C4C4"
                />
              </g>
              <g id="Pillar_4">
                <rect
                  id="Rectangle 33_4"
                  x="419.041"
                  y="589"
                  width="8"
                  height="191"
                  fill="#C4C4C4"
                />
                <rect
                  id="Rectangle 34_4"
                  x="419.041"
                  y="623"
                  width="12"
                  height="3"
                  rx="1.5"
                  fill="#C4C4C4"
                />
                <rect
                  id="Rectangle 35_4"
                  x="419.041"
                  y="673"
                  width="12"
                  height="3"
                  rx="1.5"
                  fill="#C4C4C4"
                />
                <rect
                  id="Rectangle 36_4"
                  x="419.041"
                  y="724"
                  width="12"
                  height="3"
                  rx="1.5"
                  fill="#C4C4C4"
                />
              </g>
              <g id="Pillar_5">
                <rect
                  id="Rectangle 33_5"
                  width="8"
                  height="191"
                  transform="matrix(-1 0 0 1 421.041 589)"
                  fill="#C4C4C4"
                />
                <rect
                  id="Rectangle 34_5"
                  width="12"
                  height="3"
                  rx="1.5"
                  transform="matrix(-1 0 0 1 421.041 623)"
                  fill="#C4C4C4"
                />
                <rect
                  id="Rectangle 35_5"
                  width="12"
                  height="3"
                  rx="1.5"
                  transform="matrix(-1 0 0 1 421.041 673)"
                  fill="#C4C4C4"
                />
                <rect
                  id="Rectangle 36_5"
                  width="12"
                  height="3"
                  rx="1.5"
                  transform="matrix(-1 0 0 1 421.041 724)"
                  fill="#C4C4C4"
                />
              </g>
              <g id="Pillar_6">
                <rect
                  id="Rectangle 33_6"
                  width="8"
                  height="191"
                  transform="matrix(-1 0 0 1 630.041 589)"
                  fill="#C4C4C4"
                />
                <rect
                  id="Rectangle 34_6"
                  width="12"
                  height="3"
                  rx="1.5"
                  transform="matrix(-1 0 0 1 630.041 623)"
                  fill="#C4C4C4"
                />
                <rect
                  id="Rectangle 35_6"
                  width="12"
                  height="3"
                  rx="1.5"
                  transform="matrix(-1 0 0 1 630.041 673)"
                  fill="#C4C4C4"
                />
                <rect
                  id="Rectangle 36_6"
                  width="12"
                  height="3"
                  rx="1.5"
                  transform="matrix(-1 0 0 1 630.041 724)"
                  fill="#C4C4C4"
                />
              </g>
              <g id="Roof">
                <path
                  id="Rectangle 37"
                  d="M193.041 539C193.041 537.895 193.936 537 195.041 537H423.041V542H193.041V539Z"
                  fill="#C4C4C4"
                />
                <path
                  id="Rectangle 38"
                  d="M193.041 542H423.041V589H215.59L193.041 542Z"
                  fill="#EDF4FC"
                />
              </g>
              <g id="Roof_2">
                <path
                  id="Rectangle 37_2"
                  d="M653.041 539C653.041 537.895 652.146 537 651.041 537H423.041V542H653.041V539Z"
                  fill="#C4C4C4"
                />
                <path
                  id="Rectangle 38_2"
                  d="M653.041 542H423.041V589H630.492L653.041 542Z"
                  fill="#EDF4FC"
                />
              </g>
            </g>
            <rect
              id="window_2"
              x="223.041"
              y="589"
              width="89"
              height="152"
              fill="#09D8FF"
              fillOpacity="0.5"
            />
            <rect
              id="window_3"
              x="320.041"
              y="589"
              width="93"
              height="152"
              fill="#09D8FF"
              fillOpacity="0.5"
            />
            <rect
              id="window_4"
              x="427.041"
              y="589"
              width="93"
              height="152"
              fill="#09D8FF"
              fillOpacity="0.5"
            />
            <rect
              id="window_5"
              x="527.041"
              y="589"
              width="96"
              height="152"
              fill="#09D8FF"
              fillOpacity="0.5"
            />
          </g>
          <g id="Tree">
            <path
              id="leaves 7"
              d="M1508.51 557.122C1504.92 556.275 1504.06 553.064 1504.08 551.564L1502.1 549.538C1501.12 548.359 1498.85 546.395 1497.62 547.98C1496.1 549.96 1493.58 551.427 1490.58 551.388C1487.58 551.349 1487.54 554.349 1486.03 554.829C1484.53 555.31 1477.58 551.219 1473.65 545.667C1471.68 543.641 1469.13 547.608 1466.63 547.576C1464.13 547.543 1463.58 551.036 1462.58 551.023C1461.58 551.01 1458.53 554.971 1457.08 550.952C1455.63 546.933 1455.19 542.926 1454.19 542.913C1453.19 542.9 1453.13 547.4 1451.63 547.38C1450.13 547.361 1449.11 549.098 1445.13 547.296C1441.15 545.494 1441.16 545.244 1439.69 542.725C1438.22 540.205 1433.75 538.147 1431.75 538.121C1429.75 538.095 1429.71 540.594 1426.19 542.549C1422.66 544.503 1422.16 544.996 1419.69 542.464C1417.22 539.932 1415.27 536.406 1416.79 534.426C1418.32 532.445 1419.84 530.965 1418.37 528.946C1416.89 526.926 1416.39 527.42 1413.46 521.881C1410.53 516.342 1413.49 519.381 1409.57 512.83C1405.66 506.278 1408.12 509.31 1408.15 506.811C1408.18 504.811 1409.2 503.324 1409.71 502.831C1409.21 502.157 1407.94 500.207 1406.77 497.792C1405.31 494.773 1408.36 490.812 1409.88 489.332C1411.4 487.851 1412.94 484.871 1413.99 480.885C1415.04 476.898 1410.16 467.834 1408.7 464.814C1407.24 461.795 1405.27 459.269 1397.77 459.171C1394.25 461.126 1397.19 465.164 1395.66 467.645C1394.13 470.125 1395.62 471.144 1395.59 473.144C1395.56 475.144 1395.49 480.644 1391.96 483.098C1388.43 485.552 1391.86 490.597 1382.88 488.98C1381.4 487.461 1380.43 485.448 1378.94 484.428C1377.46 483.409 1372.44 484.344 1368.44 484.291C1364.44 484.239 1366.47 482.266 1363.5 480.227C1360.52 478.188 1363.53 477.227 1361.55 475.701C1359.57 474.175 1362.59 472.714 1363.62 470.727C1364.44 469.138 1366 466.758 1366.68 465.767L1372.74 461.345C1374.36 460.166 1372.12 457.837 1370.8 456.82C1370.16 454.978 1369.69 450.105 1372.95 445.347C1377.03 439.399 1375.01 440.873 1377.53 439.406C1380.05 437.939 1377.6 433.906 1379.59 434.932C1381.57 435.958 1385.13 431.504 1386.65 430.524C1388.16 429.544 1385.17 428.505 1382.17 428.466C1379.17 428.426 1379.19 426.927 1375.2 425.875C1371.22 424.823 1373.23 423.849 1369.23 423.797C1365.23 423.744 1362.74 422.712 1360.73 423.686C1358.72 424.66 1360.19 427.179 1359.17 428.166C1358.16 429.153 1354.6 433.607 1350.07 436.048C1345.54 438.489 1346.05 437.496 1344.54 437.976C1343.04 438.457 1341.98 442.943 1341.95 444.943L1341.8 456.442C1341.76 459.942 1345.72 462.994 1345.69 465.493L1345.59 472.493C1345.57 474.493 1344.5 479.479 1345.45 483.992C1346.39 488.504 1351.32 493.569 1353.81 494.602C1356.29 495.634 1356.73 500.64 1358.21 502.16C1359.69 503.679 1358.1 510.659 1356.58 512.139C1355.06 513.62 1354.98 520.119 1353.42 524.099C1351.87 528.079 1353.33 531.599 1353.3 533.598C1353.27 535.598 1357.19 541.65 1357.66 544.156C1358.13 546.662 1363.61 548.234 1365.62 547.76C1367.22 547.381 1370.27 548.987 1371.59 549.838C1372.22 552.846 1373.47 559.163 1373.45 560.363C1373.43 561.863 1373.91 563.369 1373.38 565.863C1372.95 567.857 1374.84 569.049 1375.84 569.395C1379.68 568.612 1386.56 567.535 1383.33 569.493C1379.3 571.94 1382.26 575.479 1383.22 577.992C1384.19 580.505 1382.19 580.479 1383.13 584.991C1384.07 589.504 1386.62 586.037 1390.62 586.089C1394.62 586.141 1392.16 582.609 1394.19 580.635C1396.22 578.661 1395.24 576.648 1396.27 574.162C1397.31 571.675 1399.3 572.201 1401.3 572.227L1410.3 572.344C1412.3 572.37 1412.82 570.877 1414.83 569.903C1416.44 569.124 1417.46 572.604 1417.77 574.442C1417.92 575.777 1418.41 578.95 1419.19 580.961C1420.16 583.474 1423.66 583.019 1427.62 586.571C1431.57 590.123 1432.63 585.136 1436.66 583.189C1440.69 581.241 1442.71 579.767 1446.22 578.813C1449.73 577.858 1448.19 581.338 1448.66 583.345C1449.13 585.351 1450.11 586.864 1451.09 588.377C1452.07 589.89 1457.55 591.961 1460.07 590.494C1462.59 589.027 1466.09 588.572 1468.59 588.605C1471.09 588.638 1472.12 586.651 1473.09 588.664C1474.07 590.676 1478.59 588.735 1485.55 592.326C1492.5 595.917 1493.56 591.43 1495.06 590.95C1496.57 590.47 1497.12 586.476 1498.66 583.996C1500.19 581.516 1501.23 578.029 1503.73 578.062C1506.23 578.094 1506.23 578.094 1509.27 575.634C1511.69 573.665 1512.63 573.511 1512.79 573.679C1512.78 574.679 1512.04 577.27 1509.21 579.633C1505.67 582.588 1508.18 582.12 1508.15 584.12C1508.13 586.12 1510.6 588.152 1512.59 589.178C1514.58 590.204 1519.14 585.263 1521.65 584.296C1524.17 583.328 1525.19 581.342 1529.2 580.894C1532.4 580.536 1532.93 576.109 1532.79 573.94L1529.29 573.894C1528.64 572.553 1527.74 569.674 1529.35 568.895C1531.37 567.921 1532.89 566.441 1529.44 562.395C1526.45 561.356 1522.45 561.304 1517.96 560.746C1513.47 560.187 1512.99 558.181 1508.51 557.122Z"
              fill={activeTheme === 'light' ? '#11EF75' : '#2F2F3A'}
            />
            <path
              id="leaves 4"
              d="M1433.14 417.037C1436.8 416.633 1438.68 419.372 1439.17 420.792L1441.71 422.04C1443.03 422.822 1445.83 423.91 1446.45 422.009C1447.22 419.632 1449.11 417.406 1451.95 416.438C1454.79 415.47 1453.82 412.631 1455.08 411.674C1456.34 410.717 1464.25 412.245 1469.81 416.161C1472.35 417.409 1473.43 412.817 1475.79 412.011C1478.16 411.204 1477.5 407.73 1478.45 407.408C1479.4 407.085 1480.95 402.331 1483.66 405.634C1486.37 408.936 1488.13 412.561 1489.08 412.239C1490.02 411.916 1488.57 407.657 1489.99 407.173C1491.41 406.689 1491.79 404.71 1496.14 405.077C1500.5 405.443 1500.58 405.68 1502.8 407.562C1505.03 409.445 1509.93 409.887 1511.83 409.242C1513.72 408.597 1512.91 406.23 1515.58 403.208C1518.25 400.186 1518.56 399.552 1521.73 401.112C1524.91 402.672 1527.93 405.34 1527.15 407.717C1526.38 410.094 1525.44 411.998 1527.51 413.407C1529.57 414.816 1529.88 414.182 1534.5 418.42C1539.11 422.659 1535.3 420.787 1541.19 425.649C1547.07 430.512 1543.74 428.479 1544.54 430.845C1545.19 432.738 1544.72 434.48 1544.41 435.115C1545.1 435.585 1546.95 436.996 1548.86 438.88C1551.25 441.236 1549.7 445.99 1548.77 447.894C1547.83 449.797 1547.38 453.121 1547.72 457.229C1548.06 461.338 1555.7 468.245 1558.09 470.601C1560.47 472.957 1563.17 474.678 1570.27 472.259C1572.94 469.237 1568.81 466.419 1569.42 463.568C1570.04 460.718 1568.3 460.255 1567.65 458.362C1567.01 456.469 1565.23 451.263 1567.74 447.768C1570.25 444.273 1565.32 440.669 1574.32 439.186C1576.23 440.122 1577.82 441.692 1579.56 442.155C1581.3 442.618 1585.71 440.059 1589.5 438.769C1593.29 437.479 1592.04 440.017 1595.52 440.943C1599.01 441.868 1596.49 443.782 1598.87 444.557C1601.24 445.332 1598.89 447.719 1598.59 449.935C1598.34 451.707 1597.67 454.474 1597.36 455.635L1593.13 461.83C1592 463.482 1594.89 464.928 1596.48 465.444C1597.7 466.965 1599.77 471.399 1598.29 476.975C1596.44 483.944 1597.85 481.879 1595.97 484.106C1594.08 486.332 1597.74 489.312 1595.52 489.01C1593.31 488.709 1591.45 494.097 1590.35 495.527C1589.25 496.958 1592.42 496.937 1595.25 495.969C1598.09 495.002 1598.58 496.421 1602.69 496.078C1606.8 495.734 1605.23 497.326 1609.01 496.036C1612.8 494.746 1615.49 494.886 1617.06 493.295C1618.63 491.703 1616.4 489.82 1617.03 488.551C1617.65 487.282 1619.51 481.894 1622.96 478.076C1626.42 474.258 1626.27 475.366 1627.53 474.409C1628.78 473.452 1628.28 468.87 1627.63 466.977L1623.93 456.092C1622.8 452.779 1618.04 451.229 1617.24 448.862L1614.98 442.237C1614.33 440.343 1613.67 435.288 1611.27 431.351C1608.87 427.414 1602.53 424.294 1599.84 424.153C1597.15 424.013 1595.06 419.442 1593.16 418.506C1591.26 417.569 1590.42 410.46 1591.35 408.556C1592.29 406.653 1590.19 400.5 1590.32 396.23C1590.45 391.96 1587.91 389.131 1587.26 387.237C1586.62 385.344 1580.89 380.955 1579.61 378.75C1578.33 376.545 1572.64 376.899 1570.91 378.017C1569.53 378.912 1566.12 378.418 1564.59 378.059C1562.99 375.434 1559.7 369.901 1559.31 368.765C1558.83 367.345 1557.87 366.087 1557.54 363.559C1557.27 361.537 1555.09 361.045 1554.04 361.052C1550.68 363.077 1544.56 366.396 1546.94 363.471C1549.92 359.815 1545.95 357.469 1544.2 355.425C1542.45 353.381 1544.34 352.736 1541.94 348.799C1539.54 344.862 1538.31 348.982 1534.52 350.272C1530.73 351.562 1534.23 354.068 1532.98 356.606C1531.73 359.145 1533.32 360.715 1533.18 363.404C1533.04 366.093 1530.99 366.265 1529.1 366.91L1520.58 369.812C1518.68 370.458 1518.69 372.039 1517.12 373.63C1515.87 374.903 1513.74 371.966 1512.83 370.338C1512.25 369.13 1510.72 366.304 1509.32 364.669C1507.56 362.625 1504.41 364.227 1499.5 362.205C1494.58 360.182 1495.25 365.237 1492.11 368.42C1488.97 371.603 1487.56 373.668 1484.57 375.744C1481.58 377.819 1481.87 374.022 1480.75 372.29C1479.63 370.558 1478.2 369.461 1476.77 368.364C1475.34 367.266 1469.49 367.147 1467.6 369.373C1465.72 371.599 1462.57 373.202 1460.2 374.008C1457.84 374.814 1457.54 377.03 1455.94 375.459C1454.35 373.888 1450.74 377.233 1442.98 376.178C1435.23 375.122 1435.73 379.704 1434.48 380.661C1433.22 381.618 1434.03 385.566 1433.42 388.416C1432.81 391.266 1432.99 394.902 1430.62 395.708C1428.26 396.514 1428.26 396.514 1426.22 399.848C1424.6 402.515 1423.77 402.974 1423.55 402.87C1423.23 401.924 1423.06 399.237 1424.93 396.062C1427.28 392.093 1425.07 393.373 1424.43 391.48C1423.78 389.587 1420.77 388.5 1418.56 388.198C1416.34 387.897 1413.69 394.081 1411.65 395.834C1409.6 397.587 1409.3 399.802 1405.68 401.566C1402.78 402.976 1403.77 407.323 1404.62 409.32L1407.94 408.192C1409 409.239 1410.8 411.651 1409.55 412.924C1407.98 414.516 1407.04 416.42 1411.64 419.077C1414.81 419.056 1418.59 417.766 1423.01 416.788C1427.43 415.81 1428.55 417.542 1433.14 417.037Z"
              fill={activeTheme === 'light' ? '#11EF75' : '#2F2F3A'}
            />
            <path
              id="leaves 5"
              d="M1312.84 446.112C1311.49 449.912 1314.85 447.68 1316.1 449.9L1320.23 451.626L1320.34 454.825C1321.32 455.962 1323.97 458.428 1326.75 459.202C1330.23 460.17 1328.54 458.981 1329.97 468.305C1329.28 472.863 1329.82 470.421 1337.64 474.903C1344.64 476.133 1340.68 476.902 1343.72 478.901C1346.76 480.901 1346.66 482.311 1346.55 483.721C1346.45 485.132 1347.43 486.268 1346.46 489.741C1345.69 492.52 1342.64 496.548 1341.22 498.214C1341.38 499.172 1341.69 501.37 1341.61 502.498C1341.5 503.908 1347.09 505.033 1348.4 506.549C1349.7 508.064 1350.36 508.822 1349.44 511.59C1348.71 513.804 1348.74 514.61 1348.85 514.737L1352.44 518.904C1353.75 520.419 1355.97 519.166 1357.27 520.682C1358.58 522.197 1361.78 522.081 1364.55 522.996C1367.31 523.911 1368.67 524.721 1371.39 526.342C1373.56 527.638 1374.4 530.348 1374.55 531.54L1374.5 536.855L1379.4 542.538C1381.68 545.189 1384.32 538.295 1385.3 539.432L1388.57 543.22C1389.65 542.946 1392.05 542.203 1392.95 541.42C1393.86 540.637 1395.18 541.704 1395.72 542.335C1396.99 542.784 1399.75 543.486 1400.66 542.703C1401.8 541.724 1403.75 543.997 1405.49 544.48C1406.88 544.868 1406.33 547.497 1405.88 548.764L1404.86 552.942L1405.68 556.194C1406.39 556.247 1408.23 556.242 1409.96 555.804C1411.7 555.366 1411.56 556.632 1411.27 557.319L1413.02 562.413L1416.98 561.644L1421.48 563.043L1419.54 569.99L1414.66 568.917C1413.79 567.907 1411.37 565.552 1408.63 564.214C1405.89 562.875 1403.33 562.401 1402.39 562.331L1398.33 564.51L1398.78 572.698L1401.99 577.191C1404.38 578.433 1409.62 581.446 1411.44 583.568L1414.71 587.356C1415.77 587.317 1418.44 586.783 1420.56 584.955C1423.21 582.671 1423.49 588.365 1424.47 589.501C1425.26 590.411 1424.12 592.666 1423.45 593.68C1425.82 595.156 1431.18 598.509 1433.61 600.109C1436.65 602.108 1437.62 598.635 1439.79 598.087C1441.96 597.539 1441.41 595.371 1444.06 593.087C1446.71 590.803 1445.95 591.456 1444.98 590.319C1444 589.183 1445.13 588.204 1445.72 585.057C1446.31 581.91 1448.32 583.478 1450.82 583.309L1453.31 583.14L1454.4 587.476L1458.2 588.822L1461.61 585.885L1459.17 585.349C1458.75 584.609 1457.87 582.771 1457.7 581.339L1457.26 577.761L1450.73 570.185C1451.8 570.146 1454.23 569.807 1455.44 568.763C1456.96 567.458 1460.76 568.804 1461.24 567.068C1461.63 565.678 1461.83 563.921 1461.88 563.216C1460.09 563.437 1455.94 563.978 1453.64 564.375C1451.34 564.771 1450.95 562.519 1451.03 561.344L1456.34 556.775C1458.61 554.817 1460.02 554.922 1461.64 552.207C1463.26 549.491 1462.61 548.734 1464.12 547.428C1465.34 546.384 1464.37 544.138 1463.73 543.145L1461.45 540.493C1460.67 539.584 1459.96 536.718 1459.7 535.399L1458.23 531.39C1458.21 530.088 1458.03 527.334 1457.51 526.728C1456.99 526.121 1454.07 525.29 1452.68 524.95L1456.85 521.36C1458.36 520.055 1458.04 519.676 1457.87 517.182C1457.73 515.186 1455.75 515.488 1454.77 515.888C1453.11 516 1449.59 515.998 1448.8 515.089C1448.02 514.18 1444.97 514.212 1443.54 514.342L1445.44 512.711L1444.97 499.913C1445.68 501.502 1447.07 505.103 1446.94 506.796C1446.81 508.488 1450.94 507.093 1453.01 506.184C1453.46 504.918 1454.39 501.962 1454.52 500.269C1454.64 498.577 1458.01 501.002 1459.67 502.426L1462.1 498.353C1462.81 496.868 1464.59 493.574 1466.1 492.269C1468 490.637 1468 490.637 1469.9 493.615C1471.43 495.998 1470.62 496.741 1470.02 496.815C1469.82 497.864 1469.76 500.34 1471.06 501.856C1472.69 503.75 1470.2 503.919 1467.65 504.793C1465.61 505.492 1468.01 511.083 1469.46 513.791L1471.91 514.327L1472.87 510.854L1476.79 515.4C1478.42 517.294 1479.66 514.905 1480.2 512.463C1480.63 510.51 1481.64 510.561 1482.09 510.831L1486.48 509.031L1490.27 505.768C1488.86 504.126 1486.12 500.496 1486.51 499.106C1487 497.37 1484.88 497.212 1478.32 499.56C1475.02 501.087 1478.96 495.708 1480.15 494.024C1481.34 492.34 1480.09 490.119 1481 487.351C1481.92 484.583 1479.15 483.668 1482.01 478.563C1484.88 473.458 1481.41 477.1 1481.73 472.869C1482.04 468.638 1479.44 470.218 1480.46 466.039C1481.48 461.861 1482.07 458.714 1482.28 455.893C1482.49 453.073 1474.56 445.391 1474.39 442.897C1474.22 440.402 1468.03 437.814 1466.07 435.541C1464.51 433.723 1461.22 430.925 1459.77 429.754C1458.5 427.768 1455.83 423.646 1455.3 423.04L1449.76 416.6L1446.17 412.433L1440.62 405.992L1437.69 407.193L1431.52 409.214L1425.93 408.089C1423.42 408.493 1418.26 409.149 1417.74 408.543C1417.09 407.786 1414.21 408.281 1413.23 407.144L1409.97 403.356C1409.95 402.054 1410.1 398.757 1410.88 395.978C1411.84 392.505 1408.64 392.621 1407.34 391.106L1406.69 390.348C1405.4 390.134 1402.29 389.383 1400.12 388.086C1397.4 386.466 1397.02 386.792 1395.61 386.687C1394.2 386.582 1393.24 390.056 1392.7 392.497C1392.16 394.939 1390.65 396.244 1389.89 396.897C1389.13 397.55 1384.36 399.676 1383.07 402.771C1381.78 405.865 1378.9 406.36 1377.77 407.339L1372.08 412.234C1370.95 413.213 1369.76 414.897 1366.78 416.803C1363.8 418.708 1365.16 419.518 1364.57 422.665C1363.98 425.812 1366.31 423.149 1369.18 422.654C1372.05 422.159 1371.73 421.78 1375.31 421.337C1378.88 420.895 1379.26 420.569 1382.57 419.042C1385.87 417.515 1386.58 417.568 1388.69 417.725C1390.39 417.851 1392.83 416.142 1393.84 415.272L1388.54 419.841C1386.95 420.55 1383.39 422.294 1381.87 423.599L1378.09 426.862C1376.95 427.841 1374.73 429.094 1374.3 430.126C1373.95 430.951 1367.64 429.039 1364.53 427.98L1361.92 424.95L1357.09 423.172L1352.64 421.068C1351.03 420.475 1347.57 419.626 1346.62 420.974C1345.67 422.321 1343.4 421.325 1342.39 420.659C1341.12 420.21 1338.51 419.377 1338.21 419.639C1337.83 419.965 1335.39 419.428 1334.63 420.081C1333.87 420.734 1334.42 422.902 1332.9 424.207C1331.39 425.512 1331.99 426.975 1330.25 426.491C1328.52 426.007 1327.01 431.923 1326.85 434.038C1326.7 436.153 1320.95 437.144 1318.13 436.934C1315.31 436.724 1316.61 438.239 1315.1 439.544C1313.58 440.85 1314.18 442.312 1312.84 446.112Z"
              fill={activeTheme === 'light' ? '#11EF75' : '#2F2F3A'}
            />
            <path
              id="leaves 6"
              d="M1637.48 542.002C1636.53 538.086 1634.94 541.791 1632.68 540.618L1628.28 541.433L1626.43 538.819C1624.99 538.404 1621.42 537.792 1618.67 538.665C1615.23 539.757 1617.29 539.83 1610.99 532.811C1609.08 528.617 1609.96 530.954 1600.96 531.484C1594.43 534.286 1597.32 531.476 1593.68 531.469C1590.04 531.461 1589.36 530.223 1588.68 528.985C1587.99 527.748 1586.55 527.332 1585.46 523.896C1584.59 521.147 1584.93 516.111 1585.21 513.937C1584.54 513.226 1583.08 511.556 1582.53 510.566C1581.85 509.328 1576.56 511.446 1574.64 510.892C1572.71 510.339 1571.75 510.062 1571 507.244C1570.4 504.99 1569.93 504.334 1569.77 504.288L1564.49 502.766C1562.57 502.212 1561.39 504.476 1559.47 503.923C1557.55 503.369 1554.94 505.218 1552.12 505.967C1549.3 506.717 1547.72 506.782 1544.56 506.913C1542.03 507.017 1539.85 505.208 1539.07 504.291L1536.2 499.82L1528.99 497.745C1525.63 496.776 1527.19 503.991 1525.75 503.575L1520.95 502.191C1520.19 503.014 1518.59 504.947 1518.26 506.1C1517.93 507.254 1516.24 507.08 1515.44 506.85C1514.14 507.168 1511.44 508.091 1511.11 509.244C1510.69 510.686 1507.81 509.855 1506.09 510.401C1504.72 510.838 1503.74 508.336 1503.42 507.03L1501.99 502.975L1499.52 500.703C1498.9 501.045 1497.36 502.058 1496.15 503.374C1494.94 504.69 1494.36 503.554 1494.23 502.821L1489.98 499.515L1487.09 502.324L1482.55 503.62L1480.37 496.747L1485.04 494.971C1486.32 495.34 1489.64 495.984 1492.66 495.606C1495.69 495.228 1498.09 494.221 1498.92 493.765L1501.12 489.718L1496.26 483.114L1491.12 481.111C1488.44 481.38 1482.41 481.724 1479.72 480.949L1474.91 479.565C1474.04 480.181 1472.1 482.086 1471.33 484.777C1470.36 488.14 1467 483.531 1465.56 483.116C1464.41 482.784 1464.13 480.274 1464.13 479.061C1461.34 479.124 1455.02 479.247 1452.11 479.241C1448.47 479.233 1449.56 482.67 1448.05 484.315C1446.53 485.96 1448.18 487.474 1447.21 490.838C1446.24 494.201 1446.52 493.24 1447.96 493.655C1449.4 494.07 1448.98 495.512 1450.21 498.468C1451.44 501.424 1448.9 501.212 1446.91 502.719L1444.91 504.225L1441.62 501.196L1437.71 502.149L1436.46 506.474L1438.8 505.586C1439.55 505.977 1441.29 507.033 1442.23 508.134L1444.56 510.887L1454.16 513.655C1453.29 514.271 1451.44 515.888 1451 517.425C1450.44 519.347 1446.53 520.3 1447.07 522.018C1447.51 523.393 1448.3 524.974 1448.64 525.593C1450.02 524.428 1453.2 521.702 1454.91 520.112C1456.61 518.522 1458.18 520.188 1458.75 521.219L1456.81 527.946C1455.98 530.829 1454.74 531.513 1454.87 534.672C1455.01 537.832 1455.97 538.109 1455.41 540.03C1454.97 541.568 1457.01 542.918 1458.08 543.402L1461.45 544.37C1462.6 544.702 1464.76 546.713 1465.7 547.676L1469.13 550.225C1469.86 551.302 1471.51 553.513 1472.28 553.734C1473.05 553.956 1475.94 553.055 1477.29 552.577L1475.77 557.863C1475.22 559.784 1475.7 559.923 1477.21 561.918C1478.41 563.514 1479.91 562.175 1480.5 561.307C1481.83 560.302 1484.78 558.376 1485.94 558.709C1487.09 559.041 1489.62 557.343 1490.75 556.453L1490.06 558.855L1497.45 569.31C1495.99 568.368 1492.86 566.114 1492.03 564.628C1491.21 563.143 1488.53 566.567 1487.29 568.464C1487.61 569.77 1488.45 572.752 1489.27 574.238C1490.09 575.723 1485.94 575.535 1483.77 575.256L1483.97 579.995C1484.19 581.621 1484.5 585.354 1483.95 587.275C1483.26 589.678 1483.26 589.678 1480.03 588.229C1477.45 587.069 1477.73 586.003 1478.19 585.615C1477.78 584.629 1476.47 582.52 1474.55 581.967C1472.15 581.275 1474.15 579.768 1475.8 577.643C1477.12 575.942 1472.05 572.575 1469.36 571.104L1467.02 571.992L1468.11 575.428L1462.35 573.768C1459.94 573.076 1460.21 575.755 1461.1 578.092C1461.81 579.961 1460.93 580.472 1460.41 580.494L1457.72 584.403L1456.34 589.208C1458.42 589.807 1462.69 591.35 1463.13 592.725C1463.67 594.443 1465.53 593.417 1469.73 587.863C1471.66 584.776 1471.3 591.438 1471.23 593.498C1471.16 595.558 1473.42 596.731 1474.17 599.548C1474.92 602.366 1477.74 601.616 1478.14 607.455C1478.54 613.294 1479.44 608.351 1481.49 612.064C1483.55 615.777 1484.86 613.033 1486.29 617.088C1487.72 621.143 1488.95 624.099 1490.32 626.574C1491.69 629.05 1502.54 631.134 1504.04 633.129C1505.55 635.124 1512.15 633.902 1515.03 634.732C1517.34 635.396 1521.62 635.937 1523.47 636.124C1525.62 637.09 1530.12 639.078 1530.88 639.299L1539.05 641.652L1544.34 643.174L1552.51 645.527L1554.3 642.921L1558.36 637.847L1563.65 635.73C1565.53 634.017 1569.49 630.646 1570.26 630.867C1571.22 631.144 1573.35 629.157 1574.79 629.572L1579.6 630.956C1580.33 632.034 1582.01 634.876 1582.88 637.625C1583.97 641.062 1586.58 639.213 1588.51 639.767L1589.47 640.043C1590.66 639.519 1593.67 638.445 1596.2 638.341C1599.36 638.21 1599.5 637.73 1600.74 637.046C1601.98 636.362 1600.88 632.925 1600 630.588C1599.11 628.251 1599.66 626.329 1599.94 625.368C1600.22 624.407 1603.04 620.018 1602.43 616.72C1601.82 613.422 1603.95 611.435 1604.37 609.993L1606.44 602.786C1606.86 601.345 1606.93 599.285 1608.38 596.06C1609.83 592.835 1608.25 592.9 1607.02 589.944C1605.79 586.989 1605.3 590.49 1603.17 592.477C1601.04 594.464 1601.52 594.603 1598.76 596.932C1596.01 599.261 1595.87 599.742 1593.94 602.828C1592.01 605.915 1591.39 606.257 1589.54 607.283C1588.05 608.104 1586.94 610.872 1586.57 612.153L1588.51 605.426C1589.45 603.963 1591.48 600.556 1592.03 598.635L1593.41 593.83C1593.83 592.388 1595 590.125 1594.8 589.025C1594.63 588.146 1600.96 586.291 1604.15 585.474L1607.99 586.581L1613.01 585.424L1617.88 584.748C1619.55 584.363 1622.91 583.179 1622.97 581.531C1623.03 579.883 1625.47 579.476 1626.69 579.479C1627.99 579.161 1630.63 578.429 1630.74 578.045C1630.88 577.565 1633.22 576.677 1633.49 575.716C1633.77 574.755 1632.12 573.24 1632.68 571.319C1633.23 569.397 1631.93 568.501 1633.65 567.955C1635.37 567.41 1633.39 561.636 1632.36 559.78C1631.33 557.923 1635.6 553.949 1638.08 552.58C1640.55 551.212 1638.63 550.659 1639.18 548.737C1639.74 546.815 1638.43 545.919 1637.48 542.002Z"
              fill={activeTheme === 'light' ? '#11EF75' : '#2F2F3A'}
            />
            <path
              id="leaves 12"
              d="M1487.51 628.996C1488.41 634.304 1489.65 645.915 1487.5 649.9C1477.13 657.171 1468.68 663.869 1466.67 667.606L1454.56 690.024C1443.11 691.348 1420.15 691.713 1419.93 682.584C1418.02 662.253 1408.92 649.293 1412.85 644.984C1416.79 640.676 1415.07 634.919 1410.75 630.981C1407.3 627.83 1402.35 622.689 1400.3 620.512L1408.85 610.649L1401.36 606.61L1390.61 626.537L1382.93 628.826C1378.32 630.199 1369.87 634.111 1366.23 635.895C1364.88 638.386 1359.53 643.536 1348.85 644.209C1335.52 645.05 1330.43 645.521 1325.44 642.828L1311.73 635.422C1315.41 631.601 1321.57 625.625 1326.55 621.825C1320.02 623.163 1311.18 623.864 1307.71 621.991C1294.86 607.012 1293.91 596.846 1296.02 589.945C1298.14 583.045 1296.81 564.632 1303.81 563.588C1310.82 562.545 1317.15 562.747 1321.66 560.357C1326.17 557.967 1342 558.472 1341.62 550.225C1341.25 541.978 1345.08 540.834 1342.79 533.159C1340.49 525.484 1343.57 507.845 1349.23 509.293C1354.89 510.741 1362.47 511.616 1366.21 513.636C1369.95 515.655 1389.81 529.592 1389.61 535.92C1389.41 542.248 1402.46 550.9 1402.36 554.064C1402.26 557.228 1400.72 566.047 1413.48 563.287C1426.25 560.527 1430.28 553.055 1433.25 559.484C1436.22 565.914 1447.54 568.809 1447.15 581.465C1446.76 594.122 1445.12 606.106 1448.86 608.125L1471.3 620.244L1487.51 628.996Z"
              fill={activeTheme === 'light' ? '#11EF75' : '#2F2F3A'}
            />
            <path
              id="leaves 13"
              d="M1588.7 606.61C1590.77 610.249 1594.77 618.398 1594.27 621.884C1588.63 629.961 1584.25 637.108 1583.77 640.376L1580.91 659.982C1572.9 664.003 1556.22 670.395 1553.62 663.786C1546.81 649.442 1536.7 642.404 1538.42 638.206C1540.15 634.008 1537.36 630.263 1533.15 628.537C1529.79 627.156 1524.8 624.722 1522.72 623.678L1526.34 614.193L1519.79 613.238L1517.25 630.665L1512.25 634.386C1509.25 636.618 1504.13 641.728 1501.94 644.004C1501.62 646.183 1499.08 651.374 1491.47 654.712C1481.95 658.885 1478.36 660.586 1473.99 659.949L1462 658.198C1463.67 654.425 1466.58 648.416 1469.2 644.311C1464.79 647.029 1458.51 649.902 1455.48 649.459C1442.1 641.944 1438.69 634.772 1438.39 629.166C1438.1 623.561 1432.21 610.465 1437.05 607.834C1441.89 605.203 1446.57 603.662 1449.23 600.712C1451.89 597.763 1463.59 593.909 1461.11 587.985C1458.63 582.062 1461.13 580.201 1457.41 575.208C1453.68 570.214 1451.23 556.507 1455.75 556.054C1460.27 555.602 1466.04 554.219 1469.31 554.697C1472.58 555.174 1490.8 560.059 1492.35 564.734C1493.89 569.409 1505.73 572.25 1506.5 574.587C1507.27 576.925 1508.5 583.779 1517.09 578.358C1525.68 572.937 1526.63 566.401 1530.52 570.306C1534.4 574.21 1543.44 573.305 1546.53 582.656C1549.62 592.006 1551.62 601.197 1554.89 601.675L1574.52 604.54L1588.7 606.61Z"
              fill={activeTheme === 'light' ? '#11EF75' : '#2F2F3A'}
            />
            <path
              id="tree base"
              d="M1387.54 780.001H1316.54C1313.87 778.334 1307.94 774.201 1305.54 771.001C1302.54 767.001 1305.04 749.001 1305.54 742.501C1306.04 736.001 1316.54 726.001 1316.54 724.001C1316.54 722.401 1323.21 710.001 1326.54 704.001C1326.54 702.501 1326.24 699.301 1325.04 698.501C1323.54 697.501 1326.04 682.001 1326.54 682.001C1326.94 682.001 1329.37 664.334 1330.54 655.501L1338.04 648.001C1341.71 642.834 1350.14 632.201 1354.54 631.001C1360.04 629.501 1371.54 625.001 1387.54 621.001C1403.54 617.001 1406.04 611.501 1409.04 610.001C1412.04 608.501 1416.54 599.501 1419.04 596.501C1421.54 593.501 1421.54 580.001 1424.54 574.001C1427.54 568.001 1437.54 547.001 1438.04 545.001C1438.54 543.001 1433.04 531.001 1433.04 528.501C1433.04 526.501 1437.37 520.334 1439.54 517.501V501.501C1439.54 498.001 1444.54 488.001 1446.04 485.501C1447.54 483.001 1460.54 474.001 1462.54 473.001C1464.54 472.001 1459.04 453.501 1459.04 452.501C1459.04 451.501 1457.54 444.501 1457.54 441.001C1457.54 437.501 1457.54 430.001 1459.04 427.001C1460.54 424.001 1462.54 416.001 1464.04 415.001C1465.24 414.201 1469.87 407.334 1472.04 404.001C1475.21 399.834 1481.74 391.301 1482.54 390.501C1483.54 389.501 1484.04 380.501 1487.04 378.501C1489.44 376.901 1491.04 370.834 1491.54 368.001C1493.21 368.167 1496.54 369.201 1496.54 372.001C1496.54 375.501 1490.04 379.001 1488.54 380.501C1487.34 381.701 1487.04 389.334 1487.04 393.001C1488.21 393.501 1490.74 394.601 1491.54 395.001C1492.54 395.501 1498.04 399.501 1496.54 401.001C1495.04 402.501 1488.54 433.001 1487.04 435.001C1485.54 437.001 1475.54 465.501 1473.54 468.501C1471.54 471.501 1465.54 510.501 1464.04 515.001C1462.84 518.601 1460.21 545.501 1459.04 558.501V576.501V593.001V602.501C1458.37 605.001 1456.94 610.301 1456.54 611.501C1456.14 612.701 1454.37 618.334 1453.54 621.001L1446.04 622.501L1439.54 630.001L1431.54 639.501C1427.54 641.167 1418.54 644.701 1414.54 645.501C1410.56 646.297 1402.27 652.451 1398.59 655.464C1399.02 655.414 1398.88 655.443 1398.54 655.501C1398.56 655.488 1398.57 655.476 1398.59 655.464C1397.76 655.561 1394.89 655.95 1387.54 657.001C1373.54 662.501 1365.54 680.001 1363.54 682.001C1361.54 684.001 1364.04 704.001 1363.54 705.501C1363.04 707.001 1359.04 709.001 1358.04 710.001C1357.24 710.801 1356.04 719.667 1355.54 724.001V754.501L1387.54 780.001Z"
              fill="#EDF4FC"
            />
            <path
              id="grass"
              d="M1500.04 773.501L1510.54 780H1338.54L1335.04 769.501L1344.04 773.501L1341.54 765.001L1352.54 773.501L1349.04 766.501L1358.04 773.501L1355.04 766.501L1352.54 762.001L1349.04 758.501H1355.04C1354.04 757.834 1352.14 755.901 1352.54 753.501C1352.94 751.101 1361.04 752.167 1365.04 753.001L1371.04 753.501L1369.04 756.501H1374.54L1372.04 760.001L1380.04 762.001L1385.04 764.001L1388.54 760.501L1389.54 753.001L1394.54 760.001V751.501L1407.04 761.501L1406.04 753.001L1416.54 764.001L1413.54 756.501L1424.54 760.001L1426.54 756.501L1440.54 770.501L1438.04 766.501L1444.54 770.501L1446.54 765.001L1451.54 769.501V765.001L1456.04 769.501L1455.04 764.001L1464.04 770.001L1463.04 765.001L1468.54 770.501L1471.04 768.001L1474.04 770.501L1477.04 768.001L1480.54 770.501L1482.54 762.001L1487.54 768.001L1490.04 764.001L1497.04 770.501L1500.04 773.501Z"
              fill={activeTheme === 'light' ? '#11EF75' : '#2F2F3A'}
            />
            <g id="Branches">
              <path
                id="branch"
                d="M1404.54 608.001L1406.54 611.501L1412.04 608.001L1404.54 604.001L1387.54 609.501H1382.04L1375.04 611.501L1366.54 612.501C1364.04 613.167 1358.54 614.701 1356.54 615.501C1354.54 616.301 1354.37 617.834 1354.54 618.501L1359.04 617.501L1369.04 614.501L1380.54 612.501L1385.54 611.501L1390.54 614.501L1395.54 611.501L1404.54 608.001Z"
                fill="#FAFAFA"
              />
              <path
                id="branch_2"
                d="M1462.04 614.501C1460.44 614.901 1456.71 616.667 1455.04 617.501L1456.04 609.501L1472.04 612.001L1479.04 609.501C1480.04 610.334 1482.34 612.001 1483.54 612.001H1487.54L1498.04 601.001L1504.04 597.501H1510.04L1518.54 593.501C1520.37 592.501 1524.44 590.601 1526.04 591.001C1528.04 591.501 1527.54 593.001 1526.04 593.501C1524.54 594.001 1517.04 596.501 1515.54 597.501C1514.04 598.501 1504.04 599.501 1502.54 601.001C1501.34 602.201 1494.37 608.834 1491.04 612.001L1493.04 614.501C1496.37 614.501 1503.24 614.801 1504.04 616.001C1504.84 617.201 1510.37 620.167 1513.04 621.501L1515.54 625.001C1511.37 623.001 1502.54 618.701 1500.54 617.501C1498.54 616.3 1491.04 615.001 1487.54 614.501H1479.04C1477.04 614.501 1464.04 614.001 1462.04 614.501Z"
                fill="#FAFAFA"
              />
              <path
                id="branch_3"
                d="M1475.04 599H1459.54V592.5L1464.54 594.5L1475.04 596L1480.04 594.5L1486.04 590.5L1490.54 592.5C1492.04 592.5 1495.44 592.1 1497.04 590.5C1499.04 588.5 1500.04 590.5 1502.04 590.5H1511.04C1512.24 590.5 1513.87 591.834 1514.54 592.5H1521.54L1528.54 594.5L1525.54 596C1520.71 594.834 1510.24 592.9 1507.04 594.5C1503.84 596.1 1499.04 595.167 1497.04 594.5C1493.87 595 1487.24 596 1486.04 596C1484.84 596 1478.21 598 1475.04 599Z"
                fill="#FAFAFA"
              />
              <path
                id="branch_4"
                d="M1465.54 590.001L1461.54 593.501L1459.04 594.001L1458.04 577.501L1465.54 572.501C1466.54 571.501 1468.74 569.201 1469.54 568.001C1470.34 566.801 1476.54 564.167 1479.54 563.001L1485.04 554.001C1486.71 551.167 1490.04 545.301 1490.04 544.501C1490.04 543.701 1494.04 537.167 1496.04 534.001L1485.04 528.501L1487.54 524.501L1490.04 528.501L1496.04 530.501C1497.24 530.901 1499.54 533.001 1500.54 534.001C1497.37 539.167 1490.84 549.801 1490.04 551.001C1489.24 552.201 1486.37 559.501 1485.04 563.001L1477.04 571.001C1476.37 571.834 1474.94 573.801 1474.54 575.001C1474.14 576.201 1469.37 577.167 1467.04 577.501C1466.04 580.001 1464.34 585.601 1465.54 588.001C1466.74 590.401 1466.04 590.334 1465.54 590.001Z"
                fill="#FAFAFA"
              />
              <path
                id="branch_5"
                d="M1408.04 595.001C1409.64 595.801 1414.71 597.334 1417.04 598.001L1419.54 595.001L1403.54 591.501C1400.71 590.667 1395.04 588.601 1395.04 587.001C1395.04 585.401 1381.37 588.667 1374.54 590.501C1369.04 589.167 1357.64 586.301 1356.04 585.501C1354.44 584.701 1346.71 589.167 1343.04 591.501L1329.04 598.001L1323.04 601.001L1316.54 604.501H1320.04L1329.04 601.001L1339.54 596.501L1347.54 595.001C1348.54 593.501 1350.84 590.201 1352.04 589.001C1353.24 587.801 1361.21 589.501 1365.04 590.501L1374.54 595.001L1377.54 591.501L1385.04 590.501H1395.04L1399.54 595.001C1401.71 594.667 1406.44 594.201 1408.04 595.001Z"
                fill="#FAFAFA"
              />
              <path
                id="branch_6"
                d="M1407.04 584.001C1407.84 584.801 1411.37 597.667 1413.04 604.001L1416.04 601.001L1413.04 586.501L1418.04 596.001L1420.54 592.501C1418.04 589.667 1413.04 583.601 1413.04 582.001C1413.04 580.001 1409.04 567.501 1409.04 566.001C1409.04 564.501 1403.54 550.001 1402.04 549.001C1400.84 548.201 1398.54 548.667 1397.54 549.001C1398.87 550.667 1401.64 554.301 1402.04 555.501C1402.54 557.001 1407.04 568.501 1407.04 572.501C1407.04 575.701 1408.37 580.167 1409.04 582.001L1373.54 561.001L1371.04 562.501C1382.71 569.334 1406.24 583.201 1407.04 584.001Z"
                fill="#FAFAFA"
              />
              <path
                id="branch_7"
                d="M1429.54 517.001C1431.14 520.201 1432.54 523.667 1433.04 525.001L1439.04 519.001L1430.54 501.001C1430.87 498.334 1431.84 493.001 1433.04 493.001C1434.24 493.001 1435.87 474.001 1436.54 464.501L1433.04 462.501L1427.54 493.001C1425.04 489.167 1419.74 481.001 1418.54 479.001C1417.34 477 1423.04 461.501 1426.04 454.001C1425.54 453.501 1424.04 453.201 1422.04 456.001C1419.54 459.501 1415.04 479.501 1415.04 481.501C1415.04 483.101 1421.37 493.501 1424.54 498.501L1429.54 505.501C1425.71 502.501 1417.84 496.201 1417.04 495.001C1416.24 493.801 1404.37 476.834 1398.54 468.501L1397.04 472.001L1411.54 496.501L1384.54 509.001V512.501C1386.87 511.334 1391.94 509.001 1393.54 509.001C1395.14 509.001 1408.54 503.667 1415.04 501.001C1416.54 502.667 1420.04 506.601 1422.04 509.001C1424.54 512.001 1427.54 513.001 1429.54 517.001Z"
                fill="#FAFAFA"
              />
              <path
                id="branch_8"
                d="M1452.54 454.001L1460.04 461.001V454.001L1454.54 449.001C1453.21 446.834 1450.34 442.201 1449.54 441.001C1448.74 439.801 1439.21 434.834 1434.54 432.501C1432.21 430.501 1427.24 426.301 1426.04 425.501C1424.84 424.701 1419.54 421.834 1417.04 420.501L1404.54 406.501L1400.04 404.001L1408.04 413.501L1417.04 423.501C1421.37 426.334 1430.24 432.101 1431.04 432.501C1432.04 433.001 1446.04 444.501 1447.54 446.001C1448.74 447.201 1451.37 451.834 1452.54 454.001Z"
                fill="#FAFAFA"
              />
              <path
                id="branch_9"
                d="M1506.04 563.501C1504.84 565.501 1485.87 570.334 1476.54 572.501L1480.04 567.001L1495.04 563.501L1508.54 560.001L1524.04 554.001L1534.54 551.001L1547.54 546.001L1558.04 541.501L1570.04 539.001L1577.04 537.501L1585.04 536.501C1583.87 537.167 1581.24 538.801 1580.04 540.001C1578.54 541.501 1573.04 541.501 1571.04 541.501C1569.04 541.501 1555.04 545.501 1552.54 546.001C1550.54 546.401 1534.04 553.501 1526.04 557.001C1519.87 558.334 1507.24 561.501 1506.04 563.501Z"
                fill="#FAFAFA"
              />
              <path
                id="branch_10"
                d="M1424.54 556.501C1423.34 558.501 1425.04 564.667 1426.04 567.501V572.501L1420.54 567.501C1418.37 564.667 1413.74 558.801 1412.54 558.001C1411.34 557.201 1404.04 554.001 1400.54 552.501L1389.04 550.501C1379.37 549.501 1359.74 547.501 1358.54 547.501C1357.04 547.501 1347.54 545.001 1344.54 544.501C1342.14 544.101 1330.54 541.334 1325.04 540.001C1322.37 540.001 1316.64 539.601 1315.04 538.001C1313.44 536.401 1314.37 534.334 1315.04 533.501L1323.54 536.001L1343.54 541.501L1371.04 545.001L1388.04 547.501L1406.54 549.001L1414.04 554.501C1416.21 557.001 1420.54 561.701 1420.54 560.501C1420.54 559.301 1423.21 554.667 1424.54 552.501C1425.04 553.001 1425.74 554.501 1424.54 556.501Z"
                fill="#FAFAFA"
              />
              <path
                id="branch_11"
                d="M1476.04 560.5C1474.04 561.7 1464.21 564.667 1459.54 566V560.5L1469.54 557.001C1472.37 555.834 1478.84 553.501 1482.04 553.501C1486.04 553.501 1493.54 553.001 1493.54 553.501C1493.54 554.001 1504.54 557.501 1506.54 559C1508.14 560.2 1511.54 564.167 1513.04 566L1521.54 568.501L1529.04 572.001H1540.04L1551.04 577.001L1560.04 580.501L1573.04 587.001L1556.54 583.001L1562.54 593.001C1559.71 590.667 1553.44 585.201 1551.04 582.001C1548.04 578.001 1538.04 575.001 1535.04 575.001C1532.04 575.001 1527.04 574.501 1523.04 575.001C1519.04 575.501 1515.54 571.001 1513.04 568.501C1510.54 566.001 1496.54 560.5 1493.54 559C1490.54 557.5 1478.54 559 1476.04 560.5Z"
                fill="#FAFAFA"
              />
              <path
                id="branch_12"
                d="M1482.54 508.5C1481.34 509.7 1469.37 521 1463.54 526.5V518.501L1469.04 514.501C1471.37 513.167 1476.44 510.101 1478.04 508.5C1479.64 506.9 1484.37 501.834 1486.54 499.501C1488.21 497.834 1491.74 494.201 1492.54 493C1493.54 491.5 1502.04 491.001 1506.04 489.001C1510.04 487.001 1511.54 489.501 1514.54 489.001C1517.54 488.501 1524.04 490.501 1527.54 491.001C1531.04 491.501 1534.54 493 1536.54 493C1538.54 493 1549.04 493 1552.04 494.501C1555.04 496.001 1558.54 494.501 1561.54 494.501C1564.54 494.501 1571.54 496.501 1573.54 496.501H1583.54C1585.14 496.501 1588.87 495.167 1590.54 494.501L1593.04 498.001L1589.04 499.501C1584.37 499.167 1574.34 498.401 1571.54 498.001C1568.04 497.501 1554.54 497.001 1552.04 496.501C1549.54 496.001 1522.54 493 1520.54 493C1518.54 493 1506.04 492.5 1502.04 493C1498.04 493.5 1484.04 507 1482.54 508.5Z"
                fill="#FAFAFA"
              />
              <path
                id="branch_13"
                d="M1487.04 479.501C1485.44 479.901 1475.37 485.001 1470.54 487.501L1469.04 482.501C1471.21 481.501 1476.24 479.501 1479.04 479.501C1482.54 479.501 1482.54 477.001 1484.04 475.001C1485.54 473.001 1493.54 470.501 1495.54 470.501C1497.54 470.501 1505.54 468.183 1509.04 464.001C1512.54 459.818 1515.54 460.501 1517.54 458.501C1519.54 456.501 1527.04 455.001 1528.54 455.001C1530.04 455.001 1533.54 457.501 1530.04 458.501C1526.54 459.501 1520.54 462.001 1517.54 463.001C1514.54 464.001 1504.04 468.501 1501.54 470.501C1499.04 472.501 1491.54 475.001 1493.54 475.001H1504.04C1507.54 475.001 1509.04 473.001 1512.54 473.001H1523.04C1527.04 473.001 1530.04 472.501 1536.04 470.501C1540.84 468.901 1544.04 469.834 1545.04 470.501C1545.54 472.001 1546.24 475.001 1545.04 475.001C1543.54 475.001 1525.04 475.501 1522.04 475.001C1519.64 474.601 1512.37 476.167 1509.04 477.001L1515.54 482.501C1517.71 483.001 1523.04 484.001 1527.04 484.001C1532.04 484.001 1536.04 485.001 1541.04 486.001C1546.04 487.001 1545.04 487.501 1548.54 488.501C1552.04 489.501 1557.54 490.001 1561.54 491.501C1565.54 493.001 1568.54 493.001 1570.54 493.001C1572.54 493.001 1580.04 491.501 1584.04 491.501C1588.04 491.501 1595.54 493.001 1599.04 493.001C1602.54 493.001 1609.54 494.501 1613.04 495.001C1616.54 495.501 1620.54 496.501 1621.04 499.001C1621.54 501.501 1619.04 499.501 1614.54 499.001C1610.04 498.501 1608.04 498.001 1602.54 496.501C1597.04 495.001 1580.54 496.501 1577.54 496.501C1574.54 496.501 1562.54 493.501 1560.04 493.001C1557.54 492.501 1543.54 491.001 1541.04 490.001C1538.54 489.001 1534.04 487.501 1528.54 487.501C1523.04 487.501 1516.04 485.501 1517.54 487.501C1519.04 489.501 1531.54 505.001 1530.04 504.001C1528.84 503.201 1514.54 487.334 1507.54 479.501H1499.04C1496.54 479.501 1489.04 479.001 1487.04 479.501Z"
                fill="#FAFAFA"
              />
              <path
                id="branch_14"
                d="M1514.54 399.001C1510.04 400.001 1497.04 402.001 1495.54 402.001V399.001C1497.54 398.501 1502.04 397.501 1504.04 397.501C1506.54 397.501 1510.54 396.001 1513.04 394.501C1515.54 393.001 1520.04 395.001 1523.54 394.501C1527.04 394.001 1530.54 393.001 1532.54 393.001C1534.54 393.001 1540.04 396.001 1544.54 397.501C1549.04 399.001 1548.54 399.001 1551.04 399.001C1553.54 399.001 1558.54 399.001 1561.54 400.501C1564.54 402.001 1568.54 403.501 1572.54 404.501C1576.54 405.501 1578.04 406.501 1581.04 406.501C1583.44 406.501 1589.37 407.167 1592.04 407.501L1599.54 403.501L1606.54 406.501H1600.54L1593.54 410.001L1599.54 412.501C1601.21 412.501 1604.14 412.701 1602.54 413.501C1600.54 414.501 1594.54 413.001 1592.54 412.501C1590.54 412.001 1584.54 410.501 1582.54 409.501C1580.54 408.501 1567.54 405.501 1561.54 403.501C1555.54 401.501 1547.04 402.001 1544.54 400.501C1542.04 399.001 1538.54 399.001 1535.54 397.501C1532.54 396.001 1519.04 398.001 1514.54 399.001Z"
                fill="#FAFAFA"
              />
              <path
                id="branch_15"
                d="M1430.54 520.5C1427.04 519.5 1426.54 523 1419.04 520.5C1411.54 518 1409.04 518.5 1405.54 518C1402.04 517.5 1395.04 516 1391.54 514C1388.74 512.4 1385.71 510 1384.54 509C1384.54 508.667 1383.64 508.2 1380.04 509C1376.44 509.8 1371.21 513.334 1369.04 515L1380.04 520.5C1380.87 521.334 1382.54 523.4 1382.54 525C1382.54 526.6 1381.54 528.334 1381.04 529C1379.87 528.334 1377.54 526.6 1377.54 525C1377.54 523 1376.04 523 1373.54 520.5C1371.04 518 1366.54 518 1364.54 518C1362.94 518 1358.21 516 1356.04 515C1354.37 515.667 1350.94 517.2 1350.54 518C1350.04 519 1348.04 523 1347.04 527.5C1346.24 531.1 1345.71 535.667 1345.54 537.5H1343.54C1343.04 537.5 1342.04 535 1342.04 534C1342.04 533 1340.54 527 1342.04 525C1343.24 523.4 1344.21 520.334 1344.54 519L1340.04 520.5L1337.54 529V532.5H1334.54V527.5C1334.54 525.5 1336.54 520.334 1337.54 518C1337.71 518.5 1338.44 519.2 1340.04 518C1341.64 516.8 1345.37 513.834 1347.04 512.5H1340.04C1338.21 512.667 1333.74 513.2 1330.54 514C1327.34 514.8 1322.87 515 1321.04 515H1318.54L1316.04 509H1321.04C1322.54 509 1325.54 509.5 1328.54 510C1331.54 510.5 1336.54 509 1340.04 509H1350.54C1352.04 509 1355.54 507.5 1358.04 510C1360.04 512 1363.21 512.5 1364.54 512.5L1371.54 509L1380.04 504.5L1384.54 503H1373.54C1371.54 503 1367.04 501.5 1364.54 500.5C1362.04 499.5 1360.04 500 1356.04 499C1352.04 498 1350.54 498 1347.04 500.5C1344.24 502.5 1339.54 505.334 1337.54 506.5L1334.54 504.5L1347.04 499C1344.87 499.5 1339.94 500.5 1337.54 500.5C1335.14 500.5 1330.54 502.167 1328.54 503V500.5C1329.71 500 1332.84 499 1336.04 499C1339.24 499 1346.04 497 1349.04 496C1347.37 495 1343.64 492.9 1342.04 492.5C1340.44 492.1 1335.37 491 1333.04 490.5V487C1335.21 488.167 1340.04 490.5 1342.04 490.5C1344.54 490.5 1351.04 492.5 1353.54 492.5C1356.04 492.5 1361.54 493 1364.54 494.5C1366.98 495.719 1374.04 495.948 1376.6 496.795C1375.83 495.606 1374.68 493.644 1373.54 492.5L1366.54 485.5C1364.94 483.9 1360.21 475.834 1358.04 472C1355.54 470 1350.54 465.9 1350.54 465.5C1350.54 465 1347.54 467 1345.54 465.5C1343.54 464 1339.04 460 1337.54 459L1328.54 453C1325.87 452.5 1321.04 451.1 1323.04 449.5C1325.54 447.5 1328.54 446.5 1328.54 447C1328.54 447.5 1332.04 446 1336.04 449.5C1340.04 453 1343.54 450 1347.04 453C1350.54 456.001 1356.04 459.501 1356.04 462.501C1356.04 465.5 1359.54 466.001 1362.04 469.001C1364.54 472 1366.54 476.501 1366.54 478.001C1366.54 479.501 1369.04 477.001 1369.04 474.501C1369.04 472.5 1373.04 466.667 1375.04 464.001C1376.21 462.834 1378.34 461.801 1377.54 467.001C1376.54 473.501 1373.54 471.001 1373.54 474.501V482.501C1373.54 484.001 1372.04 487 1373.54 487C1374.74 487 1379.04 492 1381.04 494.5L1388.04 500.5C1389.04 501.667 1391.84 504.5 1395.04 506.5C1399.04 509 1398.04 507.5 1404.04 510C1410.04 512.5 1419.54 512.5 1422.04 512.5C1424.54 512.5 1428.04 514 1430.54 514C1432.54 514 1431.37 518.334 1430.54 520.5Z"
                fill="#FAFAFA"
              />
              <path
                id="branch_16"
                d="M1460.54 407.001C1461.54 410.501 1460.54 410.501 1462.04 415.001L1463.04 416.001L1462.04 419.001L1457.04 415.001V409.501V402.001C1456.21 398.667 1454.24 391.401 1453.04 389.001C1451.54 386.001 1451.54 385.001 1450.54 382.501C1449.54 380.001 1449.04 377.501 1450.54 376.001C1452.04 374.501 1453.54 377.001 1454.54 379.001C1455.34 380.601 1455.87 383.001 1456.04 384.001L1460.54 379.001H1466.04L1458.54 385.501V392.001C1458.54 394.001 1459.54 403.501 1460.54 407.001Z"
                fill="#FAFAFA"
              />
              <path
                id="branch_17"
                d="M1474.54 538.001C1472.54 540.401 1464.37 546.667 1460.54 549.501V541.001L1469.54 536.501L1481.54 527.001L1488.54 523.501C1490.37 523.001 1494.54 521.901 1496.54 521.501C1499.04 521.001 1508.04 517.001 1510.54 517.001C1513.04 517.001 1519.54 513.001 1522.54 513.001C1525.54 513.001 1528.04 512.001 1530.04 513.001C1532.04 514.001 1544.54 512.921 1547.54 510.001C1550.54 507.08 1553.04 507.501 1554.04 505.001C1554.84 503.001 1557.04 502.167 1558.04 502.001L1560.54 509.001C1554.71 510.501 1541.84 513.701 1537.04 514.501C1531.04 515.501 1520.04 516.501 1518.04 517.001C1516.04 517.501 1498.54 525.001 1494.04 525.501C1489.54 526.001 1485.54 530.501 1483.04 531.501C1480.54 532.501 1477.04 535.001 1474.54 538.001Z"
                fill="#FAFAFA"
              />
              <path
                id="branch_18"
                d="M1437.54 473.5L1452.54 477L1454.04 478.501L1459.54 473.5H1457.04C1453.04 472.667 1444.34 470.701 1441.54 469.501C1438.04 468.001 1435.54 467.501 1427.04 465.001C1418.54 462.501 1415.54 461.501 1413.54 459.5C1411.54 457.5 1407.54 455.5 1406.54 454.001C1405.54 452.501 1404.54 443 1403.54 441C1402.54 439 1398.04 436.001 1397.04 434.501C1396.04 433.001 1392.04 430.001 1389.04 428.001C1386.04 426.001 1375.04 421.5 1373.04 421.5C1371.04 421.5 1367.04 416.5 1362.54 414.5C1358.04 412.5 1364.04 419.5 1367.04 421.5C1370.04 423.5 1380.54 431 1382.54 433C1384.54 435 1392.04 436 1397.04 441C1402.04 446 1401.04 445 1400.04 450C1399.04 455 1390.54 453 1385.54 451.5C1380.54 450 1372.04 450 1369.54 450C1367.04 450 1359.04 450 1356.54 446C1354.54 442.8 1350.37 442.667 1348.54 443L1337.04 441L1340.04 446C1344.71 447.167 1354.54 449.6 1356.54 450C1359.04 450.5 1374.54 454.5 1376.54 455.5C1378.54 456.5 1387.04 456.5 1390.54 457C1393.34 457.4 1399.37 458.834 1402.04 459.5L1413.54 466.5C1417.21 467.5 1424.74 469.8 1425.54 471C1426.34 472.2 1433.87 473.167 1437.54 473.5Z"
                fill="#FAFAFA"
              />
            </g>
            <path
              id="leaves 1"
              d="M1430.54 521.501C1431.71 523.001 1434.04 526.401 1434.04 528.001C1432.04 532.001 1430.54 535.501 1430.54 537.001V546.001C1427.21 548.334 1420.14 552.301 1418.54 549.501C1414.54 543.501 1409.54 541.001 1410.04 539.001C1410.54 537.001 1409.04 535.501 1407.04 535.001C1405.44 534.601 1403.04 533.834 1402.04 533.501L1403.04 529.001H1400.04V537.001L1398.04 539.001C1396.84 540.201 1394.87 542.834 1394.04 544.001C1394.04 545.001 1393.24 547.501 1390.04 549.501C1386.04 552.001 1384.54 553.001 1382.54 553.001H1377.04C1377.54 551.195 1378.45 548.303 1379.36 546.287C1377.56 547.797 1374.93 549.501 1373.54 549.501C1367.04 547.001 1365.04 544.001 1364.54 541.501C1364.04 539.001 1360.54 533.501 1362.54 532.001C1364.54 530.501 1366.54 529.501 1367.54 528.001C1368.54 526.501 1373.54 524.001 1372.04 521.501C1370.54 519.001 1371.54 518.001 1369.54 516.001C1367.54 514.001 1365.54 508.001 1367.54 507.501C1369.54 507.001 1372.04 506.001 1373.54 506.001C1375.04 506.001 1383.54 507.001 1384.54 509.001C1385.54 511.001 1391.04 511.501 1391.54 512.501C1392.04 513.501 1393.04 516.501 1396.54 513.501C1400.04 510.501 1400.04 507.501 1402.04 509.001C1404.04 510.501 1408.04 509.501 1410.04 513.501C1412.04 517.501 1413.54 521.501 1415.04 521.501H1424.04H1430.54Z"
              fill={activeTheme === 'light' ? '#11EF75' : '#2F2F3A'}
            />
            <path
              id="leaves 9"
              d="M1374.37 424.245C1373.69 420.701 1372.69 412.936 1374.07 410.233C1380.91 405.208 1386.48 400.595 1387.78 398.061L1395.56 382.857C1403.22 381.802 1418.6 381.221 1418.88 387.337C1420.46 400.937 1426.75 409.49 1424.18 412.436C1421.6 415.381 1422.84 419.215 1425.79 421.791C1428.15 423.853 1431.55 427.226 1432.95 428.655L1427.37 435.391L1432.44 437.99L1439.36 424.475L1444.47 422.828C1447.54 421.84 1453.15 419.095 1455.56 417.846C1456.43 416.157 1459.94 412.626 1467.09 412.019C1476.01 411.26 1479.42 410.869 1482.8 412.601L1492.1 417.365C1489.69 419.98 1485.65 424.076 1482.37 426.696C1486.72 425.703 1492.64 425.104 1494.99 426.309C1503.82 436.161 1504.61 442.961 1503.29 447.618C1501.98 452.274 1503.14 464.596 1498.46 465.398C1493.78 466.2 1489.53 466.157 1486.54 467.825C1483.55 469.493 1472.93 469.386 1473.31 474.909C1473.68 480.431 1471.13 481.254 1472.78 486.365C1474.43 491.476 1472.62 503.344 1468.81 502.457C1464.99 501.569 1459.9 501.093 1457.36 499.794C1454.83 498.495 1441.32 489.444 1441.35 485.2C1441.39 480.955 1432.52 475.347 1432.54 473.225C1432.56 471.102 1433.47 465.168 1424.95 467.205C1416.44 469.242 1413.84 474.31 1411.76 470.044C1409.67 465.778 1402.04 464.003 1402.12 455.514C1402.2 447.024 1403.12 438.968 1400.58 437.669L1385.36 429.874L1374.37 424.245Z"
              fill={activeTheme === 'light' ? '#11EF75' : '#2F2F3A'}
            />
            <path
              id="leaves 2"
              d="M1449.04 529.501C1451.04 533.001 1451.54 529.001 1454.04 529.501L1458.04 527.501L1460.54 529.501C1462.04 529.501 1465.64 529.101 1468.04 527.501C1471.04 525.501 1469.04 526.001 1477.04 531.001C1480.04 534.501 1478.54 532.501 1487.04 529.501C1492.54 525.001 1490.54 528.501 1494.04 527.501C1497.54 526.501 1498.54 527.501 1499.54 528.501C1500.54 529.501 1502.04 529.501 1504.04 532.501C1505.64 534.901 1506.71 539.834 1507.04 542.001C1507.87 542.501 1509.74 543.701 1510.54 544.501C1511.54 545.501 1516.04 542.001 1518.04 542.001C1520.04 542.001 1521.04 542.001 1522.54 544.501C1523.74 546.501 1524.37 547.001 1524.54 547.001H1530.04C1532.04 547.001 1532.54 544.501 1534.54 544.501C1536.54 544.501 1538.54 542.001 1541.04 540.501C1543.54 539.001 1545.04 538.501 1548.04 537.501C1550.44 536.701 1553.04 537.834 1554.04 538.501L1558.04 542.001H1565.54C1569.04 542.001 1565.54 535.501 1567.04 535.501H1572.04C1572.54 534.501 1573.54 532.201 1573.54 531.001C1573.54 529.801 1575.21 529.501 1576.04 529.501C1577.21 528.834 1579.54 527.201 1579.54 526.001C1579.54 524.501 1582.54 524.501 1584.04 523.501C1585.24 522.701 1586.87 524.834 1587.54 526.001L1590.04 529.501L1593.04 531.001C1593.54 530.501 1594.74 529.101 1595.54 527.501C1596.34 525.901 1597.21 526.834 1597.54 527.501L1602.54 529.501L1604.54 526.001L1608.54 523.501L1612.54 529.501L1608.54 532.501C1607.21 532.501 1603.84 532.801 1601.04 534.001C1598.24 535.201 1596.21 536.834 1595.54 537.501L1594.54 542.001L1601.04 547.001L1606.54 547.501C1609.04 546.501 1614.74 544.501 1617.54 544.501H1622.54C1623.21 543.667 1624.54 541.301 1624.54 538.501C1624.54 535.001 1629.04 538.501 1630.54 538.501C1631.74 538.501 1632.71 540.834 1633.04 542.001C1635.71 541.167 1641.74 539.301 1644.54 538.501C1648.04 537.501 1646.04 534.501 1647.04 532.501C1648.04 530.501 1646.04 529.501 1646.04 526.001C1646.04 522.501 1646.04 523.501 1644.54 523.501C1643.04 523.501 1643.04 522.001 1641.04 519.501C1639.04 517.001 1641.54 516.501 1643.04 514.501L1644.54 512.501L1648.54 514.501L1652.04 512.501V508.001L1650.04 509.501C1649.21 509.334 1647.24 508.801 1646.04 508.001L1643.04 506.001H1633.04C1633.71 505.167 1635.04 503.101 1635.04 501.501C1635.04 499.501 1638.54 497.501 1637.54 496.001C1636.74 494.801 1635.54 493.501 1635.04 493.001C1634.04 494.501 1631.74 498.001 1630.54 500.001C1629.34 502.001 1627.37 500.834 1626.54 500.001V493.001C1626.54 490.001 1627.54 489.001 1626.54 486.001C1625.54 483.001 1624.54 483.001 1624.54 481.001C1624.54 479.401 1622.21 478.667 1621.04 478.501H1617.54C1616.34 478.501 1613.71 477.167 1612.54 476.501L1608.54 475.001C1607.54 474.167 1605.34 472.501 1604.54 472.501C1603.74 472.501 1601.21 474.167 1600.04 475.001V469.501C1600.04 467.501 1599.54 467.501 1597.54 466.001C1595.94 464.801 1594.87 466.501 1594.54 467.501C1593.54 468.834 1591.24 471.501 1590.04 471.501C1588.84 471.501 1586.87 473.834 1586.04 475.001V472.501L1576.04 464.501C1577.71 465.001 1581.34 466.301 1582.54 467.501C1583.74 468.701 1585.37 464.667 1586.04 462.501C1585.37 461.334 1583.74 458.701 1582.54 457.501C1581.34 456.301 1585.37 455.334 1587.54 455.001L1586.04 450.501C1585.37 449.001 1584.04 445.501 1584.04 443.501C1584.04 441.001 1584.04 441.001 1587.54 441.501C1590.34 441.901 1590.37 443.001 1590.04 443.501C1590.71 444.334 1592.54 446.001 1594.54 446.001C1597.04 446.001 1595.54 448.001 1594.54 450.501C1593.74 452.501 1599.54 454.334 1602.54 455.001L1604.54 453.501L1602.54 450.501H1608.54C1611.04 450.501 1610.04 448.001 1608.54 446.001C1607.34 444.401 1608.04 443.667 1608.54 443.501L1610.04 439.001V434.001C1607.87 434.001 1603.34 433.701 1602.54 432.501C1601.54 431.001 1600.04 432.501 1597.54 439.001C1596.54 442.501 1595.04 436.001 1594.54 434.001C1594.04 432.001 1591.54 431.501 1590.04 429.001C1588.54 426.501 1586.04 428.001 1584.04 422.501C1582.04 417.001 1582.54 422.001 1579.54 419.001C1576.54 416.001 1576.04 419.001 1573.54 415.501C1571.04 412.001 1569.04 409.501 1567.04 407.501C1565.04 405.501 1554.04 406.501 1552.04 405.001C1550.04 403.501 1544.04 406.501 1541.04 406.501C1538.64 406.501 1534.37 407.167 1532.54 407.501C1530.21 407.167 1525.34 406.501 1524.54 406.501H1516.04H1510.54H1502.04L1501.04 409.501L1498.54 415.501L1494.04 419.001C1492.71 421.167 1489.84 425.501 1489.04 425.501C1488.04 425.501 1486.54 428.001 1485.04 428.001H1480.04C1479.04 427.167 1476.64 424.901 1475.04 422.501C1473.04 419.501 1471.04 422.001 1469.04 422.001H1468.04C1467.04 422.834 1464.44 424.701 1462.04 425.501C1459.04 426.501 1459.04 427.001 1458.04 428.001C1457.04 429.001 1459.04 432.001 1460.54 434.001C1462.04 436.001 1462.04 438.001 1462.04 439.001C1462.04 440.001 1460.54 445.001 1462.04 448.001C1463.54 451.001 1462.04 453.501 1462.04 455.001V462.501C1462.04 464.001 1462.54 466.001 1462.04 469.501C1461.54 473.001 1463.04 472.501 1465.04 475.001C1467.04 477.501 1466.54 474.001 1468.04 471.501C1469.54 469.001 1469.04 469.001 1471.04 466.001C1473.04 463.001 1473.04 462.501 1474.04 459.001C1475.04 455.501 1475.54 455.001 1477.04 453.501C1478.24 452.301 1478.54 449.334 1478.54 448.001V455.001C1478.04 456.667 1477.04 460.501 1477.04 462.501V467.501C1477.04 469.001 1476.54 471.501 1477.04 472.501C1477.44 473.301 1471.87 476.834 1469.04 478.501H1465.04L1460.54 481.001L1456.04 483.001C1454.54 483.834 1451.64 485.901 1452.04 487.501C1452.44 489.101 1450.21 490.167 1449.04 490.501C1447.87 491.167 1445.54 492.601 1445.54 493.001C1445.54 493.501 1443.54 495.001 1443.54 496.001C1443.54 497.001 1445.54 498.001 1445.54 500.001C1445.54 502.001 1447.04 502.501 1445.54 503.501C1444.04 504.501 1447.54 509.501 1449.04 511.001C1450.54 512.501 1447.54 517.501 1445.54 519.501C1443.54 521.501 1445.54 521.501 1445.54 523.501C1445.54 525.501 1447.04 526.001 1449.04 529.501Z"
              fill={activeTheme === 'light' ? '#11EF75' : '#2F2F3A'}
            />
            <path
              id="leaves 8"
              d="M1622.75 468.792C1619.66 466.199 1620.57 470.125 1618.05 470.521L1614.99 473.78L1611.96 472.768C1610.55 473.286 1607.31 474.906 1605.61 477.238C1603.49 480.151 1605.19 478.991 1595.95 477.065C1591.93 474.818 1594.03 476.176 1587.09 481.93C1583.48 488.054 1584.15 484.078 1581.21 486.227C1578.27 488.375 1576.99 487.782 1575.71 487.19C1574.42 486.597 1573.01 487.116 1570.1 484.992C1567.77 483.293 1565.06 479.033 1564 477.115C1563.05 476.934 1560.88 476.454 1559.85 475.979C1558.57 475.387 1555.56 480.227 1553.68 480.918C1551.8 481.61 1550.86 481.955 1548.59 480.128C1546.78 478.666 1546.01 478.416 1545.85 478.474L1540.69 480.375C1538.81 481.067 1539.21 483.586 1537.33 484.277C1535.46 484.968 1534.44 488.006 1532.62 490.278C1530.79 492.549 1529.55 493.537 1527.09 495.513C1525.11 497.093 1522.28 496.929 1521.11 496.649L1516.15 494.748L1509.11 497.341C1505.82 498.551 1511.36 503.44 1509.95 503.958L1505.26 505.687C1505.13 506.798 1504.99 509.302 1505.4 510.428C1505.82 511.554 1504.36 512.412 1503.58 512.7C1502.71 513.729 1501.09 516.068 1501.5 517.194C1502.02 518.602 1499.21 519.639 1498.15 521.096C1497.3 522.261 1495.03 520.824 1494 519.96L1490.44 517.54L1487.11 517.17C1486.81 517.812 1486.17 519.54 1485.97 521.318C1485.77 523.096 1484.64 522.52 1484.09 522.01L1478.71 521.862L1478.05 525.837L1475.16 529.566L1469.33 525.319L1472.04 521.121C1473.3 520.66 1476.35 519.215 1478.56 517.121C1480.78 515.027 1482.12 512.791 1482.51 511.935L1481.9 507.367L1474.07 504.922L1468.74 506.355C1466.74 508.157 1462.08 512.005 1459.45 512.973L1454.76 514.701C1454.42 515.714 1453.99 518.396 1454.96 521.023C1456.17 524.307 1450.73 522.579 1449.33 523.097C1448.2 523.512 1446.49 521.657 1445.77 520.677C1443.56 522.381 1438.54 526.219 1436.19 527.938C1433.25 530.086 1436.17 532.21 1435.92 534.432C1435.67 536.654 1437.89 536.901 1439.1 540.185C1440.31 543.47 1439.97 542.531 1441.38 542.013C1442.78 541.494 1443.3 542.901 1446.04 544.556C1448.78 546.21 1446.61 547.544 1445.9 549.939L1445.18 552.334L1440.73 551.841L1438.14 554.927L1439.7 559.15L1441.06 557.051C1441.9 556.919 1443.93 556.74 1445.33 557.075L1448.83 557.915L1458.22 554.457C1457.88 555.47 1457.34 557.87 1457.9 559.371C1458.59 561.248 1456 564.335 1457.45 565.397C1458.62 566.246 1460.19 567.051 1460.84 567.347C1461.25 565.594 1462.2 561.515 1462.64 559.223C1463.07 556.932 1465.32 557.346 1466.39 557.84L1468.81 564.409C1469.85 567.224 1469.26 568.508 1471.23 570.977C1473.21 573.446 1474.15 573.1 1474.84 574.977C1475.39 576.478 1477.83 576.36 1478.99 576.113L1482.27 574.903C1483.4 574.488 1486.33 574.829 1487.65 575.051L1491.92 575.075C1493.15 575.512 1495.79 576.315 1496.54 576.038C1497.29 575.762 1499.09 573.322 1499.9 572.137L1501.8 577.297C1502.49 579.174 1502.96 579.001 1505.36 579.717C1507.27 580.29 1507.69 578.326 1507.65 577.273C1508.13 575.676 1509.37 572.378 1510.49 571.963C1511.62 571.549 1512.66 568.679 1513.04 567.296L1513.9 569.642L1526.05 573.692C1524.31 573.799 1520.45 573.835 1518.91 573.124C1517.37 572.413 1517.23 576.762 1517.36 579.026C1518.39 579.89 1520.83 581.796 1522.37 582.507C1523.91 583.218 1520.46 585.52 1518.54 586.582L1521.51 590.286C1522.65 591.463 1525.11 594.286 1525.8 596.162C1526.67 598.508 1526.67 598.508 1523.21 599.249C1520.45 599.842 1520.03 598.821 1520.17 598.237C1519.26 597.685 1516.96 596.755 1515.09 597.447C1512.74 598.311 1513.46 595.916 1513.53 593.224C1513.59 591.071 1507.51 591.356 1504.47 591.768L1503.11 593.867L1506.02 595.99L1500.39 598.065C1498.05 598.929 1499.85 600.929 1501.95 602.287C1503.63 603.374 1503.23 604.304 1502.81 604.633L1502.96 609.374L1504.69 614.066C1506.72 613.317 1511.08 612.031 1512.25 612.88C1513.7 613.942 1514.59 612.016 1514.69 605.052C1514.42 601.422 1518.08 607.003 1519.24 608.707C1520.4 610.411 1522.92 610.015 1525.19 611.843C1527.46 613.67 1529.29 611.398 1533.06 615.867C1536.84 620.337 1534.64 615.818 1538.5 617.596C1542.35 619.374 1541.78 616.386 1545.34 618.806C1548.89 621.225 1551.63 622.88 1554.2 624.065C1556.77 625.25 1566.75 620.509 1569.14 621.225C1571.54 621.941 1576.13 617.051 1578.94 616.014C1581.2 615.185 1584.97 613.084 1586.57 612.137C1588.88 611.643 1593.68 610.586 1594.43 610.31L1602.4 607.371L1607.56 605.469L1615.54 602.531L1615.44 599.37L1615.71 592.876L1618.72 588.036C1619.23 585.542 1620.42 580.484 1621.17 580.208C1622.11 579.862 1622.65 576.998 1624.06 576.479L1628.75 574.75C1629.98 575.187 1633.01 576.484 1635.34 578.183C1638.26 580.306 1639.27 577.269 1641.15 576.577L1642.08 576.232C1642.73 575.104 1644.53 572.454 1646.5 570.873C1648.97 568.898 1648.8 568.428 1649.39 567.144C1649.99 565.86 1647.07 563.737 1644.97 562.379C1642.87 561.021 1642.18 559.144 1641.84 558.206C1641.49 557.267 1641.17 552.057 1638.72 549.761C1636.28 547.464 1636.82 544.6 1636.3 543.192L1633.71 536.155C1633.19 534.747 1632.03 533.043 1631.29 529.586C1630.55 526.129 1629.32 527.117 1626.58 525.463C1623.83 523.808 1625.51 526.92 1624.97 529.784C1624.43 532.649 1624.9 532.476 1624.06 535.982C1623.22 539.489 1623.39 539.958 1623.66 543.588C1623.93 547.218 1623.64 547.86 1622.75 549.786C1622.04 551.327 1622.78 554.214 1623.24 555.465L1620.82 548.897C1620.72 547.16 1620.33 543.217 1619.64 541.341L1617.91 536.649C1617.39 535.242 1616.99 532.723 1616.18 531.957C1615.53 531.345 1619.53 526.105 1621.61 523.562L1625.37 522.179L1628.72 518.277L1632.25 514.845C1633.37 513.544 1635.38 510.602 1634.45 509.239C1633.52 507.876 1635.25 506.103 1636.23 505.387C1637.09 504.358 1638.79 502.206 1638.65 501.831C1638.48 501.362 1639.83 499.263 1639.49 498.325C1639.14 497.386 1636.92 497.139 1636.23 495.263C1635.54 493.386 1633.96 493.435 1635.02 491.979C1636.08 490.522 1631.07 487.04 1629.14 486.151C1627.22 485.262 1628.3 479.533 1629.49 476.965C1630.67 474.397 1628.8 475.089 1628.1 473.212C1627.41 471.335 1625.83 471.385 1622.75 468.792Z"
              fill={activeTheme === 'light' ? '#11EF75' : '#2F2F3A'}
            />
            <path
              id="leaves 10"
              d="M1339.13 530.422C1341.73 532.997 1341.2 529.379 1343.51 529.21L1346.52 526.491L1349.19 527.634C1350.5 527.27 1353.55 526.048 1355.26 524.067C1357.4 521.591 1355.77 522.513 1363.98 524.945C1367.45 527.277 1365.65 525.892 1372.35 521.209C1376.07 515.942 1375.17 519.486 1377.99 517.763C1380.81 516.041 1381.92 516.672 1383.04 517.304C1384.16 517.936 1385.47 517.572 1387.94 519.71C1389.92 521.42 1392.05 525.474 1392.87 527.288C1393.72 527.523 1395.64 528.119 1396.54 528.625C1397.65 529.256 1400.74 525.106 1402.49 524.621C1404.23 524.136 1405.11 523.893 1407.03 525.715C1408.56 527.173 1409.23 527.456 1409.38 527.416L1414.19 526.083C1415.94 525.598 1415.77 523.291 1417.52 522.806C1419.26 522.321 1420.41 519.651 1422.23 517.733C1424.05 515.816 1425.24 515.015 1427.62 513.414C1429.52 512.132 1432.07 512.493 1433.11 512.833L1437.45 514.923L1444.01 513.105C1447.07 512.256 1442.43 507.423 1443.75 507.059L1448.12 505.847C1448.31 504.851 1448.63 502.598 1448.34 501.549C1448.05 500.5 1449.43 499.834 1450.16 499.632C1451.02 498.766 1452.66 496.772 1452.37 495.723C1452.01 494.412 1454.63 493.685 1455.7 492.447C1456.55 491.457 1458.5 492.926 1459.36 493.784L1462.4 496.237L1465.38 496.821C1465.7 496.263 1466.41 494.748 1466.72 493.156C1467.03 491.563 1468.02 492.169 1468.47 492.671L1473.33 493.207L1474.23 489.662L1477.12 486.507L1482.07 490.783L1479.3 494.375C1478.13 494.698 1475.26 495.777 1473.11 497.505C1470.95 499.232 1469.57 501.153 1469.15 501.898L1469.36 506.074L1476.26 508.869L1481.19 507.973C1483.13 506.493 1487.63 503.362 1490.08 502.683L1494.45 501.471C1494.83 500.581 1495.42 498.189 1494.74 495.741C1493.89 492.681 1498.67 494.65 1499.99 494.286C1501.03 493.995 1502.45 495.801 1503.02 496.74C1505.15 495.365 1509.97 492.27 1512.22 490.892C1515.04 489.169 1512.57 487.032 1512.95 485.041C1513.34 483.05 1511.35 482.661 1510.5 479.601C1509.66 476.541 1509.9 477.416 1508.59 477.779C1507.28 478.143 1506.91 476.832 1504.56 475.131C1502.2 473.43 1504.27 472.387 1505.09 470.275L1505.92 468.163L1509.9 468.942L1512.48 466.345L1511.39 462.411L1510 464.207C1509.23 464.263 1507.38 464.274 1506.14 463.865L1503.03 462.844L1494.29 465.269C1494.67 464.379 1495.34 462.249 1494.95 460.85C1494.46 459.101 1497.04 456.504 1495.8 455.436C1494.81 454.581 1493.45 453.735 1492.89 453.419C1492.38 454.973 1491.22 458.59 1490.65 460.63C1490.09 462.669 1488.08 462.126 1487.15 461.599L1485.46 455.48C1484.73 452.857 1485.36 451.741 1483.76 449.36C1482.16 446.98 1481.28 447.223 1480.8 445.474C1480.41 444.076 1478.19 444 1477.13 444.137L1474.07 444.986C1473.03 445.277 1470.4 444.75 1469.22 444.45L1465.36 444.108C1464.28 443.622 1461.95 442.698 1461.25 442.892C1460.56 443.086 1458.74 445.158 1457.93 446.169L1456.59 441.361C1456.11 439.612 1455.67 439.734 1453.56 438.907C1451.87 438.246 1451.35 439.991 1451.3 440.946C1450.75 442.354 1449.39 445.243 1448.34 445.534C1447.29 445.824 1446.13 448.341 1445.69 449.563L1445.08 447.378L1434.4 442.808C1435.98 442.841 1439.47 443.097 1440.81 443.855C1442.15 444.613 1442.6 440.691 1442.66 438.635C1441.79 437.777 1439.73 435.871 1438.39 435.113C1437.05 434.355 1440.34 432.532 1442.15 431.715L1439.75 428.145C1438.8 426.995 1436.79 424.259 1436.3 422.51C1435.7 420.325 1435.7 420.325 1438.88 419.913C1441.42 419.584 1441.72 420.538 1441.55 421.056C1442.33 421.623 1444.34 422.635 1446.09 422.15C1448.27 421.544 1447.45 423.656 1447.18 426.084C1446.96 428.027 1452.48 428.223 1455.26 428.079L1456.65 426.282L1454.17 424.145L1459.42 422.69C1461.6 422.084 1460.12 420.141 1458.33 418.756C1456.89 417.648 1457.32 416.838 1457.72 416.571L1457.94 412.273L1456.73 407.902C1454.83 408.427 1450.8 409.264 1449.81 408.409C1448.57 407.34 1447.62 409.015 1447.01 415.304C1446.99 418.606 1444.1 413.287 1443.18 411.66C1442.26 410.033 1439.95 410.202 1438.03 408.38C1436.12 406.558 1434.29 408.475 1431.21 404.152C1428.13 399.829 1429.78 404.079 1426.43 402.183C1423.08 400.288 1423.37 403.032 1420.34 400.578C1417.3 398.125 1414.95 396.424 1412.71 395.161C1410.48 393.897 1401.11 397.438 1398.99 396.612C1396.88 395.785 1392.36 399.862 1389.74 400.59C1387.64 401.172 1384.08 402.789 1382.55 403.525C1380.43 403.799 1376.02 404.396 1375.32 404.59L1367.89 406.651L1363.08 407.984L1355.65 410.045L1355.5 412.91L1354.77 418.761L1351.68 422.912C1351.04 425.13 1349.59 429.613 1348.89 429.807C1348.02 430.049 1347.31 432.598 1346 432.962L1341.63 434.174C1340.55 433.688 1337.9 432.288 1335.92 430.578C1333.45 428.441 1332.31 431.111 1330.56 431.596L1329.68 431.838C1329.01 432.809 1327.19 435.071 1325.29 436.353C1322.91 437.954 1323.03 438.391 1322.39 439.508C1321.76 440.625 1324.24 442.762 1326.04 444.147C1327.83 445.532 1328.32 447.28 1328.56 448.154C1328.8 449.029 1328.7 453.763 1330.74 456.022C1332.78 458.281 1332.07 460.83 1332.44 462.142L1334.26 468.698C1334.62 470.01 1335.54 471.637 1335.95 474.818C1336.36 477.999 1337.55 477.198 1339.91 478.898C1342.26 480.599 1340.98 477.661 1341.68 475.111C1342.39 472.562 1341.95 472.683 1342.97 469.576C1343.99 466.468 1343.87 466.031 1343.9 462.729C1343.92 459.427 1344.24 458.869 1345.19 457.194C1345.95 455.854 1345.49 453.188 1345.17 452.022L1346.86 458.141C1346.83 459.72 1346.88 463.313 1347.37 465.062L1348.58 469.433C1348.94 470.744 1349.11 473.051 1349.79 473.804C1350.34 474.406 1346.33 478.844 1344.25 480.988L1340.76 481.958L1337.43 485.235L1333.98 488.074C1332.87 489.166 1330.84 491.676 1331.58 492.978C1332.31 494.28 1330.62 495.753 1329.68 496.328C1328.82 497.193 1327.13 499.012 1327.23 499.362C1327.35 499.799 1325.96 501.595 1326.21 502.469C1326.45 503.343 1328.44 503.733 1328.92 505.481C1329.41 507.23 1330.84 507.303 1329.77 508.541C1328.7 509.779 1332.97 513.301 1334.65 514.249C1336.32 515.197 1334.91 520.295 1333.65 522.528C1332.39 524.762 1334.14 524.277 1334.62 526.025C1335.11 527.773 1336.54 527.847 1339.13 530.422Z"
              fill={activeTheme === 'light' ? '#11EF75' : '#2F2F3A'}
            />
            <path
              id="leaves 3"
              d="M1345.54 522C1346.34 518.4 1349.54 517.5 1351.04 517.5L1353.04 515.501C1354.21 514.501 1356.14 512.201 1354.54 511.001C1352.54 509.501 1351.04 507.001 1351.04 504.001C1351.04 501.001 1348.04 501.001 1347.54 499.501C1347.04 498 1351.04 491.001 1356.54 487C1358.54 485 1354.54 482.5 1354.54 480.001C1354.54 477.501 1351.04 477.001 1351.04 476.001C1351.04 475.001 1347.04 472.001 1351.04 470.501C1355.04 469.001 1359.04 468.501 1359.04 467.501C1359.04 466.501 1354.54 466.501 1354.54 465C1354.54 463.5 1352.79 462.5 1354.54 458.501C1356.29 454.501 1356.54 454.501 1359.04 453.001C1361.54 451.501 1363.54 447.001 1363.54 445.001C1363.54 443.001 1361.04 443.001 1359.04 439.501C1357.04 436.001 1356.54 435.501 1359.04 433C1361.54 430.5 1365.04 428.5 1367.04 430.001C1369.04 431.501 1370.54 433 1372.54 431.5C1374.54 430 1374.04 429.501 1379.54 426.501C1385.04 423.501 1382.04 426.501 1388.54 422.501C1395.04 418.501 1392.04 421.001 1394.54 421.001C1396.54 421.001 1398.04 422.001 1398.54 422.501C1399.21 422.001 1401.14 420.701 1403.54 419.501C1406.54 418.001 1410.54 421.001 1412.04 422.501C1413.54 424.001 1416.54 425.501 1420.54 426.501C1424.54 427.501 1433.54 422.501 1436.54 421.001C1439.54 419.501 1442.04 417.501 1442.04 410C1440.04 406.5 1436.04 409.501 1433.54 408C1431.04 406.5 1430.04 408 1428.04 408C1426.04 408 1420.54 408 1418.04 404.5C1415.54 401 1410.54 404.5 1412.04 395.501C1413.54 394.001 1415.54 393.001 1416.54 391.501C1417.54 390.001 1416.54 385.001 1416.54 381.001C1416.54 377.001 1418.54 379.001 1420.54 376.001C1422.54 373.001 1423.54 376.001 1425.04 374.001C1426.54 372.001 1428.04 375.001 1430.04 376.001C1431.64 376.801 1434.04 378.334 1435.04 379.001L1439.54 385.001C1440.74 386.6 1443.04 384.334 1444.04 383.001C1445.87 382.334 1450.74 381.801 1455.54 385.001C1461.54 389 1460.04 387 1461.54 389.5C1463.04 392 1467.04 389.5 1466.04 391.501C1465.04 393.501 1469.54 397 1470.54 398.501C1471.54 400.001 1472.54 397 1472.54 394.001C1472.54 391.001 1474.04 391.001 1475.04 387C1476.04 383 1477.04 385.001 1477.04 381.001C1477.04 377.001 1478.04 374.501 1477.04 372.501C1476.04 370.501 1473.54 372.001 1472.54 371.001C1471.54 370 1467.04 366.501 1464.54 362.001C1462.04 357.501 1463.04 358.001 1462.54 356.501C1462.04 355.001 1457.54 354.001 1455.54 354.001H1444.04C1440.54 354.001 1437.54 358.001 1435.04 358.001H1428.04C1426.04 358.001 1421.04 357.001 1416.54 358.001C1412.04 359.001 1407.04 364.001 1406.04 366.501C1405.04 369 1400.04 369.501 1398.54 371.001C1397.04 372.5 1390.04 371.001 1388.54 369.501C1387.04 368.001 1380.54 368.001 1376.54 366.501C1372.54 365.001 1369.04 366.501 1367.04 366.501C1365.04 366.501 1359.04 370.501 1356.54 371.001C1354.04 371.501 1352.54 377.001 1353.04 379.001C1353.44 380.601 1351.87 383.667 1351.04 385.001C1348.04 385.667 1341.74 387 1340.54 387C1339.04 387 1337.54 387.5 1335.04 387C1333.04 386.6 1331.87 388.5 1331.54 389.5C1332.37 393.334 1333.54 400.201 1331.54 397C1329.04 393 1325.54 396 1323.04 397C1320.54 398 1320.54 396 1316.04 397C1311.54 398 1315.04 400.5 1315.04 404.5C1315.04 408.5 1318.54 406 1320.54 408C1322.54 410 1324.54 409 1327.04 410C1329.54 411 1329.04 413 1329.04 415V424C1329.04 426 1330.54 426.5 1331.54 428.5C1332.34 430.1 1328.87 431.167 1327.04 431.5C1325.71 431.667 1322.54 432.2 1320.54 433C1318.04 434 1318.54 437.5 1315.04 441.5C1311.54 445.5 1316.54 446.5 1318.54 450.5C1320.54 454.5 1322.04 456.5 1323.04 460C1324.04 463.5 1320.54 462 1318.54 462.5C1316.54 463 1315.04 464 1313.54 465C1312.04 466 1310.04 471.5 1311.54 474C1313.04 476.5 1313.54 480 1313.54 482.5C1313.54 485 1315.54 486 1313.54 487C1311.54 488 1313.54 492.501 1310.04 499.501C1306.54 506.501 1311.04 507.501 1311.54 509.001C1312.04 510.501 1316.04 511.001 1318.54 512.501C1321.04 514.001 1324.54 515 1324.54 517.5C1324.54 520 1324.54 520 1327.04 523C1329.04 525.4 1329.21 526.334 1329.04 526.5C1328.04 526.5 1325.44 525.8 1323.04 523C1320.04 519.5 1320.54 522 1318.54 522C1316.54 522 1314.54 524.5 1313.54 526.5C1312.54 528.5 1317.54 533 1318.54 535.5C1319.54 538 1321.54 539 1322.04 543C1322.44 546.2 1326.87 546.667 1329.04 546.5V543C1330.37 542.334 1333.24 541.4 1334.04 543C1335.04 545 1336.54 546.5 1340.54 543C1341.54 540 1341.54 536 1342.04 531.5C1342.54 527 1344.54 526.5 1345.54 522Z"
              fill={activeTheme === 'light' ? '#11EF75' : '#2F2F3A'}
            />
            <path
              id="leaves 11"
              d="M1381.1 447.443C1386.57 446.755 1389.45 450.804 1390.21 452.915L1394.03 454.721C1396.02 455.859 1400.23 457.42 1401.11 454.565C1402.22 450.995 1404.98 447.625 1409.2 446.114C1413.42 444.602 1411.91 440.381 1413.77 438.922C1415.63 437.463 1427.49 439.564 1435.89 445.288C1439.71 447.094 1441.21 440.207 1444.73 438.947C1448.25 437.688 1447.19 432.512 1448.6 432.008C1450 431.504 1452.21 424.365 1456.33 429.237C1460.46 434.109 1463.18 439.485 1464.59 438.982C1465.99 438.478 1463.73 432.146 1465.84 431.391C1467.95 430.635 1468.47 427.669 1474.98 428.116C1481.49 428.563 1481.62 428.915 1484.99 431.677C1488.36 434.439 1495.7 434.986 1498.51 433.978C1501.32 432.971 1500.06 429.453 1503.98 424.876C1507.9 420.299 1508.35 419.343 1513.13 421.601C1517.9 423.859 1522.48 427.776 1521.38 431.346C1520.28 434.916 1518.92 437.782 1522.04 439.84C1525.16 441.898 1525.61 440.943 1532.6 447.17C1539.59 453.397 1533.86 450.688 1542.76 457.818C1551.66 464.948 1546.64 461.987 1547.9 465.504C1548.9 468.318 1548.25 470.933 1547.8 471.888C1548.84 472.574 1551.64 474.639 1554.54 477.412C1558.16 480.877 1555.96 488.016 1554.6 490.882C1553.25 493.749 1552.65 498.725 1553.25 504.857C1553.86 510.989 1565.43 521.133 1569.05 524.598C1572.68 528.063 1576.75 530.573 1587.3 526.795C1591.22 522.218 1584.98 518.101 1585.83 513.828C1586.68 509.555 1584.07 508.903 1583.06 506.089C1582.06 503.275 1579.28 495.537 1582.95 490.256C1586.61 484.976 1579.17 479.704 1592.59 477.28C1595.46 478.635 1597.87 480.945 1600.48 481.597C1603.1 482.248 1609.63 478.322 1615.26 476.307C1620.89 474.292 1619.08 478.113 1624.31 479.416C1629.54 480.719 1625.82 483.637 1629.39 484.74C1632.96 485.843 1629.49 489.465 1629.09 492.783C1628.77 495.437 1627.83 499.586 1627.39 501.329L1621.22 510.683C1619.57 513.177 1623.92 515.272 1626.3 516.007C1628.16 518.251 1631.36 524.829 1629.28 533.195C1626.67 543.652 1628.73 540.534 1625.97 543.904C1623.21 547.274 1628.74 551.642 1625.42 551.243C1622.1 550.844 1619.45 558.938 1617.84 561.101C1616.23 563.264 1620.96 563.159 1625.18 561.648C1629.4 560.137 1630.16 562.247 1636.29 561.639C1642.42 561.031 1640.11 563.445 1645.74 561.43C1651.36 559.415 1655.39 559.563 1657.7 557.148C1660.01 554.734 1656.64 551.972 1657.54 550.061C1658.44 548.15 1661.1 540.055 1666.17 534.271C1671.24 528.487 1671.04 530.145 1672.9 528.686C1674.76 527.227 1673.9 520.392 1672.89 517.578L1667.1 501.397C1665.34 496.473 1658.2 494.267 1656.94 490.75L1653.41 480.901C1652.4 478.087 1651.29 470.548 1647.62 464.72C1643.94 458.892 1634.39 454.376 1630.37 454.229C1626.35 454.081 1623.13 447.298 1620.26 445.943C1617.39 444.589 1615.98 433.984 1617.33 431.118C1618.69 428.252 1615.41 419.106 1615.51 412.722C1615.6 406.339 1611.73 402.17 1610.72 399.356C1609.71 396.542 1601.06 390.115 1599.1 386.85C1597.14 383.584 1588.64 384.244 1586.08 385.955C1584.03 387.324 1578.93 386.665 1576.63 386.164C1574.18 382.279 1569.13 374.087 1568.53 372.398C1567.77 370.288 1566.31 368.429 1565.76 364.66C1565.31 361.644 1562.05 360.96 1560.48 360.995C1555.5 364.098 1546.43 369.199 1549.93 364.773C1554.29 359.24 1548.31 355.827 1545.64 352.813C1542.98 349.8 1545.79 348.792 1542.12 342.965C1538.44 337.137 1536.69 343.321 1531.06 345.336C1525.43 347.351 1530.71 351.016 1528.91 354.838C1527.1 358.659 1529.51 360.969 1529.37 364.991C1529.22 369.012 1526.15 369.316 1523.34 370.323L1510.68 374.857C1507.86 375.865 1507.91 378.227 1505.6 380.642C1503.76 382.574 1500.51 378.233 1499.12 375.822C1498.21 374.03 1495.86 369.843 1493.73 367.432C1491.07 364.418 1486.39 366.885 1479 363.976C1471.61 361.066 1472.72 368.605 1468.1 373.434C1463.48 378.263 1461.42 381.381 1457 384.552C1452.58 387.722 1452.93 382.042 1451.22 379.479C1449.51 376.917 1447.34 375.311 1445.18 373.704C1443.02 372.097 1434.27 372.054 1431.51 375.424C1428.75 378.794 1424.08 381.261 1420.56 382.52C1417.04 383.779 1416.64 387.097 1414.23 384.787C1411.81 382.477 1406.49 387.558 1394.88 386.16C1383.26 384.762 1384.12 391.597 1382.27 393.056C1380.41 394.515 1381.72 400.395 1380.87 404.668C1380.02 408.942 1380.37 414.37 1376.86 415.629C1373.34 416.889 1373.34 416.889 1370.38 421.917C1368.01 425.941 1366.78 426.645 1366.46 426.495C1365.96 425.088 1365.63 421.077 1368.36 416.29C1371.77 410.305 1368.51 412.268 1367.5 409.454C1366.49 406.64 1361.97 405.086 1358.65 404.686C1355.33 404.287 1351.52 413.589 1348.51 416.255C1345.49 418.922 1345.09 422.239 1339.72 424.958C1335.42 427.133 1336.99 433.606 1338.32 436.57L1343.24 434.807C1344.85 436.347 1347.61 439.91 1345.76 441.842C1343.45 444.257 1342.1 447.123 1349.04 450.987C1353.76 450.883 1359.39 448.868 1365.97 447.304C1372.56 445.741 1374.27 448.303 1381.1 447.443Z"
              fill={activeTheme === 'light' ? '#11EF75' : '#2F2F3A'}
            />
          </g>
          <g id="Railings">
            <g id="Railings feet">
              <rect
                id="feet"
                x="134.041"
                y="777"
                width="5"
                height="3"
                fill="#2D3039"
              />
              <rect
                id="feet_2"
                x="254.041"
                y="777"
                width="5"
                height="3"
                fill="#2D3039"
              />
              <rect
                id="feet_3"
                x="374.041"
                y="777"
                width="5"
                height="3"
                fill="#2D3039"
              />
              <rect
                id="feet_4"
                x="494.041"
                y="777"
                width="5"
                height="3"
                fill="#2D3039"
              />
              <rect
                id="feet_5"
                x="614.041"
                y="777"
                width="5"
                height="3"
                fill="#2D3039"
              />
              <rect
                id="feet_6"
                x="734.041"
                y="777"
                width="5"
                height="3"
                fill="#2D3039"
              />
              <rect
                id="feet_7"
                x="854.041"
                y="777"
                width="5"
                height="3"
                fill="#2D3039"
              />
              <rect
                id="feet_8"
                x="974.041"
                y="777"
                width="5"
                height="3"
                fill="#2D3039"
              />
              <rect
                id="feet_9"
                x="1094.04"
                y="777"
                width="5"
                height="3"
                fill="#2D3039"
              />
              <rect
                id="feet_10"
                x="1214.04"
                y="777"
                width="5"
                height="3"
                fill="#2D3039"
              />
              <rect
                id="feet_11"
                x="1334.04"
                y="777"
                width="5"
                height="3"
                fill="#2D3039"
              />
              <rect
                id="feet_12"
                x="1454.04"
                y="777"
                width="5"
                height="3"
                fill="#2D3039"
              />
            </g>
            <rect
              id="railings-bottom"
              x="-2.95898"
              y="775"
              width="1680"
              height="2"
              fill="#2D3039"
            />
            <g id="Railings middle">
              <rect
                id="railing"
                x="-0.958984"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_2"
                x="9.04102"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_3"
                x="19.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_4"
                x="29.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_5"
                x="39.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_6"
                x="49.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_7"
                x="59.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_8"
                x="69.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_9"
                x="79.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_10"
                x="89.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_11"
                x="99.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_12"
                x="109.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_13"
                x="119.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_14"
                x="129.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_15"
                x="139.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_16"
                x="149.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_17"
                x="159.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_18"
                x="169.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_19"
                x="179.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_20"
                x="189.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_21"
                x="199.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_22"
                x="209.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_23"
                x="219.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_24"
                x="229.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_25"
                x="239.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_26"
                x="249.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_27"
                x="259.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_28"
                x="269.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_29"
                x="279.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_30"
                x="289.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_31"
                x="299.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_32"
                x="309.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_33"
                x="319.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_34"
                x="329.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_35"
                x="339.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_36"
                x="349.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_37"
                x="359.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_38"
                x="369.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_39"
                x="379.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_40"
                x="389.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_41"
                x="399.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_42"
                x="409.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_43"
                x="419.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_44"
                x="429.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_45"
                x="439.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_46"
                x="449.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_47"
                x="459.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_48"
                x="469.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_49"
                x="479.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_50"
                x="489.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_51"
                x="499.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_52"
                x="509.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_53"
                x="519.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_54"
                x="529.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_55"
                x="539.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_56"
                x="549.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_57"
                x="559.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_58"
                x="569.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_59"
                x="579.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_60"
                x="589.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_61"
                x="599.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_62"
                x="609.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_63"
                x="619.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_64"
                x="629.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_65"
                x="639.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_66"
                x="649.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_67"
                x="659.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_68"
                x="669.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_69"
                x="679.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_70"
                x="689.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_71"
                x="699.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_72"
                x="709.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_73"
                x="719.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_74"
                x="729.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_75"
                x="739.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_76"
                x="749.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_77"
                x="759.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_78"
                x="769.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_79"
                x="779.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_80"
                x="789.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_81"
                x="799.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_82"
                x="809.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_83"
                x="819.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_84"
                x="829.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_85"
                x="839.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_86"
                x="849.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_87"
                x="859.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_88"
                x="869.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_89"
                x="879.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_90"
                x="889.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_91"
                x="899.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_92"
                x="909.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_93"
                x="919.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_94"
                x="929.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_95"
                x="939.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_96"
                x="949.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_97"
                x="959.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_98"
                x="969.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_99"
                x="979.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_100"
                x="989.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_101"
                x="999.041"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_102"
                x="1009.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_103"
                x="1019.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_104"
                x="1029.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_105"
                x="1039.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_106"
                x="1049.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_107"
                x="1059.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_108"
                x="1069.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_109"
                x="1079.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_110"
                x="1089.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_111"
                x="1099.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_112"
                x="1109.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_113"
                x="1119.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_114"
                x="1129.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_115"
                x="1139.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_116"
                x="1149.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_117"
                x="1159.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_118"
                x="1169.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_119"
                x="1179.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_120"
                x="1189.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_121"
                x="1199.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_122"
                x="1209.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_123"
                x="1219.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_124"
                x="1229.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_125"
                x="1239.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_126"
                x="1249.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_127"
                x="1259.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_128"
                x="1269.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_129"
                x="1279.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_130"
                x="1289.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_131"
                x="1299.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_132"
                x="1309.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_133"
                x="1319.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_134"
                x="1329.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_135"
                x="1339.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_136"
                x="1349.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_137"
                x="1359.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_138"
                x="1369.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_139"
                x="1379.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_140"
                x="1389.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_141"
                x="1399.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_142"
                x="1409.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_143"
                x="1419.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_144"
                x="1429.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_145"
                x="1439.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_146"
                x="1449.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_147"
                x="1459.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_148"
                x="1469.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_149"
                x="1479.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_150"
                x="1489.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_151"
                x="1499.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
              <rect
                id="railing_152"
                x="1509.04"
                y="703"
                width="2"
                height="72"
                fill="#2D3039"
              />
            </g>
            <rect
              id="railings-top"
              x="-2.95898"
              y="698"
              width="1680"
              height="5"
              fill="#2D3039"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_68_395"
            x1="836.791"
            y1="0"
            x2="836.791"
            y2="802"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#41417A" />
            <stop offset="1" stopColor="#302E57" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_68_395"
            x1="457.5"
            y1="469"
            x2="457.5"
            y2="882"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_68_395"
            x1="1216.5"
            y1="469"
            x2="1216.5"
            y2="882"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default Hero;
