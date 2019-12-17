import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Iconx from '../../assets/iconfont/Iconx';
class ChargeAccount extends React.Component {
  static navigationoptions = {
    header: null,
  };
  render() {
    return (
      <SafeAreaView>
        <View>
          <View style={[styles.header, styles.paddingLeft]}>
            <Iconx color="#2D2C3B"></Iconx>
            <View style={[styles.headerOption]}>
              <View
                style={[styles.headerOptionLeft, styles.headerOptionSelected]}>
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
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
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
});
export default ChargeAccount;
