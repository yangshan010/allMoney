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
export const IconyinhangZhongguofazhan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M509.88 434.29a1944.31 1944.31 0 0 1-120.47 208.12c-114 6.84-225.41 24-326.66 51.58 144.73-158.06 264.44-364.12 327.62-568.57h0.22C418.07 226.8 459 331.95 509.88 434.29z"
        fill={getIconColor(color, 0, '#BC0015')}
      />
      <Path
        d="M389.41 642.38a1947 1947 0 0 1 240.9 0.53c63.62 95.87 134.84 184.09 210.14 258-209.64-47.18-449.06-48.3-658.78-0.9l-0.2-0.34 3.47-3.47 3.47-3.53 3.47-3.53 3.45-3.56 3.47-3.59 3.45-3.59 3.45-3.61 3.45-3.61 3.45-3.67 3.42-3.64 3.42-3.67 3.42-3.7 3.39-3.73 3.39-3.73 3.39-3.75 3.36-3.75 3.39-3.81 3.36-3.81 3.36-3.84 3.36-3.84 3.36-3.89 3.33-3.87 3.33-3.92 3.31-3.89a1793.58 1793.58 0 0 0 126.22-168.29z"
        fill={getIconColor(color, 1, '#730000')}
      />
      <Path
        d="M630.32 642.92a1951.26 1951.26 0 0 1-120.44-208.6C560.84 332 601.57 227 628.13 125.44c65 205.21 184.59 412.78 331.09 569.69l-0.14 0.25c-101.89-27.51-214-45.08-328.79-52.47z"
        fill={getIconColor(color, 2, '#E4001F')}
      />
      <Path
        d="M630.32 642.92c114.78 7.42 226.93 25 328.79 52.47L840.46 900.88c-75.31-73.88-146.55-162.1-210.14-258z"
        fill={getIconColor(color, 3, '#BC0015')}
      />
      <Path
        d="M389.41 642.38c-63.2 95.08-133.83 182.94-207.93 257.27L62.75 694c101.25-27.62 212.64-44.74 326.66-51.6z"
        fill={getIconColor(color, 4, '#E4001F')}
      />
      <Path
        d="M628.13 125.42C601.6 226.94 560.87 332 509.88 434.26 459 331.95 418.07 226.8 390.59 125.42z"
        fill={getIconColor(color, 5, '#730000')}
      />
    </Svg>
  );
};

IconyinhangZhongguofazhan.defaultProps = {
  size: 18,
};

export default IconyinhangZhongguofazhan;
