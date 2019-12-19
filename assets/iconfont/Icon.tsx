/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import Icongupiao from './Icongupiao';
import Iconwode from './Iconwode';
import Iconzhangshangcaifuyemianshoujiban245 from './Iconzhangshangcaifuyemianshoujiban245';
import Icon38 from './Icon38';
import Iconshaixuan from './Iconshaixuan';
import Iconjijin from './Iconjijin';
import Iconzhangdan from './Iconzhangdan';
import Iconjiebei from './Iconjiebei';
import Iconbi from './Iconbi';
import Iconbaobiao from './Iconbaobiao';
import Iconqiandai from './Iconqiandai';
import Iconassets from './Iconassets';
import Iconzhaoshang from './Iconzhaoshang';
import IconAbc from './IconAbc';
import Iconjiantou from './Iconjiantou';
import Iconjianshe from './Iconjianshe';
import Iconyinhangdaikuan from './Iconyinhangdaikuan';
import Icontriangle from './Icontriangle';
import IconiconTest from './IconiconTest';
import Iconjinrongxianxingge from './Iconjinrongxianxingge';
import Iconjijin1 from './Iconjijin1';
import Iconrili from './Iconrili';
import Iconyinhangqia from './Iconyinhangqia';
import Icongupiao1 from './Icongupiao1';
import Iconqianbao from './Iconqianbao';
import Iconx from './Iconx';
import Iconmayicaifu from './Iconmayicaifu';
import Icongou from './Icongou';
import Iconcash from './Iconcash';
import Iconbi1 from './Iconbi1';
import Iconyinhangqiahao from './Iconyinhangqiahao';
import Iconpingan from './Iconpingan';
import Iconyinhangqia1 from './Iconyinhangqia1';
import Iconweixin from './Iconweixin';
import Iconyinhangqia2 from './Iconyinhangqia2';
import Iconmoney from './Iconmoney';
import Iconjiezhidan from './Iconjiezhidan';
import Iconyinhangqiahuankuan from './Iconyinhangqiahuankuan';
import Iconjiedai from './Iconjiedai';
import Iconjiaotong from './Iconjiaotong';
import Icondaikuan from './Icondaikuan';
import Iconvisa from './Iconvisa';
import Iconzhifubao from './Iconzhifubao';
import Icontriangle1 from './Icontriangle1';
import IconyinhangZhongguo from './IconyinhangZhongguo';
import IconyinhangGuangda from './IconyinhangGuangda';
import IconyinhangGongshang from './IconyinhangGongshang';
import IconyinhangHuaxia from './IconyinhangHuaxia';
import IconyinhangPufa from './IconyinhangPufa';
import IconyinhangZhada from './IconyinhangZhada';
import IconyinhangShanghai from './IconyinhangShanghai';
import IconyinhangNanjing from './IconyinhangNanjing';
import IconyinhangZheshang from './IconyinhangZheshang';
import IconyinhangYouzhengchuxu from './IconyinhangYouzhengchuxu';
import Icongouduijilu from './Icongouduijilu';
import Iconguangfa from './Iconguangfa';
import Iconxinbaniconshangchuan from './Iconxinbaniconshangchuan';
import IconyinhangPingan from './IconyinhangPingan';
import Iconbaoxiaochaxun from './Iconbaoxiaochaxun';
import Iconzhongxin from './Iconzhongxin';
import IconMyIconIsvisible from './IconMyIconIsvisible';
import IconsoloIconIsnotvisible from './IconsoloIconIsnotvisible';
import Iconyinhangduizhangdan from './Iconyinhangduizhangdan';
import IconallMoneyGrey from './IconallMoneyGrey';

