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
export const Icongupiao1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M253 845.5c-11 0-20-9-20-20v-640c0-11 9-20 20-20s20 9 20 20v640c0 11-9 20-20 20z"
        fill={getIconColor(color, 0, '#4C6070')}
      />
      <Path
        d="M307 378.5H199c-3.3 0-6 2.7-6 6v240c0 4.4 3.6 8 8 8h104c4.4 0 8-3.6 8-8v-240c0-3.3-2.7-6-6-6z"
        fill={getIconColor(color, 1, '#FFBD5C')}
      />
      <Path
        d="M333 338.5H173c-11 0-20 9-20 20V652.5c0 11 9 20 20 20h160c11 0 20-9 20-20V358.5c0-11-9-20-20-20z m-20 286c0 4.4-3.6 8-8 8H201c-4.4 0-8-3.6-8-8v-240c0-3.3 2.7-6 6-6h108c3.3 0 6 2.7 6 6v240z"
        fill={getIconColor(color, 2, '#4C6070')}
      />
      <Path
        d="M518 905.5c-11 0-20-9-20-20v-640c0-11 9-20 20-20s20 9 20 20v640c0 11-9 20-20 20z"
        fill={getIconColor(color, 3, '#4C6070')}
      />
      <Path
        d="M572 438.5H464c-3.3 0-6 2.7-6 6v240c0 4.4 3.6 8 8 8h104c4.4 0 8-3.6 8-8v-240c0-3.3-2.7-6-6-6z"
        fill={getIconColor(color, 4, '#FFBD5C')}
      />
      <Path
        d="M598 398.5H438c-11 0-20 9-20 20V712.5c0 11 9 20 20 20h160c11 0 20-9 20-20V418.5c0-11-9-20-20-20z m-20 286c0 4.4-3.6 8-8 8H466c-4.4 0-8-3.6-8-8v-240c0-3.3 2.7-6 6-6h108c3.3 0 6 2.7 6 6v240z"
        fill={getIconColor(color, 5, '#4C6070')}
      />
      <Path
        d="M783 805.5c-11 0-20-9-20-20v-640c0-11 9-20 20-20s20 9 20 20v640c0 11-9 20-20 20z"
        fill={getIconColor(color, 6, '#4C6070')}
      />
      <Path
        d="M837 338.5H729c-3.3 0-6 2.7-6 6v240c0 4.4 3.6 8 8 8h104c4.4 0 8-3.6 8-8v-240c0-3.3-2.7-6-6-6z"
        fill={getIconColor(color, 7, '#FFBD5C')}
      />
      <Path
        d="M863 298.5H703c-11 0-20 9-20 20V612.5c0 11 9 20 20 20h160c11 0 20-9 20-20V318.5c0-11-9-20-20-20z m-20 286c0 4.4-3.6 8-8 8H731c-4.4 0-8-3.6-8-8v-240c0-3.3 2.7-6 6-6h108c3.3 0 6 2.7 6 6v240z"
        fill={getIconColor(color, 8, '#4C6070')}
      />
    </Svg>
  );
};

Icongupiao1.defaultProps = {
  size: 18,
};

export default Icongupiao1;
