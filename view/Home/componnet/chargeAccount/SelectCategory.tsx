import React from 'react';
import {Component} from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {commonColor} from '../../../../style/common.js';
import IconZheshang from '../../../../assets/iconfont/IconyinhangZheshang';
console.log('commonColor', commonColor);
export default class SelectCategory extends Component {
  render() {
    return (
      <View style={[styles.layout]}>
        {/* 头部选择 */}
        <View style={[styles.header]}>
          <View style={[styles.headerItem]}>
            <View style={styles.borderBottom}></View>
            <Text
              style={[styles.headerItemText, styles.headerItemTextSelected]}>
              默认
            </Text>
          </View>
          <View style={[styles.headerItem]}>
            <View></View>
            <Text style={[styles.headerItemText]}>旅行账本</Text>
          </View>
          <View style={[styles.headerItem]}>
            <View></View>
            <Text style={[styles.headerItemText]}>人情事故</Text>
          </View>
        </View>
        {/* 具体类型 */}
        <View style={[styles.content]}>
          <View style={[styles.categoryBox]}>
            <View style={[styles.categoryItem]}>
              <IconZheshang size={42}></IconZheshang>
              <Text>饮食</Text>
            </View>
            <View style={[styles.categoryItem]}>
              <IconZheshang size={42}></IconZheshang>
              <Text>饮食</Text>
            </View>
            <View style={[styles.categoryItem]}>
              <IconZheshang size={42}></IconZheshang>
              <Text>饮食</Text>
            </View>
            <View style={[styles.categoryItem]}>
              <IconZheshang size={42}></IconZheshang>
              <Text>饮食</Text>
            </View>
            <View style={[styles.categoryItem]}>
              <IconZheshang size={42}></IconZheshang>
              <Text>饮食</Text>
            </View>
            <View style={[styles.categoryItem]}>
              <IconZheshang size={42}></IconZheshang>
              <Text>饮食</Text>
            </View>
            <View style={[styles.categoryItem]}>
              <IconZheshang size={42}></IconZheshang>
              <Text>饮食</Text>
            </View>
            <View style={[styles.categoryItem]}>
              <IconZheshang size={42}></IconZheshang>
              <Text>饮食</Text>
            </View>
            <View style={[styles.categoryItem]}>
              <IconZheshang size={42}></IconZheshang>
              <Text>饮食</Text>
            </View>
            <View style={[styles.categoryItem]}>
              <IconZheshang size={42}></IconZheshang>
              <Text>饮食</Text>
            </View>
          </View>
          {/* 下面的圆圈 */}
          <View style={[styles.circleBox]}>
            <View style={[styles.circleItem]}></View>
            <View style={[styles.circleItem]}></View>
            <View style={[styles.circleItem]}></View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  layout: {},
  header: {
    borderBottomWidth: 1,
    borderBottomColor: commonColor.grey,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerItem: {
    width: 80,
    // borderColor: 'black',
    // borderWidth: 1,
    height: '100%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderBottom: {
    width: 20,
    height: 2,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 0,
    borderRadius: 10,
  },
  headerItemText: {
    color: commonColor.fontGrey,
    textAlign: 'center',
    borderBottomColor: 'red',
    borderBottomWidth: 1,
  },
  headerItemSelected: {},
  headerItemTextSelected: {
    color: 'black',
  },
  content: {
    height: 160,
    // borderWidth: 1,
    // borderColor: 'black',
    marginTop: 10,
  },
  categoryBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  category: {},
  categoryItem: {
    // justifyContent: 'center',
    width: '20%',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'black',
    paddingTop: 10,
    paddingBottom: 10,
  },
  circleBox: {
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  circleItem: {
    width: 5,
    height: 5,
    backgroundColor: '#D2D2D2',
    borderRadius: 5,
    marginRight: 4,
  },
});
