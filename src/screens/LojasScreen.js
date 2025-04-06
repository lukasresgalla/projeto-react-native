import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const lojas = [
  { id: '1', nome: '☕ Café Gourmet', descricao: 'Melhores cafés especiais' },
  { id: '2', nome: '🍔 Burger House', descricao: 'Hambúrgueres artesanais' },
  { id: '3', nome: '🍕 Pizzaria Bella', descricao: 'Pizzas artesanais e ingredientes frescos' },
  { id: '4', nome: '🍣 Sushi Express', descricao: 'Sushis preparados na hora' },
  { id: '5', nome: '🥗 Salada Fit', descricao: 'Opções saudáveis e naturais' },
];

export default function LojasScreen() {
  const navigation = useNavigation();

  const handlePress = (loja) => {
    console.log(`Loja selecionada: ${loja.nome}`);
  };

  return (
    <FlatList
      data={lojas}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.descricao}>{item.descricao}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212', // Fundo do tema escuro
    flexGrow: 1,
    padding: 10,
  },
  card: {
    padding: 15,
    backgroundColor: '#1E1E1E', // Superfície do tema escuro
    marginVertical: 8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#BB86FC', // Cor primária do tema escuro
  },
  descricao: {
    fontSize: 16,
    color: '#B0B0B0', // Texto secundário do tema escuro
  },
});
