import {Text, View, TextInput, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import CUSTOM_COLOR from '../../constants/colors';
import scale from '../../constants/responsive';

export class CustomInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  setValue = text => {
    this.state.value = text;
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.containerText}>{this.props.label}</Text>
        {this.props.secureTextEntry === true ? (
          <TextInput
            style={styles.containerTextInput}
            secureTextEntry
            onChangeText={text => this.setValue(text)}
          />
        ) : (
          <TextInput
            style={styles.containerTextInput}
            onChangeText={text => this.setValue(text)}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerText: {
    color: CUSTOM_COLOR.Black,
    opacity: 0.4,
    fontSize: scale(15),
  },
  containerTextInput: {
    color: CUSTOM_COLOR.Black,
    height: scale(40),
    width: scale(314),
    fontSize: scale(15),
    lineHeight: scale(20),
    borderBottomWidth: 1,
    borderBottomColor: CUSTOM_COLOR.Black,
  },
  container: {
    // marginVertical: 25,
    marginBottom: scale(24),
    alignSelf: 'center',
  },
});

export default CustomInput;
