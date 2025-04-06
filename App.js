import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Importação das telas
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import EventosScreen from './src/screens/EventosScreen';
import LojasScreen from './src/screens/LojasScreen';
import LojaDetalhesScreen from './src/screens/LojaDetalhesScreen';
import CardapioScreen from './src/screens/CardapioScreen';
import ProdutoDetalhesScreen from './src/screens/ProdutoDetalhesScreen';
import CestaScreen from './src/screens/CestaScreen';

// Configuração da navegação
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="Início" component={HomeScreen} />
      <Drawer.Screen name="Eventos" component={EventosScreen} />
      <Drawer.Screen name="Lojas" component={LojasScreen} />
      <Drawer.Screen name="Cardápio" component={CardapioScreen} />
      <Drawer.Screen name="Produto" component={ProdutoDetalhesScreen} />
      <Drawer.Screen name="Cesta" component={CestaScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Drawer" component={DrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
