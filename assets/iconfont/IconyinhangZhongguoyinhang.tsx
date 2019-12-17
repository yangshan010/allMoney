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
export const IconyinhangZhongguoyinhang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M925.589 494.311c-5.329-147.147-96.193-247.421-96.193-247.421C688.876 82 508.66 97.38 508.66 97.38c-192.456-6.156-310.802 140.33-310.802 140.33-80.962 97.079-90.109 186.541-90.109 186.541-35.904 150.25 38.927 279.74 38.927 279.74 55.742 101.73 114.541 148.802 209.983 193.416 95.465 44.777 240.594 38.62 330.702-6.849 90.095-45.524 145.076-95.614 195.475-190.38 50.373-94.855 42.754-205.867 42.754-205.867m-455.878 341.5s-151.21-8.464-234.443-154.95c0 0-71.814-103.306-42.034-232.02 29.807-128.713 99.296-180.317 113.065-193.412 13.744-13.081 102.714-66.558 163.412-65.573v153.406h-64.142s-87.064 5.393-90.122 102.507V587.6s2.298 87.131 92.405 97.123h61.859v151.089m-51.955-241.253s-15.25 3.854-17.535-13.852V445.033s2.285-14.634 13.73-14.634h188.62s16.069-3.139 17.576 14.634v131.789s3.84 20.817-11.45 17.736h-190.94m367.352 99.401c-61.111 94.02-177.194 137.223-231.393 141.852V684.722h71.773s76.41-15.394 80.96-95.587v-161.08s-12.266-80.89-96.957-84.793h-55.776v-153.37s95.451 7.674 172.571 79.395c77.13 71.667 96.967 143.343 105.394 181.906 8.387 38.546 14.503 148.728-46.572 242.766"
        fill={getIconColor(color, 0, '#9E1F31')}
      />
    </Svg>
  );
};

IconyinhangZhongguoyinhang.defaultProps = {
  size: 18,
};

export default IconyinhangZhongguoyinhang;
