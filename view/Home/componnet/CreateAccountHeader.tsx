import React from 'react';
import {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import IconJT from '../../../assets/iconfont/Iconjiaotong';
import IconGF from '../../../assets/iconfont/Iconguangfa';
import IconZX from '../../../assets/iconfont/Iconzhongxin';
import IconZS from '../../../assets/iconfont/Iconzhaoshang';
import IconJS from '../../../assets/iconfont/Iconjianshe';
import IconPA from '../../../assets/iconfont/Iconpingan';
import {commonColor} from '../../../style/common.js';
const blankMap = {
  JT: {
    icon: <IconJT size={32}></IconJT>,
    name: '交通银行',
  },
  GF: {
    icon: <IconGF size={32}></IconGF>,
    name: '广发银行',
  },
  ZX: {
    icon: <IconZX size={32}></IconZX>,
    name: '中信银行',
  },
  ZS: {
    icon: <IconZS size={32}></IconZS>,
    name: '招商银行',
  },
  JS: {
    icon: <IconJS size={32}></IconJS>,
    name: '建设银行',
  },
  PA: {
    icon: <IconPA size={32}></IconPA>,
    name: '平安银行',
  },
};

interface Props {
  blank: string;
  type: string;
}
export default class CreateAccountHeader extends Component<Props> {
  render() {
    const {blank, type} = this.props;
    const text = type === 'debit' ? '借记卡' : '信用卡';
    return (
      <View>
        {/* 头部银行信息 */}
        <View style={[styles.header, styles.PL, styles.PR]}>
          <View style={[styles.blankContent]}>
            {blankMap[blank].icon}
            <Text style={[styles.blank]}>{blankMap[blank].name}</Text>
          </View>
          <Text>{text}</Text>
        </View>
        {/* 其他信息 */}
        <View style={[styles.otherMsg, styles.PL]}>
          {/* 备注信息 */}
          <View style={[styles.msgItem]}>
            <Text style={[styles.label]}>备注信息</Text>
            <TextInput
              style={[styles.input]}
              placeholder="如 工资卡 （可不填）"
              placeholderTextColor="#A9A9A9"
              maxLength={24}></TextInput>
          </View>
          {/* 卡号 */}
          <View style={[styles.msgItem]}>
            <Text style={[styles.label]}>银行卡号</Text>
            <TextInput
              style={[styles.input]}
              placeholder="卡号（可不填）"
              placeholderTextColor="#A9A9A9"
              maxLength={24}></TextInput>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  PL: {
    paddingLeft: 15,
  },
  PR: {paddingRight: 15},
  header: {
    borderTopColor: '#EBECEB',
    borderTopWidth: 8,
    backgroundColor: '#F8F7F8',
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {},
  blankContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  blank: {
    fontSize: 18,
    marginLeft: 8,
  },
  blankType: {},
  otherMsg: {borderBottomColor: '#EBECEB', borderBottomWidth: 8},
  msgItem: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: commonColor.grey,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: '#808080',
  },
  input: {
    fontSize: 16,
    marginLeft: 25,
  },
});
