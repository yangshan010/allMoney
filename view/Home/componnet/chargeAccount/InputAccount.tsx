import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  StyleSheet,
} from 'react-native';
import Iconjiansheyinhang from '../../../../assets/iconfont/Iconjianshe';
class InputAccount extends React.Component {
  state = {};

  render() {
    return (
      <View style={[styles.layout]}>
        <View style={[styles.selectBlank]}>
          <Iconjiansheyinhang size={42}></Iconjiansheyinhang>
          <View style={[styles.blankContent]}>
            <Text style={[styles.blankName]}>建设银行</Text>
            <Text style={[styles.blackType]}>信用卡</Text>
          </View>
        </View>
        <View style={[styles.input]}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '900',
              color: '#FB4D56',
              marginRight: 5,
            }}>
            ¥
          </Text>
          <TextInput
            keyboardType="numeric"
            placeholder="0.00"
            placeholderTextColor="#FB4D56"
            style={[styles.inputText]}
            maxLength={11}></TextInput>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  layout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomColor: '#F6F5F6',
    borderBottomWidth: 8,
    paddingTop: 10,
    paddingBottom: 10,
  },
  selectBlank: {
    borderRightColor: '#F2F2F2',
    borderRightWidth: 1.1,
    height: 40,

    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 20,
  },
  blankContent: {},
  blankName: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 8,
  },
  blackType: {
    color: '#96979E',
  },
  input: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingRight: 20,
  },
  inputText: {
    height: 40,
    color: '#FB4D56',
    textAlign: 'right',
    fontWeight: '900',
    fontSize: 20,
  },
});

export default InputAccount;
