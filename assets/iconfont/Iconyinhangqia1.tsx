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
export const Iconyinhangqia1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1420 1024" width={size} height={size} {...rest}>
      <Path
        d="M1302.02566 0H118.049811A118.146415 118.146415 0 0 0 0 117.953208v787.900377a118.146415 118.146415 0 0 0 118.049811 118.049811h1183.975849A118.146415 118.146415 0 0 0 1420.075472 905.853585V117.953208A118.146415 118.146415 0 0 0 1302.02566 0zM1362.113208 905.950189a60.087547 60.087547 0 0 1-60.087548 60.087547H118.049811A60.184151 60.184151 0 0 1 57.962264 905.950189V309.132075h1304.150944zM1362.113208 251.169811H57.962264V117.953208a60.184151 60.184151 0 0 1 60.087547-60.087548h1183.975849a60.087547 60.087547 0 0 1 60.087548 60.087548z"
        fill={getIconColor(color, 0, '#78C5FF')}
      />
      <Path
        d="M204.510189 470.073962H719.698113a28.981132 28.981132 0 0 0 0-57.962264H204.510189a28.981132 28.981132 0 0 0 0 57.962264z"
        fill={getIconColor(color, 1, '#0088FF')}
      />
    </Svg>
  );
};

Iconyinhangqia1.defaultProps = {
  size: 18,
};

export default Iconyinhangqia1;
