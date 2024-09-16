import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgComponent = (props: JSX.IntrinsicClassAttributes<Svg>) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M12.502 25.015a.018.018 0 0 1 0-.018l6.287-10.74a.018.018 0 0 1 .016-.01h12.46c.006 0 .012.004.015.01l6.218 10.74a.018.018 0 0 1 0 .018L31.28 35.744a.018.018 0 0 1-.016.009h-12.46a.018.018 0 0 1-.015-.01l-6.287-10.728ZM30.792 25a5.79 5.79 0 1 1-11.58 0 5.79 5.79 0 0 1 11.58 0Z"
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
