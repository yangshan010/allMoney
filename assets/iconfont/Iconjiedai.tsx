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
export const Iconjiedai: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M229.849 694.098l97.749 120.6 82.463-66.006a16 16 0 0 1 9.998-3.51h306.83a16 16 0 0 0 10.286-3.744L907.642 598.35c13.484-11.318 33.587-9.559 44.9 3.93 11.315 13.488 9.556 33.598-3.927 44.916l-174.85 146.767a64 64 0 0 1-41.146 14.98l-297.587 0.004a16 16 0 0 0-10.287 3.745l-156.768 131.59c-28.412 23.848-70.772 20.141-94.612-8.281L79.713 824.353c-23.84-28.422-20.135-70.796 8.278-94.645l214.003-179.632a16 16 0 0 1 10.266-3.745L568.732 546c17.602 0 31.871 14.274 31.871 31.882 0 17.608-14.269 31.882-31.87 31.882H336.144a16 16 0 0 0-10.287 3.745l-96.01 80.589z m-48.822 40.98l-40.608 34.087c-7.705 6.467-8.71 17.959-2.245 25.666l74.628 88.97c6.466 7.707 17.953 8.713 25.658 2.245l39.38-31.522-96.813-119.446zM691.5 546C560.332 546 454 439.668 454 308.5S560.332 71 691.5 71 929 177.332 929 308.5 822.668 546 691.5 546z m0-48C796.158 498 881 413.158 881 308.5S796.158 119 691.5 119 502 203.842 502 308.5 586.842 498 691.5 498zM716 310.525h71c13.255 0 24 10.745 24 24s-10.745 24-24 24h-71v74.598c0 13.255-10.745 24-24 24s-24-10.745-24-24v-74.598h-72c-13.255 0-24-10.745-24-24s10.745-24 24-24h72v-32h-72c-13.255 0-24-10.745-24-24s10.745-24 24-24h25.46l-29.554-29.554c-9.372-9.373-9.372-24.569 0-33.942 9.373-9.372 24.569-9.372 33.941 0l63.496 63.496h5.314l63.496-63.496c9.372-9.372 24.568-9.372 33.94 0 9.373 9.373 9.373 24.569 0 33.942l-29.554 29.554H787c13.255 0 24 10.745 24 24s-10.745 24-24 24h-71v32z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconjiedai.defaultProps = {
  size: 18,
};

export default Iconjiedai;
