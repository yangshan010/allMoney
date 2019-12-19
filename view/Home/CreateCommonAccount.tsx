import React from 'react';
import {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Iconweixin from '../../assets/iconfont/Iconweixin';
import Iconzhifubao from '../../assets/iconfont/Iconzhifubao';
import Iconcash from '../../assets/iconfont/Iconcash';
import {commonColor} from '../../style/common.js';
const iconMap = {
  zhifubao: {
    icon: <Iconzhifubao size={32}></Iconzhifubao>,
    name: '支付宝',
  },
  weixin: {
    icon: <Iconweixin size={32}></Iconweixin>,
    name: '微信',
  },
  cash: {
    icon: <Iconcash size={32}></Iconcash>,
    name: '现金',
  },
};
export default class CreateCommonAccount extends Component {
  static navigationOptions = {
    title: '添加账户',
  };
  render() {
    const {type} = this.props.navigation.state.params;
    console.log('this.props', this.props);
    return (
      <View style={[styles.layout]}>
        {/* 图标 */}
        <View style={[styles.header, styles.paddingLeft]}>
          {iconMap[type].icon}
          <Text style={[styles.headerText]}>{iconMap[type].name}</Text>
        </View>
        {/* 用户名 */}
        <View style={[styles.usernameContent, styles.paddingLeft]}>
          <Text style={[styles.label]}>用户名</Text>
          <TextInput
            style={[styles.input]}
            placeholder="输入用户名"
            placeholderTextColor="#A9A9A9"
            maxLength={24}></TextInput>
        </View>
        {/* 账户余额 */}
        <View style={[styles.balance, styles.paddingLeft]}>
          <Text style={[styles.title]}> 账户余额</Text>
          <View style={[styles.balanceInputContent]}>
            <Text style={[styles.balanceMoneyIcon]}>¥</Text>
            <TextInput
              style={[styles.balanceInputInput]}
              maxLength={11}
              placeholder="0.00"></TextInput>
          </View>
        </View>
        {/* 底部保存按钮   */}
        <View style={[styles.buttonContent]}>
          <TouchableOpacity style={[styles.saveButton]}>
            <Text style={[styles.buttonText]}>保存</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  layout: {},
  paddingLeft: {
    paddingLeft: 15,
  },
  header: {
    borderTopColor: '#EBECEB',
    borderTopWidth: 8,
    backgroundColor: '#F8F7F8',
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    marginLeft: 8,
  },
  usernameContent: {
    height: 70,
    borderTopColor: '#EBECEB',
    borderTopWidth: 1,
    borderBottomColor: '#EBECEB',
    borderBottomWidth: 8,
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
