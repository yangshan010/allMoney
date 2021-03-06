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
export const IconyinhangNanjing: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M340.22 342.908c-8.738 7.584-11.946 5.267-15.337-6.778-2.76-9.815-2.673-20.343-2.673-30.868C322.21 204.628 406.284 123 509.97 123c73.46 0 141.577 38.716 167.965 100.364 4.193 9.815 0.893 15.525-6.237 18.286-29.155 11.422-56.614 23.824-81.223 38.987-8.202 4.998-8.11 4.731-17.383 2.5-19.437-4.73-39.763-7.226-60.627-7.226-66.418 0-125.795 26.586-172.245 66.997z m-71.41 306.625c-10.079-0.357-20.06-3.746-30.138-6.957C143.1 611.44 91.48 506.17 123.486 407.5c22.645-69.855 80.508-122.846 147.374-128.736 10.608-0.98 14.974 4.017 15.423 11.597 1.872 31.315 5.167 61.29 11.945 89.39 2.317 9.37 2.05 9.192-2.942 17.311-10.523 17.038-19.167 35.507-25.676 55.401-20.508 63.25-13.642 127.93 10.43 184.668 4.545 10.615 1.337 12.937-11.23 12.402zM541.08 785.225c11.594-0.98 12.752 2.674 8.385 14.453-3.57 9.544-9.808 18.108-15.958 26.585-59.113 81.363-175.101 97.955-258.996 36.935-59.374-43.181-91.827-114.638-76.852-180.032 2.498-10.35 8.472-13.025 15.871-11.065 30.226 7.854 59.823 14.01 88.62 16.24 9.538 0.8 9.359 0.892 15.515 8.207a254.593 254.593 0 0 0 44.755 41.482c53.666 39.074 117.324 52.548 178.66 47.195z m237.866-206.17c7.936 6.334 14.086 14.898 20.33 23.376 59.107 81.45 38.956 196.89-44.934 257.91-59.38 43.182-137.301 52.012-194.803 17.485-9.185-5.527-9.721-12.044-5.707-18.465 16.851-26.407 31.826-52.635 42.883-79.312 3.657-8.92 3.744-8.65 12.573-12.223 18.81-7.758 36.728-17.75 53.222-29.796 53.671-39.074 86.125-95.454 100.033-155.498 2.585-11.326 6.508-11.239 16.403-3.476zM899.84 402.862c22.733 69.853 6.953 146.751-43.684 190.822-8.023 6.961-14.445 5.533-19.259-0.353-19.968-24.089-40.206-46.483-62.23-65.215-7.309-6.155-6.951-6.155-7.666-15.703-1.514-19.895-5.35-39.967-11.858-59.862-20.503-63.162-64.1-111.516-116.879-143.275-9.9-5.978-8.737-9.723 1.78-16.684 8.472-5.706 18.545-8.921 28.531-12.132 95.663-31.133 199.17 23.732 231.265 122.402zM504.072 623.102c4.727 4.729 3.925 4.194 8.564-0.444 57.36-55.824 115.618-112.633 172.977-168.548 4.46-4.28 13.473-4.552 15.882 1.78C711.039 481.042 718 507.883 718 536.509 718 649.678 621.293 741 508.084 741c-30.596 0-59.769-6.688-85.909-18.816-2.765-1.25-5.175-2.857-5.175-6.688V560.855c0-12.928 9.28-15.428 17.664-7.046 23.196 23.101 46.3 46.197 69.408 69.293z m-168.694-9.188c-4.46 4.28-13.47 4.46-15.878-1.698-9.54-25.236-16.5-52.083-16.5-80.71C303 418.327 399.68 327 512.856 327c30.679 0 59.75 6.689 85.884 18.822 2.765 1.245 5.26 2.852 5.26 6.688v154.647c0 12.933-9.362 15.43-17.746 7.046l-69.297-69.297c-3.923-3.924-4.28-3.924-8.203 0-57.256 56.812-115.584 112.64-173.376 169.008z"
        fill={getIconColor(color, 0, '#D70812')}
      />
    </Svg>
  );
};

IconyinhangNanjing.defaultProps = {
  size: 18,
};

export default IconyinhangNanjing;
