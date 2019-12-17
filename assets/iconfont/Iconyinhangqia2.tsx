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
export const Iconyinhangqia2: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M299.129064 174.029557m23.203941 0l396.989162 0q23.203941 0 23.203941 23.203941l0 653.241379q0 23.203941-23.203941 23.203941l-396.989162 0q-23.203941 0-23.203941-23.203941l0-653.241379q0-23.203941 23.203941-23.203941Z"
        fill={getIconColor(color, 0, '#FF4C40')}
      />
      <Path
        d="M348.563547 174.029557h82.22266v699.649261H348.563547z"
        fill={getIconColor(color, 1, '#4A4847')}
      />
      <Path
        d="M673.418719 411.617734h27.743843v412.626601h-27.743843zM580.602956 411.617734h27.743842v412.626601h-27.743842zM627.010837 411.617734h27.743843v287.02266h-27.743843z"
        fill={getIconColor(color, 2, '#D4D6D8')}
      />
      <Path
        d="M587.665025 217.410837m12.610837 0l88.275862 0q12.610837 0 12.610838 12.610838l0 133.674877q0 12.610837-12.610838 12.610837l-88.275862 0q-12.610837 0-12.610837-12.610837l0-133.674877q0-12.610837 12.610837-12.610838Z"
        fill={getIconColor(color, 3, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconyinhangqia2.defaultProps = {
  size: 18,
};

export default Iconyinhangqia2;
