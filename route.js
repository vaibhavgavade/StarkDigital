import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import First from './App/src/screenFirst';
import Second from './App/src/screenSecond';
import Third from './App/src/screenThird';
import {Image} from 'react-native';

const AppStack = createStackNavigator(
  {
    first: {
      screen: First,
      navigationOptions: {
        title: 'Product Listing',
      },
    },

    second: {
      screen: Second,
      navigationOptions: {
        title: 'Address',
      },
    },

    Third: {
      screen: Third,

      navigationOptions: {
        title: 'Cart',
      },
    },
  },

  // {
  //   defaultNavigationOptions: {
  //     headerStyle: {
  //       backgroundColor: '#ffa500',
  //     },
  //     headerTintColor: '#fff',
  //     headerTitleStyle: {
  //       fontWeight: 'bold',
  //       alignSelf: 'center',
  //       fontSize: 20,
  //     },
  //   },
  // },
);
export default createAppContainer(AppStack);
