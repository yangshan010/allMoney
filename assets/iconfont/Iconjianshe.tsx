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
export const Iconjianshe: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M962.38 544.18H777.793s-13.26 0-18.79 2.252c-3.316 1.126-14.375 10.15-14.375 10.15l-227.686 232a11.43 11.43 0 0 1-14.375 0L260.518 541.914c-3.315-3.38-3.315-10.138 0-13.53L503.68 281.728a8.192 8.192 0 0 1 13.274 0L730.278 499.11s8.832 10.138 18.79 13.517c9.946 2.266 24.32-10.137 24.32-10.137l98.382-102.503-287.412-290.573c-60.8-61.952-127.116-56.32-153.638-52.94C199.718 95.898 32.806 297.51 32.806 537.42c0 270.31 219.968 486.58 477.504 486.58 253.108 0 465.332-207.245 477.492-468.557 0-3.379 1.1-5.619-5.53-10.137-6.63-4.506-19.891-1.127-19.891-1.127zM660.62 101.53l252.02 254.553 69.632-68.71s6.63-11.264 8.832-21.402c1.1-5.632-9.946-14.643-9.946-14.643L827.533 93.645C682.726-53.901 521.357 17.062 521.357 17.062s67.43 1.114 139.264 84.468z"
        fill={getIconColor(color, 0, '#053D8F')}
      />
    </Svg>
  );
};

Iconjianshe.defaultProps = {
  size: 18,
};

export default Iconjianshe;
