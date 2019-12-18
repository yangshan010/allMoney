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
export const Icongou: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M365.5 664.5c-3.8 0-7.7-1.5-10.6-4.4L217.4 522.6c-5.9-5.9-5.9-15.4 0-21.2 5.9-5.9 15.4-5.9 21.2 0l126.9 126.9 292.4-292.4c5.9-5.9 15.4-5.9 21.2 0 5.9 5.9 5.9 15.4 0 21.2l-303 303c-2.9 2.9-6.8 4.4-10.6 4.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icongou.defaultProps = {
  size: 18,
};

export default Icongou;
