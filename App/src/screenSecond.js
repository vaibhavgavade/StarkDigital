import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Keyboard,
  Button,
} from 'react-native';
import Input from '../component/input';
import RoundButton from '../component/button';
import {renderAddress} from '../redux/action/index';
import {connect} from 'react-redux';
import {font} from '../asset/fonts';
const screenSecond = (props) => {
  const [addressOne, changeOneAddress] = useState('');
  const [addressTwo, changeSecondAddress] = useState('');
  const [country, changeCountry] = useState('');
  const [State, changeState] = useState('');
  const [city, changeCity] = useState('');

  const onSucess = () => {
    if (
      addressOne == '' ||
      addressTwo == '' ||
      country == '' ||
      State == '' ||
      city == ''
    ) {
      alert('Please Enter all Values');
    } else {
      props.navigation.navigate('Third', {
        ip1: addressOne,
        ip2: addressTwo,
        ip3: country,
        ip4: State,
        ip5: city,
      });
    }
  };

  return (
    <View style={styles.A}>
      <ScrollView>
        <Text style={styles.B}>Address line 1</Text>
        <Input
          style={{height: 80}}
          onChangeText={(text) => changeOneAddress(text)}
          value={addressOne}
        />
        <Text style={styles.B}>Address Line 2</Text>
        <Input
          style={{height: 80}}
          onChangeText={(text) => changeSecondAddress(text)}
          value={addressTwo}
        />
        <Text style={styles.B}>Country</Text>
        <Input
          style={{height: 41}}
          onChangeText={(text) => changeCountry(text)}
          value={country}
        />
        <Text style={styles.B}>State</Text>
        <Input
          style={{height: 41}}
          onChangeText={(text) => changeState(text)}
          value={State}
        />
        <Text style={styles.B}>City</Text>
        <Input
          style={{height: 41}}
          onChangeText={(text) => changeCity(text)}
          value={city}
        />
      </ScrollView>
      <RoundButton onPress={() => onSucess()}>
        <Text>Next</Text>
      </RoundButton>
    </View>
  );
};

export default connect(null, {renderAddress})(screenSecond);

const styles = StyleSheet.create({
  A: {
    flex: 1,
    backgroundColor: 'white',
  },
  B: {
    marginLeft: 12,
    fontSize: 20,
    fontFamily: font.maven_Pro_Bold,
  },
});
