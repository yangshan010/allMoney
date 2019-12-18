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
export const Iconjiantou: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M824.001 335.037c-9.083-9.083-24.049-9.083-33.132 0l-278.991 279.094-279.094-279.09399999c-9.083-9.083-24.049-9.083-33.132-1e-8-9.083 9.083-9.083 24.049 0 33.13200001l292.92499999 292.92499999c0.723 1.032 1.548 2.064 2.47700002 2.993 4.645 4.645 10.734 6.915 16.82399999 6.812 6.09 0.103 12.179-2.168 16.824-6.812 0.929-0.929 1.755-1.961 2.477-2.993l292.822-292.925c9.083-9.083 9.083-24.049 0-33.132z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconjiantou.defaultProps = {
  size: 18,
};

export default Iconjiantou;
