/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import {
  AppRegistry,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import loginApp from './src/login/page/index';
AppRegistry.registerComponent('Login', () => loginApp);
