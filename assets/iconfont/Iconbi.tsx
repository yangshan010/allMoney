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
export const Iconbi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M79.36 916.48h343.04v51.2H79.36z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M550.4 916.48h376.32v51.2H550.4z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M629.76 158.72l215.04 215.04L373.76 844.8l-215.04-215.04L629.76 158.72z m0 0"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M716.8 74.24l215.04 215.04-64 64-215.04-215.04L716.8 74.24z m0 0"
        fill={getIconColor(color, 3, '#333333')}
      />
      <Path
        d="M138.24 652.8l215.04 215.04L51.2 952.32l87.04-299.52z m0 0"
        fill={getIconColor(color, 4, '#333333')}
      />
      <Path
        d="M798.72 71.68L931.84 204.8c23.04 23.04 20.48 58.88-2.56 81.92-23.04 23.04-61.44 25.6-81.92 2.56l-133.12-133.12c-23.04-20.48-23.04-58.88 2.56-81.92 23.04-23.04 58.88-25.6 81.92-2.56z m0 0"
        fill={getIconColor(color, 5, '#333333')}
      />
    </Svg>
  );
};

Iconbi.defaultProps = {
  size: 18,
};

export default Iconbi;
