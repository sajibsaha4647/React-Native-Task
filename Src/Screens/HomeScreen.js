import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';
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

  const [ActiveState, setActiveState] = useState('A');

  const outputBox = () => {
    let sum = parseInt(HomeState.inputdata) + 1;
    dispatch(fetch_outputBox_actions(sum));
    if (HomeState.inputdata == 1) {
      setActiveState('A');
    } else if (HomeState.inputdata == 2) {
      setActiveState('B');
    } else if (HomeState.inputdata == 3) {
      setActiveState('C');
    } else if (HomeState.inputdata == 4) {
      setActiveState('D');
    } else if (HomeState.inputdata == 5) {
      setActiveState('E');
    } else if (HomeState.inputdata == 6) {
      setActiveState('F');
    } else {
      setActiveState('A');
    }
  };

  const BallMovingState = () => {};

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
            onEndEditing={() => {
              if (HomeState.inputdata == '') {
                dispatch(fetch_outputBox_actions(0));
              } else {
                outputBox();
              }
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
              height: width * 0.277,
              width: width * 0.277,
              backgroundColor: '#000',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Text style={{color: '#fff'}}>{HomeState.outputData}</Text>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
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
            {HomeState.inputdata == '' && ActiveState == 'A' ? (
              <View
                style={{
                  position: 'absolute',
                  alignItems: 'flex-end',
                  bottom: width * 0.027,
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
            ) : HomeState.inputdata == 1 && ActiveState == 'A' ? (
              <View
                style={{
                  position: 'absolute',
                  alignItems: 'flex-end',
                  bottom: width * 0.027,
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
            ) : HomeState.inputdata == 2 && ActiveState == 'B' ? (
              <View
                style={{
                  position: 'absolute',
                  alignItems: 'flex-end',
                  bottom: width * 0.027,
                  left: width * 0.3,
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
            ) : HomeState.inputdata == 3 && ActiveState == 'C' ? (
              <View
                style={{
                  position: 'absolute',
                  alignItems: 'flex-end',
                  bottom: width * 0.22,
                  left: width * 0.3,
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
            ) : HomeState.inputdata == 4 && ActiveState == 'D' ? (
              <View
                style={{
                  position: 'absolute',
                  alignItems: 'flex-end',
                  bottom: width * 0.4,
                  left: width * 0.06,
                }}>
                <View
                  style={{
                    height: width * 0.128,
                    width: width * 0.128,
                    marginTop: 5,
                    backgroundColor: 'red',
                    borderRadius: (width * 0.128) / 2,
                  }}></View>
              </View>
            ) : HomeState.inputdata == 5 && ActiveState == 'E' ? (
              <View
                style={{
                  position: 'absolute',
                  alignItems: 'flex-end',
                  top: width * 0.02,
                  left: width * 0.07,
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
            ) : HomeState.inputdata == 6 && ActiveState == 'F' ? (
              <View
                style={{
                  position: 'absolute',
                  alignItems: 'flex-end',
                  top: width * 0.027,
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
            ) : (
              <View
                style={{
                  position: 'absolute',
                  alignItems: 'flex-end',
                  bottom: width * 0.027,
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
            )}
          </View>
          <View style={{marginBottom: width * 0.33}}></View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
