import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import HeaderComponent from '../Component/HeaderComponent';
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{height: width * 0.136}}>
        <HeaderComponent />
      </View>
      <View></View>
    </View>
  );
};

 
export default HomeScreen;