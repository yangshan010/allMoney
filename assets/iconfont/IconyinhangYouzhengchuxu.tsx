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
export const IconyinhangYouzhengchuxu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M572.437 150l-22.912 107.153H368.877l-45.783 211.836H158.969l-19.093 85.99-3.787 21.194L117 662.164h165.373L236.589 874h394.373l19.09-85.99 26.666-125.846H797.62l17.776-85.991h-170.41l-17.809 85.991-27.98 125.846H305.286l3.819-19.942h262.048l45.821-213.088h202.27l19.094-85.991H585.14l-17.775 85.99-27.98 127.132H328.16l3.786-19.947h180.68l17.776-85.991 5.1-21.193 17.808-85.991H372.696l5.105-19.942h262.047l22.913-105.904h202.27l19.094-85.99H630.962l-19.094 85.99-3.819 19.914H395.61l5.099-19.914h180.648l17.775-85.99 3.82-21.162h284.993L907 150H572.437zM484 555l-3.857 21H349l5.104-21H484z m-179 0l-5.121 21H185l3.832-21H305z"
        fill={getIconColor(color, 0, '#007D3E')}
      />
    </Svg>
  );
};

IconyinhangYouzhengchuxu.defaultProps = {
  size: 18,
};

export default IconyinhangYouzhengchuxu;
