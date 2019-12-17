/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

// If you don't like lots of icon files in your project,
// try to set generate_mode to "all-in-one" in root file "iconfont.json".
// And then regenerate icons by using cli command.
export const IconyinhangPufa: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M511.602 921.999C285.391 921.999 102 738.612 102 512.402 102 286.191 285.391 102.8 511.602 102.8c226.21 0 409.597 183.391 409.597 409.602 0 226.21-183.387 409.597-409.597 409.597z m102.527-475.137l1.809-1.73c38.91-30.273 85.082-27.668 100.46-25.078-6.328-17.297-34.386-75.219-116.734-75.219-37.125 0-71.512 16.422-95.047 44.09-15.379 19.027-25.34 41.52-27.144 65.723-6.328 69.148-45.243 102.007-49.785 105.472-28.059 23.328-66.075 32.84-102.27 25.934 7.242 18.152 38.02 77.805 120.367 75.219a126.537 126.537 0 0 0 85.977-36.309c27.164-25.953 32.582-65.723 33.496-77.824 6.328-58.793 36.195-89.051 48.871-100.293v0.015z m195.363-105.488c0-8.453-4.469-16.086-10.762-21.152l-63.636-46.543s-12.551-10.168-12.551 5.062v190.465c0 33.008-15.246 65.164-42.133 87.188-31.39 25.394-72.609 37.238-112.957 31.316 8.957 17.762 43.942 73.637 121.914 73.637 71.715 0 120.125-60.102 120.125-115.957V341.374zM342.789 453.827c31.391-26.363 72.609-38.687 112.957-32.527-8.957-18.469-43.941-76.48-121.914-76.48-71.715 0.015-120.121 62.445-120.121 120.457v215.375c0 8.808 3.59 16.718 10.758 21.988l63.636 48.351s12.551 10.559 12.551-5.269V544.405c0-35.187 15.246-67.695 42.133-90.558v-0.02z"
        fill={getIconColor(color, 0, '#074195')}
      />
    </Svg>
  );
};

IconyinhangPufa.defaultProps = {
  size: 18,
};

export default IconyinhangPufa;
