import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  Image,
  Dimensions,
} from 'react-native';
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
import {useNavigation} from '@react-navigation/native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f54263',
  },
});

const SplashScreen = () => {
  const Navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      Navigation.navigate('HomeScreen');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={{height: height, width: width}}
        source={require('./../assets/Hairy_ball.gif')}
      />
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* <Text
          style={{
            color: '#fff',
            fontSize: 20,
            color: '#fff',
            backgroundColor: '#f54263',
            padding: 10,
            borderRadius: 10,
            opacity: 0.8,
          }}>
          Move the Ball in the Screen
        </Text> */}
      </View>
    </View>
  );
};

export default SplashScreen;
