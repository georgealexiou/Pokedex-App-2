import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgComponent = (props: JSX.IntrinsicClassAttributes<Svg>) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M33.39 31.711c2.524-2.018 4.11-4.935 4.11-8.178C37.5 17.439 31.904 12.5 25 12.5s-12.5 4.94-12.5 11.033c0 3.126 1.473 5.949 3.84 7.956a5.75 5.75 0 0 0-.222 1.598c0 2.437 1.473 4.413 3.29 4.413 1.18 0 2.216-.834 2.796-2.087.58 1.253 1.616 2.087 2.796 2.087 1.076 0 2.031-.693 2.632-1.765.6 1.072 1.555 1.765 2.631 1.765 1.817 0 3.29-1.976 3.29-4.413 0-.48-.058-.943-.163-1.376Zm-1.153-7.96c0 3.094-3.314 5.602-7.402 5.602-4.087 0-7.4-2.508-7.4-5.602 0-3.093 3.313-5.6 7.4-5.6 4.088 0 7.402 2.507 7.402 5.6Z"
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
