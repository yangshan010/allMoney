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
export const Icongupiao: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M891.014 919.275l-751.154 0.017c-17.975-0.017-34.445-16.537-34.486-34.487v-212.937c0-34.589 17.37-52.689 35.606-35.348l101.585 79.955c13.648 11.687 34.159 27.584 45.575 13.724l116.429-141.367c11.418-13.859 32.013-33.427 45.77-21.858l100.187 87.228c13.751 11.553 42.225 31.726 53.415 17.666l249.285-300.427c33.671-38.437 71.223-29.419 71.223 17.673 0 35.093 0 495.69 0 495.69-0.001 17.95-15.469 34.487-33.436 34.47zM598.671 550.304c-9.228 11.821-22.852 19.364-37.754 20.931-14.929 1.769-29.807-3.013-41.266-12.646l-113.010-95.177-113.506 149.821c-9.069 11.939-22.574 19.718-37.46 21.489-2.163 0.251-4.337 0.386-6.509 0.386-12.654 0-25.015-4.38-34.917-12.496l-99.058-81.049c-23.584-19.282-27.061-54.054-7.772-77.639 19.274-23.617 54.038-27.069 77.614-7.772l54.761 44.794 113.987-150.478c9.142-12.075 22.817-19.838 37.839-21.521 15.13-1.65 30.093 2.913 41.662 12.612l113.625 95.709 146.807-184.141-40.912-33.983c-29.030-24.106-22.582-50.224 14.331-58.028l212.767-45.004c36.906-7.805 48.322 10.305 25.37 40.263l-306.597 393.925z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icongupiao.defaultProps = {
  size: 18,
};

export default Icongupiao;
