import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { darkTheme } from '../theme';

const produtos = [
  { id: '1', nome: '🍔 Cheeseburger', preco: 'R$ 25,00', img: 'https://via.placeholder.com/100' },
  { id: '2', nome: '🍟 Batata Frita', preco: 'R$ 12,00', img: 'https://via.placeholder.com/100' },
];

export default function CardapioScreen() {
  return (
    <FlatList
      data={produtos}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.img }} style={styles.image} />
          <View>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.preco}>{item.preco}</Text>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: darkTheme.colors.surface, padding: 15, marginVertical: 8, borderRadius: 12 },
  image: { width: 60, height: 60, marginRight: 10 },
  nome: { fontSize: 18, fontWeight: 'bold', color: darkTheme.colors.primary },
  preco: { fontSize: 16, color: darkTheme.colors.textMuted },
});
