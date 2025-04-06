import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Drawer'); // Navigate to the Drawer screen
    }, 2000); // 2-second delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Foodpark</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000', // Black background
  },
  text: {
    fontSize: 48, // Larger font size
    fontWeight: 'bold',
    color: '#FFFFFF', // White text
    marginBottom: 20,
    fontFamily: 'Poppins-Bold', // Custom font
  },
  loader: {
    marginTop: 10,
  },
});