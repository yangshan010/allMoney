import React from 'react';

import {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import IconJT from '../../assets/iconfont/Iconjiaotong';
import IconGF from '../../assets/iconfont/Iconguangfa';
import IconZX from '../../assets/iconfont/Iconzhongxin';
import IconZS from '../../assets/iconfont/Iconzhaoshang';
import IconJS from '../../assets/iconfont/Iconjianshe';
import IconPA from '../../assets/iconfont/Iconpingan';
import {commonColor} from '../../style/common.js';
export default class BlankList extends Component {
  static navigationOptions = {
    title: '银行卡',
  };
  toPage = (blank: string) => {
    const {type} = this.props.navigation.state.params;
    console.log('blank', type, blank);
    // if (type === 'debit') {
    this.props.navigation.navigate('CreateBlankAccount', {blank, type});
    // } else {
    //   this.props.navigation.navigate('CreateBlankAccount', {blank});
    // }
  };
  render() {
    return (
      <View style={[styles.layout]}>
        <View style={[styles.listContent]}>
          <TouchableOpacity onPress={this.toPage.bind(this, 'JT')}>
            <View style={[styles.listItem]}>
              <IconJT size={28}></IconJT>
              <Text style={[styles.text]}>交通银行</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toPage.bind(this, 'GF')}>
            <View style={[styles.listItem]}>
              <IconGF size={28}></IconGF>
              <Text style={[styles.text]}>广发银行</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toPage.bind(this, 'ZX')}>
            <View style={[styles.listItem]}>
              <IconZX size={28}></IconZX>
              <Text style={[styles.text]}>中信银行</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toPage.bind(this, 'ZS')}>
            <View style={[styles.listItem]}>
              <IconZS size={28}></IconZS>
              <Text style={[styles.text]}>招商银行</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toPage.bind(this, 'JS')}>
            <View style={[styles.listItem]}>
              <IconJS size={28}></IconJS>
              <Text style={[styles.text]}>建设银行</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toPage.bind(this, 'PA')}>
            <View style={[styles.listItem]}>
              <IconPA size={28}></IconPA>
              <Text style={[styles.text]}>平安银行</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  layout: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  listContent: {},
  listItem: {
    paddingBottom: 22,
    paddingTop: 22,
    borderBottomColor: commonColor.grey,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Icon: {},
  text: {
    fontSize: 18,
    marginLeft: 8,
  },
});
