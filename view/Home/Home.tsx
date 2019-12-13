import React from 'react';
import {View, Text, Button, StatusBar, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, SafeAreaView} from 'react-navigation';
import Test from './Text';
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '首页',
    header: null,
  };
  render() {
    return (
      // <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View>
        <View style={[styles.bigBlue]}>
          <Text>Home Screen1</Text>

          <Button
            title="Test"
            onPress={() => this.props.navigation.navigate('Test')}></Button>
        </View>
      </View>
      // </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({});
export default HomeScreen;
