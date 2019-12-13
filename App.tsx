import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {createAppContainer, SafeAreaView} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Detail from './view/Detail';
import Other from './view/Other';
import HomeScreen from './view/Home/Home';
import Test from './view/Home/Text';
console.log('123');
const homeNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Test: Test,
});

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: homeNavigator,
  },
  Detail: {
    screen: Detail,
  },
  Other: Other,
});
const App = createAppContainer(AppNavigator);
const styles = StyleSheet.create({
  bigBlue: {
    paddingTop: 40,
  },
  red: {
    color: 'red',
  },
});

class AppContainer extends React.Component {
  render() {
    return (
      <View>
        <App></App>
      </View>
    );
  }
}

export default AppContainer;
