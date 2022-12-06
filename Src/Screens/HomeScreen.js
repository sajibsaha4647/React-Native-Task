import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import HeaderComponent from '../Component/HeaderComponent';
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  fetch_inputBox_actions,
  fetch_outputBox_actions,
  fetch_moveball_actions,
} from './../Redux';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const HomeScreen = () => {
  const Navigation = useNavigation();
  const HomeState = useSelector(state => state.HomeData);
  const dispatch = useDispatch();

  const [Security, setsecurity] = useState(true);

  return (
    <View style={styles.container}>
      <View style={{height: width * 0.136}}>
        <HeaderComponent />
      </View>
      <View
        style={{
          paddingHorizontal: width * 0.02,
          marginTop: width * 0.02,
        }}>
        <View>
          <TextInput
            style={{borderColor: '#f54263', borderWidth: 1, borderRadius: 10}}
            onChangeText={e => {
              dispatch(fetch_inputBox_actions(e));
            }}
            value={HomeState.inputdata}
            placeholder="Enter number to move the ball"
            keyboardType="number-pad"
          />
        </View>
        <View
          style={{
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: '#000',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Text style={{color: '#fff'}}>12</Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 10}}>
          <View style={{borderTopWidth: 1, borderColor: '#000'}}></View>
          <View style={{borderLeftWidth: 1, borderLeftColor: '#000'}}>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
          </View>
          <View style={{width: 100}}>
            <View style={{borderTopWidth: 1, borderColor: '#000'}}></View>
          </View>
          <View
            style={{
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              width: 100,
            }}>
            <View style={{borderLeftWidth: 1, borderLeftColor: '#000'}}>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
            </View>
          </View>
          <View style={{width: 250, marginLeft: 100}}>
            <View style={{borderTopWidth: 1, borderColor: '#000'}}></View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
