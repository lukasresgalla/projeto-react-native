import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import cardapios from '../../assets/cardapios.json';

export default function CardapioScreen({ route }) {
  const { lojaNome } = route.params;
  const cardapio = cardapios[lojaNome];
  const [carrinho, setCarrinho] = useState([]);
  const navigation = useNavigation();

  const adicionarAoCarrinho = (item) => {
    setCarrinho((prevCarrinho) => [...prevCarrinho, item]);
    Alert.alert('Item Adicionado', `${item.item} foi adicionado ao carrinho.`);
  };

  const abrirDetalhesProduto = (produto) => {
    navigation.navigate('ProdutoDetalhes', { produto });
  };

  const irParaCesta = () => {
    navigation.navigate('Cesta', { carrinho });
  };

  if (!cardapio) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Cardápio não encontrado para {lojaNome}.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cardápio de {lojaNome}</Text>
      <FlatList
        data={cardapio}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemCardapio}
            onPress={() => abrirDetalhesProduto(item)}
          >
            <Image source={{ uri: item.foto }} style={styles.foto} />
            <View style={styles.info}>
              <Text style={styles.itemNome}>{item.item}</Text>
              <Text style={styles.itemPreco}>R$ {item.price.toFixed(2)}</Text>
            </View>
            <TouchableOpacity
              style={styles.botaoAdicionar}
              onPress={() => adicionarAoCarrinho(item)}
            >
              <Text style={styles.textoBotao}>Adicionar</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.botaoCesta} onPress={irParaCesta}>
        <Text style={styles.textoBotaoCesta}>Ir para o Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#BB86FC',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemCardapio: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  foto: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  itemNome: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  itemPreco: {
    fontSize: 16,
    color: '#B0B0B0',
  },
  botaoAdicionar: {
    backgroundColor: '#BB86FC', 
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  textoBotao: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#121212',
  },
  botaoCesta: {
    backgroundColor: '#BB86FC', 
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  textoBotaoCesta: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#121212',
  },
  errorText: {
    fontSize: 18,
    color: '#FF5252',
    textAlign: 'center',
    marginTop: 20,
  },
});