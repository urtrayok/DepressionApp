import React, {Component} from 'react';
import {
  Platform,
  Button,
  StyleSheet, 
  Text, 
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Imagebackground,
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/HomeScreen';
import LoginScreen from './src/LoginScreen';
//import TestQScreen from './src/TestQScreen';
import Test1Screen from './src/Test1Screen';
import Test2Screen from './src/Test2Screen';
import StoryScreen from './src/StoryScreen';
import Q1Screen from './src/Q1Screen';
import Q2Screen from './src/Q2Screen';
import Q3Screen from './src/Q3Screen';
import Q4Screen from './src/Q4Screen';
import Q5Screen from './src/Q5Screen';
import Q6Screen from './src/Q6Screen';
import Q7Screen from './src/Q7Screen';
import Q8Screen from './src/Q8Screen';
import Q9Screen from './src/Q9Screen';
import RecommendScreen from './src/RecommendScreen';
import DoctorScreen from './src/DoctorScreen';
import Recommend2Screen from './src/Recommand2Screen';
import Recommand3Screen from './src/Recommand3Screen';
//import MainQScreen from './src/MainQScreen';

const RootStack = createStackNavigator(
  {
    Home : HomeScreen,
    Login : LoginScreen,
    //TestQ : TestQScreen,
    Test1 : Test1Screen,
    Test2 : Test2Screen,
    Story : StoryScreen,
    Q1 : Q1Screen,
    Q2 : Q2Screen,
    Q3 : Q3Screen,
    Q4 : Q4Screen,
    Q5 : Q5Screen,
    Q6 : Q6Screen,
    Q7  :Q7Screen,
    Q8 : Q8Screen,
    Q9 : Q9Screen,
    Recommend : RecommendScreen,
    Recommend2 : Recommend2Screen,
    Recommend3 : Recommand3Screen,
    Doctor : DoctorScreen
   // MainQ : MainQScreen
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component{
  render() {
    return (
      <AppContainer/>
    );
  }
}

