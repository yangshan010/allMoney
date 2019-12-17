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
export const Iconyinhangqiahuankuan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M590.848 541.184c0-17.408-11.776-29.184-29.184-29.184H196.096c-17.92 0-29.184 16.896-29.184 29.184 0 17.408 11.776 29.184 29.184 29.184h365.568c17.408-0.512 29.184-11.776 29.184-29.184zM196.096 616.448c-17.92 0-29.184 16.896-29.184 29.184 0 17.408 11.776 29.184 29.184 29.184h208.896c17.408 0 29.184-11.776 29.184-29.184 0-17.408-11.776-29.184-29.184-29.184H196.096z"
        fill={getIconColor(color, 0, '#2E77ED')}
      />
      <Path
        d="M933.376 590.848h-200.704c-21.504 0-29.696 9.216-29.696 23.04v189.44c0 15.36 10.24 25.088 25.088 25.088 15.36 0 25.088-10.24 25.088-25.088v-155.136c85.504 50.688 127.488 115.2 127.488 196.096 0 15.36 10.24 25.088 25.088 25.088 15.36 0 25.088-10.752 25.088-20.48 0-90.112-38.4-166.912-102.912-207.36h104.96c9.728 0 20.48-9.728 20.48-25.088 0.512-15.872-10.24-25.6-19.968-25.6z"
        fill={getIconColor(color, 1, '#FFBB12')}
      />
      <Path
        d="M570.88 814.592H179.2c-28.16-0.512-51.2-21.504-55.296-49.152V264.192c0-27.136 22.016-49.152 49.152-49.152h675.84c27.136 0 49.152 22.016 49.152 49.152v254.976c0 14.848 12.288 27.136 27.136 27.136s27.136-12.288 27.136-27.136V252.416c2.048-25.088-6.656-50.176-24.064-69.12-17.408-18.432-41.984-29.184-67.072-28.672H179.2c-52.736 0-109.568 38.912-109.568 97.28v513.536c4.096 57.856 51.2 102.4 109.568 103.424h391.68c14.848 0 27.136-12.288 27.136-27.136s-11.776-27.136-27.136-27.136z"
        fill={getIconColor(color, 2, '#2E77ED')}
      />
      <Path
        d="M953.856 378.368c0-17.408-24.064-29.184-60.416-29.184h-762.88c-36.864 0-60.416 16.896-60.416 29.184 0 17.408 24.064 29.184 60.416 29.184h762.88c35.84 0 60.416-11.776 60.416-29.184z"
        fill={getIconColor(color, 3, '#2E77ED')}
      />
    </Svg>
  );
};

Iconyinhangqiahuankuan.defaultProps = {
  size: 18,
};

export default Iconyinhangqiahuankuan;
