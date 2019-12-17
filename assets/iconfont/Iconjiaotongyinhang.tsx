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
export const Iconjiaotongyinhang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M795.6 742c-54.4 1.7-104.6 3.4-159 5.2-34.4 145.7-319.2 106.3-287.5-78.5 16-109.5 164.8-157.3 257-74.6 20.3 22.7 30.2 43.9 36.8 90.3 45.6-1.8 107-3.6 152.6-5.3C798 443.6 529 324 327.3 438.4 134 547.9 156.3 881.7 358.9 967v5.3c-110.5-2.2-231.6-87.3-258.1-188.5l1.5-543.1C190 181.4 286.9 110.3 374.7 51c3.4 1.8 6.9 3.5 10.5 5.3-6 81.8-2.2 216.8 2.7 315.4 54.9-53.1 92-108.5 186.8-126.9 61.1-11.9 119.6-4.7 156.5 7.8 277.2 94.5 294.5 450.7 59.3 573.3-5.3 0-16.8 10.4-25.4 12 0-1.8 5.4-9.3 9.7-17.2 6.9-26.4 13.9-52.5 20.8-78.7z m0 0"
        fill={getIconColor(color, 0, '#0071BC')}
      />
    </Svg>
  );
};

Iconjiaotongyinhang.defaultProps = {
  size: 18,
};

export default Iconjiaotongyinhang;
