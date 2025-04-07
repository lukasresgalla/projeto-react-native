import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { darkTheme } from '../theme';

export default function CestaScreen({ route }) {
  const { carrinho } = route.params || {}; // Recebe os itens do carrinho via navegação
  const [cesta, setCesta] = useState(carrinho || []); // Inicializa com os itens recebidos ou vazio

  const removerItem = (id) => {
    const novaCesta = cesta.filter(item => item.id !== id);
    setCesta(novaCesta);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Cesta de Compras</Text>
      {cesta.length === 0 ? (
        <Text style={styles.empty}>Sua cesta está vazia.</Text>
      ) : (
        <FlatList
          data={cesta}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.nome}>{item.item} - R$ {item.price.toFixed(2)}</Text>
              <Button title="Remover" color={darkTheme.colors.error} onPress={() => removerItem(item.id)} />
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: darkTheme.colors.background },
  title: { fontSize: 22, fontWeight: 'bold', color: darkTheme.colors.primary, marginBottom: 10 },
  empty: { fontSize: 16, color: darkTheme.colors.textMuted, textAlign: 'center', marginTop: 20 },
  item: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    backgroundColor: darkTheme.colors.surface, 
    padding: 15, 
    borderRadius: 12, 
    marginVertical: 8 
  },
  nome: { fontSize: 16, color: darkTheme.colors.text },
});