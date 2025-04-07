import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LojaDetalhesScreen({ route }) {
  const { loja } = route.params;
  const navigation = useNavigation();

  const abrirCardapio = () => {
    navigation.navigate('Cardapio', { lojaNome: loja.nome });
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: loja.foto }} style={styles.foto} />
      <Text style={styles.nome}>{loja.nome}</Text>
      <Text style={styles.descricao}>{loja.descricao}</Text>
      <Text style={styles.telefone}>Telefone: {loja.telefone}</Text>
      <Text 
        style={styles.instagram} 
        onPress={() => navigation.navigate('Cardapio', { lojaNome: loja.nome })}
      >
        Instagram: {loja.instagram}
      </Text>
      <TouchableOpacity style={styles.botaoCardapio} onPress={abrirCardapio}>
        <Text style={styles.textoBotao}>Ver Cardápio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#BB86FC',
    marginBottom: 10,
  },
  descricao: {
    fontSize: 18,
    color: '#B0B0B0',
    textAlign: 'center',
    marginBottom: 10,
  },
  telefone: {
    fontSize: 16,
    color: '#B0B0B0',
    marginBottom: 10,
  },
  instagram: {
    fontSize: 16,
    color: '#BB86FC',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  botaoCardapio: {
    backgroundColor: '#BB86FC',
    padding: 15,
    borderRadius: 8,
  },
  textoBotao: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#121212',
  },
});