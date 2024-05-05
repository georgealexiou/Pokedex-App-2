import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M16.811 14.578a2.759 2.759 0 0 1 4.983-.828h.806a2.758 2.758 0 0 1 4.509.833h.675a2.758 2.758 0 0 1 3.992 1.25h1.835c.016 0 .03.005.043.012a2.758 2.758 0 0 1 3.012 2.746v8.419c0 .05 0 .1-.003.15C36.497 32.896 31.339 37.5 25 37.5c-6.443 0-11.667-4.757-11.667-10.625 0-2.832 1.217-5.406 3.201-7.31-.005 2.76.042 5.615.257 5.566.575-.13.126-8.684.02-10.553Z"
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
