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
export const Iconbi1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M200 881.6c-4.8 0-9.6-1.6-12.8-6.4-4.8-4.8-6.4-12.8-4.8-19.2l48-134.4c1.6-6.4 8-11.2 14.4-12.8 6.4-1.6 12.8 0 17.6 4.8l86.4 86.4c4.8 4.8 6.4 11.2 4.8 17.6-1.6 6.4-6.4 11.2-12.8 14.4l-134.4 48c-1.6 1.6-4.8 1.6-6.4 1.6z m52.8-129.6l-32 89.6 89.6-32-57.6-57.6z"
        fill={getIconColor(color, 0, '#4C4C4C')}
      />
      <Path
        d="M396.8 483.2c-4.8 0-8-1.6-11.2-4.8-6.4-6.4-6.4-16 0-22.4L585.6 256c24-24 64-24 89.6 0 6.4 6.4 6.4 16 0 22.4s-16 6.4-22.4 0c-12.8-12.8-32-12.8-44.8 0L408 478.4c-3.2 3.2-6.4 4.8-11.2 4.8z"
        fill={getIconColor(color, 1, '#FFD2B0')}
      />
      <Path
        d="M342.4 830.4c-4.8 0-8-1.6-11.2-4.8-6.4-6.4-6.4-16 0-22.4L832 304c8-8 8-20.8 0-28.8l-44.8-44.8c-8-8-20.8-8-28.8 0l-496 499.2c-6.4 6.4-16 6.4-22.4 0-6.4-6.4-6.4-16 0-22.4L736 208c19.2-19.2 54.4-19.2 75.2 0l44.8 44.8c20.8 20.8 20.8 54.4 0 73.6L353.6 825.6c-3.2 3.2-6.4 4.8-11.2 4.8z"
        fill={getIconColor(color, 2, '#4C4C4C')}
      />
      <Path
        d="M828.8 251.2c-4.8 0-8-1.6-11.2-4.8-6.4-6.4-6.4-16 0-22.4l41.6-41.6c6.4-6.4 16-6.4 22.4 0s6.4 16 0 22.4l-41.6 41.6c-3.2 3.2-8 4.8-11.2 4.8z"
        fill={getIconColor(color, 3, '#4C4C4C')}
      />
      <Path
        d="M873.278181 195.034293a64 27.2 41.578 1 0 36.101963-40.694081 64 27.2 41.578 1 0-36.101963 40.694081Z"
        fill={getIconColor(color, 4, '#FFD2B0')}
      />
      <Path
        d="M912 923.2H60.8c-9.6 0-16-6.4-16-16s6.4-16 16-16H912c9.6 0 16 6.4 16 16s-8 16-16 16z"
        fill={getIconColor(color, 5, '#4C4C4C')}
      />
    </Svg>
  );
};

Iconbi1.defaultProps = {
  size: 18,
};

export default Iconbi1;
