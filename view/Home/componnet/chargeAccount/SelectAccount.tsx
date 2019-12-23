import React from 'react';
import {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import ActionSheet from '../../../../components/ActionSheet';
import {commonColor} from '../../../../style/common.js';
import IconPA from '../../../../assets/iconfont/Iconpingan';
import Icongou from '../../../../assets/iconfont/Icongou';
interface Props {
  cancel: Function;
}
class SelectAccount extends Component<Props> {
  cancel = () => {
    this.props.cancel();
  };
  render() {
    console.log('selectAccount');
    return (
      <ActionSheet cancel={this.cancel} height={400}>
        <ScrollView style={[styles.layout]}>
          <View style={[styles.list]}>
            <View style={[styles.listItem]}>
              <View style={[styles.left]}>
                <IconPA size={36}></IconPA>
                <View style={[styles.blankNameContent]}>
                  <Text style={[styles.blankName]}>平安银行</Text>
                  <Text style={[styles.subTitle]}>信用卡</Text>
                </View>
              </View>
              <View style={[styles.listItemRight]}>
                <Icongou size={28}></Icongou>
              </View>
            </View>
          </View>
        </ScrollView>
      </ActionSheet>
    );
  }
}
const styles = StyleSheet.create({
  layout: {
    height: 400,

    paddingLeft: 10,
    paddingRight: 10,
  },
  list: {},
  listItemContent: {},
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: commonColor.grey,
    borderBottomWidth: 1.5,
  },
  left: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
  },
  blankNameContent: {
    height: '100%',
    // marginLeft: 10,
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignContent: 'center',
    // paddingTop: 10,
    marginLeft: 12,
  },
  blankName: {
    fontSize: 17,
    // marginBottom: 8,
  },
  subTitle: {
    fontSize: 14,
    color: commonColor.fontGrey,
    marginTop: 6,
  },
  listItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
});
export default SelectAccount;
