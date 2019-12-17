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
export const Iconx: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1025 1024" width={size} height={size} {...rest}>
      <Path
        d="M550.814373 511.936056l465.001124-465.001124c10.7426-10.7426 10.7426-28.135382 0-38.877982s-28.135382-10.7426-38.877981 0L511.936392 473.058074 46.935268 8.568503C36.192667-2.174098 18.799886-2.174098 8.057286 8.568503s-10.7426 28.135382 0 38.877981L473.05841 511.936056 8.568838 976.93718c-10.7426 10.7426-10.7426 28.135382 0 38.877982 5.115524 5.115524 12.277257 8.184838 19.438991 8.184838s13.811915-2.557762 19.438991-8.184838l465.001124-465.001124 465.001124 465.001124c5.115524 5.115524 12.277257 8.184838 19.438991 8.184838s13.811915-2.557762 19.438991-8.184838c10.7426-10.7426 10.7426-28.135382 0-38.877982l-465.512677-465.001124z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconx.defaultProps = {
  size: 18,
};

export default Iconx;