export type IconNames = 'gupiao' | 'wode' | 'zhangshangcaifuyemianshoujiban245' | '38' | 'shaixuan' | 'jijin' | 'zhangdan' | 'jiebei' | 'bi' | 'baobiao' | 'qiandai' | 'assets' | 'zhaoshang' | 'ABC' | 'jiantou' | 'jianshe' | 'yinhangdaikuan' | 'triangle' | 'icon-test' | 'jinrongxianxingge-' | 'jijin1' | 'rili' | 'yinhangqia' | 'gupiao1' | 'qianbao' | 'x' | 'mayicaifu' | 'gou' | 'cash' | 'bi1' | 'yinhangqiahao' | 'pingan' | 'yinhangqia1' | 'weixin' | 'yinhangqia2' | 'money' | 'jiezhidan' | 'yinhangqiahuankuan' | 'jiedai' | 'jiaotong' | 'daikuan' | 'visa' | 'zhifubao' | 'triangle1' | 'yinhang-zhongguo' | 'yinhang-guangda' | 'yinhang-gongshang' | 'yinhang-huaxia' | 'yinhang-pufa' | 'yinhang-zhada' | 'yinhang-shanghai' | 'yinhang-nanjing' | 'yinhang-zheshang' | 'yinhang-youzhengchuxu' | 'gouduijilu' | 'guangfa' | 'xinbaniconshangchuan-' | 'yinhang-pingan' | 'baoxiaochaxun' | 'zhongxin' | 'My_icon_isvisible' | 'solo_icon_isnotvisible' | 'yinhangduizhangdan' | 'allMoneyGrey';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

