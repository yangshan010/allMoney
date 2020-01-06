import React from 'react';
import {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {commonColor} from '../../style/common.js';
import Balance from '../../components/Balance';
import CreateAccountHeader from './componnet/CreateAccountHeader';
interface Params {
  blank: string;
  type: string;
}
interface params {
  params: Params;
}
interface navigation {
  state: params;
}
interface Props {
  navigation: navigation;
}
export default class CreateBlankAccount extends Component<Props> {
  static navigationOptions = {
    title: '新建账户',
  };
  render() {
    const {blank, type} = this.props.navigation.state.params;
    return (
      <View>
        {/* 头部及备注信息 */}
        <CreateAccountHeader blank={blank} type={type}></CreateAccountHeader>
        {/* 余额 */}
        <Balance type={type}></Balance>
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
