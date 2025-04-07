import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import lojas from '../../assets/lojas.json'; // Importa os dados do arquivo JSON

export default function LojasScreen() {
  const navigation = useNavigation();

  const handlePress = (loja) => {
    navigation.navigate('LojaDetalhes', { loja });
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