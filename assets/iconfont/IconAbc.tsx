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
export const IconAbc: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M684.202667 509.866667v152.746666l-2.133334 4.181334-2.218666 2.261333-2.133334 4.266667h-4.266666l-4.352 2.218666-8.746667 2.090667h-90.453333v240.981333l19.456-4.394666 19.413333-2.133334 17.237333-6.4 17.28-4.266666 8.533334-2.133334 8.533333-4.394666 17.365333-6.4 17.237334-8.661334 15.104-8.533333 17.237333-8.661333 15.104-8.576 12.928-10.666667 15.061333-10.794667 28.117334-23.722666 12.885333-12.885334 10.752-12.970666 12.928-14.976 10.752-12.970667 10.837333-14.976 8.618667-15.146667 8.533333-17.152 8.704-15.018666 8.576-17.237334 6.4-17.237333 10.965334-34.517333 6.4-17.109334 2.133333-19.413333 4.352-17.194667 2.176-19.328 2.133333-38.656-2.133333-30.122666-2.133333-15.146667v-15.104l-6.528-29.952-8.576-30.208-4.352-12.885333-4.394667-12.970667-10.666667-27.946667-15.104-25.813333-12.928-25.770667-17.237333-21.546666-19.456-23.722667-19.413333-21.376-21.589334-19.456-21.504-17.237333-23.765333-17.109334-25.813333-15.146666-25.856-12.885334v352.853334l-2.133334 4.266666-2.218666 2.133334-2.133334 4.266666-4.266666 2.133334h-4.352l-8.746667 2.176h-127.146667l-2.048 2.090666-2.176 2.218667V361.429333l2.133334-4.394666 2.133333-4.181334 4.309333-2.133333h58.282667l8.576-2.176 6.4-2.261333 4.266667-2.133334 4.522666-6.4V10.752l43.008 12.885333 21.589334 6.485334 19.328 6.4 21.589333 8.533333 19.370667 10.922667 19.413333 8.490666 17.237333 10.88 19.413334 12.928 17.28 10.666667 17.237333 12.928 15.104 14.976 17.152 15.146667 15.189333 14.976 27.989334 30.293333 13.013333 17.066667 12.928 17.28 10.666667 19.285333 10.837333 17.237333 21.589333 38.656 8.576 19.456 6.528 21.504 12.928 40.917334 6.4 21.461333 4.352 21.632 2.218667 21.333333 4.266667 23.722667v70.912l-2.090667 25.941333-2.133333 25.770667-4.352 25.813333-6.528 23.68-6.4 25.813334-8.661334 23.594666-8.661333 21.717334-10.666667 23.466666-10.922666 21.546667-12.842667 21.632-12.928 21.461333-30.165333 38.656-15.189334 19.413334-17.194666 17.194666-17.237334 17.237334-19.498666 15.061333-19.328 14.933333-19.456 15.146667-21.589334 12.928-21.504 12.970667-21.589333 10.709333-23.68 10.666667-21.504 8.661333-25.898667 8.533333-23.68 6.570667-23.765333 6.485333-25.856 4.181334-25.898667 2.261333-25.856 2.048-25.856 2.176-25.898666-2.133333-25.770667-2.133334-25.941333-2.218666-25.898667-4.181334-25.770667-6.485333-23.765333-6.570667-23.765333-8.533333-23.637334-8.661333-21.589333-10.666667-21.546667-10.709333-21.589333-12.970667-21.589333-12.928-19.413334-15.104-19.413333-14.976-19.413333-15.061333-17.194667-17.237334-17.237333-17.194666-17.28-19.413334-15.061334-19.370666-12.928-19.285334-25.856-43.093333-10.752-21.546667-10.922666-23.466666-8.490667-21.717334-8.661333-23.594666-6.485334-25.813334-6.4-23.68-4.266666-25.813333-4.437334-25.770667L0.810667 537.728v-49.450667l2.090666-21.461333 2.133334-23.68 4.352-21.376 4.352-21.632 4.266666-21.461333 12.970667-40.96 8.618667-21.461334 8.533333-19.456 8.704-19.285333 10.752-19.370667 10.752-17.237333 12.928-19.285333 13.013333-17.322667 12.885334-17.066667 13.013333-15.104 15.018667-15.146666 15.104-14.976 15.061333-15.146667 34.56-25.770667 17.194667-12.8 17.28-12.928 19.413333-10.88 19.328-8.490666 19.456-10.88 19.498667-8.576 19.328-6.4 21.504-6.485334 21.674666-6.485333 21.504-6.4v326.997333l2.133334 4.266667 2.133333 2.133333 6.485333 2.133334 6.4 2.261333 6.528 2.133333h58.197334l4.309333 2.176 4.266667 4.181334v152.789333l-4.266667-4.309333H365.098667l-8.661334-2.133334h-4.266666l-2.133334-2.176-4.352-4.266666-2.133333-2.133334v-4.266666l-2.133333-6.485334V137.685333l-25.941334 12.885334-23.637333 15.146666-23.68 17.109334-23.765333 17.237333-21.504 19.456-19.498667 21.376-17.28 23.722667-17.237333 23.637333-15.018667 23.68-13.013333 25.813333-6.4 12.970667-4.266667 14.933333-10.837333 27.989334-6.485334 28.117333-6.4 29.952-2.176 15.104v15.146667l-2.176 30.122666v19.285334l2.133334 19.370666 2.176 17.237334 2.176 19.285333 4.266666 19.413333 4.309334 17.109334 6.4 17.237333 2.218666 8.661333 4.394667 8.618667 6.4 17.237333 6.528 17.237334 17.194667 32.170666 21.589333 27.946667 10.752 15.146667 10.752 14.933333 12.970667 13.013333 12.928 12.885334 25.856 23.722666 15.146666 10.794667 15.018667 10.666667 30.165333 17.194666 17.28 8.576 15.018667 8.661334 17.322667 6.4 17.322666 6.485333 19.370667 4.352 17.237333 6.4 17.237334 2.090667 19.456 4.394666v-240.981333H365.098667l-8.661334-2.133333-2.133333-2.218667h-4.266667l-4.352-4.266667-2.133333-2.218666v-4.138667l-2.133333-6.485333v-146.346667l2.133333 2.261333 2.133333 2.090667 6.485334 4.394667 6.4 2.090666 6.528 2.133334h122.88l4.309333 2.133333 4.266667 4.266667v146.346666h32.426666v-142.08l2.133334-4.266666 2.133333-4.266667 4.309333-2.133333h122.794667l6.613333-2.133334 6.485334-2.133333 6.4-4.352 4.352-4.352zM466.389333 2.218667L490.154667 0h47.402666l21.589334 2.261333v314.026667l-2.133334 2.048-2.176 4.437333h-2.176l-2.090666 2.048-6.485334 2.133334h-60.373333l-6.4-2.133334-2.261333-2.048h-4.352V318.293333l-2.133334-2.090666-2.176-8.618667V2.261333z"
        fill={getIconColor(color, 0, '#2F856D')}
      />
    </Svg>
  );
};

IconAbc.defaultProps = {
  size: 18,
};

export default IconAbc;
