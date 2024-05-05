import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M31.803 24.474a.01.01 0 0 1-.002-.007l1.592-9.281c0-.004.004-.008.008-.008h.504c.004 0 .008.003.009.007L37.5 26.538a.009.009 0 0 1-.003.01l-2.644 2.064a.009.009 0 0 1-.013-.002l-3.037-4.136ZM12.5 30.626c0 .004.002.007.006.009l5.45 1.782c.003 0 .006 0 .008-.002l12.182-8.41A.009.009 0 0 0 30.15 24l1.306-8.765a.009.009 0 0 0-.008-.01h-10.79a.009.009 0 0 0-.008.002l-8.148 9.83a.009.009 0 0 0-.002.006v5.564Zm7.727 2.245 5.954 1.95c.003.001.006 0 .008-.001l7.09-5.085a.009.009 0 0 0 .001-.012l-2.657-3.955a.009.009 0 0 0-.012-.002l-10.384 7.105Z"
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
