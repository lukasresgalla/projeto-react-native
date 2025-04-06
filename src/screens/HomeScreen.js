import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { darkTheme } from '../theme';

export default function HomeScreen() {
  const handleOpenMaps = () => {
    Linking.openURL('https://www.google.com/maps/search/?api=1&query=Rua+Gastronômica,+123');
  };

  const handleCallPhone = () => {
    Linking.openURL('tel:(99)9999-9999');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Foodpark</Text>
      <TouchableOpacity style={styles.button} onPress={handleOpenMaps}>
        <Text style={styles.buttonText}>📍 Endereço: Rua Gastronômica, 123</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleCallPhone}>
        <Text style={styles.buttonText}>📞 Telefone: (99) 9999-9999</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: darkTheme.colors.background },
  title: { fontSize: 28, fontWeight: 'bold', color: '#FFFFFF', marginBottom: 20 },
  image: { width: '100%', height: 220, marginVertical: 15, borderRadius: 15 },
  button: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: { fontSize: 16, color: darkTheme.colors.textOnPrimary, fontWeight: '600' },
});
