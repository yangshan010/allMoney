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
export const Iconbaobiao: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M569.469659 61.78636c-15.547699 0-28.152751 12.605052-28.15275 28.152751v359.704225c0 15.547699 12.605052 28.152751 28.15275 28.152751h359.717536c15.547699 0 28.152751-12.605052 28.152751-28.152751 0-213.868143-174.002144-387.856976-387.870287-387.856976z m28.152751 359.704225V119.274449c160.408018 13.554194 288.676276 141.808117 302.23047 302.216136h-302.23047z"
        fill={getIconColor(color, 0, '#3E3A39')}
      />
      <Path
        d="M804.122674 561.443422c0 188.272034-153.163006 341.44835-341.435039 341.44835S121.238261 749.714432 121.238261 561.443422s153.17734-341.435039 341.44835-341.435039h28.152751v-56.305502H462.686611c-219.325452 0-397.753852 178.429424-397.753851 397.740541 0 219.325452 178.429424 397.753852 397.753851 397.753852 219.311117 0 397.740541-178.429424 397.740541-397.753852v-28.152751H804.12165v28.152751z"
        fill={getIconColor(color, 1, '#3E3A39')}
      />
    </Svg>
  );
};

Iconbaobiao.defaultProps = {
  size: 18,
};

export default Iconbaobiao;
