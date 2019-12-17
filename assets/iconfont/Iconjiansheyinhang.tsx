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
export const Iconjiansheyinhang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1325 1024" width={size} height={size} {...rest}>
      <Path
        d="M1043.576471 537.6s10.541176-1.505882 15.058823 1.505882c6.023529 3.011765 4.517647 4.517647 4.517647 7.529412C1055.623529 761.976471 874.917647 933.647059 659.576471 933.647059 441.223529 933.647059 256 755.952941 256 533.082353c0-197.270588 143.058824-362.917647 337.317647-396.047059 21.082353-3.011765 78.305882-7.529412 129.505882 43.670588l242.447059 239.435294-84.329412 84.329412s-12.047059 9.035294-19.57647 7.529412c-7.529412-1.505882-15.058824-10.541176-15.058824-10.541176l-180.705882-179.2c-3.011765-3.011765-7.529412-3.011765-10.541176 0L450.258824 525.552941c-3.011765 3.011765-3.011765 7.529412 0 10.541177L656.564706 737.882353c3.011765 3.011765 7.529412 3.011765 10.541176 0l194.258824-189.741177s9.035294-7.529412 12.047059-9.035294c4.517647-1.505882 15.058824-1.505882 15.058823-1.505882h155.105883z m-256-364.423529c-60.235294-67.764706-115.952941-69.270588-115.952942-69.270589s138.541176-58.729412 260.517647 63.247059l129.505883 129.505883s9.035294 7.529412 7.529412 12.047058c-3.011765 9.035294-7.529412 18.070588-7.529412 18.070589l-60.235294 57.223529-213.835294-210.823529z"
        fill={getIconColor(color, 0, '#004F9C')}
      />
    </Svg>
  );
};

Iconjiansheyinhang.defaultProps = {
  size: 18,
};

export default Iconjiansheyinhang;
