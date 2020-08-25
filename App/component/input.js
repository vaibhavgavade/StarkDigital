import React from 'react';
import {View, StyleSheet, TextInput, Keyboard} from 'react-native';
import {font} from '../asset/fonts';

const Input = ({placeHolder, onChangeText, style}) => (
  <View style={[inputStyles.A, style]}>
    <TextInput
      style={inputStyles.A3}
      placeholder={placeHolder}
      onChangeText={onChangeText}
      multiline={true}
      onSubmitEditing={Keyboard.dismiss}
    />
  </View>
);

export default Input;

const inputStyles = StyleSheet.create({
  A: {
    marginVertical: 10,
    marginHorizontal: 13,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'red',
  },

  A3: {
    fontSize: 20,
    fontFamily: font.maven_Pro_Bold,
  },
});
