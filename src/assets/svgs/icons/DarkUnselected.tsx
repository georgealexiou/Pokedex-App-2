import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M23.717 34.612a9.549 9.549 0 0 0 11.005-9.438 9.549 9.549 0 0 0-10.595-9.492c2.616 1.982 4.345 5.415 4.345 9.318 0 4.104-1.912 7.688-4.755 9.612ZM25 37.5c6.904 0 12.5-5.596 12.5-12.5S31.904 12.5 25 12.5 12.5 18.096 12.5 25 18.096 37.5 25 37.5Z"
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
