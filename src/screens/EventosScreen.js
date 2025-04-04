import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { darkTheme } from '../theme';

const eventos = [
  { id: 1, nome: "🎷 Show de Jazz", data: "Sexta, 19h" },
  { id: 2, nome: "🎤 Stand-Up Comedy", data: "Sábado, 21h" },
  { id: 3, nome: "🎸 Rock ao Vivo", data: "Domingo, 20h" },
];

export default function EventosScreen() {
  return (
    <ScrollView style={styles.container}>
      {eventos.map(evento => (
        <View key={evento.id} style={styles.card}>
          <Text style={styles.nome}>{evento.nome}</Text>
          <Text style={styles.data}>{evento.data}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: darkTheme.colors.background },
  card: { backgroundColor: darkTheme.colors.surface, padding: 15, marginVertical: 10, borderRadius: 12 },
  nome: { fontSize: 18, fontWeight: 'bold', color: darkTheme.colors.primary },
  data: { fontSize: 16, color: darkTheme.colors.textMuted },
});
