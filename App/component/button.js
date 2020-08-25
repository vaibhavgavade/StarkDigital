import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const RoundButton = (props) => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
      <Text style={styles.butttonText}>{props.children}</Text>
    </TouchableOpacity>
  </View>
);

export default RoundButton;

const styles = StyleSheet.create({
  buttonStyle: {
    height: 52,
    marginHorizontal: 13,
    borderRadius: 5,
    fontWeight: '200',
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 15,
    width: 300,
  },
  butttonText: {
    fontSize: 30,
    alignSelf: 'center',
  },
});
