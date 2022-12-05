import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
 
const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Text>SplashScreen</Text>
        </View>
    );
}

 
export default SplashScreen;