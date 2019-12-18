import React from 'react';
import {
  TouchableOpacity,
  View,
  Modal,
  Animated,
  StyleSheet,
  Text,
} from 'react-native';

class ActionSheet extends React.Component {
  translateY = 150;
  state = {
    visible: true,
    sheetAnim: new Animated.Value(this.translateY),
  };
  cancel = () => {
    console.log('123');
    this.setState({
      visible: false,
    });
    Animated.timing(this.state.sheetAnim, {
      toValue: this.translateY,
      duration: 150,
    }).start();
  };
  show = () => {
    this.setState({
      visible: true,
    });
    Animated.timing(this.state.sheetAnim, {
      toValue: 0,
      duration: 250,
    }).start();
  };
  render() {
    const {visible} = this.state;
    return (
      <Modal
        visible={visible}
        transparent={true}
        animationType="none"
        onRequestClose={this.cancel}>
        <View style={[styles.wrapper]}>
          <TouchableOpacity
            style={[styles.overlay]}
            onPress={this.cancel}></TouchableOpacity>
          <Animated.View
            style={[
              styles.bd,
              {
                height: this.translateY,
                transform: [{translateY: this.state.sheetAnim}],
              },
            ]}>
            <Text>asdfasfasfasdf</Text>
          </Animated.View>
        </View>
      </Modal>
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
    width: '100%',
  },
});
export default ActionSheet;
