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
export const Iconjijin: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M931.417 46.592h-837.418c-45.611 0-82.568 36.964-82.568 82.564v773.93c0 45.611 36.968 82.568 82.568 82.568h60.952c10.895 0 21.046-4.916 27.911-13.278l200.428-248.489 91.493 75.51c14.627 12.091 36.116 10.597 49.103-3.276l268.057-314.048-7.503 66.229c0 19.78 16.036 35.817 35.817 35.817 19.78 0 35.817-16.036 35.817-35.817l17.841-157.491c0.479-2.222 0.737-4.526 0.78-6.882l0.034-0.298c0-0.062-0.010-0.122-0.011-0.186 0-0.062 0.011-0.122 0.011-0.186 0-19.78-16.036-35.817-35.817-35.817l-164.67 18.655c-19.78 0-35.817 16.036-35.817 35.817 0 19.78 16.036 35.817 35.817 35.817l67.331-7.628-247.24 292.437-93.277-77.003c-7.317-6.121-16.87-8.956-26.417-8.058-9.555 0.887-18.211 5.669-24.333 13.131l-211.884 262.806h-13.47c-22.8 0-41.289-18.466-41.289-41.288v-712.009c0-22.804 18.473-41.289 41.289-41.289h775.496c22.804 0 41.296 18.473 41.296 41.289v712.008c0 22.804-18.473 41.288-41.296 41.288h-372.081c-19.949 0-36.121 16.17-36.121 36.121s16.17 36.121 36.121 36.121h403.048c45.604 0 82.564-36.969 82.564-82.568v-773.93c0-45.605-36.968-82.564-82.564-82.564z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconjijin.defaultProps = {
  size: 18,
};

export default Iconjijin;
