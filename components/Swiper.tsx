import React from 'react';

import {Component} from 'react';

import {View, Text, Animated, PanResponder, StyleSheet} from 'react-native';

import {getScreenWidth} from '../utils/common.js';

export default class Swiper extends Component {
  state = {
    dotStep: 0,
    sheetAnim: new Animated.Value(0),
    screenWidth: getScreenWidth(),
  };
  startLocationX = 0;
  _panResponder = PanResponder.create({
    // 要求成为响应者：
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
    onPanResponderTerminationRequest: (evt, gestureState) => true,
    onPanResponderGrant: (evt, gestureState) => {
      // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
      // gestureState.{x,y} 现在会被设置为0

      this.startLocationX = evt.nativeEvent.locationX;
    },

    onPanResponderMove: (evt, gs) => {
      // 最近一次的移动距离为gestureState.move{X,Y}
      // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
      // console.log('移动', evt.nativeEvent.locationX, gestureState);
      const moveValue = evt.nativeEvent.locationX - this.startLocationX;
      //   console.log(this.state.sheetAnim._value);
      Animated.timing(this.state.sheetAnim, {
        toValue: this.state.sheetAnim._value + moveValue,
        duration: 0,
      }).start();
    },
    onPanResponderRelease: (evt, gestureState) => {
      // console.log('结束====》', evt.nativeEvent, gestureState.x0);
      // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
      // 一般来说这意味着一个手势操作已经成功完成。
      const {screenWidth} = this.state;
      let {dotStep} = this.state;

      const distance = gestureState.dx;
      console.log('distance', distance);
      if (distance === 0) return;
      // 滑动的方向， >0: 向左  <0 : 向右
      const direction = distance > 0 ? 'left' : 'right';
      let move = dotStep * -screenWidth;
      console.log('direction', direction);
      console.log('move', move);
      //&& dotStep !== 0 && dotStep !== this.dotCount.length-1
      if (Math.abs(distance) > 80) {
        // 决定翻向那一页 dotStep === 0 表明是第一页，如果是第一页 向左，不做操作，向右同理
        if (direction === 'left' && dotStep !== 0) {
          dotStep = dotStep - 1;
          move = move + screenWidth;
        } else if (
          direction === 'right' &&
          dotStep !== this.dotCount.length - 1
        ) {
          dotStep = dotStep + 1;
          move = move - screenWidth;
        }
      }
      Animated.timing(this.state.sheetAnim, {
        toValue: move,
        duration: 250,
      }).start();
      this.setState({
        // move,
        dotStep,
      });
    },
  });
  get dotCount() {
    const type = Object.prototype.toString.call(this.props.children);

    if (type === '[object Array]') {
      let arr = this.props.children.map((item: number, index: number) => {
        return index;
      });
      return arr;
    }
    return [0];
  }
  render() {
    const {dotStep} = this.state;
    return (
      <View style={[styles.layout]} {...this._panResponder.panHandlers}>
        <Animated.View
          style={[
            styles.content,
            {transform: [{translateX: this.state.sheetAnim}]},
          ]}>
          {this.props.children}
        </Animated.View>
        <View style={[styles.dotContent]}>
          {this.dotCount.map((item: number, index: number) => {
            return (
              <View
                key={index}
                style={[
                  styles.dotItem,
                  dotStep === index ? styles.dotSelected : {},
                ]}></View>
            );
          })}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  layout: {
    // height: 140,
    backgroundColor: 'white',
    position: 'relative',
  },
  content: {
    position: 'relative',
    flexDirection: 'row',
  },
  dotContent: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    zIndex: 999,
    // textAlign:'center'
  },
  dotItem: {
    height: 5,
    width: 5,
    borderRadius: 6,
    backgroundColor: 'black',
    marginRight: 6,
    opacity: 0.3,
  },
  dotSelected: {
    opacity: 1,
  },
});
