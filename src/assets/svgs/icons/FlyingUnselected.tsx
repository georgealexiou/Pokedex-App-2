import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgComponent = (props: JSX.IntrinsicClassAttributes<Svg>) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M21.226 35.833c3.663 0 6.798-2.035 8.092-4.92.016-.036-5.197 1.354-5.03.863.074-.22 3.27-1.387 5.597-2.748 1.338-.783 1.954-2.44 1.954-2.44s-2.254 1.095-3.393 1.373c-2.297.56-4.319.499-4.319.44 0-.125 3.357-.763 8.023-3.606 2.194-1.338 2.79-3.64 2.79-3.64s-2.412 1.436-3.871 1.91c-3.459 1.126-6.615 1.465-6.615 1.313 0-.326 2.778-1.09 5.723-2.517 1.53-.742 2.857-1.712 4.394-2.79 2.514-1.763 2.929-4.904 2.929-4.904s-2.48 1.6-3.69 2.13c-4.995 2.192-9.404 3.342-12.584 3.591-4.8.376-8.726 3.725-8.726 8.073 0 4.348 3.907 7.872 8.726 7.872Z"
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
