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
export const Iconmayicaifu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M204.8 0h614.4a204.8 204.8 0 0 1 204.8 204.8v614.4a204.8 204.8 0 0 1-204.8 204.8H204.8a204.8 204.8 0 0 1-204.8-204.8V204.8a204.8 204.8 0 0 1 204.8-204.8z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
      <Path
        d="M204.936533 512.785067c0 170.359467 137.489067 308.497067 307.063467 308.497066s307.063467-138.1376 307.063467-308.497066a308.053333 308.053333 0 0 0-76.6976-203.912534c-2.048-2.2528-4.7104-5.2224-8.123734-8.874666a8.874667 8.874667 0 0 0-12.561066-0.3072l-0.136534 0.136533c-3.618133 3.618133-6.519467 6.621867-8.704 8.772267l-41.847466 42.052266-5.5296 5.5296a8.874667 8.874667 0 0 0-0.136534 12.356267c2.628267 2.7648 4.642133 5.085867 6.2464 6.894933a210.944 210.944 0 0 1 50.619734 137.4208c0 116.565333-94.037333 211.0464-210.090667 211.0464s-210.090667-94.481067-210.090667-211.0464a210.602667 210.602667 0 0 1 55.978667-143.36 8.874667 8.874667 0 0 0-0.2048-12.288l-6.314667-6.382933-41.745066-41.8816-8.055467-8.055467a8.874667 8.874667 0 0 0-12.561067 0l-0.2048 0.2048c-2.9696 3.208533-5.393067 5.7344-7.202133 7.7824a307.541333 307.541333 0 0 0-76.765867 203.912534z"
        fill={getIconColor(color, 1, '#108EE9')}
      />
      <Path
        d="M330.205867 185.5488l-21.845334 22.016a17.681067 17.681067 0 0 0 0 24.9856l192.1024 193.399467a17.681067 17.681067 0 0 0 25.053867 0.068266l0.068267-0.068266 192.1024-193.399467a17.681067 17.681067 0 0 0 0-24.9856l-21.845334-22.016a48.298667 48.298667 0 0 0-68.334933-0.2048l-0.2048 0.2048-114.244267 115.029333-114.244266-115.029333a48.298667 48.298667 0 0 0-68.334934-0.2048l-0.273066 0.2048z"
        fill={getIconColor(color, 2, '#F88E3D')}
      />
    </Svg>
  );
};

Iconmayicaifu.defaultProps = {
  size: 18,
};

export default Iconmayicaifu;
