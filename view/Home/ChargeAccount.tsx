import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  TouchableWithoutFeedback,
  TextInput,
  ScrollView,
} from 'react-native';
import Iconx from '../../assets/iconfont/Iconx';
import Iconrili from '../../assets/iconfont/Iconrili';
import moment from 'moment';
import InputAccount from './componnet/chargeAccount/InputAccount';
import SelectCategory from './componnet/chargeAccount/SelectCategory';
import AllMoneyDatePick from './componnet/chargeAccount/DatePick';
import {commonColor} from '../../style/common.js';
import SelectAccount from './componnet/chargeAccount/SelectAccount';
import {getScreenHeight} from '../../utils/common.js';

class ChargeAccount extends React.Component {
  constructor(props) {
    super(props);
  }
  translateY = 150;
  state = {
    visible: false,
    showSelectAccount: false,
    date: '',
  };
  static navigationOptions = {
    header: null,
  };
  cancel = () => {
    console.log('123');
    this.setState({
      visible: false,
    });
  };
  show = () => {
    this.setState({
      visible: true,
    });
  };
  showSelectAccount = () => {
    this.setState({
      showSelectAccount: !this.state.showSelectAccount,
    });
  };
  selectDate = (date: Date) => {
    this.setState({
      date,
    });
  };
  showDate = () => {
    const {date} = this.state;
    const nowDate = moment(new Date()).format('YYYY-MM-DD');
    const nowYear = moment(new Date()).format('YYYY');
    const formatDate = moment(date).format('YYYY-MM-DD');
    const formatYear = moment(date).format('YYYY');
    if (!date || formatDate === nowDate) {
      return '今天';
    }
    if (nowYear === formatYear) {
      return moment(date).format('MM-DD');
    }
    return formatDate;
  };
  render() {
    const {visible, showSelectAccount} = this.state;
    console.log('showSelectAccount,', showSelectAccount);
    return (
      <SafeAreaView>
        <ScrollView keyboardDismissMode={true} scrollEnabled={false}>
          <View style={[styles.layout]}>
            {/* 头部 */}
            <View style={[styles.header, styles.paddingLeft]}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Iconx color="#2D2C3B"></Iconx>
              </TouchableOpacity>
              <View style={[styles.headerOption]}>
                <View
                  style={[
                    styles.headerOptionLeft,
                    styles.headerOptionSelected,
                  ]}>
                  <Text
                    style={[
                      styles.headerOptionText,
                      styles.headerOptionSelected,
                    ]}>
                    流出
                  </Text>
                </View>
                <View style={styles.headerOptionMiddle}>
                  <Text style={[styles.headerOptionText]}>流入</Text>
                </View>
                <View style={[styles.headerOptionRight]}>
                  <Text style={[styles.headerOptionText]}>内部转账</Text>
                </View>
              </View>
            </View>
            {/* 金额输入 */}
            <InputAccount
              showSelectAccount={this.showSelectAccount}></InputAccount>
            {/* 选择消费类别 */}
            <SelectCategory></SelectCategory>
            {/* 其他信息 */}
            <View style={styles.otherMsg}>
              <TouchableWithoutFeedback onPress={this.show}>
                <View style={[styles.showDateBox]}>
                  <Iconrili></Iconrili>
                  <Text style={{marginLeft: 10}}>{this.showDate()}</Text>
                </View>
              </TouchableWithoutFeedback>

              <View style={[styles.remarkBox]}>
                <TextInput
                  style={[styles.remarkInput]}
                  placeholder="请输入备注信息"></TextInput>
              </View>
              <View></View>
            </View>
            {/* 底部按钮  */}
            <View style={[styles.bottomButton]}>
              <TouchableOpacity style={[styles.button]}>
                <Text style={[styles.againText]}>再记一笔</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.saveButton]}>
                <Text style={[styles.saveText]}>保存</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        {/* 时间选择 */}
        {visible && (
          <AllMoneyDatePick
            cancel={this.cancel}
            sendDate={this.selectDate}
            date={
              this.state.date ? this.state.date : new Date()
            }></AllMoneyDatePick>
        )}
        {/* 选择账户 */}
        {showSelectAccount && (
          <SelectAccount cancel={this.showSelectAccount}></SelectAccount>
        )}
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  layout: {
    height: getScreenHeight(),
  },
  paddingLeft: {
    paddingLeft: 20,
  },
  header: {
    borderBottomColor: '#F1F1F1',
    borderBottomWidth: 1,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
  otherMsg: {
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
  },
  datePick: {
    width: 100,
  },
  showDateBox: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: commonColor.grey,
    alignItems: 'center',
    minWidth: 80,
    // paddingBottom: 8,
    paddingLeft: 8,
    marginRight: 5,
    // borderWidth: 1,
    // borderColor: 'black',
    height: 35,
  },
  remarkBox: {
    borderBottomWidth: 1,
    borderBottomColor: commonColor.grey,
    height: 35,
    alignItems: 'center',
    flexDirection: 'row',
    width: '70%',
  },
  remarkInput: {
    // borderBottomWidth: 1,
    // borderBottomColor: commonColor.grey,
  },
  bottomButton: {
    position: 'absolute',
    bottom: 100,
    flexDirection: 'row',

    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    width: 160,
    height: 50,
    borderColor: commonColor.red,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  againText: {
    color: commonColor.red,
    fontSize: 18,
  },
  saveText: {
    color: '#fff',
    fontSize: 18,
  },
  saveButton: {
    backgroundColor: commonColor.red,
  },
});
export default ChargeAccount;
