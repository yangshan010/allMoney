import React, {useState} from 'react';
import Icontriangle1 from '../../../assets/iconfont/Icontriangle1';
import Icontriangle from '../../../assets/iconfont/Icontriangle';
import IconJiansheyinhang from '../../../assets/iconfont/Iconjianshe';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {countFormat} from '../../../utils/common.js';

// class AssetsAccount extends React.Component {

// render() {

function AssetsAccount() {
  const [isShow, setSHow] = useState(false);

  const handleChange = () => {
    console.log('123');
    setSHow(!isShow);
  };
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>资产账户</Text>
      <View style={styles.list}>
        {/* 资产账户 */}
        <TouchableWithoutFeedback onPress={handleChange}>
          <View style={[styles.listItem]}>
            {/* 显示的部分 */}
            <View style={[styles.listItemVisible]}>
              {isShow && (
                <Icontriangle color="#BBBCBB" size={12}></Icontriangle>
              )}
              {!isShow && (
                <Icontriangle1 color="#BBBCBB" size={12}></Icontriangle1>
              )}

              <Text style={[styles.account]}>资金账户</Text>
              <Text style={[styles.accountCount]}>99</Text>
              <Text style={[styles.sum]}>¥{countFormat(51255)}</Text>
            </View>
            {/* 隐藏的部分 */}
            <View
              style={[styles.listItemHidden, !isShow && styles.hiddenStyle]}>
              <View style={[styles.hiddenItem]}>
                <IconJiansheyinhang size={44}></IconJiansheyinhang>
                <View style={styles.middleAccount}>
                  <Text style={[styles.account, styles.middleAccountText]}>
                    建设银行
                  </Text>
                  <Text style={{color: '#96979E'}}>信用卡</Text>
                </View>

                <Text style={[styles.sum, {width: '65%'}]}>
                  ¥{countFormat(51255)}
                </Text>
              </View>
              <View style={[styles.hiddenItem]}>
                <IconJiansheyinhang size={44}></IconJiansheyinhang>
                <View style={styles.middleAccount}>
                  <Text style={[styles.account, styles.middleAccountText]}>
                    建设银行
                  </Text>
                  <Text style={{color: '#96979E'}}>信用卡</Text>
                </View>

                <Text style={[styles.sum, {width: '65%'}]}>
                  ¥{countFormat(51255)}
                </Text>
              </View>
              <View style={[styles.hiddenItem]}>
                <IconJiansheyinhang size={44}></IconJiansheyinhang>
                <View style={styles.middleAccount}>
                  <Text style={[styles.account, styles.middleAccountText]}>
                    建设银行
                  </Text>
                  <Text style={{color: '#96979E'}}>信用卡</Text>
                </View>

                <Text style={[styles.sum, {width: '65%'}]}>
                  ¥{countFormat(51255)}
                </Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>

        {/* // */}
      </View>
    </View>
  );
  // }
  // }
}
const styles = StyleSheet.create({
  hiddenStyle: {
    height: 0,
    overflow: 'hidden',
  },
  layout: {
    marginTop: 20,
  },
  title: {
    paddingLeft: 10,
    fontSize: 16,
    marginBottom: 20,
    fontWeight: '500',
  },
  list: {},
  listItem: {
    borderBottomColor: '#F6F6F6',
    borderBottomWidth: 1,
  },
  middleAccount: {
    height: '100%',
    justifyContent: 'center',

    alignItems: 'flex-start',
  },
  middleAccountText: {
    marginLeft: 0,
    marginBottom: 10,
  },
  listItemVisible: {
    height: 70,

    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 8,
    justifyContent: 'flex-start',
  },
  listItemHidden: {
    backgroundColor: '#F6F8FA',
    // height: 0,
    // overflow: 'hidden',
  },
  hiddenItem: {
    borderBottomColor: '#F2F4F5',
    borderBottomWidth: 1,
    height: 80,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 8,
    justifyContent: 'flex-start',
  },
  account: {
    marginLeft: 5,
    marginRight: 3,
    fontSize: 16,
    fontWeight: '500',
  },
  accountCount: {
    color: '#ABABAB',
    fontSize: 16,
    fontWeight: '500',
  },
  sum: {
    // float:'right'
    width: '68%',
    textAlign: 'right',
    fontSize: 16,
    fontWeight: '500',
  },
});
export default AssetsAccount;
