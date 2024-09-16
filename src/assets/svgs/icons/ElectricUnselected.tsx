import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgComponent = (props: JSX.IntrinsicClassAttributes<Svg>) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M19.925 12.529a.022.022 0 0 1 .02-.029h8.811c.01 0 .018.006.02.015l4.047 13.074a.022.022 0 0 1-.02.028h-5.866a.01.01 0 0 0-.01.014l3.364 11.841c.006.023-.024.038-.038.02L17.18 20.106a.022.022 0 0 1 .018-.035h5.323a.01.01 0 0 0 .01-.014l-2.606-7.53Z"
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
