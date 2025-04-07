import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Linking, FlatList, Text } from 'react-native'; // Adicionado o import de Text
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
      {/* Logo no topo */}
      <Image source={require('../../assets/artkas-park.png')} style={styles.logo} />

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
  container: { flex: 1, alignItems: 'center', padding: 0, backgroundColor: darkTheme.colors.background },
  logo: { width: 150, height: 100, resizeMode: 'contain', marginBottom: 10 }, // Estilo para a logo
  button: {
    backgroundColor: '#1E1E1E', 
    padding:30,
    borderRadius: 10,
    marginVertical: 20,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: { fontSize: 16, color: '#BB86FC', fontWeight: '600' },
  carousel: { marginTop: 0, marginBottom: 0 },
  carouselImage: { width: 300, height: 200, marginHorizontal: 20, borderRadius: 10 },
});