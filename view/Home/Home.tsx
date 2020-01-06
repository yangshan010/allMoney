import React from 'react';
import {PanResponder} from 'react-native';
import IconMyIconIsvisible from '../../assets/iconfont/IconMyIconIsvisible';
import {View, Text, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import AssetsAccount from './componnet/AssetsAccount';
import {getScreenWidth, countFormat} from '../../utils/common.js';
import Icongouduijilu from '../../assets/iconfont/Icongouduijilu';
import LinearGradient from 'react-native-linear-gradient';
interface navigate {
  navigate: Function;
}
interface Props {
  navigation: navigate;
}

interface State {
  headerStep: number;
}
class HomeScreen extends React.Component<Props, State> {
  static navigationOptions = {
    title: '',
    headerStyle: {
      backgroundColor: 'rgb(58,149,254)',
    },
  };
  loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length); // Error: T doesn't have .length
    return arg;
  }

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
      this.startLocationX = evt.nativeEvent.locationX;
    },
    onPanResponderMove: (evt, gs) => {
      const moveValue = evt.nativeEvent.locationX - this.startLocationX;

      console.log(this.state.sheetAnim._value);

      Animated.timing(this.state.sheetAnim, {
        toValue: this.state.sheetAnim._value + moveValue,
        duration: 0,
      }).start();
      // }
    },
    onPanResponderTerminationRequest: (evt, gestureState) => true,
    onPanResponderRelease: (evt, gestureState) => {
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
    onPanResponderTerminate: (evt, gestureState) => {},
    onShouldBlockNativeResponder: (evt, gestureState) => {
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
  border: {},
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
