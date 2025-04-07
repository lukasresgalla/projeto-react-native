import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { darkTheme } from '../theme';
import eventos from '../../assets/eventos.json'; 

export default function EventosScreen() {
  return (
    <ScrollView style={styles.container}>
      {eventos.map(evento => (
        <View key={evento.id} style={styles.card}>
          <Text style={styles.nome}>{evento.nome}</Text>
          <Text style={styles.data}>{evento.data}</Text>
          <YoutubePlayer
            height={200}
            play={false}
            videoId={evento.videoId}
          />
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