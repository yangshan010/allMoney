import React from 'react';
import {Component} from 'react';
import {commonColor} from '../../../../style/common.js';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Iconzhifubao from '../../../../assets/iconfont/Iconzhifubao';
import Iconvisa from '../../../../assets/iconfont/Iconvisa';
import Iconweixin from '../../../../assets/iconfont/Iconweixin';
import Iconyinhangqia1 from '../../../../assets/iconfont/Iconyinhangqia1';
import Iconcash from '../../../../assets/iconfont/Iconcash';

class Animal {
  name: string;

  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log('Slithering...');
    super.move(distanceInMeters);
  }
}

let sam = new Snake('Sammy the Python');

sam.move();
// tom.move(34);

interface Props {
  // [propName: string]: any;
  navigation: any;
}
interface ToPageFunc {
  (type: string, urlName: string): void;
}
export default class Assets extends Component<Props> {
  constructor(props: any) {
    super(props);
  }
  toPage: ToPageFunc = (type, urlName) => {
    this.props.navigation.navigate(urlName, {type});
  };
  render() {
    return (
      <View style={[styles.layout]}>
        <View style={[styles.list]}>
          <TouchableOpacity
            onPress={this.toPage.bind(this, 'zhifubao', 'CreateCommonAccount')}>
            <View style={[styles.listItem]}>
              <Iconzhifubao size={32}></Iconzhifubao>
              <View style={[styles.textContent]}>
                <Text style={[styles.title]}>支付宝</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.toPage.bind(this, 'weixin', 'CreateCommonAccount')}>
            <View style={[styles.listItem]}>
              <Iconweixin size={32}></Iconweixin>
              <View style={[styles.textContent]}>
                <Text style={[styles.title]}>微信钱包</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.toPage.bind(this, 'credit', 'BlankList')}>
            <View style={[styles.listItem]}>
              <Iconvisa size={32}></Iconvisa>
              <View style={[styles.textContent]}>
                <Text style={[styles.title]}>信用卡</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.toPage.bind(this, 'debit', 'BlankList')}>
            <View style={[styles.listItem]}>
              <Iconyinhangqia1 size={32}></Iconyinhangqia1>
              <View style={[styles.textContent]}>
                <Text style={[styles.title]}>借记卡</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.toPage.bind(this, 'cash', 'CreateCommonAccount')}>
            <View style={[styles.listItem]}>
              <Iconcash size={32}></Iconcash>
              <View style={[styles.textContent]}>
                <Text style={[styles.title]}>现金</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  layout: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  list: {},
  listItem: {
    borderBottomColor: commonColor.grey,
    borderBottomWidth: 1,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textContent: {
    marginLeft: 10,
    fontSize: 44,
  },
  title: {
    fontSize: 16,
    marginBottom: 6,
  },
  subTitle: {
    color: commonColor.fontGrey,
  },
});
