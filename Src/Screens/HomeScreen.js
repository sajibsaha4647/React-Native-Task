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
        <View
          style={{paddingHorizontal: width * 0.04, marginTop: width * 0.027}}>
          <View style={{borderTopWidth: 1, borderColor: '#000'}}></View>
          <View style={{position: 'absolute'}}>
            <Text>E</Text>
          </View>
          <View
            style={{
              position: 'absolute',
              alignItems: 'flex-end',
              top: 0,
              right: 0,
            }}>
            <Text>F</Text>
          </View>
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
          <View
            style={{
              position: 'absolute',
              alignItems: 'flex-end',
              top: width * 0.37,
              left: 0,
            }}>
            <Text>D</Text>
          </View>
          <View style={{width: width * 0.243}}>
            <View style={{borderTopWidth: 1, borderColor: '#000'}}></View>
          </View>
          <View
            style={{
              position: 'absolute',
              alignItems: 'flex-end',
              top: width * 0.37,
              left: width * 0.3,
            }}>
            <Text>C</Text>
          </View>
          <View
            style={{
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              width: width * 0.243,
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
          <View
            style={{
              position: 'absolute',
              alignItems: 'flex-end',
              top: width * 0.73,
              left: width * 0.24,
            }}>
            <Text>B</Text>
          </View>
          <View style={{width: width * 0.6, marginLeft: width * 0.24}}>
            <View style={{borderTopWidth: 1, borderColor: '#000'}}></View>
          </View>
          <View
            style={{
              position: 'absolute',
              alignItems: 'flex-end',
              top: width * 0.73,
              right: width * 0.05,
            }}>
            <Text>A</Text>
          </View>
          <View
            style={{
              position: 'absolute',
              alignItems: 'flex-end',
              top: 0,
              right: width * 0.027,
            }}>
            <View
              style={{
                height: width * 0.138,
                width: width * 0.138,
                marginTop: 5,
                backgroundColor: 'red',
                borderRadius: (width * 0.138) / 2,
              }}></View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
