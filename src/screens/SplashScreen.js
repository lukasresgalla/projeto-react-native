import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Drawer'); // Navigate to the Drawer screen
    }, 2000); // 2-second delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/artkas-park.png')} style={styles.logo} />
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
  logo: {
    width: 400, // Adjust the width of the logo
    height: 400, // Adjust the height of the logo
    resizeMode: 'contain', // Ensure the logo maintains its aspect ratio
  },
});