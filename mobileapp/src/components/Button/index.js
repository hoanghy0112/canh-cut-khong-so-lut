import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';

export class CustomButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity
        // onPress={() => Alert.alert("Login button's event handle")}
        onPress={this.props.onPress}
        style={
          this.props.type === 'Primary'
            ? styles.buttonContainer1
            : this.props.type === 'Secondary' && styles.buttonContainer2
        }>
        <Text
          style={
            this.props.type === 'Primary'
              ? styles.button1
              : this.props.type === 'Secondary' && styles.button2
          }>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer1: {
    alignContent: 'center',
    width: 314,
    height: 70,
    backgroundColor: CUSTOM_COLOR.White,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    alignSelf: 'center',
    color: CUSTOM_COLOR.Vermilion,
  },

  button1: {
    color: CUSTOM_COLOR.Vermilion,
    fontFamily: FONT_FAMILY.Bold,
    fontSize: 17,
  },
  buttonContainer2: {
    alignContent: 'center',
    width: 314,
    height: 70,
    backgroundColor: CUSTOM_COLOR.Vermilion,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    alignSelf: 'center',
    marginTop: 16,
  },
  button2: {
    color: CUSTOM_COLOR.White,
    fontFamily: FONT_FAMILY.Bold,
    fontSize: 17,
  },
});
