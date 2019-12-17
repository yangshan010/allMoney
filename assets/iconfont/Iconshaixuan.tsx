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
export const Iconshaixuan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M863.276459 331.773266 635.634832 559.414893l0 372.503922-41.389666 0 0-391.94674 227.641627-228.89313c0 0 103.101169-81.46336-41.389666-144.862295L242.436588 166.216649c0 0-117.659747 40.268122-62.083987 124.167974l248.335948 248.335948 0 248.335948-41.389666 0L387.298883 559.414893l-248.335948-248.335948c0 0-64.443731-104.594173 82.778308-186.251961l579.450205 0C801.192472 124.826983 971.034694 197.383486 863.276459 331.773266z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconshaixuan.defaultProps = {
  size: 18,
};

export default Iconshaixuan;
