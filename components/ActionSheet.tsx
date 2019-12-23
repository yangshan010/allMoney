import React from 'react';
import {
  TouchableOpacity,
  View,
  Modal,
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
interface Props {
  cancel: Function;
  height: number;
}
class ActionSheet extends React.Component<Props> {
  translateY = 150;
  state = {
    visible: true,
    sheetAnim: new Animated.Value(this.props.height),
  };
  componentDidMount() {
    this.show();
  }
  cancel = () => {
    Animated.timing(this.state.sheetAnim, {
      toValue: this.props.height,
      duration: 150,
    }).start();
    setTimeout(() => this.props.cancel(), 150);
  };

  show = () => {
    Animated.timing(this.state.sheetAnim, {
      toValue: 0,
      duration: 250,
    }).start();
  };
  render() {
    return (
      <View style={[styles.wrapper]}>
        <TouchableWithoutFeedback onPress={this.cancel}>
          <View style={[styles.overlay]}></View>
        </TouchableWithoutFeedback>
        <Animated.View
          style={[
            styles.bd,
            {
              transform: [{translateY: this.state.sheetAnim}],
            },
          ]}>
          {this.props.children}
        </Animated.View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    // backgroundColor: 'rgba(0,0,0,0.45)',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  bd: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    width: '98%',
    borderRadius: 6,
  },
});
export default ActionSheet;
