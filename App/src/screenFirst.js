import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {data} from '../constant/index';
import RoundButton from '../component/button';
import {
  actionOne,
  actionTwo,
  actionThree,
  actionFour,
} from '../redux/action/index';
import {connect} from 'react-redux';
import {Card} from '../component/card';
import {font} from '../asset/fonts';
const ScreenFirst = (props) => {
  const [selected, changeSelectedItem] = useState(data);
  const onPressAction = (item) => {
    const data = {...item};
    let renderData = [...selected];
    for (let data of renderData) {
      if (data.id == item.id) {
        data.selected = data.selected == null ? true : !data.selected;
        break;
      }
    }

    changeSelectedItem(renderData);

    if (item.id == 1 && item.selected == true) {
      props.actionOne(data);
    } else if (item.id == 2 && item.selected == true) {
      props.actionTwo(data);
    } else if (item.id == 3 && item.selected == true) {
      props.actionThree(data);
    } else if (item.id == 4 && item.selected == true) {
      props.actionFour(data);
    }
  };

  const renderData = () => {};

  return (
    <View style={styles.A}>
      <FlatList
        data={selected}
        renderItem={({item}) => {
          return (
            <Card>
              <TouchableOpacity
                onPress={() => onPressAction(item)}
                style={item.selected == true ? styles.selectedButton : null}>
                <View style={{flexDirection: 'row', marginHorizontal: 10}}>
                  <Image source={item.img} style={{width: 80, height: 80}} />
                  <View style={{paddingHorizontal: 10}}>
                    <Text
                      style={{fontFamily: font.mavenPro_Medium, fontSize: 20}}>
                      {item.product_Name}
                    </Text>
                    <Text style={{fontSize: 15}}>{item.cost}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Card>
          );
        }}
      />

      <RoundButton onPress={() => props.navigation.navigate('second')}>
        <Text>Next</Text>
      </RoundButton>
    </View>
  );
};

export default connect(null, {actionOne, actionTwo, actionThree, actionFour})(
  ScreenFirst,
);

const styles = StyleSheet.create({
  A: {
    flex: 1,
    backgroundColor: 'white',
  },
  selectedButton: {
    backgroundColor: '#ff69b4',
    marginVertical: 10,
    borderRadius: 3,
  },
  normalButton: {
    backgroundColor: 'white',
    marginVertical: 10,
  },
});
