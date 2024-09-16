import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import React from 'react';

const Pokeball = (props: JSX.IntrinsicClassAttributes<Svg>) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={371} height={371} fill="none" {...props}>
      <Path
        fill="url(#a)"
        d="M185.5 0C280.961 0 359.705 71.039 371 162.761h-90.537c-10.308-42.567-48.914-74.2-94.963-74.2-46.049 0-84.655 31.633-94.963 74.2H0C11.295 71.039 90.04 0 185.5 0Z"
      />
      <Path
        fill="url(#b)"
        d="M280.463 208.239H371C359.705 299.961 280.961 371 185.5 371 90.04 371 11.295 299.961 0 208.239h90.537c10.308 42.567 48.914 74.2 94.963 74.2 46.049 0 84.655-31.633 94.963-74.2Z"
      />
      <Path
        fill="url(#c)"
        d="M185.5 246.535c33.962 0 61.493-27.326 61.493-61.035 0-33.709-27.531-61.035-61.493-61.035s-61.493 27.326-61.493 61.035c0 33.709 27.531 61.035 61.493 61.035Z"
      />
      <Defs>
        <LinearGradient id="a" x1={185.5} x2={185.5} y1={185.5} y2={351.733} gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F5F5F5" />
          <Stop offset={1} stopColor="#fff" />
        </LinearGradient>
        <LinearGradient id="b" x1={185.5} x2={185.5} y1={185.5} y2={351.733} gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F5F5F5" />
          <Stop offset={1} stopColor="#fff" />
        </LinearGradient>
        <LinearGradient id="c" x1={185.5} x2={185.5} y1={185.5} y2={351.733} gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F5F5F5" />
          <Stop offset={1} stopColor="#fff" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default Pokeball;
