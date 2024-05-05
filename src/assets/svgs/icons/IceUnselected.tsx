import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="none" {...props}>
    <G fill="#fff" clipPath="url(#a)">
      <Path d="m24.628 17.15-6.21-3.075.188 6.873 5.863 2.904.159-6.702ZM31.521 21.032l-.079-6.928-6.038 3.287.074 6.542 6.043-2.901ZM31.518 28.443 37.5 25.02l-5.985-3.148-5.983 3.143 5.986 3.427ZM24.468 25.021l-5.982 3.422-5.986-3.427 5.983-3.143 5.985 3.148ZM31.611 35.862l-6.209-3.075.159-6.701 5.863 2.903.187 6.873ZM18.554 28.996l.08 6.929 6.038-3.288-.075-6.542-6.043 2.901Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M12.5 12.5h25v25h-25z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
