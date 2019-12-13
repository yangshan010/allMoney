import React from 'react';
import {View, Text, Button} from 'react-native';

export default class Detail extends React.Component {
  render() {
    return (
      <View>
        <Text>Detail</Text>
        <Button
          title="other"
          onPress={() => this.props.navigation.push('Other')}></Button>
        <Button
          title="detail again"
          onPress={() => this.props.navigation.navigate('Home')}></Button>
      </View>
    );
  }
}
