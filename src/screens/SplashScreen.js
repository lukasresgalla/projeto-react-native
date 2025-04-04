import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Drawer'); // Navigate to the Drawer screen
    }, 2000); // 2-second delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Splash Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});