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
export const Iconxinbaniconshangchuan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M825.6 744.533333c-17.066667 0-32 14.933333-32 32 0 57.6-46.933333 104.533333-104.533333 104.533334H300.8c-51.2 0-93.866667-42.666667-93.866667-93.866667V292.266667c0-51.2 42.666667-93.866667 93.866667-93.866667h398.933333c51.2 0 93.866667 42.666667 93.866667 93.866667 0 17.066667 14.933333 32 32 32s32-14.933333 32-32c0-87.466667-70.4-157.866667-157.866667-157.866667H300.8c-87.466667 0-157.866667 70.4-157.866667 157.866667v494.933333c0 87.466667 70.4 157.866667 157.866667 157.866667h388.266667c93.866667 0 168.533333-76.8 168.533333-168.533334 0-19.2-14.933333-32-32-32z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M326.4 456.533333H661.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32H326.4c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32zM326.4 669.866667h345.6c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32H326.4c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32zM825.6 358.4c-17.066667 0-32 14.933333-32 32v273.066667c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V390.4c0-19.2-14.933333-32-32-32z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Iconxinbaniconshangchuan.defaultProps = {
  size: 18,
};

export default Iconxinbaniconshangchuan;