// If you don't like lots of icon files in your project,
// try to set generate_mode to "all-in-one" in root file "iconfont.json".
// And then regenerate icons by using cli command.
export const Icon: FunctionComponent<Props> = ({ color, name, size, ...rest }) => {
  switch (name) {
    case 'gupiao':
      return <Icongupiao size={size} color={color} {...rest} />;
    case 'wode':
      return <Iconwode size={size} color={color} {...rest} />;
    case 'zhangshangcaifuyemianshoujiban245':
      return <Iconzhangshangcaifuyemianshoujiban245 size={size} color={color} {...rest} />;
    case '38':
      return <Icon38 size={size} color={color} {...rest} />;
    case 'shaixuan':
      return <Iconshaixuan size={size} color={color} {...rest} />;
    case 'jijin':
      return <Iconjijin size={size} color={color} {...rest} />;
    case 'zhangdan':
      return <Iconzhangdan size={size} color={color} {...rest} />;
    case 'jiebei':
      return <Iconjiebei size={size} color={color} {...rest} />;
    case 'bi':
      return <Iconbi size={size} color={color} {...rest} />;
    case 'baobiao':
      return <Iconbaobiao size={size} color={color} {...rest} />;
    case 'qiandai':
      return <Iconqiandai size={size} color={color} {...rest} />;
    case 'assets':
      return <Iconassets size={size} color={color} {...rest} />;
    case 'zhaoshang':
      return <Iconzhaoshang size={size} color={color} {...rest} />;
    case 'ABC':
      return <IconAbc size={size} color={color} {...rest} />;
    case 'jiantou':
      return <Iconjiantou size={size} color={color} {...rest} />;
    case 'jianshe':
      return <Iconjianshe size={size} color={color} {...rest} />;
    case 'yinhangdaikuan':
      return <Iconyinhangdaikuan size={size} color={color} {...rest} />;
    case 'triangle':
      return <Icontriangle size={size} color={color} {...rest} />;
    case 'icon-test':
      return <IconiconTest size={size} color={color} {...rest} />;
    case 'jinrongxianxingge-':
      return <Iconjinrongxianxingge size={size} color={color} {...rest} />;
    case 'jijin1':
      return <Iconjijin1 size={size} color={color} {...rest} />;
    case 'rili':
      return <Iconrili size={size} color={color} {...rest} />;
    case 'yinhangqia':
      return <Iconyinhangqia size={size} color={color} {...rest} />;
    case 'gupiao1':
      return <Icongupiao1 size={size} color={color} {...rest} />;
    case 'qianbao':
      return <Iconqianbao size={size} color={color} {...rest} />;
    case 'x':
      return <Iconx size={size} color={color} {...rest} />;
    case 'mayicaifu':
      return <Iconmayicaifu size={size} color={color} {...rest} />;
    case 'gou':
      return <Icongou size={size} color={color} {...rest} />;
    case 'cash':
      return <Iconcash size={size} color={color} {...rest} />;
    case 'bi1':
      return <Iconbi1 size={size} color={color} {...rest} />;
    case 'yinhangqiahao':
      return <Iconyinhangqiahao size={size} color={color} {...rest} />;
    case 'pingan':
      return <Iconpingan size={size} color={color} {...rest} />;
    case 'yinhangqia1':
      return <Iconyinhangqia1 size={size} color={color} {...rest} />;
    case 'weixin':
      return <Iconweixin size={size} color={color} {...rest} />;
    case 'yinhangqia2':
      return <Iconyinhangqia2 size={size} color={color} {...rest} />;
    case 'money':
      return <Iconmoney size={size} color={color} {...rest} />;
    case 'jiezhidan':
      return <Iconjiezhidan size={size} color={color} {...rest} />;
    case 'yinhangqiahuankuan':
      return <Iconyinhangqiahuankuan size={size} color={color} {...rest} />;
    case 'jiedai':
      return <Iconjiedai size={size} color={color} {...rest} />;
    case 'jiaotong':
      return <Iconjiaotong size={size} color={color} {...rest} />;
    case 'daikuan':
      return <Icondaikuan size={size} color={color} {...rest} />;
    case 'visa':
      return <Iconvisa size={size} color={color} {...rest} />;
    case 'zhifubao':
      return <Iconzhifubao size={size} color={color} {...rest} />;
    case 'triangle1':
      return <Icontriangle1 size={size} color={color} {...rest} />;
    case 'yinhang-zhongguo':
      return <IconyinhangZhongguo size={size} color={color} {...rest} />;
    case 'yinhang-guangda':
      return <IconyinhangGuangda size={size} color={color} {...rest} />;
    case 'yinhang-gongshang':
      return <IconyinhangGongshang size={size} color={color} {...rest} />;
    case 'yinhang-huaxia':
      return <IconyinhangHuaxia size={size} color={color} {...rest} />;
    case 'yinhang-pufa':
      return <IconyinhangPufa size={size} color={color} {...rest} />;
    case 'yinhang-zhada':
      return <IconyinhangZhada size={size} color={color} {...rest} />;
    case 'yinhang-shanghai':
      return <IconyinhangShanghai size={size} color={color} {...rest} />;
    case 'yinhang-nanjing':
      return <IconyinhangNanjing size={size} color={color} {...rest} />;
    case 'yinhang-zheshang':
      return <IconyinhangZheshang size={size} color={color} {...rest} />;
    case 'yinhang-youzhengchuxu':
      return <IconyinhangYouzhengchuxu size={size} color={color} {...rest} />;
    case 'gouduijilu':
      return <Icongouduijilu size={size} color={color} {...rest} />;
    case 'guangfa':
      return <Iconguangfa size={size} color={color} {...rest} />;
    case 'xinbaniconshangchuan-':
      return <Iconxinbaniconshangchuan size={size} color={color} {...rest} />;
    case 'yinhang-pingan':
      return <IconyinhangPingan size={size} color={color} {...rest} />;
    case 'baoxiaochaxun':
      return <Iconbaoxiaochaxun size={size} color={color} {...rest} />;
    case 'zhongxin':
      return <Iconzhongxin size={size} color={color} {...rest} />;
    case 'My_icon_isvisible':
      return <IconMyIconIsvisible size={size} color={color} {...rest} />;
    case 'solo_icon_isnotvisible':
      return <IconsoloIconIsnotvisible size={size} color={color} {...rest} />;
    case 'yinhangduizhangdan':
      return <Iconyinhangduizhangdan size={size} color={color} {...rest} />;
    case 'allMoneyGrey':
      return <IconallMoneyGrey size={size} color={color} {...rest} />;

  }

  return null;
};

Icon.defaultProps = {
  size: 18,
};

export default Icon;
