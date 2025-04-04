import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { darkTheme } from '../theme';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pátio Gastronômico</Text>
      <Image source={{ uri: 'https://via.placeholder.com/300' }} style={styles.image} />
      <Text style={styles.text}>📍 Endereço: Rua Gastronômica, 123</Text>
      <Text style={styles.text}>📞 Telefone: (99) 9999-9999</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: darkTheme.colors.background },
  title: { fontSize: 24, fontWeight: 'bold', color: darkTheme.colors.primary },
  image: { width: '100%', height: 200, marginVertical: 10, borderRadius: 12 },
  text: { fontSize: 16, color: darkTheme.colors.text, marginVertical: 5 },
});
