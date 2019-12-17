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
export const IconMyIconIsvisible: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 692.4032A180.608 180.608 0 0 1 331.5968 512 180.608 180.608 0 0 1 512 331.5968 180.608 180.608 0 0 1 692.4032 512 180.608 180.608 0 0 1 512 692.4032z m0-274.8928a94.6176 94.6176 0 0 0-94.4896 94.464A94.6176 94.6176 0 0 0 512 606.5152 94.6176 94.6176 0 0 0 606.4896 512 94.6176 94.6176 0 0 0 512 417.5104z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512 872.8064c-268.672 0-446.72-251.8528-446.72-353.92v-13.7728C65.28 403.0464 243.328 151.1936 512 151.1936c271.5392 0 445.8496 248.6784 446.72 353.6384v14.0544C957.8496 624.128 783.5392 872.8064 512 872.8064zM512 219.904c-236.0064 0-377.984 226.176-377.984 285.2096v13.7728c0 59.0336 141.9776 285.184 377.984 285.184 238.8736 0 377.472-224.3584 377.984-285.4912v-13.2864C889.3184 444.0064 750.72 219.904 512 219.904z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconMyIconIsvisible.defaultProps = {
  size: 18,
};

export default IconMyIconIsvisible;
