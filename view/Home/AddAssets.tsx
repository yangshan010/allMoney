import React from 'react';
import {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Assets from './componnet/addAssets/Assets';
interface Props {
  navigation: object;
}
export default class AddAssets extends Component<Props> {
  static navigationOptions = {
    title: '添加资产',
  };
  state = {};
  render() {
    return (
      <View style={[styles.layout]}>
        {/* 头部选择卡 */}
        <View style={[styles.header]}>
          <View style={[styles.headerOption]}>
            <View
              style={[styles.headerOptionLeft, styles.headerOptionSelected]}>
              <Text
                style={[styles.headerOptionText, styles.headerOptionSelected]}>
                资金
              </Text>
            </View>
            <View style={styles.headerOptionMiddle}>
              <Text style={[styles.headerOptionText]}>投资</Text>
            </View>
            <View style={[{justifyContent: 'center', flex: 1}]}>
              <Text style={[styles.headerOptionText]}>应收</Text>
            </View>
            <View style={[styles.headerOptionRight]}>
              <Text style={[styles.headerOptionText]}>应付</Text>
            </View>
          </View>
        </View>
        {/* 列表   */}
        <Assets navigation={this.props.navigation}></Assets>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  layout: {},
  header: {
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  headerOption: {
    width: 240,
    height: 30,
    borderColor: '#3F475B',
    borderWidth: 1.5,
    borderRadius: 10,
    marginLeft: '12%',
    marginRight: '12%',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
  },
  headerOptionLeft: {
    justifyContent: 'center',
    alignItems: 'center',

    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    flex: 1,
  },
  headerOptionMiddle: {
    borderRightColor: '#3F475B',
    borderRightWidth: 1.5,
    borderLeftColor: '#3F475B',
    borderLeftWidth: 1.5,
    justifyContent: 'center',
    lineHeight: 30,
    flex: 1,
    // paddingLeft: 25,
    // paddingRight: 25,
    // fontSize: 20,
  },
  headerOptionRight: {
    justifyContent: 'center',
    // paddingRight: 10,
    flex: 1,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderLeftWidth: 1.5,
    borderLeftColor: '#3F475B',
  },
  headerOptionText: {
    textAlign: 'center',
    color: '#3F475B',
    fontWeight: '500',
  },
  headerOptionSelected: {
    color: 'white',
    backgroundColor: '#3F475B',
  },
});
