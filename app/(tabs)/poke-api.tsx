import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import PokemonCard from "../components/PokemonCard"; 

interface Pokemon {
  name: string;
  url: string;
}

export default function PokeApiScreen() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

// fetch: Va a internet a buscar la lista.
// .json(): Convierte lo que llega de internet en un formato que JavaScript entiende.
// setPokemons(data.results): Una vez que tenemos los datos, los guardamos en nuestra "libreta" de estados.
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results); 
      })
      .catch((error) => console.error("Error al traer datos:", error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokemones</Text>
      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.name}
        // Por cada Pokémon que hay en la lista (item), 
        // dibujamos un componente PokemonCard y le 
        // pasamos su nombre y su url como paquetes (props).
        renderItem={({ item }) => (
          <PokemonCard name={item.name} url={item.url} />
        )}
      />
    </View>
  );
}


//Estructura
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //es una propiedad de estilo que 
    // crea un espacio interno en la 
    // parte superior de un contenedor.
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
});