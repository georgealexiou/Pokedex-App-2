import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M18.006 33.992a.01.01 0 0 1-.01-.013l6.383-18.035a.01.01 0 0 1 .01-.007h6.813a.01.01 0 0 1 .01.007l6.287 18.035a.01.01 0 0 1-.009.013H18.006Zm-5.496.07a.01.01 0 0 1-.01-.013l4.754-12.689a.01.01 0 0 1 .009-.006h4.13a.01.01 0 0 1 .009.013l-4.596 12.69a.01.01 0 0 1-.01.005H12.51Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M12.5 12.5h25v25h-25z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
