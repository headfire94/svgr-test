import * as React from "react";
import Svg, { Defs, LinearGradient, Stop, G, Path } from "react-native-svg";

const SvgTest = (props) => (
  <Svg width={40} height={40} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Defs>
      <LinearGradient
        x1="19.031%"
        y1="-66.682%"
        x2="123.324%"
        y2="91.487%"
        id="a"
      >
        <Stop stopColor="#FFF" offset="0%" />
        <Stop stopColor="#EAEAEA" offset="100%" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path
        d="m20 1.155 13.32 7.69a4 4 0 0 1 2 3.464v15.382a4 4 0 0 1-2 3.464L20 38.845a4 4 0 0 1-4 0l-13.32-7.69a4 4 0 0 1-2-3.464V12.309a4 4 0 0 1 2-3.464L16 1.155a4 4 0 0 1 4 0z"
        fill="url(#a)"
        transform="translate(2)"
      />
      <Path
        d="M27.94 26.98h-2.493l-1.627-6.033-3.487 6.033h-2.786l5.386-9.34-.866-3.247L14.8 26.987h-2.793l9.213-15.96h2.447l1.066 3.966h2.52l-1.72 2.994z"
        fill="#000"
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default SvgTest;
