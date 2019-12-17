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
export const Iconbaoxiaochaxun: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M 965.6 685.1 l -288.7 284 c -3.7 3.7 -8.7 5.6 -13.9 5.6 h -78.3 c -10.8 0 -19.7 -8.7 -19.7 -19.3 v -77.1 c 0 -5 2.1 -10.1 5.7 -13.6 l 288.7 -284 c 21.4 -21.1 56 -21.1 77.4 0 l 28.7 28.2 c 21.5 21.1 21.5 55.2 0.1 76.2 Z m -67.4 -88 L 847.6 647 l 50.6 49.9 l 50.6 -49.9 l -50.6 -49.9 Z M 526 862.5 v 112.4 H 137.1 c -44.9 0 -81.3 -35.8 -81.3 -80 v -595 c 0 -0.9 0.3 -1.7 0.5 -2.6 c 0.2 -0.9 0.2 -1.6 0.5 -2.3 c 0.9 -3.3 2.3 -6.3 4.7 -8.7 L 296.6 54.9 c 2.4 -2.4 5.6 -3.8 8.9 -4.7 c 0.9 -0.2 1.6 -0.3 2.4 -0.5 c 0.9 -0.2 1.6 -0.5 2.4 -0.5 h 369.3 c 44.9 0 81.3 35.8 81.3 80 V 623 L 531.7 848.9 c -3.6 3.5 -5.7 8.5 -5.7 13.6 Z M 290.9 115.1 L 122.6 280.7 h 168.3 V 115.1 Z M 544.6 568 v -27.1 h -79.9 l 109.5 -195.2 h -53.1 l -95 178.4 l -95 -178.4 H 278 l 109.5 195.2 h -79.4 V 568 h 94.5 v 53.2 h -94.5 v 27.3 h 94.5 v 85.3 h 47.2 v -85.3 h 95 v -27.1 h -95 v -53.2 h 94.8 v -0.2 Z"
        fill={getIconColor(color, 0, '#696969')}
      />
    </Svg>
  );
};

Iconbaoxiaochaxun.defaultProps = {
  size: 18,
};

export default Iconbaoxiaochaxun;
