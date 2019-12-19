import React from 'react';
import {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {commonColor} from '../style/common.js';
interface Props {
  type: string;
}
export default class Balance extends Component<Props> {
  render() {
    const {type} = this.props;
    const text = type === 'debit' ? '卡内余额' : '当前欠款';
    return (
      <View style={[styles.balance, styles.paddingLeft]}>
        {/* 账户余额 */}
        <Text style={[styles.title]}>{text}</Text>
        <View style={[styles.balanceInputContent]}>
          <Text style={[styles.balanceMoneyIcon]}>¥</Text>
          <TextInput
            style={[styles.balanceInputInput]}
            maxLength={11}
            placeholder="0.00"></TextInput>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  paddingLeft: {
    paddingLeft: 15,
  },

  balance: {
    marginTop: 18,
  },
  title: {
    fontSize: 18,
  },
  balanceInputContent: {
    flexDirection: 'row',
    paddingLeft: 4,
    marginTop: 30,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: commonColor.grey,
  },
  balanceMoneyIcon: {
    fontSize: 16,
    marginRight: 4,
  },
  balanceInputInput: {
    fontSize: 16,
  },
  buttonContent: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 50,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  saveButton: {
    height: 45,
    width: '90%',
    backgroundColor: commonColor.red,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
});
