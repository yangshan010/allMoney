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
export const Iconyinhangqia: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M779 838.6H136c-19.4 0-37.2-7.9-50.2-22.3S66 782.6 66 760.6V374.5c0-32.5 33.4-62.1 70.1-62.1H779c36.7 0 70.1 29.6 70.1 62.1v386.1c0 22-6.9 41.3-19.8 55.7-13.1 14.4-30.9 22.3-50.3 22.3zM136.1 352.4c-17.4 0-30.1 14.5-30.1 22.1v386.1c0 22.7 12.1 38 30 38h643c17.9 0 30-15.3 30-38V374.5c0-7.5-12.7-22.1-30.1-22.1H136.1z"
        fill={getIconColor(color, 0, '#4C6070')}
      />
      <Path
        d="M86 432.1h748.6v90.1H86z"
        fill={getIconColor(color, 1, '#FFBD5C')}
      />
      <Path
        d="M844 523.2H71v-119h773v119z m-743-30h713v-59H101v59z"
        fill={getIconColor(color, 2, '#4C6070')}
      />
      <Path
        d="M605.6 673.1m-61.5 0a61.5 61.5 0 1 0 123 0 61.5 61.5 0 1 0-123 0Z"
        fill={getIconColor(color, 3, '#FFBD5C')}
      />
      <Path
        d="M698.9 673.1m-61.5 0a61.5 61.5 0 1 0 123 0 61.5 61.5 0 1 0-123 0Z"
        fill={getIconColor(color, 4, '#FFBD5C')}
      />
      <Path
        d="M421.1 636.1H163.6c-8.3 0-15-6.7-15-15s6.7-15 15-15h257.5c8.3 0 15 6.7 15 15s-6.7 15-15 15zM295.1 711.1H163.6c-8.3 0-15-6.7-15-15s6.7-15 15-15h131.5c8.3 0 15 6.7 15 15s-6.7 15-15 15zM861.8 743h-0.3v-40h0.3c32.1 0 58.2-26.1 58.2-58.2V287.2c0-32.1-26.1-58.2-58.2-58.2H299.2c-32.1 0-58.2 26.1-58.2 58.2v9.8h-40v-9.8c0-54.1 44-98.2 98.2-98.2h562.7c54.1 0 98.2 44 98.2 98.2v357.7C960 699 916 743 861.8 743z"
        fill={getIconColor(color, 5, '#4C6070')}
      />
      <Path
        d="M862 382.5h58v30h-58zM862 301.5h58v30h-58z"
        fill={getIconColor(color, 6, '#FFBD5C')}
      />
    </Svg>
  );
};

Iconyinhangqia.defaultProps = {
  size: 18,
};

export default Iconyinhangqia;
