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
export const Icon38: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 1024c-217.6 0-448-83.2-448-326.4 0-147.2 83.2-256 147.2-345.6 38.4-57.6 76.8-102.4 76.8-140.8 0-64-25.6-96-44.8-115.2C230.4 83.2 217.6 70.4 217.6 51.2c0-19.2 12.8-32 25.6-32C256 12.8 377.6 0 512 0s256 12.8 262.4 19.2c12.8 0 25.6 12.8 25.6 32 0 19.2-12.8 32-25.6 51.2-19.2 25.6-44.8 57.6-44.8 115.2 0 38.4 38.4 83.2 76.8 140.8 64 89.6 147.2 198.4 147.2 345.6C960 940.8 729.6 1024 512 1024zM307.2 76.8c19.2 25.6 44.8 70.4 44.8 140.8 0 57.6-38.4 115.2-89.6 179.2C198.4 480 128 576 128 697.6c0 192 198.4 262.4 384 262.4s384-70.4 384-262.4c0-121.6-70.4-224-134.4-307.2-44.8-64-89.6-121.6-89.6-179.2 0-70.4 25.6-115.2 44.8-140.8C665.6 70.4 588.8 64 512 64S358.4 70.4 307.2 76.8z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512 819.2c-89.6 0-179.2-32-243.2-102.4C256 704 256 684.8 268.8 672s32-12.8 44.8 0c108.8 108.8 288 108.8 403.2 0 12.8-12.8 32-12.8 44.8 0s12.8 32 0 44.8C691.2 780.8 601.6 819.2 512 819.2z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M512 294.4c-64 0-134.4-6.4-204.8-12.8-19.2 0-32-19.2-25.6-38.4 0-19.2 19.2-32 38.4-25.6 128 12.8 262.4 12.8 390.4 0 19.2 0 32 12.8 38.4 25.6 0 19.2-12.8 32-25.6 38.4C646.4 288 576 294.4 512 294.4z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M358.4 486.4c-6.4 0-12.8 0-19.2-6.4C326.4 473.6 320 454.4 332.8 435.2 384 358.4 396.8 256 396.8 256c0-19.2 19.2-32 32-32 19.2 0 32 19.2 32 32C460.8 268.8 448 377.6 384 473.6 377.6 480 371.2 486.4 358.4 486.4z"
        fill={getIconColor(color, 3, '#333333')}
      />
      <Path
        d="M780.8 761.6c-12.8 0-25.6-6.4-32-19.2-12.8-25.6-32-51.2-57.6-64-12.8-6.4-25.6-25.6-12.8-44.8 6.4-12.8 25.6-25.6 44.8-12.8 44.8 19.2 76.8 57.6 89.6 102.4 6.4 19.2 0 32-19.2 38.4C787.2 755.2 787.2 761.6 780.8 761.6z"
        fill={getIconColor(color, 4, '#333333')}
      />
    </Svg>
  );
};

Icon38.defaultProps = {
  size: 18,
};

export default Icon38;
