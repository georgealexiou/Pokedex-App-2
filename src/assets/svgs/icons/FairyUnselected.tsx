import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="m17.516 32.324 4.01-1.163 3.464 6.333a.012.012 0 0 0 .02 0l3.464-6.333 4.01 1.163a.012.012 0 0 0 .015-.015l-1.163-3.93 6.158-3.369a.012.012 0 0 0 0-.02l-6.21-3.396 1.215-4.102a.012.012 0 0 0-.015-.015l-4.104 1.19-3.37-6.16a.012.012 0 0 0-.02 0l-3.37 6.16-4.104-1.19a.012.012 0 0 0-.015.015l1.214 4.102-6.209 3.396a.012.012 0 0 0 0 .02l6.158 3.368-1.163 3.931a.012.012 0 0 0 .015.015Zm3.112-7.28 2.84 1.553 1.554 2.84a.012.012 0 0 0 .021 0l1.554-2.84 2.84-1.554a.012.012 0 0 0 0-.02l-2.84-1.554-1.554-2.841a.012.012 0 0 0-.02 0l-1.554 2.84-2.841 1.554a.012.012 0 0 0 0 .021Z"
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
