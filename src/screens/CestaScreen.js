import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { darkTheme } from '../theme';

export default function CestaScreen() {
  const [cesta, setCesta] = useState([]);

  useEffect(() => {
    const carregarCesta = async () => {
      const data = await AsyncStorage.getItem('cesta');
      setCesta(data ? JSON.parse(data) : []);
    };
    carregarCesta();
  }, []);

  const removerItem = async (id) => {
    const novaCesta = cesta.filter(item => item.id !== id);
    setCesta(novaCesta);
    await AsyncStorage.setItem('cesta', JSON.stringify(novaCesta));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Cesta de Compras</Text>
      {cesta.length === 0 ? (
        <Text style={styles.empty}>Sua cesta está vazia.</Text>
      ) : (
        <FlatList
          data={cesta}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.nome}>{item.nome} - {item.quantidade}</Text>
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
  item: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: darkTheme.colors.surface, padding: 15, borderRadius: 12, marginVertical: 8 },
  nome: { fontSize: 16, color: darkTheme.colors.text },
});
