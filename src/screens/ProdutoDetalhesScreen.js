import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { darkTheme } from '../theme';

export default function ProdutoDetalhesScreen({ route }) {
  const { produto } = route.params; // Recebe os detalhes do produto via navegação

  return (
    <View style={styles.container}>
      <Image source={{ uri: produto.foto }} style={styles.image} />
      <Text style={styles.title}>{produto.item}</Text>
      <Text style={styles.text}>Descrição: {produto.descricao || 'Descrição não disponível.'}</Text>
      <Text style={styles.text}>Peso: {produto.peso || 'Não especificado'}</Text>
      <Text style={styles.text}>Ingredientes: {produto.ingredientes || 'Não especificados'}</Text>
      <Text style={styles.price}>💰 Preço: R$ {produto.price.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: darkTheme.colors.background },
  image: { width: '100%', height: 250, borderRadius: 12 },
  title: { fontSize: 24, fontWeight: 'bold', color: darkTheme.colors.primary, marginVertical: 10 },
  text: { fontSize: 16, color: darkTheme.colors.text, marginVertical: 5 }, 
  price: { fontSize: 18, fontWeight: 'bold', color: darkTheme.colors.text, marginTop: 10 }, 
});