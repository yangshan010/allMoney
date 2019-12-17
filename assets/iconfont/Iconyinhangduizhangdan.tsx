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
export const Iconyinhangduizhangdan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M260.266667 134.4h-85.333334v-42.666667c0-23.466667 19.2-42.666667 42.666667-42.666666s42.666667 19.2 42.666667 42.666666v42.666667zM814.933333 902.4h-512v85.333333h512c23.466667 0 42.666667-19.2 42.666667-42.666666v-42.666667h-42.666667z"
        fill={getIconColor(color, 0, '#CF5A1A')}
      />
      <Path
        d="M260.266667 902.4h85.333333v42.666667c0 23.466667-19.2 42.666667-42.666667 42.666666s-42.666667-19.2-42.666666-42.666666v-42.666667zM260.266667 91.733333v810.666667h554.666666v-810.666667c0-23.466667-19.2-42.666667-42.666666-42.666666h-554.666667c23.466667 0 42.666667 19.2 42.666667 42.666666z"
        fill={getIconColor(color, 1, '#FF7A45')}
      />
      <Path
        d="M676.266667 251.733333h-256c-12.8 0-21.333333-8.533333-21.333334-21.333333s8.533333-21.333333 21.333334-21.333333h256c12.8 0 21.333333 8.533333 21.333333 21.333333s-10.666667 21.333333-21.333333 21.333333zM686.933333 426.666667h-256c-12.8 0-21.333333-8.533333-21.333333-21.333334s8.533333-21.333333 21.333333-21.333333h256c12.8 0 21.333333 8.533333 21.333334 21.333333s-10.666667 21.333333-21.333334 21.333334zM686.933333 601.6h-256c-12.8 0-21.333333-8.533333-21.333333-21.333333s8.533333-21.333333 21.333333-21.333334h256c12.8 0 21.333333 8.533333 21.333334 21.333334 0 10.666667-10.666667 21.333333-21.333334 21.333333zM686.933333 774.4h-256c-12.8 0-21.333333-8.533333-21.333333-21.333333s8.533333-21.333333 21.333333-21.333334h256c12.8 0 21.333333 8.533333 21.333334 21.333334s-10.666667 21.333333-21.333334 21.333333z"
        fill={getIconColor(color, 2, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconyinhangduizhangdan.defaultProps = {
  size: 18,
};

export default Iconyinhangduizhangdan;
