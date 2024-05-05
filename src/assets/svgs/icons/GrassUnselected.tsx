import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M17.15 34.309c-.09-.084-.178-.17-.265-.257-4.597-4.597-4.597-12.05 0-16.647C21.482 12.807 36.13 12.5 36.13 12.5s2 16.955-2.597 21.552c-4.083 4.083-10.419 4.54-15.006 1.37l3.696-4.535 5.908-1.276-4.823-.482 3.066-3.12 3.489-.765-2.76-.817 2.76-4.977-3.925 4.402-1.515-2.139.533 3.531-2.733 3.081-1.267-3.898v5.184L17.15 34.31Z"
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
