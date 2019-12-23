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
export const Iconzhangshangcaifuyemianshoujiban245: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M981.36853 490.697463l-24.707775 0c-38.064756-93.789235-114.669416-163.345845-231.34502-192.013199 0 23.572695-19.085172 42.657868-42.63147 42.657868L469.342132 341.342132c-23.572695 0-42.684265-19.111569-42.684265-42.657868-42.63147 0-85.104558 4.566715-113.877501 14.729635-21.091359-17.210971-51.976078-36.032172-86.661992-36.032172-64.013199 0-100.441328 28.667354-64.013199 42.63147 29.142504 11.245205 49.257166 25.050938 63.274077 38.249536-48.782017 35.530625-104.981646 85.051763-118.708187 153.763663C85.315735 618.697463 0 554.684265 0 618.697463c0 106.644669 21.328934 170.684265 106.671066 170.684265 42.657868 85.315735 170.684265 106.644669 170.684265 106.644669l0 85.342132c0 21.328934 20.457826 42.63147 41.813157 42.63147l63.986801 0c21.355331 0 42.684265-21.328934 42.684265-42.63147L425.839555 938.684265l235.515776 0 0 42.684265c0 21.328934 21.355331 42.63147 42.657868 42.63147l64.013199 0c21.328934 0 42.657868-21.328934 42.657868-42.63147 0-21.355331 0-21.355331 0-42.684265 0-85.315735 170.684265-106.671066 170.684265-319.986801 0-14.518457-1.135079-28.693751-2.8245-42.657868l2.8245 0c23.572695 0 42.63147-19.137967 42.63147-42.684265S1004.914828 490.697463 981.36853 490.697463zM213.315735 560.016498c-26.502784 0-47.990101-21.46092-47.990101-47.990101s21.487317-47.990101 47.990101-47.990101c26.555578 0 48.016498 21.46092 48.016498 47.990101S239.871314 560.016498 213.315735 560.016498zM576.013199 298.657868c82.491235 0 149.302537-66.837698 149.302537-149.328934S658.504434 0 576.013199 0s-149.355331 66.837698-149.355331 149.328934S493.521963 298.657868 576.013199 298.657868z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconzhangshangcaifuyemianshoujiban245.defaultProps = {
  size: 18,
};

export default Iconzhangshangcaifuyemianshoujiban245;