import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import { Provider } from 'react-redux'
import store from './Src/Redux/Store';
import Navigation from './Src/Screens/Navigation';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#f54263" />
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaView>
  );
};

 
export default App;