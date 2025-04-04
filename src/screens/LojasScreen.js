import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { darkTheme } from '../theme';

const lojas = [
  { id: '1', nome: '☕ Café Gourmet', descricao: 'Melhores cafés especiais' },
  { id: '2', nome: '🍔 Burger House', descricao: 'Hambúrgueres artesanais' },
  { id: '3', nome: '🍕 Pizzaria Bella', descricao: 'Pizzas artesanais e ingredientes frescos' },
  { id: '4', nome: '🍣 Sushi Express', descricao: 'Sushis preparados na hora' },
  { id: '5', nome: '🥗 Salada Fit', descricao: 'Opções saudáveis e naturais' },
];

export default function LojasScreen() {
  return (
    <FlatList
      data={lojas}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.descricao}>{item.descricao}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: { padding: 15, backgroundColor: darkTheme.colors.surface, marginVertical: 8, borderRadius: 12 },
  nome: { fontSize: 18, fontWeight: 'bold', color: darkTheme.colors.primary },
  descricao: { fontSize: 16, color: darkTheme.colors.textMuted },
});
