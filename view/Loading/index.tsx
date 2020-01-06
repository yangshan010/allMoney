import React from 'react';
import {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Iconmoney from '../../assets/iconfont/Iconmoney';
interface Props {
  navigation: any;
}
export default class index extends Component<Props> {
  componentDidMount() {
    setTimeout(this._bootstrapAsync, 1000);
    // this._bootstrapAsync();
  }
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };
  render() {
    return (
      <View style={[styles.layout]}>
        <ActivityIndicator></ActivityIndicator>
        <Iconmoney size={64}></Iconmoney>
        <Text>万贯家财，汇于Allmoney</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  layout: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
