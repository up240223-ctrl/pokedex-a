import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface Props {
  name: string;
  url: string;
}

const PokemonCard = ({ name, url }: Props) => {
  const urlParts = url.split('/');
  const id = urlParts[urlParts.length - 2];

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: imageUrl }} 
        style={styles.image} 
      />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginTop: 5,
  },
});

export default PokemonCard;