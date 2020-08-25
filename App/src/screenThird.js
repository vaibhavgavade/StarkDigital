import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
} from 'react-native';
import {connect} from 'react-redux';
import RBSheet from 'react-native-raw-bottom-sheet';
import InputSpinner from 'react-native-input-spinner';
import RoundButton from '../component/button';
import {Card} from '../component/card';
import {increaseCount} from '../redux/action/index';
import {decreaseCount} from '../redux/action/index';
import {font} from '../asset/fonts';
import {HeaderTitle} from 'react-navigation-stack';

const screenThird = (props) => {
  const [update, changeUpdate] = useState();
  const [name, changeName] = useState();
  const [value, changeValue] = useState();

  const {quantity} = props.quantity;

  var myData = props.data.reduce((unique, o) => {
    if (
      !unique.some(
        (obj) => obj.product_Name === o.product_Name && obj.id === o.id,
      )
    ) {
      unique.push(o);
    }
    return unique;
  }, []);

  const input1 = props.navigation.getParam('ip1');
  const input2 = props.navigation.getParam('ip2');
  const input3 = props.navigation.getParam('ip3');
  const input4 = props.navigation.getParam('ip4');
  const input5 = props.navigation.getParam('ip5');
  const refSheet = useRef();
  const result = `${input1} and \n${input2}`;
  const resultTwo = `${input3},${input4}, ${input5}`;

  const updateImage = (item) => {
    refSheet.current.open();
    changeUpdate(item.img);
    changeName(item.product_Name);
    changeValue(item.cost);
  };
  const increaseValue = (value) => {
    props.increaseCount(value);
  };

  const decreaseValue = (value) => {
    props.decreaseCount(value);
  };

  const sucess = () => {
    if (quantity > 0) {
      alert('Your order placed Sucessfully');
    } else {
      alert('for update Quantity go to product');
    }
  };

  return (
    <View style={styles.A}>
      <Card>
        <View style={{marginHorizontal: 20}}>
          <Text
            style={{
              paddingLeft: 5,
              fontFamily: font.maven_Pro_Bold,
              fontSize: 20,
            }}>
            Address:-
          </Text>
          <Text style={styles.B}>{result}</Text>
          <Text style={styles.B}>{resultTwo}</Text>
        </View>
      </Card>
      <FlatList
        data={myData}
        renderItem={({item}) => {
          return (
            <Card>
              <TouchableOpacity onPress={() => updateImage(item)}>
                <View style={{flexDirection: 'row', marginHorizontal: 10}}>
                  <Image source={item.img} style={{width: 60, height: 60}} />
                  <View style={{paddingHorizontal: 10}}>
                    <Text>{item.product_Name}</Text>
                    <Text>
                      {quantity > 0 ? item.cost * quantity : item.cost}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Card>
          );
        }}
      />

      <RBSheet height={500} openDuration={300} ref={refSheet}>
        <View style={{alignSelf: 'center', marginTop: 10}}>
          <Text style={{alignSelf: 'center'}}>{name}</Text>

          <Image
            style={{width: 250, height: 250, marginVertical: 20}}
            source={update}
          />
          <Text style={{alignSelf: 'center', fontSize: 20}}>
            Rs:{value * quantity}
          </Text>

          <InputSpinner
            max={5}
            min={1}
            colorMin={'#40c5f4'}
            step={1}
            value={quantity}
            onIncrease={(value) => increaseValue(value)}
            onDecrease={(value) => decreaseValue(value)}
            style={{alignSelf: 'center'}}
          />

          <RoundButton onPress={() => refSheet.current.close()}>
            <Text>Submit</Text>
          </RoundButton>
        </View>
      </RBSheet>
      <RoundButton onPress={() => sucess()}>
        <Text>Submit</Text>
      </RoundButton>
    </View>
  );
};

const mapStateToProps = (state) => {
  console.log('map props', state);
  return {
    data: state.redu1,
    quantity: state.redu2,
  };
};
export default connect(mapStateToProps, {increaseCount, decreaseCount})(
  screenThird,
);

const styles = StyleSheet.create({
  A: {
    flex: 1,
  },
  B: {
    paddingLeft: 20,
    fontFamily: font.maven_Pro_Bold,
    fontSize: 20,
  },
});
