import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {createAppContainer, SafeAreaView} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from './view/Home/Home';

import Iconmoney from './assets/iconfont/Iconmoney';
import IconallMoneyGrey from './assets/iconfont/IconallMoneyGrey';
import ChargeAccount from './view/Home/ChargeAccount';
import AddAssets from './view/Home/AddAssets';
import CreateCommonAccount from './view/Home/CreateCommonAccount';
import BlankList from './view/Home/BlankList';
import CreateBlankAccount from './view/Home/CreateBlankAccount';
const homeNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  ChargeAccount: {
    screen: ChargeAccount,
  },
  AddAssets: {
    screen: AddAssets,
  },
  CreateCommonAccount: {
    screen: CreateCommonAccount,
  },
  BlankList: {
    screen: BlankList,
  },
  CreateBlankAccount: {
    screen: CreateBlankAccount,
  },
});
homeNavigator.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  console.log('navigation', navigation);
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};
const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: homeNavigator,

      navigationOptions: {
        tabBarIcon: ({focused}) => {
          console.log('focused', focused);
          if (focused) {
            return <Iconmoney size={38}></Iconmoney>;
          } else {
            return <IconallMoneyGrey size={38}></IconallMoneyGrey>;
          }
        },
      },
    },
  },
  {
    tabBarOptions: {
      showIcon: true,
    },
  },
);
const App = createAppContainer(AppNavigator);
const styles = StyleSheet.create({
  bigBlue: {
    flex: 1,
    // backgroundColor: `rgb(58,149,254)`,
  },
  red: {
    color: 'red',
  },
});

class AppContainer extends React.Component {
  render() {
    return (
      <View style={[styles.bigBlue]}>
        <App></App>
      </View>
    );
  }
}

export default AppContainer;
