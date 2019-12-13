import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string,
  ) {
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
  }
}
interface Person {
  firstName: string;
  lastName: string;
}
function greeter(person: Person) {
  return `hello  ${person.firstName} ${person.lastName}`;
}
let user = new Student('yang', 'shuai', 'shan');
let text = greeter(user);
greeter({firstName: 1, lastName: '1'});
// 函数类型
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;

mySearch = function(source, subString) {
  return true;
};
mySearch(1, 2);

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}
interface State {
  enthusiasmLevel: number;
}
export class Hello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    // if ((props.enthusiasmLevel || 0) <= 0) {
    //   throw new Error('You could be a little more enthusiastic. :D');
    // }

    this.state = {
      enthusiasmLevel: props.enthusiasmLevel || 1,
    };
  }

  onIncrement = () =>
    this.setState({enthusiasmLevel: this.state.enthusiasmLevel + 1});
  onDecrement = () =>
    this.setState({
      enthusiasmLevel: Math.max(0, this.state.enthusiasmLevel - 1),
    });
  getExclamationMarks = (numChars: number) => Array(numChars + 1).join('!');

  render() {
    return (
      <View>
        <Text>
          He1llo
          {this.props.name +
            this.getExclamationMarks(this.state.enthusiasmLevel)}
        </Text>
        <Text>{JSON.stringify(user)}</Text>

        <View>
          <View>
            <Button
              title="-"
              onPress={this.onDecrement}
              accessibilityLabel="decrement"
              color="red"
            />
          </View>

          <View>
            <Button
              title="+"
              onPress={this.onIncrement}
              accessibilityLabel="increment"
              color="blue"
            />
          </View>
        </View>
      </View>
    );
  }
}
// const styles = StyleSheet.create({
//   root: {
//     alignItems: "center",
//     alignSelf: "center"
//   },
//   buttons: {
//     flexDirection: "row",
//     minHeight: 70,
//     alignItems: "stretch",
//     alignSelf: "center",
//     borderWidth: 5
//   },
//   button: {
//     flex: 1,
//     paddingVertical: 0
//   },
//   greeting: {
//     color: "#999",
//     fontWeight: "bold"
//   })
