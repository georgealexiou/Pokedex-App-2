import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

const BugUnselected = (props: JSX.IntrinsicClassAttributes<Svg>) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M29.204 12.524a.057.057 0 0 1 .08-.014l1.775 1.243a.058.058 0 0 1 .014.08l-2.47 3.529c1.2.384 2.019.797 2.019.797s-2 3.441-5.393 3.441c-3.392 0-5.803-3.207-5.803-3.207s.855-.545 2.122-1.013l-2.71-3.23a.057.057 0 0 1 .007-.08l1.66-1.393a.057.057 0 0 1 .08.007l3.432 4.089c.294-.033.593-.052.895-.052.434 0 .868.033 1.291.089l3.001-4.285Zm.671 9.239c.905-.647 2.276-2.334 2.276-2.334s3.499 2.773 3.499 8.652c0 5.88-6.05 9.419-6.05 9.419s-2.89-2.919-3.6-6.62c-.71-3.7 1.05-7.808 1.05-7.808s1.92-.662 2.825-1.31Zm-9.75 0c-.905-.647-2.275-2.334-2.275-2.334s-3.5 2.773-3.5 8.652c0 5.88 6.05 9.419 6.05 9.419s2.89-2.919 3.6-6.62c.71-3.7-1.05-7.808-1.05-7.808s-1.92-.662-2.825-1.31Z"
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
export default BugUnselected;
