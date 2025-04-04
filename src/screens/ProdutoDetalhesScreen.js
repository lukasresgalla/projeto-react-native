import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { darkTheme } from '../theme';

export default function ProdutoDetalhesScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://via.placeholder.com/300' }} style={styles.image} />
      <Text style={styles.title}>🍔 Cheeseburger</Text>
      <Text style={styles.description}>Pão artesanal, hambúrguer bovino, queijo cheddar e molho especial.</Text>
      <Text style={styles.weight}>🔹 180g</Text>
      <Text style={styles.ingredients}>Ingredientes: Carne bovina, pão, queijo, molho.</Text>
      <Text style={styles.price}>💰 Preço: R$ 25,00</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: darkTheme.colors.background },
  image: { width: '100%', height: 250, borderRadius: 12 },
  title: { fontSize: 24, fontWeight: 'bold', color: darkTheme.colors.primary, marginVertical: 10 },
  description: { fontSize: 16, color: darkTheme.colors.textMuted, marginVertical: 5 },
  weight: { fontSize: 16, color: darkTheme.colors.text, marginVertical: 3 },
  ingredients: { fontSize: 16, color: darkTheme.colors.textMuted },
  price: { fontSize: 18, fontWeight: 'bold', color: darkTheme.colors.secondary, marginTop: 10 },
});
