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
export const Iconqianbao: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M880.09256213 723.93208123h-249.68516453c-34.32098481 0-61.77777268-29.17283709-61.77777264-66.06789575V511.14197538c0-36.03703405 27.45678784-66.06789578 61.77777264-66.06789577h249.68516453c9.43827083 0 16.30246778 7.72222158 16.30246778 16.30246778v245.39504144c0.85802462 9.43827083-6.86419697 17.16049241-16.30246778 17.1604924z m-248.82713991-245.39504142c-15.44444316 0-28.31481246 14.58641855-28.31481247 32.60493557V657.86418548c0 18.01851702 12.87036929 32.60493557 28.31481247 32.60493555H863.79009435V478.53703981h-232.52467213zM757.39504142 282.04940175H266.60495858c-23.16666475 0-41.18518177-18.87654164-41.18518178-41.18518177V144.76546249c0-22.30864012 18.87654164-41.18518177 41.18518178-41.18518179h490.79008284c23.16666475 0 41.18518177 18.87654164 41.18518178 41.18518179v96.09875749c0 22.30864012-18.01851702 41.18518177-41.18518178 41.18518177zM266.60495858 137.04324091c-4.29012309 0-7.72222158 3.43209849-7.72222158 7.72222158v96.09875749c0 4.29012309 3.43209849 7.72222158 7.72222158 7.72222157h490.79008284c4.29012309 0 7.72222158-3.43209849 7.72222158-7.72222157V144.76546249c0-4.29012309-3.43209849-7.72222158-7.72222158-7.72222158H266.60495858z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M691.32714565 626.11727449c-9.43827083 0-16.30246778-7.72222158-16.30246778-16.30246778v-48.90740334c0-9.43827083 7.72222158-16.30246778 16.30246778-16.3024678 9.43827083 0 16.30246778 7.72222158 16.3024678 16.3024678v48.90740334c0.85802462 8.5802462-6.86419697 16.30246778-16.3024678 16.30246778z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M806.30244477 920.4197193H217.69755523c-50.62345261 0-90.95060975-41.18518177-90.95060979-90.95060977V339.53705131c0-50.62345261 41.18518177-90.95060975 90.95060979-90.95060976h587.74686493c50.62345261 0 90.95060975 41.18518177 90.95060975 90.95060976V829.46910953c0.85802462 49.76542799-40.32715715 90.95060975-90.09258514 90.95060977zM217.69755523 282.04940175c-31.74691093 0-57.48764957 25.7407386-57.48764958 57.48764956V829.46910953c0 31.74691093 25.7407386 57.48764957 57.48764958 57.48764956h587.74686493c31.74691093 0 57.48764957-25.7407386 57.48764957-57.48764956V339.53705131c0-31.74691093-25.7407386-57.48764957-57.48764957-57.48764956H217.69755523z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M172.22225033 377.29013458h-13.72839391c-9.43827083 0-16.30246778-7.72222158-16.30246779-16.30246777 0-9.43827083 7.72222158-16.30246778 16.30246779-16.30246778h13.72839391c9.43827083 0 16.30246778 7.72222158 16.30246778 16.30246778 0 9.43827083-7.72222158 16.30246778-16.30246778 16.30246777zM772.8394846 377.29013458h-28.31481247c-9.43827083 0-16.30246778-7.72222158-16.30246781-16.30246777 0-9.43827083 7.72222158-16.30246778 16.30246781-16.30246778h28.31481247c9.43827083 0 16.30246778 7.72222158 16.30246778 16.30246778 0 9.43827083-6.86419697 16.30246778-16.30246778 16.30246777z m-100.3888806 0h-28.31481248c-9.43827083 0-16.30246778-7.72222158-16.30246778-16.30246777 0-9.43827083 7.72222158-16.30246778 16.30246778-16.30246778h28.31481248c9.43827083 0 16.30246778 7.72222158 16.30246781 16.30246778 0.85802462 9.43827083-6.86419697 16.30246778-16.30246781 16.30246777z m-99.53085595 0h-28.31481248c-9.43827083 0-16.30246778-7.72222158-16.30246779-16.30246777 0-9.43827083 7.72222158-16.30246778 16.30246779-16.30246778h28.31481248c9.43827083 0 16.30246778 7.72222158 16.30246778 16.30246778 0 9.43827083-7.72222158 16.30246778-16.30246778 16.30246777z m-100.38888057 0H443.35803036c-9.43827083 0-16.30246778-7.72222158-16.30246778-16.30246777 0-9.43827083 7.72222158-16.30246778 16.30246778-16.30246778h28.31481249c9.43827083 0 16.30246778 7.72222158 16.30246778 16.30246778 0.85802462 9.43827083-6.00617233 16.30246778-15.44444315 16.30246777z m-100.38888059 0h-28.31481248c-9.43827083 0-16.30246778-7.72222158-16.30246779-16.30246777 0-9.43827083 7.72222158-16.30246778 16.30246779-16.30246778h28.31481248c9.43827083 0 16.30246778 7.72222158 16.30246779 16.30246778 0.85802462 9.43827083-6.86419697 16.30246778-16.30246779 16.30246777z m-100.38888059 0h-28.31481247c-9.43827083 0-16.30246778-7.72222158-16.30246779-16.30246777 0-9.43827083 7.72222158-16.30246778 16.30246779-16.30246778H271.7531063c9.43827083 0 16.30246778 7.72222158 16.30246779 16.30246778 0.85802462 9.43827083-6.86419697 16.30246778-16.30246779 16.30246777zM857.78392199 377.29013458h-13.7283939c-9.43827083 0-16.30246778-7.72222158-16.30246779-16.30246777 0-9.43827083 7.72222158-16.30246778 16.30246779-16.30246778h13.7283939c9.43827083 0 16.30246778 7.72222158 16.3024678 16.30246778 0 9.43827083-6.86419697 16.30246778-16.3024678 16.30246777z"
        fill={getIconColor(color, 3, '#333333')}
      />
      <Path
        d="M172.22225033 825.17898642h-13.72839391c-9.43827083 0-16.30246778-7.72222158-16.30246779-16.30246779 0-9.43827083 7.72222158-16.30246778 16.30246779-16.30246778h13.72839391c9.43827083 0 16.30246778 7.72222158 16.30246778 16.30246778 0 8.5802462-7.72222158 16.30246778-16.30246778 16.30246779zM772.8394846 825.17898642h-28.31481247c-9.43827083 0-16.30246778-7.72222158-16.30246781-16.30246779 0-9.43827083 7.72222158-16.30246778 16.30246781-16.30246778h28.31481247c9.43827083 0 16.30246778 7.72222158 16.30246778 16.30246778 0 8.5802462-6.86419697 16.30246778-16.30246778 16.30246779z m-100.3888806 0h-28.31481248c-9.43827083 0-16.30246778-7.72222158-16.30246778-16.30246779 0-9.43827083 7.72222158-16.30246778 16.30246778-16.30246778h28.31481248c9.43827083 0 16.30246778 7.72222158 16.30246781 16.30246778 0.85802462 8.5802462-6.86419697 16.30246778-16.30246781 16.30246779z m-99.53085595 0h-28.31481248c-9.43827083 0-16.30246778-7.72222158-16.30246779-16.30246779 0-9.43827083 7.72222158-16.30246778 16.30246779-16.30246778h28.31481248c9.43827083 0 16.30246778 7.72222158 16.30246778 16.30246778s-7.72222158 16.30246778-16.30246778 16.30246779z m-100.38888057 0H443.35803036c-9.43827083 0-16.30246778-7.72222158-16.30246778-16.30246779 0-9.43827083 7.72222158-16.30246778 16.30246778-16.30246778h28.31481249c9.43827083 0 16.30246778 7.72222158 16.30246778 16.30246778 0.85802462 8.5802462-6.00617233 16.30246778-15.44444315 16.30246779z m-100.38888059 0h-28.31481248c-9.43827083 0-16.30246778-7.72222158-16.30246779-16.30246779 0-9.43827083 7.72222158-16.30246778 16.30246779-16.30246778h28.31481248c9.43827083 0 16.30246778 7.72222158 16.30246779 16.30246778 0.85802462 8.5802462-6.86419697 16.30246778-16.30246779 16.30246779z m-100.38888059 0h-28.31481247c-9.43827083 0-16.30246778-7.72222158-16.30246779-16.30246779 0-9.43827083 7.72222158-16.30246778 16.30246779-16.30246778H271.7531063c9.43827083 0 16.30246778 7.72222158 16.30246779 16.30246778 0.85802462 8.5802462-6.86419697 16.30246778-16.30246779 16.30246779zM857.78392199 825.17898642h-13.7283939c-9.43827083 0-16.30246778-7.72222158-16.30246779-16.30246779 0-9.43827083 7.72222158-16.30246778 16.30246779-16.30246778h13.7283939c9.43827083 0 16.30246778 7.72222158 16.3024678 16.30246778s-6.86419697 16.30246778-16.3024678 16.30246779z"
        fill={getIconColor(color, 4, '#333333')}
      />
    </Svg>
  );
};

Iconqianbao.defaultProps = {
  size: 18,
};

export default Iconqianbao;
