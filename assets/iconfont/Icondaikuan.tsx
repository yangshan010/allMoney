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
export const Icondaikuan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M467.8656 437.8624l48.264533 48.298667 48.298667-48.298667-48.298667-48.264533-48.264533 48.264533z m72.3968-120.661333l96.5632 96.529066a34.133333 34.133333 0 0 1 0 48.298667l-96.5632 96.529067a34.133333 34.133333 0 0 1-48.264533 0l-96.529067-96.529067a34.133333 34.133333 0 0 1 0-48.298667l96.529067-96.529066a34.133333 34.133333 0 0 1 48.264533 0z m247.022933 269.312a66.218667 66.218667 0 0 1 55.3984 19.694933c25.838933 25.873067 30.1056 69.358933 11.605334 104.96-48.196267 92.740267-160.1536 177.5616-305.698134 185.582933-116.497067 6.4512-233.8816-30.72-351.505066-110.421333l38.2976-56.5248c105.8816 71.7824 208.827733 104.3456 309.4528 98.781867 119.261867-6.587733 211.0464-76.117333 248.866133-148.8896 5.4272-10.4448 4.334933-21.6064 0.682667-25.258667-1.570133-1.570133-6.929067-0.989867-22.1184 12.8-101.444267 95.061333-233.1648 116.872533-390.007467 66.56l20.821333-65.024c48.64 15.598933 93.525333 23.278933 134.8608 23.074133-91.2384-70.178133-194.935467-72.533333-317.098666-7.406933l-32.085334-60.245333a552.686933 552.686933 0 0 1 54.306134-25.3952A313.582933 313.582933 0 0 1 204.8 448.068267C204.8 276.036267 342.357333 136.533333 512 136.533333s307.2 139.502933 307.2 311.534934a313.856 313.856 0 0 1-31.914667 138.478933z m-477.457066-8.704c112.981333-25.361067 215.6544 4.778667 304.7424 90.112C695.978667 628.5312 750.933333 544.017067 750.933333 448.1024 750.933333 313.480533 643.754667 204.8 512 204.8s-238.933333 108.714667-238.933333 243.268267c0 46.762667 12.970667 91.409067 36.7616 129.7408z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icondaikuan.defaultProps = {
  size: 18,
};

export default Icondaikuan;
