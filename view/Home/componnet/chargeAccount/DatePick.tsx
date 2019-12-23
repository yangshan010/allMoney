import React from 'react';
import {Component} from 'react';
import {
  TouchableOpacity,
  View,
  Modal,
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icongou from '../../../../assets/iconfont/Icongou';
import Iconsanjiao from '../../../../assets/iconfont/Iconjiantou';
import {commonColor} from '../../../../style/common.js';
interface Props {
  date: Date;
  sendDate: Function;
  cancel: Function;
}
export default class DatePick extends Component<Props> {
  translateY = 300;
  state = {
    sheetAnim: new Animated.Value(this.translateY),
    selectDate: this.props.date,
  };
  componentDidMount() {
    this.show();
  }
  show = () => {
    Animated.timing(this.state.sheetAnim, {
      toValue: 0,
      duration: 250,
    }).start();
  };
  cancel = () => {
    console.log('guanbi');
    Animated.timing(this.state.sheetAnim, {
      toValue: this.translateY,
      duration: 250,
    }).start();
    setTimeout(this.props.cancel, 300);
  };
  setDate = (event: object, date: Date) => {
    this.setState({
      selectDate: date,
    });
  };
  sendDate = () => {
    this.props.sendDate(this.state.selectDate);
    this.cancel();
  };
  render() {
    const {cancel} = this.props;
    let {selectDate} = this.state;

    return (
      //   <Modal
      //     visible={true}
      //     transparent={true}
      //     animationType="none"
      //     onRequestClose={cancel}>
      <View style={[styles.wrapper]}>
        <TouchableOpacity
          style={[styles.overlay]}
          onPress={this.cancel}></TouchableOpacity>
        <Animated.View
          style={[
            styles.bd,
            {
              height: 300,
              transform: [{translateY: this.state.sheetAnim}],
            },
          ]}>
          <View style={[styles.header]}>
            <TouchableWithoutFeedback onPress={this.cancel}>
              <View>
                <Iconsanjiao size={28}></Iconsanjiao>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.sendDate}>
              <View>
                <Icongou size={38}></Icongou>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <DateTimePicker
            value={selectDate}
            timeZoneOffsetInMinutes={8 * 60}
            onChange={this.setDate}
            locale="zh-Hans"
            display="calendar"
            mode="date"></DateTimePicker>
        </Animated.View>
      </View>
      //   </Modal>
    );
  }
}

const styles = StyleSheet.create({
  showDateBox: {
    // justifyContent: 'flex-start',
    // flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
    // alignItems: 'center',
  },

  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 10,
    right: 0,
    zIndex: 999,
    // backgroundColor: 'rgba(0,0,0,0.45)',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 999,
    // backgroundColor: 'rgba(0,0,0,0.45)',
  },
  bd: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    width: '100%',
    zIndex: 999,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: commonColor.grey,
    borderBottomWidth: 2,

    borderTopColor: commonColor.grey,
    borderTopWidth: 2,
    backgroundColor: commonColor.grey,
  },
});
