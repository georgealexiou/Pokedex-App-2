import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgComponent = (props: JSX.IntrinsicClassAttributes<Svg>) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M30.515 37.413c-2.255.116-4.837.116-5.714 0-6.843-.9-12.301-5.904-12.301-12.667S18.096 12.5 25 12.5s12.5 5.483 12.5 12.246c0 3.146-1.21 6.014-3.2 8.183-.54.589.2 1.002.954 1.422.739.412 1.489.83 1.053 1.426-.48.657-3.085 1.498-5.792 1.636Zm-7.273-14.198c0 1.057-.874 1.914-1.953 1.914-1.079 0-1.953-.857-1.953-1.914 0-.708.393-1.327.978-1.658a1.722 1.722 0 0 0 1.72 1.658h1.208Zm6.054-1.658a1.722 1.722 0 0 1-1.721 1.658h-1.208c0 1.057.875 1.914 1.953 1.914 1.079 0 1.953-.857 1.953-1.914 0-.708-.393-1.327-.977-1.658Z"
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
