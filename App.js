import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux'
import store from './Src/Redux/Store';
import Navigatoin from './Src/Screens/Navigation';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <Navigatoin />
      </Provider>
    </SafeAreaView>
  );
};

 
export default App;