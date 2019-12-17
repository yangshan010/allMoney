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
export const IconyinhangPingan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
      <Path
        d="M586.952 603.438H436.047c-7.732 0-13.965 6.03-13.965 13.742v144.342c0 7.406 6.233 13.698 13.965 13.698h150.905c7.773 0 14.149-6.292 14.149-13.698V617.18c0-7.713-6.376-13.742-14.149-13.742z"
        fill={getIconColor(color, 1, '#000000')}
      />
      <Path
        d="M580.926 215.453c-5.556-9.583-14.626-15.94-25.4-15.94h-87.783c-11.044 0-19.991 6.357-25.606 15.94l-276.202 532.33c-9.214 17.173-1.44 27.437 14.952 27.437h87.514c12.731 0 17.546-3.251 23.922-15.075L511.49 332.072l219.25 428.073c6.5 11.824 11.251 15.075 23.92 15.075h87.576c16.31 0 24.25-10.264 15.036-27.437l-276.346-532.33z"
        fill={getIconColor(color, 2, '#FF3204')}
      />
    </Svg>
  );
};

IconyinhangPingan.defaultProps = {
  size: 18,
};

export default IconyinhangPingan;
