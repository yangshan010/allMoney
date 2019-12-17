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
export const IconyinhangGuangda: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M596.535 138.185s70.75 0 85.645 18.617h-70.75v22.344h107.984s18.617 11.172 18.617 22.34H611.43v18.621h141.496s14.894 7.445 11.172 26.062H328.434v22.344H775.27s3.722 18.617 3.722 22.34H328.434v22.344h450.558s3.723 14.894-3.722 22.34l-446.836 3.726v22.34l439.386-3.723s0 18.617-11.168 22.34l-428.218 7.449v18.618l413.324-3.723s0 22.34-14.895 26.066l-398.429 7.446v22.343l364.914-3.726s-7.446 26.066-63.301 22.344h-70.75v18.617h111.711s48.406 3.722 52.129 22.343h-163.84v18.618h193.629s18.621 14.894 18.621 22.34l-443.113 7.449v26.066l450.558-7.449s18.617 11.172 18.617 26.066l-469.175 3.723v18.617h476.625s3.722 7.449 3.722 18.621l-480.347 3.723v18.617h480.347s3.723 11.172 0 22.344l-480.347 3.723v22.339h476.625s3.722 14.895-7.45 26.067H328.434v22.344h458.007s0 22.339-11.171 22.339H611.43v22.344h141.496s-11.168 22.34-18.617 26.063H611.43v22.343h81.918s-11.168 26.067-119.157 22.34L213 882.912V138.185h383.535z"
        fill={getIconColor(color, 0, '#602A7A')}
      />
    </Svg>
  );
};

IconyinhangGuangda.defaultProps = {
  size: 18,
};

export default IconyinhangGuangda;
