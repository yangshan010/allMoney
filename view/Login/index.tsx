import React from 'react';
import {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Iconmoney from '../../assets/iconfont/Iconmoney';
import Iconwode from '../../assets/iconfont/Iconwode';
import Password from '../../assets/iconfont/IconsoloIconIsnotvisible';
import {commonColor} from '../../style/common.js';
interface Props {
  navigation: any;
}
export default class Index extends Component<Props> {
  onSubmit = () => {
    this.props.navigation.navigate('App');
  };
  render() {
    return (
      <View style={[styles.layout]}>
        <View style={{width: '100%'}}>
          <View style={[styles.iconLayout]}>
            <Iconmoney size={100}></Iconmoney>
          </View>

          <View style={[styles.user, styles.icon, styles.input]}>
            <Iconwode></Iconwode>
            <TextInput
              placeholder="请输入用户名"
              style={[styles.textInput]}
              maxLength={20}></TextInput>
          </View>
          <View style={[styles.password, styles.icon, styles.input]}>
            <Password></Password>
            <TextInput
              style={[styles.textInput]}
              placeholder="密码"
              secureTextEntry={true}
              textContentType="password"
              maxLength={20}></TextInput>
          </View>
        </View>
        <View style={[styles.buttonLayout]}>
          <TouchableOpacity style={[styles.button]} onPress={this.onSubmit}>
            <Text style={[styles.buttonText]}>登录</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  layout: {
    // justifyContent: 'center',
    // flexDirection: 'row',
    // alignItems: 'center',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
  },
  iconLayout: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 150,
  },
  user: {
    marginTop: 40,
  },
  password: {},
  icon: {},
  input: {
    width: '100%',
    flexDirection: 'row',
    borderBottomColor: commonColor.grey,
    borderBottomWidth: 1,
    paddingTop: 20,
    paddingBottom: 20,
  },
  textInput: {
    fontSize: 18,
    marginLeft: 10,
    width: 200,
  },
  buttonLayout: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    marginTop: 40,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: commonColor.red,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 50,
  },
});
12312;
