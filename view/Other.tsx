import React from 'react';
import {View, Text, Button} from 'react-native';

export default class Other extends React.Component {
  render() {
    return (
      <View>
        <Text>Other</Text>
        <Button
          title="detail again"
          onPress={() => this.props.navigation.push('Detail')}></Button>
        <Button
          title="detail again"
          onPress={() => this.props.navigation.navigate('Home')}></Button>
      </View>
    );
  }
}
