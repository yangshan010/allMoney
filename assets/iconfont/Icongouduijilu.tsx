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
export const Icongouduijilu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M112.544731 819.373217c-10.231339 0-15.347009 0-25.578348-5.11567-15.347009-10.231339-25.578348-25.578348-25.578348-46.041026v-250.66781c0-15.347009 5.11567-25.578348 15.347009-35.809687L516.682628 41.79144c46.041026-51.156696 133.007409-56.272365 189.279775-10.23134l143.238748 143.238749c51.156696 56.272365 46.041026 143.238748-10.231339 194.395444l-434.831915 434.831915c-15.347009 10.231339-25.578348 15.347009-40.925356 15.347009H112.544731z m51.156696-102.313392h179.048435L767.350438 292.459249c15.347009-15.347009 15.347009-35.809687 5.115669-46.041026l-138.123078-138.123079c-10.231339-10.231339-30.694018-10.231339-46.041027 5.11567l-424.600575 424.600575V717.059825zM51.156696 921.686608h920.820525c30.694018 0 51.156696 20.462678 51.156696 51.156696s-20.462678 51.156696-51.156696 51.156696H51.156696c-30.694018 0-51.156696-20.462678-51.156696-51.156696s20.462678-51.156696 51.156696-51.156696z m613.88035-204.626783h306.940175c30.694018 0 51.156696 20.462678 51.156696 51.156696s-20.462678 51.156696-51.156696 51.156696h-306.940175c-30.694018 0-51.156696-20.462678-51.156696-51.156696s20.462678-51.156696 51.156696-51.156696z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icongouduijilu.defaultProps = {
  size: 18,
};

export default Icongouduijilu;