import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux'
import { Store } from 'redux';
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
 
const App = () => {
  return (
    <SafeAreaView style={{ flex:1 }}>
      <View>
        <Text>App</Text>
    </View>
    </SafeAreaView>
    
  );
}

 
export default App;