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
export const IconyinhangHuaxia: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M893.544 277.016c9.386 17.202-10.95 29.717-14.079 31.28-21.897-12.512-75.08 46.923-75.08 46.923-103.24-76.641-215.858-86.025-330.049 18.767-114.185 104.792-65.696 245.562-65.696 245.562 114.185 297.174 362.896 150.149 362.896 150.149 32.849-6.256 112.624-96.97 112.624-96.97 17.207-15.645 10.946 12.51 10.946 12.51 23.464-45.355 25.03-15.638 25.03-15.638-1.566 20.329-42.232 68.818-42.232 68.818 10.947 1.563 37.537-25.027 37.537-25.027-56.311 150.153-206.473 181.433-206.473 181.433-178.32 51.612-333.176-92.28-333.176-92.28-148.6-117.305-118.88-340.967-118.88-340.967-92.288 56.308-140.777-12.515-140.777-12.515-43.8-65.69 35.976-147.021 35.976-147.021 0 121.998 147.034 3.127 147.034 3.127 145.472-165.792 276.864-181.432 276.864-181.432 89.16-15.64 82.903 12.511 82.903 12.511 0 10.95 18.77 29.719 18.77 29.719 84.47-17.202 75.085 29.717 75.085 29.717-1.566 64.128 111.058 45.361 111.058 45.361l29.72 35.973zM562.057 417.563L786.943 416A13.995 13.995 0 0 1 801 430.05v163.9c0 7.807-6.245 14.05-14.057 14.05H562.057A13.994 13.994 0 0 1 548 593.95V431.613c0-7.807 6.247-14.05 14.057-14.05z"
        fill={getIconColor(color, 0, '#E60012')}
      />
    </Svg>
  );
};

IconyinhangHuaxia.defaultProps = {
  size: 18,
};

export default IconyinhangHuaxia;
