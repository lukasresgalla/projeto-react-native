import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const LojaDetalhesScreen = ({ route }) => {
    const { item } = route.params;

    if (!item) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Item não encontrado</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: item.image || '' }} style={styles.image} />
            <Text style={styles.title}>{item.name || 'Sem nome'}</Text>
            <Text style={styles.description}>{item.description || 'Sem descrição'}</Text>
            <Text style={styles.quantity}>Quantidade: {item.quantity || 0}</Text>
            <Text style={styles.price}>Preço: R$ {(item.price || 0).toFixed(2)}</Text>
            <Text style={styles.ingredientsTitle}>Ingredientes:</Text>
            <View style={styles.ingredientsList}>
                {(item.ingredients || []).map((ingredient, index) => (
                    <Text key={index} style={styles.ingredient}>
                        - {ingredient}
                    </Text>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginBottom: 8,
    },
    quantity: {
        fontSize: 16,
        marginBottom: 8,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2a9d8f',
        marginBottom: 16,
    },
    ingredientsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    ingredientsList: {
        marginLeft: 8,
    },
    ingredient: {
        fontSize: 16,
        color: '#444',
        marginBottom: 4,
    },
});

export default LojaDetalhesScreen;