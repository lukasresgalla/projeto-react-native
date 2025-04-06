import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, FlatList } from 'react-native';
import { darkTheme } from '../theme';
import buttonsData from '../../assets/buttonsData.json'; 

const images = [
  require('../../assets/foto_foodpark.jpg'),
  require('../../assets/sushi.jpg'),
  require('../../assets/hamburguer.jpg'),
];

export default function HomeScreen() {
  const renderImage = ({ item }) => (
    <Image source={item} style={styles.carouselImage} />
  );

  const handleButtonPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Foodpark</Text>

      {/* Carrossel de imagens */}
      <FlatList
        data={images}
        renderItem={renderImage}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}
      />

      {/* Botões de interação */}
      {buttonsData.map((button, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => handleButtonPress(button.action)}
        >
          <Text style={styles.buttonText}>{button.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: darkTheme.colors.background },
  title: { fontSize: 28, fontWeight: 'bold', color: '#FFFFFF', marginBottom: 20 },
  button: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: { fontSize: 16, color: darkTheme.colors.textOnPrimary, fontWeight: '600' },
  carousel: { marginTop: 20, marginBottom: 20 },
  carouselImage: { width: 300, height: 200, marginHorizontal: 10, borderRadius: 10 },
});