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
export const IconyinhangGongshang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M743.09 528.167V709.55H541.934v-58.639h136.918v-66.937H541.93V402.77h136.922v-61.46H541.93v-58.67h201.16v181.203H606.172v61.437H743.09v2.886z m-461.213 0v-2.886H418.8v-61.437H281.877V282.641H483.01v58.67H346.092v61.46H483.01v181.203H346.092v66.937H483.01v58.64H281.877V528.166zM511.998 90C737.907 90 921 273.095 921 499.002S737.907 908 511.998 908C286.094 908 103 724.909 103 499.002 103 273.095 286.094 90 511.998 90z m0 736.886v-0.012c181.083 0 327.874-146.74 327.874-327.864 0-181.125-146.791-327.927-327.874-327.927-181.079 0-327.874 146.848-327.874 327.927 0 181.082 146.787 327.876 327.874 327.876z"
        fill={getIconColor(color, 0, '#E60012')}
      />
    </Svg>
  );
};

IconyinhangGongshang.defaultProps = {
  size: 18,
};

export default IconyinhangGongshang;
