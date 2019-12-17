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
export const IconyinhangShanghai: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M525.059 454.054c105.214 0 197.703 8.558 277.351 24.215 48.332 10.015 86.742 19.929 118.055 32.769L510.867 102.8 104 509.585c35.586-12.75 81.102-24.117 135.156-32.676 86.746-15.75 182.047-22.855 285.903-22.855z"
        fill={getIconColor(color, 0, '#FCCF00')}
      />
      <Path
        d="M510.867 921.999l406.774-408.137c-56.895-4.277-135.168-4.277-233.196 2.817-103.937 7.098-175.035 17.019-216.363 29.851-36.945 11.375-54.055 27.043-51.148 45.508 0 5.742 2.816 12.84 8.55 18.481l10.024 8.562c14.203 9.922 22.754 14.203 25.57 17.02 12.75 11.469 17.031 25.672 14.203 42.687-5.64 22.754-51.148 46.973-135.066 71.18l170.652 172.031z"
        fill={getIconColor(color, 1, '#293C8F')}
      />
    </Svg>
  );
};

IconyinhangShanghai.defaultProps = {
  size: 18,
};

export default IconyinhangShanghai;
