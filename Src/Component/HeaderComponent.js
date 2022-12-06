import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f54263',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const HeaderComponent = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>
            Move The Ball In The Screen
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderComponent;
