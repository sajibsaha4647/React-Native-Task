import React, {Component} from 'react';
import {Dimensions, View, Text, Image, Platform} from 'react-native';
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from './SplashScreen';
import HomeScreen from './HomeScreen';

const MainStack = createNativeStackNavigator();
const MainScreen = () => {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name="SplashScreen" component={SplashScreen} />
      <MainStack.Screen name="HomeScreen" component={HomeScreen} />
    </MainStack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <MainScreen />
    </NavigationContainer>
  );
};

export default Navigation;
