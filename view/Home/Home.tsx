import React from 'react';
import {PanResponder} from 'react-native';
import IconMyIconIsvisible from '../../assets/iconfont/IconMyIconIsvisible';
import {
  View,
  Text,
  Button,
  StatusBar,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';
import AssetsAccount from './componnet/AssetsAccount';
import {getScreenWidth, countFormat} from '../../utils/common.js';
import Icongouduijilu from '../../assets/iconfont/Icongouduijilu';
import LinearGradient from 'react-native-linear-gradient';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '',
    headerStyle: {
      backgroundColor: 'rgb(58,149,254)',
    },
  };
  state = {
    move: 0,
    screenWidth: getScreenWidth(),
    headerStep: 0,
    sheetAnim: new Animated.Value(0),
  };
  startLocationX = 0;

  _panResponder = PanResponder.create({
    // 要求成为响应者：
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

    onPanResponderGrant: (evt, gestureState) => {
      // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
      // gestureState.{x,y} 现在会被设置为0
      // console.log('开始====》', evt.nativeEvent, gestureState.x0);
      this.startLocationX = evt.nativeEvent.locationX;
    },
    onPanResponderMove: (evt, gs) => {
      // 最近一次的移动距离为gestureState.move{X,Y}
      // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
      // console.log('移动', evt.nativeEvent.locationX, gestureState);
      const moveValue = evt.nativeEvent.locationX - this.startLocationX;
      // this.setState({
      //   move: gs.dx,
      // });
      console.log(this.state.sheetAnim._value);
      // if (this.state.sheetAnim._value < 0) {
      //   Animated.timing(this.state.sheetAnim, {
      //     toValue: moveValue,
      //     duration: 0,
      //   }).start();
      // } else {
      Animated.timing(this.state.sheetAnim, {
        toValue: this.state.sheetAnim._value + moveValue,
        duration: 0,
      }).start();
      // }
    },
    onPanResponderTerminationRequest: (evt, gestureState) => true,
    onPanResponderRelease: (evt, gestureState) => {
      // console.log('结束====》', evt.nativeEvent, gestureState.x0);
      // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
      // 一般来说这意味着一个手势操作已经成功完成。
      const {screenWidth} = this.state;
      let {headerStep} = this.state;
      console.log(gestureState.dx);
      const distance = gestureState.dx;
      let move = 0;
      if (headerStep === 0) {
        if (distance > 0) {
        } else {
          move = distance < -90 ? -screenWidth : 0;
          headerStep = distance < -90 ? 1 : 0;
        }
      } else {
        move = distance > 80 ? 0 : -screenWidth;
        headerStep = distance > 80 ? 0 : 1;
      }
      Animated.timing(this.state.sheetAnim, {
        toValue: move,
        duration: 250,
      }).start();
      this.setState({
        // move,
        headerStep,
      });
    },
    onPanResponderTerminate: (evt, gestureState) => {
      // console.log('开始', evt);
      // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
    },
    onShouldBlockNativeResponder: (evt, gestureState) => {
      // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
      // 默认返回true。目前暂时只支持android。
      return true;
    },
  });
  componentDidMount() {}
  iconClick = () => {
    console.log(1);
  };

  render() {
    const {headerStep} = this.state;
    return (
      // <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View>
        {/* 头部 */}
        <View
          style={[styles.header, styles.border]}
          {...this._panResponder.panHandlers}>
          <Animated.View style={(styles.content, {left: this.state.sheetAnim})}>
            <View style={[styles.first]}>
              <Text style={[styles.grey, styles.title]}>本月支出(元)</Text>
              <Text style={[styles.grey, styles.font28]}>
                ¥{countFormat(123124.12)}
              </Text>
              <View style={[styles.icon]}>
                <IconMyIconIsvisible color="#eee"></IconMyIconIsvisible>
              </View>

              <View style={[styles.statistical]}>
                <View style={[styles.income]}>
                  <Text style={[styles.grey, styles.label]}>本月收入</Text>
                  {/* <Text style={[styles.grey]}>暂无收入</Text> */}
                  <Text style={[styles.grey]}>{countFormat(5261)}</Text>
                </View>
                <View style={[styles.budget]}>
                  <Text style={[styles.grey, styles.label]}>预算剩余</Text>
                  <Text style={[styles.grey]}>2910</Text>
                </View>
              </View>
            </View>

            <View style={[styles.second]}>
              <Text style={[styles.grey, styles.title]}>我的净资产(元)</Text>
              <Text style={[styles.grey, styles.font28]}>
                ¥{countFormat(124124)}
              </Text>
              <View style={[styles.statistical]}>
                <View style={[styles.income]}>
                  <Text style={[styles.grey, styles.label]}>本月收入</Text>
                  <Text style={[styles.grey]}>暂无收入</Text>
                </View>
                <View style={[styles.budget]}>
                  <Text style={[styles.grey, styles.label]}>预算剩余</Text>
                  <Text style={[styles.grey]}>29101</Text>
                </View>
              </View>
            </View>
          </Animated.View>
          <View style={[styles.dotContent]}>
            <View
              style={[
                styles.dotItem,
                headerStep === 0 ? styles.dotSelected : {},
              ]}></View>
            <View
              style={[
                styles.dotItem,
                headerStep === 1 ? styles.dotSelected : {},
              ]}></View>
          </View>
        </View>
        {/* 中间记一笔 */}
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          colors={['#42A9FE', '#3E93FF']}
          style={[styles.middleButton]}>
          <TouchableOpacity
            style={[styles.addCount]}
            onPress={() => this.props.navigation.navigate('ChargeAccount')}>
            <Text style={[styles.addCountText]}>
              <Icongouduijilu
                color="#fff"
                size={16}
                style={{marginRight: 10}}></Icongouduijilu>
              记一笔
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.addAccount]}
            onPress={() => this.props.navigation.navigate('AddAssets')}>
            <Text style={[styles.addAccountText]}>添加资产</Text>
          </TouchableOpacity>
        </LinearGradient>
        {/* 资产管理 */}
        <AssetsAccount></AssetsAccount>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  border: {
    // borderColor: 'black',
    // borderTopWidth: 1,
    // borderWidth: 1,
  },
  title: {
    marginBottom: 10,
    color: '#eee',
  },
  label: {
    marginRight: 10,
  },
  font28: {
    fontSize: 28,
  },
  content: {
    position: 'relative',
    height: 120,
  },
  header: {
    height: 140,
    backgroundColor: 'rgb(58,149,254)',
    position: 'relative',
  },
  first: {
    padding: 10,
    position: 'absolute',
    left: 0,
    width: `100%`,

    height: 120,
  },
  icon: {
    position: 'absolute',
    right: 20,
    top: 45,
  },
  second: {
    height: 120,

    width: `100%`,
    position: 'absolute',
    left: `100%`,
    padding: 10,
  },
  grey: {
    color: '#eee',
  },
  statistical: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  budget: {
    flex: 1,

    flexDirection: 'row',
  },
  income: {
    flex: 1,
    flexDirection: 'row',
  },
  middleButton: {
    margin: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderRadius: 4,
  },
  addCount: {
    borderRightWidth: 1,
    borderRightColor: '#43A9FF',
    flex: 3,
    alignItems: 'center',
  },
  addAccount: {
    flex: 1,
    alignItems: 'center',
  },
  addCountText: {
    fontSize: 18,
    color: '#fff',
  },
  addAccountText: {
    fontSize: 12,
    color: '#fff',
  },
  dotContent: {
    position: 'absolute',
    bottom: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // textAlign:'center'
  },
  dotItem: {
    height: 5,
    width: 5,
    borderRadius: 6,
    backgroundColor: '#fff',
    marginRight: 6,
    opacity: 0.4,
  },
  dotSelected: {
    opacity: 1,
  },
});
export default HomeScreen;
